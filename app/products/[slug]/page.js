import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import services from "../../data/services";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  if (!s) return {};
  return { title: `${s.title} — ClickAutomate`, description: s.description };
}

export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const others = services.filter((s) => s.slug !== slug);

  return (
    <div style={{minHeight:"100vh",background:"#ffffff"}}>
      <Navbar />

      {/* Hero — Kalerum feature page hero */}
      <section className="kd-hero">
        <div className="kd-hero-bg"/>
        <div style={{
          position:"relative",maxWidth:1280,margin:"0 auto",
          padding:"96px 24px",
          display:"grid",
          gridTemplateColumns:"1fr 1fr",
          alignItems:"center",gap:48,
        }} className="kd-hero-grid">
          <div style={{animation:"fadeUp 0.5s ease both"}}>
            <p className="kd-eyebrow">{service.title.toUpperCase()}</p>
            <h1 className="kd-hero-title">{service.heroLine || service.title}</h1>
            <p className="kd-hero-sub">{service.description}</p>
            <Link href="/contact" className="k-btn-primary">
              Start free
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>
            </Link>
          </div>

          {/* Mockup card */}
          <div style={{
            animation:"fadeUp 0.5s 0.2s ease both",
            position:"relative",
          }} className="kd-mockup-col">
            <div style={{
              borderRadius:24,border:"1px solid #DDE3EE",
              background:"#fff",
              boxShadow:"0 30px 60px -25px rgba(15,23,42,0.2)",
              overflow:"hidden",
            }}>
              <div style={{
                background:`linear-gradient(135deg, ${service.color}, #7C3AED)`,
                padding:"32px 28px",
                display:"flex",alignItems:"center",gap:16,
              }}>
                <div style={{
                  width:52,height:52,borderRadius:16,
                  background:"rgba(255,255,255,0.2)",
                  display:"grid",placeItems:"center",
                  fontSize:"1.6rem",
                }}>{service.icon}</div>
                <div>
                  <div style={{fontWeight:800,fontSize:"1.1rem",color:"#fff",fontFamily:"'Inter Tight',sans-serif"}}>
                    {service.title}
                  </div>
                  <div style={{fontSize:"0.8rem",color:"rgba(255,255,255,0.7)",marginTop:2}}>
                    {service.tag}
                  </div>
                </div>
              </div>
              <div style={{padding:20,display:"flex",flexDirection:"column",gap:10}}>
                {service.features.map((f) => (
                  <div key={f.title} style={{
                    display:"flex",alignItems:"flex-start",gap:12,
                    padding:"12px 14px",
                    border:"1px solid #E6EAF1",borderRadius:12,
                    background:"#fff",
                  }}>
                    <div style={{
                      width:32,height:32,borderRadius:8,
                      background:"linear-gradient(135deg,rgba(37,99,235,0.1),rgba(124,58,237,0.1))",
                      border:"1px solid rgba(37,99,235,0.1)",
                      display:"grid",placeItems:"center",
                      fontSize:"0.875rem",flexShrink:0,
                    }}>{f.icon}</div>
                    <div>
                      <div style={{fontSize:"0.8125rem",fontWeight:600,color:"#0E1729",marginBottom:2}}>{f.title}</div>
                      <div style={{fontSize:"0.75rem",color:"#5B6B85",lineHeight:1.5}}>{f.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <div style={{
        maxWidth:1280,margin:"0 auto",
        padding:"0 24px 56px",
        marginTop:"12px",
        position:"relative",zIndex:10,
        display:"flex",flexWrap:"wrap",gap:12,justifyContent:"center",
      }}>
        {service.deliverables.map((d, i) => (
          <span key={d} className="trust-badge" style={{animationDelay:`${i*0.07}s`}}>
            <span className="trust-badge-check">
              <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                <path d="M13.25 4.5 6.5 11.25 3.25 8" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            {d}
          </span>
        ))}
      </div>

      {/* What you can do — feature cards */}
      <section style={{padding:"80px 24px"}}>
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <p style={{fontSize:"0.75rem",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"#7C3AED",marginBottom:12}}>
              WHAT YOU CAN DO
            </p>
            <h2 style={{
              fontFamily:"'Inter Tight',sans-serif",
              fontSize:"clamp(1.8rem,3vw,2.5rem)",
              fontWeight:800,letterSpacing:"-0.025em",
              color:"#0E1729",
            }}>
              Everything you need for {service.title.toLowerCase()}
            </h2>
          </div>
          <div className="kd-features-grid">
            {service.features.map((f, i) => (
              <div key={f.title} className="k-card fade-up" style={{animationDelay:`${i*0.08}s`}}>
                <div className="k-card-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="kd-hiw-section">
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <p style={{fontSize:"0.75rem",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"#7C3AED",marginBottom:12}}>
              HOW IT WORKS
            </p>
            <h2 style={{
              fontFamily:"'Inter Tight',sans-serif",
              fontSize:"clamp(1.8rem,3vw,2.5rem)",
              fontWeight:800,letterSpacing:"-0.025em",
              color:"#0E1729",
            }}>
              Up and running in under 1 week
            </h2>
          </div>
          <div className="hiw-timeline">
            {[
              {n:"1", title:"Discovery call",      desc:"Free 30-min call to understand your goals, stack, and budget. No pitch — just listening.",   time:"30 min"},
              {n:"2", title:"Strategy & proposal", desc:"We send a clear scope, timeline, and pricing within 24 hours. No surprises.",                  time:"24 h"},
              {n:"3", title:"Build & deliver",     desc:"Agile sprints with weekly check-ins. You see progress live — not just at launch.",             time:"Your pace"},
            ].map((s) => (
              <div key={s.n} className="hiw-tl-item">
                <div className="hiw-tl-num">{s.n}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="hiw-tl-time">{s.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="kd-related-section">
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:40}}>
            <h2 style={{
              fontFamily:"'Inter Tight',sans-serif",
              fontSize:"clamp(1.5rem,2.5vw,2rem)",
              fontWeight:800,letterSpacing:"-0.02em",
              color:"#0E1729",
            }}>Related services</h2>
          </div>
          <div className="kd-related-grid">
            {others.map((svc) => (
              <Link key={svc.slug} href={`/products/${svc.slug}`} className="kd-related-card">
                <div className="kd-related-icon">{svc.icon}</div>
                <span>{svc.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="k-cta-section">
        <div className="k-cta-inner">
          <div className="k-cta-pill">
            <span className="k-cta-pill-dot"/>
            <span>Start free</span>
          </div>
          <h2 className="k-cta-title">Ready to get started?</h2>
          <p className="k-cta-sub">No lock-in, no upfront fees — just results.</p>
          <div className="k-cta-btns">
            <Link href="/contact" className="k-btn-primary">
              Book a free call
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media(max-width:768px){
          .kd-hero-grid { grid-template-columns: 1fr !important; }
          .kd-mockup-col { display: none !important; }
        }
      `}</style>
    </div>
  );
}