import { useEffect, useRef, useState } from "react";
import ResponsiveNav from "./ResponsiveNav";
import { detectiveCases } from "./dataDetectiveCases";
import "./DataDetectiveLab.css";

export default function DataDetectiveLab() {
  const [step, setStep] = useState(0);
  const [choice, setChoice] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [resolved, setResolved] = useState<boolean[]>(() => detectiveCases.map(() => false));
  const [reflection, setReflection] = useState("");
  const [copyStatus, setCopyStatus] = useState("");
  const headingRef = useRef<HTMLHeadingElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);
  const total = detectiveCases.length;
  const finished = step === total;
  const current = finished ? null : detectiveCases[step];
  const correct = current && choice === current.correct;
  const completed = resolved.filter(Boolean).length;

  useEffect(() => {
    if (checked) feedbackRef.current?.focus();
  }, [checked]);
  useEffect(() => {
    if (!checked) headingRef.current?.focus();
  }, [step, checked]);

  function checkAnswer() {
    if (!current || choice === null || checked) return;
    setChecked(true);
    if (choice === current.correct) {
      setResolved((previous) => previous.map((value, index) => index === step ? true : value));
    }
  }
  function retry() {
    setChoice(null);
    setChecked(false);
  }
  function advance() {
    if (!correct) return;
    setStep((previous) => previous + 1);
    retry();
  }
  function restart() {
    setStep(0);
    setResolved(detectiveCases.map(() => false));
    setReflection("");
    setCopyStatus("");
    retry();
  }
  function receipt() {
    return [
      "AQR Data Detective Lab — practice receipt (not a grade)",
      ...detectiveCases.map((item, index) => `${index + 1}. ${item.skill}: ${item.evidence} Limitation: ${item.limitation}`),
      `My evidence-based conclusion: ${reflection.trim() || "(not written)"}`,
      "Practice only. No student data is stored or submitted."
    ].join("\n");
  }
  async function copyReceipt() {
    try {
      await navigator.clipboard.writeText(receipt());
      setCopyStatus("Copied your evidence summary.");
    } catch {
      setCopyStatus("Copy unavailable. You can select and copy the summary below.");
    }
  }

  return (
    <div className="dd-shell">
      <a href="#detective-main" className="dd-skip">Skip to the investigation</a>
      <header className="dd-header">
        <div className="dd-wrap dd-topbar">
          <a className="dd-brand" href="/"><strong>AQR</strong><span>Applied Quantitative Reasoning</span></a>
          <ResponsiveNav className="dd-nav" ariaLabel="Data Detective navigation">
            <a href="/">Home</a><a href="/quarter-2">Quarter 2</a><a href="/resources">Resources</a><a href="/student-guide">Student Guide</a>
          </ResponsiveNav>
        </div>
      </header>
      <main id="detective-main" className="dd-wrap dd-main">
        <div className="dd-intro">
          <p className="dd-eyebrow">AQR · Practice lab · Fictional data</p>
          <h1>Data Detective Lab</h1>
          <p>Four short cases. Look at the numbers, challenge the claim, then defend a conclusion. You can retry as often as you need.</p>
          <p className="dd-privacy">Practice only: no accounts, grades, submissions, or saved responses.</p>
        </div>
        <div className="dd-progress" aria-label="Investigation progress">
          <span>{finished ? "Case file complete" : `Case ${step + 1} of ${total}`}</span>
          <span>{completed} of {total} cases solved</span>
        </div>
        <ol className="dd-track" aria-label="Four investigation stages">
          {detectiveCases.map((item, index) => <li key={item.id} aria-current={!finished && index === step ? "step" : undefined} className={resolved[index] ? "dd-done" : index === step ? "dd-current" : ""}><span className="dd-dot" aria-hidden="true">{resolved[index] ? "✓" : index + 1}</span><span>{item.skill}</span></li>)}
        </ol>
        {current ? (
          <article className="dd-card" aria-labelledby="dd-case-title">
            <p className="dd-case-label">Investigation {step + 1} · {current.skill}</p>
            <h2 id="dd-case-title" tabIndex={-1} ref={headingRef}>{current.title}</h2>
            <p className="dd-setup">{current.setup}</p>
            <div className="dd-table-scroll">
              <table><caption>Fictional case evidence</caption><thead><tr>{current.headers.map((head) => <th scope="col" key={head}>{head}</th>)}</tr></thead>
                <tbody>{current.rows.map((row) => <tr key={row[0]}><th scope="row">{row[0]}</th><td>{row[1]}</td></tr>)}</tbody></table>
            </div>
            {current.visual === "scale" && (
              <figure className="dd-chart">
                <figcaption>Misleading display: vertical axis starts at 68%, not 0%.</figcaption>
                <div className="dd-chart-row"><span>Plan A</span><div className="dd-chart-track"><span style={{ width: "33.33%" }} /></div><strong>70%</strong></div>
                <div className="dd-chart-row"><span>Plan B</span><div className="dd-chart-track"><span style={{ width: "100%" }} /></div><strong>74%</strong></div>
                <p>Bar lengths show only the portion above 68%.</p>
              </figure>
            )}
            <fieldset className="dd-question" disabled={checked}>
              <legend>{current.prompt}</legend>
              {current.options.map((option, index) => (
                <label className={choice === index ? "dd-option dd-selected" : "dd-option"} key={option}>
                  <input type="radio" name={current.id} checked={choice === index} onChange={() => setChoice(index)} />
                  <span>{option}</span>
                </label>
              ))}
            </fieldset>
            {!checked && <button className="dd-primary" type="button" onClick={checkAnswer} disabled={choice === null}>Check my reasoning</button>}
            {checked && <div ref={feedbackRef} tabIndex={-1} className={correct ? "dd-feedback dd-good" : "dd-feedback dd-try"} role="status">
              <h3>{correct ? "Evidence supported" : "Check the evidence again"}</h3>
              <p>{correct ? current.explanation : "That conclusion misses something important in the numbers. Revisit the table and try another interpretation."}</p>
              {correct && <><p><strong>Evidence:</strong> {current.evidence}</p><p><strong>Limitation:</strong> {current.limitation}</p></>}
              <button type="button" className="dd-primary" onClick={correct ? advance : retry}>{correct ? (step === total - 1 ? "Finish the case file" : "Next investigation") : "Try again"}</button>
            </div>}
          </article>
        ) : (
          <section className="dd-card dd-final" aria-labelledby="dd-case-title">
            <p className="dd-case-label">Four investigations solved</p>
            <h2 id="dd-case-title" ref={headingRef} tabIndex={-1}>Your detective report</h2>
            <p>You checked missing data, a misleading graph, an unusual value, and a comparison of different-sized groups.</p>
            <ul>{detectiveCases.map((item) => <li key={item.id}><strong>{item.skill}:</strong> {item.evidence} <em>{item.limitation}</em></li>)}</ul>
            <label htmlFor="dd-reflection">Write one rule you will use before believing a data claim.</label>
            <textarea id="dd-reflection" rows={3} maxLength={1000} value={reflection} onChange={(event) => { setReflection(event.target.value); setCopyStatus(""); }} placeholder="I would check…" />
            <div className="dd-actions"><button className="dd-primary" type="button" onClick={copyReceipt}>Copy evidence summary</button><button className="dd-secondary" type="button" onClick={restart}>Restart lab</button></div>
            <p role="status">{copyStatus}</p>
            <details><summary>Show a copyable text summary</summary><pre className="dd-receipt">{receipt()}</pre></details>
          </section>
        )}
        <p className="dd-footer"><a href="/resources">Back to Resource Finder</a> · Fictional examples for AQR practice only</p>
      </main>
    </div>
  );
}
