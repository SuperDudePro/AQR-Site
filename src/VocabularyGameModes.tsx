import { useState } from "react";
import { q2Terms } from "./vocabularyQ2";
import { coreTerms } from "./vocabularyCore";
import { q1Terms } from "./vocabularyQ1";
import { q3Terms } from "./vocabularyQ3";
import { q4Terms } from "./vocabularyQ4";
import type { VocabularyTerm } from "./vocabularyData";

type GameKind = "flip" | "pairs";
type PoolKind = "q2" | "core" | "all";
const pools: Record<PoolKind, VocabularyTerm[]> = {
  q2: q2Terms,
  core: coreTerms,
  all: [...coreTerms, ...q1Terms, ...q2Terms, ...q3Terms, ...q4Terms],
};
const poolNames: Record<PoolKind, string> = { q2: "Quarter 2", core: "Core", all: "All AQR" };

function shuffled<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
function freshSet(pool: PoolKind, exclude: string[] = []): VocabularyTerm[] {
  const candidates = shuffled(pools[pool].filter(item => !exclude.includes(item.term)));
  return (candidates.length >= 3 ? candidates : shuffled(pools[pool])).slice(0, 3);
}

export default function VocabularyGameModes({ kind, onBack }: {kind: GameKind; onBack: () => void}) {
  const [pool, setPool] = useState<PoolKind>("q2");
  const [startedAt, setStartedAt] = useState<Date>(() => new Date());
  const [cards, setCards] = useState<VocabularyTerm[]>(() => freshSet("q2"));
  const [flipIndex, setFlipIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [practiced, setPracticed] = useState<string[]>([]);
  const [leftPick, setLeftPick] = useState<string | null>(null);
  const [matched, setMatched] = useState<string[]>([]);
  const [feedback, setFeedback] = useState("");
  const [proofOpen, setProofOpen] = useState(false);
  const [rightOrder, setRightOrder] = useState<string[]>(() => shuffled(freshSet("q2").map(x => x.term)));

  // The same three terms must be used on both sides of Match Pairs.
  const choosePool = (next: PoolKind) => {
    const nextCards = freshSet(next);
    setPool(next);
    setCards(nextCards);
    setRightOrder(shuffled(nextCards.map(x => x.term)));
    setStartedAt(new Date());
    setAttempts(0);
    setPracticed([]);
    setFlipIndex(0);
    setRevealed(false);
    setLeftPick(null);
    setMatched([]);
    setFeedback("");
    setProofOpen(false);
  };
  const nextSet = () => {
    const nextCards = freshSet(pool, cards.map(x => x.term));
    setCards(nextCards);
    setRightOrder(shuffled(nextCards.map(x => x.term)));
    setFlipIndex(0);
    setRevealed(false);
    setMatched([]);
    setLeftPick(null);
    setFeedback("");
  };
  const record = (term: string) => {
    setAttempts(previous => previous + 1);
    setPracticed(previous => previous.includes(term) ? previous : [...previous, term]);
  };
  const current = cards[flipIndex];
  const finishFlip = () => {
    if (!revealed) return;
    record(current.term);
    if (flipIndex + 1 < cards.length) {
      setFlipIndex(x => x + 1);
      setRevealed(false);
    } else {
      nextSet();
    }
  };
  const checkPair = (term: string) => {
    if (leftPick === null || matched.includes(term)) return;
    record(leftPick);
    if (leftPick === term) {
      setMatched(previous => [...previous, term]);
      setFeedback("Matched. Keep going.");
    } else {
      setFeedback("Not a match. Try another definition.");
    }
    setLeftPick(null);
  };
  const label = kind === "flip" ? "Flip & Recall" : "Match Pairs";
  const receiptText = [
    "AQR VOCABULARY ARCADE — PRACTICE SESSION",
    "Activity: " + label,
    "Practice pool: " + poolNames[pool],
    "Started: " + startedAt.toLocaleString(),
    "Ended: " + new Date().toLocaleString(),
    "Attempts: " + attempts,
    "Words practiced: " + practiced.join(", "),
    "Practice participation evidence only — not independently verified or a mastery grade.",
  ].join("\n");

  return <div className="va-shell"><header className="va-header">
    <a href="/vocabulary">← Vocabulary</a><span>AQR / GAME LAB</span>
  </header><main className="va-main">
    <button type="button" onClick={onBack}>← Choose another game</button>
    <p className="va-kicker">Vocabulary Arcade / {label}</p>
    <h1>{label}</h1>
    <p className="va-intro">{kind === "flip"
      ? "Think of the meaning first. Flip to check. Then mark the card practiced. Remembering it is not required for credit."
      : "Select a term, then its meaning. If you miss, try again. Every genuine attempt counts as practice."}</p>
    <div className="va-buttons va-game-pools">
      <button type="button" aria-pressed={pool === "q2"} onClick={() => choosePool("q2")}>Quarter 2</button>
      <button type="button" aria-pressed={pool === "core"} onClick={() => choosePool("core")}>Core</button>
      <button type="button" aria-pressed={pool === "all"} onClick={() => choosePool("all")}>All AQR</button>
    </div>
    <p className="va-status"><span>{poolNames[pool]} · {attempts} attempts</span><span>{practiced.length} words practiced</span></p>
    {kind === "flip" ? <section className="va-card va-play-card">
      <p className="va-id">FLIP CARD {flipIndex + 1} / {cards.length}</p>
      <h2>{current.term}</h2>
      {revealed ? <>
        <p><strong>{current.plainLanguage}</strong></p>
        <p>{current.fullDefinition}</p>
        <button type="button" onClick={finishFlip}>Mark practiced — next word</button>
      </> : <button type="button" onClick={() => setRevealed(true)}>Flip to reveal meaning</button>}
    </section> : <section className="va-card va-play-card">
      <h2>Match each term to its meaning</h2>
      <p>Matched {matched.length} of {cards.length}. {feedback}</p>
      <div className="va-pairs-grid">
        <div className="va-pair-column">
          {cards.map(item => <button type="button" key={item.term}
            className="va-pair-button"
            aria-pressed={leftPick === item.term}
            disabled={matched.includes(item.term)}
            onClick={() => { setLeftPick(item.term); setFeedback(""); }}>
            {item.term}{matched.includes(item.term) ? " ✓" : ""}
          </button>)}
        </div>
        <div className="va-pair-column">
          {rightOrder.map(term => {
            const item = cards.find(card => card.term === term);
            if (!item) return null;
            return <button type="button" className="va-pair-button" key={term}
              disabled={matched.includes(term) || leftPick === null}
              onClick={() => checkPair(term)}>
              {item.plainLanguage}{matched.includes(term) ? " ✓" : ""}
            </button>;
          })}
        </div>
      </div>
      {matched.length === cards.length && <button type="button" onClick={nextSet}>Play another set</button>}
    </section>}
    <div className="va-bottom">
      <button type="button" disabled={attempts === 0} onClick={() => setProofOpen(true)}>Finish & show proof</button>
      <button type="button" onClick={nextSet}>New set</button>
    </div>
    {proofOpen && <section className="va-card va-proof" aria-label="Practice session summary">
      <p className="va-id">PRACTICE RECEIPT — SCREENSHOT OR COPY</p>
      <h2>My vocabulary practice</h2>
      <p><strong>Activity:</strong> {label}</p>
      <p><strong>Practice pool:</strong> {poolNames[pool]}</p>
      <p><strong>Started:</strong> {startedAt.toLocaleString()}</p>
      <p><strong>Ended:</strong> {new Date().toLocaleString()}</p>
      <p><strong>Attempts:</strong> {attempts}</p>
      <p><strong>Words practiced:</strong> {practiced.join(", ")}</p>
      <p>Practice participation evidence only. No identity verification or mastery grade.</p>
      <button type="button" onClick={() => { if (navigator.clipboard?.writeText) void navigator.clipboard.writeText(receiptText); }}>Copy practice summary</button>{" "}
      <button type="button" onClick={() => setProofOpen(false)}>Keep playing</button>
    </section>}
    <p className="va-footnote">Any genuine practice attempt counts. Save a separate receipt for each week's practice.</p>
  </main></div>;
}
