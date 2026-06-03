import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import services from "./data/services";

export const metadata = {
  title: "Click Automate | Web Development, SEO & AI Automation",
  description:
    "Professional web development, SEO, AI automation, payment integrations and digital growth services for startups and businesses.",

  keywords: [
    "web development services",
    "SEO agency",
    "AI automation services",
    "Next.js development",
    "payment integrations",
    "business automation",
    "website development",
    "digital marketing",
    "software solutions",
  ],

  alternates: {
    canonical: "https://www.click-automate.com",
  },

  openGraph: {
    title: "Click Automate | Web Development, SEO & AI Automation",
    description:
      "Professional web development, SEO, AI automation and digital solutions for modern businesses.",
    url: "https://www.click-automate.com",
    siteName: "Click Automate",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Click Automate",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Click Automate",
    description:
      "Professional web development, SEO and AI automation services.",
    images: ["/og-image.png"],
  },
};
export default function Home() {
  return (
    <div className="page-wrap">
      <Navbar />

      {/* HERO SECTION */}
      {/* HERO SECTION */}
      {/* HERO SECTION */}
      <section className="hero">
        {/* animated background */}
        <div className="hero-bg-grid"></div>

        {/* floating orbs */}
        <div className="hero-orb orb-1"></div>
        <div className="hero-orb orb-2"></div>
        <div className="hero-orb orb-3"></div>

        {/* moving lines */}
        <div className="hero-line line-1"></div>
        <div className="hero-line line-2"></div>

        {/* floating particles */}
        <div className="hero-particles">
          {Array.from({ length: 16 }).map((_, i) => (
            <span
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${7 + (i % 5)}s`,
              }}
            ></span>
          ))}
        </div>

        <div className="hero-inner hero-center-layout">
          <div className="hero-main-content">
            <p className="hero-eyebrow">
              Digital Agency for Service Businesses
            </p>

            <h1 className="hero-title">
              Website Development, SEO &{" "}
              <span className="grad-text">AI Automation </span>
              For Growing Businesses
            </h1>

            <p className="hero-sub">
              We build SEO-optimized websites, AI automation
              systems, payment integrations and digital growth
              solutions that help startups and businesses attract
              more customers and automate operations.
            </p>

            <div className="hero-btns">
              <Link href="/products" className="btn-primary">
                Explore products <span className="arr">→</span>
              </Link>

              <Link href="/contact" className="btn-ghost">
                Book a call <span className="arr">→</span>
              </Link>
            </div>

            <div className="hero-checks">
              {[
                "No lock-in contracts",
                "Free consultation",
                "Results guaranteed",
              ].map((c) => (
                <span key={c} className="hero-check">
                  <span className="hero-check-icon">✓</span>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <div style={{padding:"0 0 96px"}}>
        <div className="features-section" style={{maxWidth:"var(--max-w)",margin:"0 auto"}}>
          <div className="center">
            <p className="eyebrow">Services</p>
            <h2 className="section-h">Everything your business <span className="grad-text">needs</span>.</h2>
            <p className="section-sub" style={{margin:"16px auto 0"}}>Web, SEO, payments, ads, and AI — all included from day one.</p>
          </div>
          <div className="features-grid">
            {services.map((svc, i) => (
              <Link key={svc.slug} href={`/products/${svc.slug}`} style={{textDecoration:"none"}}>
                <article className="feature-card fade-up" style={{animationDelay:`${i*0.08}s`}}>
                  <div className="feature-card-thumb">
                    <div className="feature-card-badge">{svc.badge}</div>
                  </div>
                  <h3>{svc.title}</h3>
                  <p>{svc.short}</p>
                  <div className="feature-card-tag">{svc.tag}</div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* PROBLEMS */}
      <section className="problem-section">
        <div style={{maxWidth:"var(--max-w)",margin:"0 auto",marginTop:'-150px'}}>
          <div className="center">
            <p className="eyebrow">What slows your business down?</p>
            <h2 className="section-h">The problems <span className="grad-text">we solve</span>.</h2>
            <p className="section-sub" style={{margin:"16px auto 0"}}>
              Every problem costs time, revenue and sleep. Here is what you are really losing — and what ClickAutomate does about it.
            </p>
          </div>
          <div className="problem-grid">
            {[
              { icon:"⏰", title:"Manual work eats your time",    stat:"~7 h/week",  label:"Lost productivity", desc:"Endless back-and-forth emails, manual reports, and scattered tools. We automate the ops so your team can focus on growth." },
              { icon:"💸", title:"No-shows drain your revenue",   stat:"20-40%",      label:"Revenue lost",      desc:"Without reminders, deposits, and clear booking flows, clients ghost. We build the systems that keep them engaged." },
              { icon:"🔀", title:"Split tools create chaos",      stat:"1 system",    label:"The fix",           desc:"5 different platforms for web, CRM, ads, analytics, and payments. We consolidate them into a single growth stack." },
              { icon:"🌙", title:"You miss leads after hours",    stat:"40%+",        label:"Off-hours bookings", desc:"Most enquiries come outside 9-5. With AI agents and automation, we capture and respond to leads 24/7." },
            ].map((p, i) => (
              <article key={i} className="problem-card fade-up" style={{animationDelay:`${i*0.08}s`}}>
                <div className="problem-card-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="problem-card-foot">
                  {p.label} <strong>{p.stat}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="stats-bar-inner">
          <div className="stats-bar-intro">
            <strong>What the industry looks like</strong>
            Three numbers that separate a stressful quarter from a profitable one.
          </div>
          {[
            { n: "2 in 3", s: "", l: "businesses that invest in digital see ROI within 6 months" },
            { n: "~7",     s: "h/week", l: "wasted on manual admin without automation" },
            { n: "40%+",   s: "", l: "of new leads happen outside business hours" },
          ].map((s) => (
            <div key={s.l} className="stat-item">
              <div className="stat-number">{s.n} {s.s && <span className="stat-suffix">{s.s}</span>}</div>
              <div className="stat-label">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className="hiw-section">
        <div className="hiw-card">
          <div className="center">
            <p className="eyebrow">How it works</p>
            <h2 className="section-h">Up and running in <span className="grad-text">under 1 week</span>.</h2>
          </div>
          <div className="hiw-steps">
            {[
              { n:"1", title:"Discovery call",       desc:"Free 30-min call to understand your goals, stack, and budget. No pitch — just listening.",         time:"30 min" },
              { n:"2", title:"Strategy & proposal",  desc:"We send a clear scope, timeline, and pricing within 24 hours. No surprises.",                  time:"24 h"   },
              { n:"3", title:"Build & deliver",      desc:"Agile sprints with weekly check-ins. You see progress live, not just at launch.",                   time:"Your pace" },
            ].map((s) => (
              <div key={s.n} className="hiw-step">
                <div className="hiw-step-num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="hiw-step-time">{s.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <div className="cta-band">
        <div className="cta-band-inner">
          <div>
            <span className="cta-band-eyebrow">Start free</span>
            <h2>Ready to get started?</h2>
            <p>Set up in under 5 minutes. No lock-in, no upfront fees — just results.</p>
            <div className="cta-band-btns">
              <Link href="/contact" className="btn-white">Book a free call <span className="arr">→</span></Link>
              <Link href="/products" style={{display:"inline-flex",alignItems:"center",gap:10,padding:"14px 22px",borderRadius:"99px",border:"1px solid rgba(255,255,255,0.3)",background:"rgba(255,255,255,0.15)",color:"#fff",fontSize:"0.9375rem",fontWeight:600,transition:"background 0.15s"}}>
                See all services <span style={{width:22,height:22,borderRadius:"50%",background:"rgba(255,255,255,0.2)",display:"grid",placeItems:"center",fontSize:"0.75rem"}}>→</span>
              </Link>
            </div>
          </div>
          <ul className="cta-band-checks">
            {[
              "Free for your first project — forever",
              "No credit card — just a conversation",
              "Free strategy session included"
              ].map((c) => (
              <li key={c} className="cta-band-check">
                <span className="cta-band-check-icon">✓</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Click Automate",
          url: "https://www.click-automate.com",
          description:
            "Web development, SEO, AI automation and payment integration services.",
          potentialAction: {
            "@type": "SearchAction",
            target:
              "https://www.click-automate.com/products?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      }}
    />
      <Footer />
    </div>
  );
}