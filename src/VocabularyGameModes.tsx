import {useState} from "react";
import {q1Terms} from "./vocabularyQ1";
import {q2Terms} from "./vocabularyQ2";
import {q3Terms} from "./vocabularyQ3";
import {q4Terms} from "./vocabularyQ4";
import {coreTerms} from "./vocabularyCore";
import type {VocabularyTerm} from "./vocabularyData";

type GameKind="mystery"|"pairs";
type PoolKind="q1"|"q2"|"q3"|"q4"|"core"|"all";
const pools:Record<PoolKind,VocabularyTerm[]>={q1:q1Terms,q2:q2Terms,q3:q3Terms,q4:q4Terms,core:coreTerms,all:[...coreTerms,...q1Terms,...q2Terms,...q3Terms,...q4Terms]};
const poolNames:Record<PoolKind,string>={q1:"Quarter 1",q2:"Quarter 2",q3:"Quarter 3",q4:"Quarter 4",core:"Core",all:"All AQR"};
const shuffle=<T,>(items:T[]):T[]=>{const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
function freshSet(pool:PoolKind,count:number,exclude:string[]=[]){const unused=shuffle(pools[pool].filter(item=>!exclude.includes(item.term)));return (unused.length>=count?unused:shuffle(pools[pool])).slice(0,count);}
const normalize=(value:string)=>value.trim().toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu,"");
const blanks=(value:string,revealed:string[])=>[...value].map((c,i)=>!/[\p{L}\p{N}]/u.test(c)||revealed.includes(String(i))?c:"_").join(" ");

