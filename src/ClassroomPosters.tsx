import type { MouseEvent } from "react";
import type { PosterAsset } from "./posterData";
import { getPosterType, publishedPosterTypes } from "./posterData";
import "./ClassroomPosters.css";

type ClassroomPostersProps = {
  currentHash?: string;
  onNavigateHome?: () => void;
  onNavigateOverview?: () => void;
};

function getPosterSlugFromHash(currentHash = window.location.hash) {
  const prefix = "#/classroom-posters/";
  if (!currentHash.startsWith(prefix)) return null;
  return currentHash.slice(prefix.length).replace(/\/$/, "") || null;
}

type PosterWithType = PosterAsset & {
  typeTitle: string;
  typeSlug: string;
};

const allPublishedPosters: PosterWithType[] = publishedPosterTypes.flatMap((type) =>
  type.posters.map((poster) => ({
    ...poster,
    typeTitle: type.title,
    typeSlug: type.slug,
  })),
);

function ClassroomPosters({ currentHash, onNavigateHome, onNavigateOverview }: ClassroomPostersProps) {
  const activeSlug = getPosterSlugFromHash(currentHash);
  const isAllPostersPage = activeSlug === "all";
  const activeType = getPosterType(activeSlug);
  const activePosterType = activeType && activeType.posters.length > 0 ? activeType : null;

  const goHome = (event?: MouseEvent<HTMLAnchorElement>) => {
    if (event) event.preventDefault();

    if (onNavigateHome) {
      onNavigateHome();
      return;
    }

    window.location.hash = "";
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const goOverview = (event?: MouseEvent<HTMLAnchorElement>) => {
    if (event) event.preventDefault();

    if (onNavigateOverview) {
      onNavigateOverview();
      return;
    }

    window.location.hash = "#/course-overview";
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <div className="poster-site-shell">
      <a className="poster-skip-link" href="#poster-main-content">
        Skip to main content
      </a>

      <header className="poster-site-header poster-hero">
        <div className="poster-topbar poster-wrap">
          <a className="poster-brand" href="#" onClick={goHome}>
            <span className="poster-brand-mark">AQR</span>
            <span className="poster-brand-name">Applied Quantitative Reasoning</span>
          </a>

          <nav className="poster-topnav" aria-label="Classroom Posters navigation">
            <a href="#" onClick={goHome}>Home</a>
            <a href="#/course-overview" onClick={goOverview}>Course Overview</a>
            <a href="#/classroom-posters" aria-current={!activePosterType && !isAllPostersPage ? "page" : undefined}>Posters</a>
            <a href="#/classroom-posters/all" aria-current={isAllPostersPage ? "page" : undefined}>All Posters</a>
          </nav>
        </div>
      </header>

      <main className="poster-page" id="poster-main-content">
        {!activePosterType && !isAllPostersPage ? (
          <>
            <section className="poster-hero poster-hero-main" aria-labelledby="poster-page-title">
              <div className="poster-wrap poster-hero-inner">
                <p className="poster-kicker">Classroom Posters</p>
                <h1 id="poster-page-title">AQR posters people can use, print, or borrow.</h1>
                <p className="poster-hero-lead">
                  These are public-facing classroom poster files for AQR. Only poster types with finished files are shown.
                  Each type starts with a sample image; open the type page to see the rest of that poster set.
                </p>
              </div>
            </section>

            <section className="poster-section poster-section-silver" aria-labelledby="poster-types-title">
              <div className="poster-wrap">
                <div className="poster-section-head poster-section-head-dark">
                  <p className="poster-section-kicker">Available poster types</p>
                  <h2 id="poster-types-title">Finished sets appear here.</h2>
                  <p>
                    Each card shows one representative poster from that type. Hidden poster families stay off the page until at least one printable poster file is ready.
                  </p>
                </div>

                {publishedPosterTypes.length > 0 ? (
                  <>
                    <a className="poster-all-card" href="#/classroom-posters/all">
                      <div>
                        <p className="poster-card-kicker">All Posters</p>
                        <h3>See every finished poster in one place.</h3>
                        <p>
                          Browse the full printable collection without choosing a category first.
                        </p>
                      </div>
                      <span className="poster-count">
                        {allPublishedPosters.length} poster design{allPublishedPosters.length === 1 ? "" : "s"}
                      </span>
                    </a>

                    <ul className="poster-type-grid" role="list">
                      {publishedPosterTypes.map((type) => {
                        const samplePoster = type.posters[0];

                        return (
                          <li className="poster-type-list-item" key={type.slug}>
                            <a className="poster-type-card" href={`#/classroom-posters/${type.slug}`}>
                              <div className="poster-type-preview" aria-hidden="true">
                                <img src={samplePoster.png} alt="" loading="lazy" />
                              </div>
                              <div className="poster-type-copy">
                                <p className="poster-card-kicker">{type.eyebrow}</p>
                                <h3>{type.title}</h3>
                                <p>{type.summary}</p>
                                <span className="poster-count">
                                  {type.posters.length} poster design{type.posters.length === 1 ? "" : "s"}
                                </span>
                                <span className="poster-card-link">Open poster type</span>
                              </div>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </>
                ) : (
                  <div className="poster-empty-panel">
                    <p className="poster-panel-label">No files published yet</p>
                    <p>Add at least one poster PNG/PDF pair in <code>posterData.ts</code> to make a poster type appear.</p>
                  </div>
                )}
              </div>
            </section>
          </>
        ) : isAllPostersPage ? (
          <>
            <section className="poster-hero poster-hero-main" aria-labelledby="poster-all-title">
              <div className="poster-wrap poster-hero-inner">
                <p className="poster-kicker">All Posters</p>
                <h1 id="poster-all-title">Every finished AQR poster.</h1>
                <p className="poster-hero-lead">
                  Browse the full printable collection in one grid. Each card still shows its poster type so the collection does not become a junk drawer.
                </p>
              </div>
            </section>

            <section className="poster-section poster-section-silver" aria-labelledby="poster-all-files-title">
              <div className="poster-wrap">
                <div className="poster-section-head poster-section-head-dark">
                  <p className="poster-section-kicker">Full collection</p>
                  <h2 id="poster-all-files-title">Download any poster directly.</h2>
                  <p>
                    Use the PDF for normal 24x36 printing. Use the PNG when a school print workflow or website needs an image file.
                  </p>
                </div>

                <div className="poster-file-grid">
                  {allPublishedPosters.map((poster) => (
                    <article className="poster-file-card" key={`${poster.typeSlug}-${poster.title}-${poster.png}`}>
                      <a className="poster-image-link" href={poster.png} aria-label={`Open PNG for ${poster.title}`}>
                        <img src={poster.png} alt={poster.alt} loading="lazy" />
                      </a>
                      <div className="poster-file-copy">
                        <p className="poster-card-kicker poster-type-label">{poster.typeTitle}</p>
                        <h3>{poster.title}</h3>
                        <div className="poster-file-actions" aria-label={`${poster.title} download options`}>
                          <a href={poster.pdf}>Download PDF</a>
                          <a href={poster.png}>Download PNG</a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <p className="poster-back-link">
                  <a href="#/classroom-posters">Back to poster types</a>
                </p>
              </div>
            </section>
          </>
        ) : activePosterType ? (
          <>
            <section className="poster-hero poster-hero-main" aria-labelledby="poster-detail-title">
              <div className="poster-wrap poster-hero-inner">
                <p className="poster-kicker">{activePosterType.eyebrow}</p>
                <h1 id="poster-detail-title">{activePosterType.title}</h1>
                <p className="poster-hero-lead">{activePosterType.summary}</p>
                <p className="poster-hero-note">{activePosterType.audienceUse}</p>
              </div>
            </section>

            <section className="poster-section poster-section-silver" aria-labelledby="poster-files-title">
              <div className="poster-wrap">
                <div className="poster-section-head poster-section-head-dark">
                  <p className="poster-section-kicker">Printable files</p>
                  <h2 id="poster-files-title">Download the PNG or PDF.</h2>
                  <p>
                    Use the PDF for normal 24x36 printing. Use the PNG when a school print workflow or website needs an image file.
                  </p>
                </div>

                <div className="poster-file-grid">
                  {activePosterType.posters.map((poster) => (
                    <article className="poster-file-card" key={poster.title}>
                      <a className="poster-image-link" href={poster.png} aria-label={`Open PNG for ${poster.title}`}>
                        <img src={poster.png} alt={poster.alt} loading="lazy" />
                      </a>
                      <div className="poster-file-copy">
                        <h3>{poster.title}</h3>
                        <div className="poster-file-actions" aria-label={`${poster.title} download options`}>
                          <a href={poster.pdf}>Download PDF</a>
                          <a href={poster.png}>Download PNG</a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <p className="poster-back-link">
                  <a href="#/classroom-posters">Back to all poster types</a>
                  <a href="#/classroom-posters/all">See all posters</a>
                </p>
              </div>
            </section>
          </>
        ) : null}
      </main>

      <footer className="poster-footer">
        <div className="poster-wrap poster-footer-inner">
          <p>
            © 2026 Applied Quantitative Reasoning • <span className="site-footer-school">Vista PEAK Prep</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default ClassroomPosters;
