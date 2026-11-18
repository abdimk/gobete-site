// Point these at the published files. `apk` sits in /public; the Play Store link is
// left empty until the listing is live, which is what makes the second button read
// "coming soon".
type Feature = { title: string; body: string };
type Step = { title: string; body: string };
type Screen = { src: string; alt: string; label: string };
type Faq = { q: string; a: string };

const SITE = {
  apk: "/gobete.apk",
  playStore: "",
  email: "abdisamk+gobete@gmail.com",
};

const FEATURES: Feature[] = [
  {
    title: "One feed, not forty channels",
    body: "Listings from Telegram, Facebook and property sites, cleaned up into a single scroll with photos, price, size and the source on every card.",
  },
  {
    title: "Filters that match Addis",
    body: "Generator, roto tank, 24/7 security, parking, furnished. The things that decide a home here, next to rent, price and bedrooms.",
  },
  {
    title: "Birr or dollars, English or አማርኛ",
    body: "Switch currency and language in your profile and the whole app follows. No reload, no lost filters.",
  },
  {
    title: "Find a dealer on the map",
    body: "See the agents and offices nearest to you, with distance, phone and Telegram one tap away.",
  },
];

const STEPS: Step[] = [
  {
    title: "Install and browse",
    body: "Download the app and create an account. Then start scrolling.",
  },
  {
    title: "Set your filters",
    body: "Rent or buy, your area, your budget and the utilities that matter. Save the homes worth a second look.",
  },
  {
    title: "Contact the source",
    body: "Every listing shows where it came from. Call the agent or open their Telegram, then visit before paying anything.",
  },
];

const SCREENS: Screen[] = [
  { src: "/screens/explore.png", alt: "GoBete filters for rent, property type and monthly price", label: "Filters" },
  { src: "/screens/dealers.png", alt: "GoBete map of nearest dealers", label: "Nearest dealers" },
  { src: "/screens/details.png", alt: "GoBete listing details", label: "Listing details" },
  { src: "/screens/amharic-usd.png", alt: "GoBete in Amharic with USD prices", label: "Amharic and USD" },
  { src: "/screens/saved.png", alt: "GoBete saved listings", label: "Saved" },
];

const FAQS: Faq[] = [
  {
    q: "Where do the listings come from?",
    a: "Social media and the web, mainly Telegram channels, Facebook and property websites. Most Telegram listings come from offices that keep their own listings and never ask for payment online.",
  },
  {
    q: "Are the listings verified?",
    a: "They are read automatically from those sources, so a price, photo or detail can occasionally be out of date. Check the source, visit the home and check its papers before you pay anything.",
  },
  {
    q: "Do I need an account?",
    a: "Yes. Create an account in the app before you start browsing.",
  },
  {
    q: "Does GoBete take payments?",
    a: "Listings link to their source, so any deal is between you and the owner or agent. Visit the home and check its papers before you pay anything.",
  },
  {
    q: "Which areas are covered?",
    a: "Addis Ababa to start: Bole, CMC, Ayat, Semmit, Gerji and the surrounding neighbourhoods, for both rent and sale.",
  },
  {
    q: "Is it really free?",
    a: "Yes. Browsing, saving and contacting sources cost nothing.",
  },
];

import { Reveal } from "./components/reveal";
import { SpotlightCard } from "./components/spotlight-card";
import { Aurora } from "./components/aurora";

export default function Page(): React.JSX.Element {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a className="brand" href="#top" aria-label="GoBete home">
            <img src="/gobete.png" alt="" width="34" height="34" />
            <span className="brand-word">GoBete</span>
          </a>
          <nav className="nav-links" aria-label="Sections">
            <a href="#features">Features</a>
            <a href="#screens">Screens</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="btn btn-primary btn-sm" href={SITE.apk} download>
            Download
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <Aurora />
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1>
                Find your <span className="hl">perfect home</span> in one place.
              </h1>
              <p className="lede">
                GoBete gathers rentals and homes for sale from Telegram, Facebook
                and property sites into one feed you can filter. Every listing
                links to its source, so you can go and see the place yourself.
              </p>
              <div className="cta-row">
                <a className="btn btn-primary" href={SITE.apk} download>
                  Download for Android
                </a>
                <a className="btn btn-ghost" href="#screens">
                  See the app
                </a>
              </div>
              <p className="footnote">English and አማርኛ</p>
            </div>

            <div className="hero-art">
              <img
                src="/screens/onboarding.png"
                alt="GoBete welcome screen: Find Your Perfect Home"
                width="436"
                height="1000"
              />
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <div className="wrap">
            <div className="section-head">
              <h2>Built for how Addis rents.</h2>
              <p>A feed of homes that match the way people here look for one.</p>
            </div>
            <div className="feature-grid">
              {FEATURES.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.08}>
                  <SpotlightCard className="feature">
                    <h3>{f.title}</h3>
                    <p>{f.body}</p>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-tint" id="screens">
          <div className="wrap">
            <div className="section-head">
              <h2>Set it once, then see only what fits.</h2>
              <p>Rent or buy, pick your area and budget, and save the shortlist.</p>
            </div>
            <div className="screen-row">
              {SCREENS.map((s) => (
                <figure className="screen" key={s.src}>
                  <img src={s.src} alt={s.alt} loading="lazy" />
                  <figcaption>{s.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="how">
          <div className="wrap">
            <div className="section-head">
              <h2>Three steps, then go see the house.</h2>
            </div>
            <ol className="steps">
              {STEPS.map((s, i) => (
                <li key={s.title}>
                  <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="wrap faq-wrap">
            <div className="section-head">
              <h2>Before you download.</h2>
            </div>
            <div className="faq">
              {FAQS.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <div className="brand">
            <img src="/gobete.png" alt="" width="26" height="26" />
            <span className="brand-word">GoBete</span>
          </div>
          <div className="footer-links">
            <a href={`mailto:${SITE.email}`}>Report a bug</a>
            <a href={SITE.apk} download>Download</a>
            <a href="#faq">FAQ</a>
          </div>
          <p className="footer-legal">
            © {new Date().getFullYear()} GoBete · Built by <a href="https://abdi.et">abdi.et</a>
          </p>
        </div>
      </footer>
    </>
  );
}
