import "./VocabularyPage.css";
import { getVocabularySection, vocabularySections, type VocabularySectionKey } from "./vocabularyData";

type VocabularyPageProps = {
  section?: VocabularySectionKey;
};

function VocabularyHeader() {
  return (
    <header className="vocab-site-header vocab-hero">
      <div className="vocab-topbar vocab-wrap">
        <a className="vocab-brand" href="/">
          <span className="vocab-brand-mark">AQR</span>
          <span className="vocab-brand-name">Applied Quantitative Reasoning</span>
        </a>
        <nav className="vocab-topnav" aria-label="Vocabulary navigation">
          <a href="/">Home</a>
          <a href="/course-overview">Course Overview</a>
          <a href="/student-guide">Student Guide</a>
          <a href="/vocabulary" aria-current="page">Vocabulary</a>
        </nav>
      </div>
    </header>
  );
}

function VocabularyHub() {
  return (
    <div className="vocab-site-shell">
      <a className="vocab-skip-link" href="#vocab-main-content">Skip to main content</a>
      <VocabularyHeader />
      <main className="vocab-page" id="vocab-main-content">
        <section className="vocab-hero vocab-hero-main" aria-labelledby="vocab-page-title">
          <div className="vocab-wrap vocab-hero-inner">
            <p className="vocab-kicker">AQR Vocabulary</p>
            <h1 id="vocab-page-title">Learn the language of the course.</h1>
            <p className="vocab-hero-lead">
              Vocabulary is organized in the same order students encounter it: core words first, then Quarter 1 through Quarter 4.
            </p>
          </div>
        </section>

        <section className="vocab-section vocab-section-silver" aria-labelledby="vocab-how-title">
          <div className="vocab-wrap vocab-intro-grid">
            <div>
              <p className="vocab-section-kicker">How each entry works</p>
              <h2 id="vocab-how-title">More useful than a word-and-definition list.</h2>
              <p>Every finished entry will use the same five-part structure so students can study it, discuss it, and use it in real work.</p>
            </div>
            <ol className="vocab-format-list">
              <li><strong>Term</strong><span>The academic or quantitative-reasoning word.</span></li>
              <li><strong>Full definition</strong><span>A complete, accurate meaning.</span></li>
              <li><strong>Plain language</strong><span>The same idea in student-friendly wording.</span></li>
              <li><strong>AQR use</strong><span>How the word appears in this course.</span></li>
              <li><strong>Question or stem</strong><span>A prompt students can use while reasoning or communicating.</span></li>
            </ol>
          </div>
        </section>

        <section className="vocab-section vocab-section-black" aria-labelledby="vocab-sections-title">
          <div className="vocab-wrap">
            <div className="vocab-section-head">
              <p className="vocab-section-kicker">Vocabulary sections</p>
              <h2 id="vocab-sections-title">Start with core language, then move through the year.</h2>
              <p>The framework is in place now. Core and quarter term sets will be filled from the approved AQR vocabulary source in the next builds.</p>
            </div>
            <ol className="vocab-section-grid">
              {vocabularySections.map((item, index) => (
                <li key={item.key}>
                  <a className="vocab-section-card" href={item.route}>
                    <span className="vocab-section-number">{index + 1}</span>
                    <p className="vocab-card-kicker">{item.label}</p>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span className="vocab-card-link">Open section framework</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <footer className="vocab-footer"><div className="vocab-wrap vocab-footer-inner"><p>© 2026 Applied Quantitative Reasoning • <span className="site-footer-school">Vista PEAK Prep</span></p></div></footer>
    </div>
  );
}

function VocabularySectionPage({ section }: { section: VocabularySectionKey }) {
  const data = getVocabularySection(section);
  if (!data) return <VocabularyHub />;

  return (
    <div className="vocab-site-shell">
      <a className="vocab-skip-link" href="#vocab-main-content">Skip to main content</a>
      <VocabularyHeader />
      <main className="vocab-page" id="vocab-main-content">
        <section className="vocab-hero vocab-hero-main" aria-labelledby="vocab-section-page-title">
          <div className="vocab-wrap vocab-hero-inner">
            <p className="vocab-kicker">{data.label}</p>
            <h1 id="vocab-section-page-title">{data.title}</h1>
            <p className="vocab-hero-lead">{data.description}</p>
            <a className="vocab-back-link" href="/vocabulary">Back to all vocabulary sections</a>
          </div>
        </section>
        <section className="vocab-section vocab-section-silver">
          <div className="vocab-wrap vocab-framework-panel">
            <p className="vocab-section-kicker">Framework ready</p>
            <h2>Terms will appear here in the standard AQR format.</h2>
            <p>This phase establishes the page, route, data model, and reusable display structure. It does not invent or replace the approved vocabulary content.</p>
            <div className="vocab-entry-example" aria-label="Vocabulary entry structure">
              <span>Term</span><span>Full definition</span><span>Plain language</span><span>AQR use</span><span>Question or stem</span>
            </div>
          </div>
        </section>
      </main>
      <footer className="vocab-footer"><div className="vocab-wrap vocab-footer-inner"><p>© 2026 Applied Quantitative Reasoning • <span className="site-footer-school">Vista PEAK Prep</span></p></div></footer>
    </div>
  );
}

export default function VocabularyPage({ section }: VocabularyPageProps) {
  return section ? <VocabularySectionPage section={section} /> : <VocabularyHub />;
}
