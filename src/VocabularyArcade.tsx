import {useEffect,useRef,useState} from "react";
export type ArcadeGame = "quiz" | "pairs" | "mystery";
export type PracticeSession = {startedAt:Date|null;attempts:number;correct:number;words:string[];games:Record<ArcadeGame,number>};
import {q2Terms} from "./vocabularyQ2";
import {q1Terms} from "./vocabularyQ1";
import {q3Terms} from "./vocabularyQ3";
import {q4Terms} from "./vocabularyQ4";
import {coreTerms} from "./vocabularyCore";
import {lockedQuestions,type BankQuestion} from "./vocabArcadeBank";
import VocabularyGameModes from "./VocabularyGameModes";
import "./VocabularyArcade.css";

type Question = {id:string;term:string;format:string;prompt:string;choices:string[];correct:number;explanation:string;priority:number};
type Outcome = {id:string;term:string;ok:boolean};
const quarters={q1:q1Terms,q2:q2Terms,q3:q3Terms,q4:q4Terms,core:coreTerms};
type PracticeMode = keyof typeof quarters | "all" | "review";
const preferred = [...q1Terms,...q2Terms,...q3Terms,...q4Terms,...coreTerms];
const eligible=new Map(preferred.map(t=>[t.term.toLowerCase(),t]));
function shuffled<T>(items:T[]):T[]{const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function poolPriority(term:string){const t=eligible.get(term.toLowerCase());return !t?1:t.group==="Quarter-essential"?6:t.group==="Recognize and begin using"?4:2;}
function poolFor(mode:PracticeMode,history:Outcome[]){if(mode==="all")return allQuestions;if(mode==="review"){const missed=new Set(history.filter(h=>!h.ok).map(h=>h.term.toLowerCase()));return allQuestions.filter(q=>missed.has(q.term.toLowerCase()));}const terms=new Set(quarters[mode].map(t=>t.term.toLowerCase()));return allQuestions.filter(q=>terms.has(q.term.toLowerCase()));}
function bankToQuestion(item:BankQuestion):Question {return {...item,priority:poolPriority(item.term)};}
const bank=lockedQuestions.filter(q=>q.choices.length===4&&q.correct>=0&&q.correct<4&&eligible.has(q.term.toLowerCase())).map(bankToQuestion);
const labels=["A","B","C","D"];
function generatedQuestions():Question[]{
 const items=[...preferred];const out:Question[]=[];
 for(const term of items){
  const ownQuarter=Object.values(quarters).find(q=>q.includes(term))||items;
  const others=ownQuarter.filter(t=>t.term!==term.term);
  for(const [variant,format] of ["Meaning Match","Name the Term","Spot the Definition"].entries()){
   const candidates=shuffled(others).slice(0,3);
   if(candidates.length<3)continue;
   const slots=shuffled([term,...candidates]);
   const askDefinition=variant!==1;
   const choices=slots.map(t=>askDefinition?t.plainLanguage:t.term);
   const correct=slots.findIndex(t=>t.term===term.term);
   const prompt=variant===0?"Which explanation best matches "+term.term+"?":variant===1?"Which AQR term matches this explanation: \""+term.plainLanguage+"\"?":"Which description is the meaning of "+term.term+" in AQR?";
   out.push({id:"G-"+term.term.toLowerCase().replace(/[^a-z0-9]+/g,"-")+"-"+variant,term:term.term,format,prompt,choices,correct,explanation:term.fullDefinition,priority:poolPriority(term.term)});
  }
 }
 return out;
}
const allQuestions=[...bank,...generatedQuestions()];
function pick(pool:Question[],history:Outcome[],lastFormat:string):Question|null{
 const used=new Set(history.map(h=>h.id));const recent=new Set(history.slice(-8).map(h=>h.term.toLowerCase()));
 const available=pool.filter(q=>!used.has(q.id));
 if(!available.length)return null;
 const ranked=shuffled(available).map(q=>{
  const misses=history.slice(-12).filter(h=>!h.ok&&h.term.toLowerCase()===q.term.toLowerCase()).length;
  const s=q.priority+(recent.has(q.term.toLowerCase())?-9:0)+(q.format===lastFormat?-3:0)+Math.min(misses,2)*2;
  return {q,s};
 }).sort((a,b)=>b.s-a.s);
 const top=ranked.slice(0,Math.min(6,ranked.length));
 return shuffled(top)[0]?.q||null;
}
export default function VocabularyArcade(){
 const [gameKind,setGameKind]=useState<"mystery"|"pairs"|null>(null);
 const [session,setSession]=useState<PracticeSession>({startedAt:null,attempts:0,correct:0,words:[],games:{quiz:0,pairs:0,mystery:0}});
 const addAttempt=(term:string,ok:boolean,game:ArcadeGame)=>setSession(s=>({startedAt:s.startedAt??new Date(),attempts:s.attempts+1,correct:s.correct+(ok?1:0),words:s.words.includes(term)?s.words:[...s.words,term],games:{...s.games,[game]:s.games[game]+1}}));
 const resetSession=()=>{setProofOpen(false);setCopyStatus("");setSession({startedAt:null,attempts:0,correct:0,words:[],games:{quiz:0,pairs:0,mystery:0}});setStarted(false);setGameChosen(false);setGameKind(null);setHistory([]);setQuestion(null);};
 const [mode,setMode]=useState<PracticeMode>("all");
 const [started,setStarted]=useState(false);
 const [gameChosen,setGameChosen]=useState(false);
 const [history,setHistory]=useState<Outcome[]>([]);
 const [question,setQuestion]=useState<Question|null>(null);
 const [choice,setChoice]=useState<number|null>(null);
 const [show,setShow]=useState(false);
 const [showSentence,setShowSentence]=useState(false);
 const [proofOpen,setProofOpen]=useState(false);
 const [copyStatus,setCopyStatus]=useState("");
 const questionRef=useRef<HTMLHeadingElement>(null);
 const feedbackRef=useRef<HTMLDivElement>(null);
 const receiptRef=useRef<HTMLHeadingElement>(null);
 useEffect(()=>{if(show)feedbackRef.current?.focus();else if(started&&question)questionRef.current?.focus();},[show,question,started]);
 useEffect(()=>{if(proofOpen)receiptRef.current?.focus();},[proofOpen]);
 const next=(newHistory:Outcome[],newMode:PracticeMode=mode)=>{setQuestion(pick(poolFor(newMode,newHistory),newHistory,question?.format||""));setChoice(null);setShow(false);};
 const start=(selected:PracticeMode)=>{setMode(selected);setHistory([]);setStarted(true);setShowSentence(false);setProofOpen(false);setQuestion(pick(poolFor(selected,[]),[],""));};
 const submit=()=>{if(choice===null||!question||show)return;setHistory(p=>[...p,{id:question.id,term:question.term,ok:choice===question.correct}]);addAttempt(question.term,choice===question.correct,"quiz");setShow(true);};
 const finished=history.length;
 const correct=history.filter(h=>h.ok).length;
 const modeLabel=mode==="all"?"All AQR":mode==="core"?"Core":mode==="review"?"Missed words":mode.toUpperCase();
 const copyReceipt=async()=>{try{if(!navigator.clipboard?.writeText)throw new Error("Clipboard unavailable");await navigator.clipboard.writeText(proofText);setCopyStatus("Practice summary copied.");}catch{setCopyStatus("Copy unavailable. Select the receipt text or take a screenshot.");}};
 const proofText=`AQR VOCABULARY ARCADE — PRACTICE SESSION\nLast quiz pool: ${modeLabel}\nStarted: ${session.startedAt?.toLocaleString()||"Unknown"}\nEnded: ${new Date().toLocaleString()}\nSession attempts: ${session.attempts}\nCorrect attempts: ${session.correct}\nQuick Quiz: ${session.games.quiz}; Match Pairs: ${session.games.pairs}; Mystery Word: ${session.games.mystery}\nWords practiced: ${session.words.join(", ")}\nPractice only — student-submitted record; not independently verified.`;
 if(gameKind)return <VocabularyGameModes kind={gameKind} session={session} onAttempt={(term,ok)=>addAttempt(term,ok,gameKind)} onResetSession={resetSession} onBack={()=>{setGameKind(null);setStarted(false);setGameChosen(false);}}/>;
 return <div className="va-shell"><header className="va-header"><a href="/vocabulary">← Vocabulary</a><span>AQR / GAME LAB</span></header>
 <main className="va-main"><p className="va-kicker">Vocabulary Arcade</p><h1>Quick thinking. Real words. No waiting.</h1>
 <p className="va-intro">Choose a game, make a genuine attempt, and save your practice receipt. Accuracy is feedback, not a practice grade.</p>
 <div className="va-status" role="status" aria-live="polite"><span>Session total: {session.attempts} attempts · {session.words.length} words practiced</span><span>Quick Quiz {session.games.quiz} · Match Pairs {session.games.pairs} · Mystery Word {session.games.mystery}</span></div>
 {!started&&session.attempts>0&&<button type="button" onClick={()=>{setCopyStatus("");setProofOpen(true)}}>View combined practice receipt</button>}
 {!started&&!gameChosen?<section className="va-card"><h2>Choose a game</h2><p>Pick one to start. All three count as vocabulary practice.</p><div className="va-game-menu">
 <button type="button" className="va-game-choice" onClick={()=>setGameChosen(true)}><strong>Quick Quiz</strong><span>Pick the correct answer. Review missed words.</span></button>
 <button type="button" className="va-game-choice" onClick={()=>setGameKind("pairs")}><strong>Match Pairs</strong><span>Connect three words to their meanings.</span></button>
 <button type="button" className="va-game-choice" onClick={()=>setGameKind("mystery")}><strong>Mystery Word</strong><span>Solve word clues, earn points, build a streak.</span></button>
 </div></section>:null}
 {!started&&gameChosen?<section className="va-card"><button type="button" onClick={()=>setGameChosen(false)}>← Choose another game</button><h2>Quick Quiz — choose your vocabulary</h2><div className="va-buttons">{(["q1","q2","q3","q4","core","all"] as const).map(p=><button key={p} onClick={()=>start(p)}>{p==="all"?"All vocabulary":p==="core"?"Core skills":p.toUpperCase()}</button>)}</div><p>Choose a quarter, Core, or All. All terms in that pool can appear.</p></section>:null}
 {started?<><div className="va-status"><span>{modeLabel} · ROUND {finished+(show?0:1)}</span><span>{correct} correct / {finished} attempted</span><span>{question?.format||"Review"}</span></div>
 {question?<section className="va-card" aria-live="polite"><p className="va-id">QUESTION {question.id}</p><h2 ref={questionRef} tabIndex={-1}>{question.prompt}</h2><div className="va-choices">{question.choices.map((answer,index)=><button type="button" key={index} disabled={show} aria-pressed={choice===index} onClick={()=>setChoice(index)} className={["va-option",choice===index?"selected":"",show&&index===question.correct?"right":"",show&&choice===index&&index!==question.correct?"wrong":""].join(" ")}><strong>{labels[index]}</strong>{answer}</button>)}</div>
 {show?<div className="va-feedback" ref={feedbackRef} tabIndex={-1} role="status"><strong>{choice===question.correct?"Right answer.":"Review this one."}</strong><p>{question.explanation}</p><button onClick={()=>next(history)}>Next question →</button></div>:<button className="va-submit" disabled={choice===null} onClick={submit}>Check answer</button>}
 </section>:<section className="va-card"><h2>You've used every available question in this run.</h2><button onClick={()=>start(mode)}>Shuffle and play again</button></section>}
 <div className="va-bottom"><button onClick={resetSession}>Start a new session</button><button onClick={()=>{setCopyStatus("");setProofOpen(true)}} disabled={session.attempts===0}>Finish & show proof</button><button onClick={()=>setShowSentence(v=>!v)}>Class sentence challenge</button><button onClick={()=>start(mode==="review"?"all":mode)}>Restart {modeLabel}</button><button onClick={()=>setStarted(false)}>Choose a different pool</button><button onClick={()=>{setStarted(false);setGameChosen(false)}}>Choose another game (keep session total)</button>{history.some(h=>!h.ok)&&<button onClick={()=>{setMode("review");next(history,"review")}}>Review missed terms</button>}</div>

 {showSentence&&<section className="va-card"><h2>Share it without stretching it</h2><p>Use <b>sample</b> or <b>bias</b> in one believable high-school sentence. If you can use both naturally, even better. Be ready to share it aloud. No text submission needed.</p></section>}
 </>:null}
 {proofOpen&&<section className="va-card va-proof" aria-label="Practice session summary"><p className="va-id">PRACTICE RECEIPT — SCREENSHOT THIS</p><h2 ref={receiptRef} tabIndex={-1}>My vocabulary practice</h2><p><strong>Practice pool:</strong> {modeLabel}</p><p><strong>Started:</strong> {session.startedAt?.toLocaleString()||"Not available"}</p><p><strong>Ended:</strong> {new Date().toLocaleString()}</p><p><strong>Session attempts:</strong> {session.attempts}</p><p><strong>Correct attempts:</strong> {session.correct}</p><p><strong>Games played:</strong> Quick Quiz {session.games.quiz} · Match Pairs {session.games.pairs} · Mystery Word {session.games.mystery}</p><p><strong>Words practiced across games:</strong> {session.words.join(", ")}</p><p>Practice participation evidence only. No account or identity verification.</p><p>Take a screenshot and submit it through the assigned Classroom item if your teacher asks for proof.</p><button onClick={()=>void copyReceipt()}>Copy practice summary</button> <p role="status" aria-live="polite">{copyStatus}</p> <button onClick={()=>setProofOpen(false)}>Continue playing</button></section>}
 <p className="va-footnote">Practice is not a graded formative or summative. Scores here are instant local practice feedback, not a Classroom grade.</p></main></div>;
}