export default function VocabularyGameModes({kind,onBack}:{kind:GameKind;onBack:()=>void}){
 const [pool,setPool]=useState<PoolKind|null>(null);
 const [startedAt,setStartedAt]=useState<Date>(()=>new Date());
 const [cards,setCards]=useState<VocabularyTerm[]>([]);
 const [attempts,setAttempts]=useState(0);
 const [practiced,setPracticed]=useState<string[]>([]);
 const [leftPick,setLeftPick]=useState<string|null>(null);
 const [matched,setMatched]=useState<string[]>([]);
 const [rightOrder,setRightOrder]=useState<string[]>([]);
 const [feedback,setFeedback]=useState("");
 const [proofOpen,setProofOpen]=useState(false);
 const [guess,setGuess]=useState("");
 const [misses,setMisses]=useState(0);
 const [hints,setHints]=useState<string[]>([]);
 const [solved,setSolved]=useState<boolean|null>(null);
 const [streak,setStreak]=useState(0);
 const [points,setPoints]=useState(0);
 const [solvedCount,setSolvedCount]=useState(0);
 const [mysteryCount,setMysteryCount]=useState(0);
 const [usedTerms,setUsedTerms]=useState<string[]>([]);
 const label=kind==="pairs"?"Match Pairs":"Mystery Word";
 const current=cards[0];
 const record=(term:string)=>{setAttempts(n=>n+1);setPracticed(v=>v.includes(term)?v:[...v,term]);};
 const loadSet=(selected:PoolKind,exclude:string[]=[])=>{
  const next=freshSet(selected,kind==="pairs"?3:1,exclude);
  setCards(next);setRightOrder(shuffle(next.map(x=>x.term)));setLeftPick(null);setMatched([]);setFeedback("");
  setGuess("");setMisses(0);setHints([]);setSolved(null);setProofOpen(false);
 };
 const selectPool=(selected:PoolKind)=>{
  setPool(selected);setStartedAt(new Date());setAttempts(0);setPracticed([]);setStreak(0);setPoints(0);setSolvedCount(0);setMysteryCount(0);setUsedTerms([]);loadSet(selected);
 };
 const nextSet=()=>{
  if(!pool)return;
  loadSet(pool,kind==="mystery"?usedTerms:cards.map(x=>x.term));
 };
 const checkPair=(term:string)=>{
  if(!leftPick||matched.includes(term))return;
  record(leftPick);
  if(leftPick===term){setMatched(v=>[...v,term]);setFeedback("Matched. Keep going.");}
  else setFeedback("Not a match. Try another definition.");
  setLeftPick(null);
 };
 const checkGuess=()=>{
  if(!current||solved!==null||!guess.trim())return;
  record(current.term);
  if(normalize(guess)===normalize(current.term)){
   const earned=Math.max(20,100-hints.length*20-misses*20);
   setPoints(v=>v+earned);setStreak(v=>v+1);setSolvedCount(v=>v+1);setSolved(true);
   setFeedback("Correct! +"+earned+" points.");
  }else{
   const n=misses+1;setMisses(n);
   if(n>=3){setSolved(false);setStreak(0);setFeedback("Three guesses used. The answer is "+current.term+".");}
   else setFeedback("Not quite. "+(3-n)+" guesses left.");
  }
  setGuess("");
 };
 const showHint=()=>{
  if(!current||solved!==null)return;
  const candidates=[...current.term].map((c,i)=>/[\p{L}\p{N}]/u.test(c)?String(i):"").filter(i=>i&&!hints.includes(i));
  if(!candidates.length)return;
  setHints(v=>[...v,candidates[Math.floor(Math.random()*candidates.length)]]);
  setFeedback("One letter revealed. A correct answer now earns fewer points.");
 };
 const nextMystery=()=>{
  if(!current||solved===null)return;
  const nextUsed=[...usedTerms,current.term];
  setUsedTerms(nextUsed);setMysteryCount(v=>v+1);
  if(!pool)return;loadSet(pool,nextUsed);
 };
 const receiptText=[
  "AQR VOCABULARY ARCADE — PRACTICE SESSION","Activity: "+label,"Practice pool: "+(pool?poolNames[pool]:"Not selected"),
  "Started: "+startedAt.toLocaleString(),"Ended: "+new Date().toLocaleString(),"Attempts: "+attempts,
  ...(kind==="mystery"?["Words solved: "+solvedCount,"Rounds completed: "+mysteryCount,"Points: "+points]:["Pairs matched this round: "+matched.length]),
  "Words practiced: "+practiced.join(", "),"Practice participation evidence only — not independently verified or a mastery grade."
 ].join("\n");
 return <div className="va-shell"><header className="va-header"><a href="/vocabulary">← Vocabulary</a><span>AQR / GAME LAB</span></header><main className="va-main">
 <button type="button" onClick={onBack}>← Choose another game</button>
 <p className="va-kicker">Vocabulary Arcade / {label}</p><h1>{label}</h1>
 <p className="va-intro">{kind==="pairs"?"Match three terms to their meanings. Try again when you miss.":"Read the clue and guess the vocabulary word. Three guesses per word, optional letter hints, and points for solving it."}</p>
 {!pool?<section className="va-card"><h2>Choose your vocabulary</h2><div className="va-buttons">{(["q1","q2","q3","q4","core","all"] as const).map(p=><button type="button" key={p} onClick={()=>selectPool(p)}>{p==="all"?"All vocabulary":p==="core"?"Core":p.toUpperCase()}</button>)}</div></section>:
 <>
 <div className="va-status"><span>{poolNames[pool]} · {attempts} attempts</span><span>{practiced.length} words practiced</span>{kind==="mystery"&&<span>{points} points · {streak} streak</span>}</div>
 {kind==="pairs"?<section className="va-card va-play-card"><h2>Match each term to its meaning</h2><p>Matched {matched.length} of {cards.length}. {feedback}</p>
 <div className="va-pairs-grid"><div className="va-pair-column">{cards.map(item=><button type="button" key={item.term} className="va-pair-button" aria-pressed={leftPick===item.term} disabled={matched.includes(item.term)} onClick={()=>{setLeftPick(item.term);setFeedback("");}}>{item.term}{matched.includes(item.term)?" ✓":""}</button>)}</div>
 <div className="va-pair-column">{rightOrder.map(term=>{const item=cards.find(x=>x.term===term);return item?<button type="button" key={term} className="va-pair-button" disabled={matched.includes(term)||leftPick===null} onClick={()=>checkPair(term)}>{item.plainLanguage}{matched.includes(term)?" ✓":""}</button>:null;})}</div></div>
 {matched.length===cards.length&&<button type="button" onClick={nextSet}>Play another set</button>}
 </section>:
 <section className="va-card va-play-card"><p className="va-id">MYSTERY WORD {mysteryCount+1} · {misses} / 3 WRONG GUESSES</p>
 <h2>{current?.plainLanguage}</h2>
 <p className="va-mystery-blanks" aria-label="Hidden vocabulary word">{current?blanks(current.term,hints):""}</p>
 {solved===null?<form className="va-mystery-form" onSubmit={e=>{e.preventDefault();checkGuess();}}>
 <label htmlFor="va-mystery-guess">Your word or phrase</label><input id="va-mystery-guess" type="text" autoComplete="off" value={guess} onChange={e=>setGuess(e.target.value)} placeholder="Type your answer" />
 <div className="va-buttons"><button type="submit" disabled={!guess.trim()}>Check guess</button><button type="button" onClick={showHint}>Reveal a letter (−20 pts)</button></div></form>:
 <div className="va-feedback"><strong>{solved?"You solved it!":"Good practice — keep going."}</strong><p>Answer: <strong>{current?.term}</strong></p><p>{current?.fullDefinition}</p><button type="button" onClick={nextMystery}>Next mystery word →</button></div>}
 {feedback&&<p className="va-mystery-feedback" role="status">{feedback}</p>}
 </section>}
 <div className="va-bottom"><button type="button" disabled={attempts===0} onClick={()=>setProofOpen(true)}>Finish & show proof</button>{kind==="pairs"&&<button type="button" onClick={nextSet}>New set</button>}<button type="button" onClick={()=>setPool(null)}>Change vocabulary pool</button></div>
 {proofOpen&&<section className="va-card va-proof" aria-label="Practice session summary"><p className="va-id">PRACTICE RECEIPT — SCREENSHOT OR COPY</p><h2>My vocabulary practice</h2><p><strong>Activity:</strong> {label}</p><p><strong>Practice pool:</strong> {poolNames[pool]}</p><p><strong>Started:</strong> {startedAt.toLocaleString()}</p><p><strong>Ended:</strong> {new Date().toLocaleString()}</p><p><strong>Attempts:</strong> {attempts}</p>{kind==="mystery"&&<p><strong>Words solved:</strong> {solvedCount} · <strong>Points:</strong> {points}</p>}<p><strong>Words practiced:</strong> {practiced.join(", ")}</p><p>Practice participation evidence only. No identity verification or mastery grade.</p><button type="button" onClick={()=>{if(navigator.clipboard?.writeText)void navigator.clipboard.writeText(receiptText);}}>Copy practice summary</button> <button type="button" onClick={()=>setProofOpen(false)}>Keep playing</button></section>}
 </>}
 <p className="va-footnote">Attempts count as practice. The receipt is not a graded assessment or verified record.</p></main></div>;
}
