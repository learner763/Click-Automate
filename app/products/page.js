import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import services from "../data/services";

export default function Products() {
  return (
    <div style={{minHeight:"100vh",background:"#ffffff"}}>
      <Navbar />

      {/* Hero — Kalerum features page style */}
      <section style={{
        position:"relative",overflow:"hidden",
        borderBottom:"1px solid rgba(230,234,241,0.7)",
        background:"#ffffff",
      }}>
        <div style={{
          position:"absolute",inset:0,
          background:"linear-gradient(180deg,#ffffff 0%,rgba(37,99,235,0.04) 52%,#F4F7FB 100%)",
          pointerEvents:"none",
        }}/>
        <div style={{
          position:"relative",maxWidth:1024,margin:"0 auto",
          padding:"80px 24px 112px",textAlign:"center",
        }}>
          <p style={{
            fontSize:"0.75rem",fontWeight:700,
            letterSpacing:"0.14em",textTransform:"uppercase",
            color:"#7C3AED",marginBottom:12,
            animation:"fadeUp 0.4s ease both",
          }}>PRODUCTS & SERVICES</p>
          <h1 style={{
            fontFamily:"'Inter Tight',sans-serif",
            fontSize:"clamp(2.2rem,4.5vw,3.25rem)",
            fontWeight:800,letterSpacing:"-0.025em",
            lineHeight:1.08,color:"#0E1729",
            marginBottom:24,
            animation:"fadeUp 0.4s 0.07s ease both",
          }}>
            Everything your business needs,<br/>already built.
          </h1>
          <p style={{
            maxWidth:560,margin:"0 auto",
            fontSize:"1.1rem",color:"#5B6B85",lineHeight:1.6,
            animation:"fadeUp 0.4s 0.13s ease both",
          }}>
            Web development, SEO, payments, ads, and AI workflows — all included from day one. No juggling five agencies.
          </p>
        </div>
      </section>

      {/* Trust badges */}
      <div className="trust-badges" style={{maxWidth:1024,margin:"12px auto 0",padding:"0 24px 56px",display:"flex",flexWrap:"wrap",gap:12,justifyContent:"center",position:"relative",zIndex:10}}>
        {["No lock-in contracts","Free consultation","Results guaranteed","All services included"].map((b,i) => (
          <span key={b} className="trust-badge" style={{animationDelay:`${i*0.07}s`}}>
            <span className="trust-badge-check">
              <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                <path d="M13.25 4.5 6.5 11.25 3.25 8" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            {b}
          </span>
        ))}
      </div>

      {/* Service cards grid — Kalerum features grid style */}
      <section style={{padding:"0 24px 80px"}}>
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",
            gap:16,
          }}>
            {services.map((svc, i) => (
              <Link key={svc.slug} href={`/products/${svc.slug}`} style={{textDecoration:"none"}}>
                <article className="k-card fade-up" style={{
                  animationDelay:`${i*0.08}s`,
                  display:"flex",flexDirection:"column",
                  minHeight:320,
                }}>
                  <div className="k-card-icon">{svc.icon}</div>
                  <h3>{svc.title}</h3>
                  <p>{svc.short}</p>
                  <div className="k-card-sub">
                    {svc.features.slice(0,4).map((f) => (
                      <div key={f.title} className="k-card-sub-item">
                        <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"/>
                        </svg>
                        <span>{f.title}</span>
                      </div>
                    ))}
                  </div>
                  <div className="k-card-learn">
                    Learn more
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Built differently section */}
      <section style={{
        padding:"80px 24px",
        background:"rgba(248,250,252,0.5)",
      }}>
        <div style={{maxWidth:720,margin:"0 auto",textAlign:"center"}}>
          <p style={{fontSize:"0.75rem",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"#7C3AED",marginBottom:12}}>
            BUILT DIFFERENTLY
          </p>
          <h2 style={{
            fontFamily:"'Inter Tight',sans-serif",
            fontSize:"clamp(1.8rem,3vw,2.5rem)",
            fontWeight:800,letterSpacing:"-0.025em",
            color:"#0E1729",marginBottom:20,
          }}>
            Your agency should work for you — not the other way around
          </h2>
          <p style={{fontSize:"1rem",color:"#5B6B85",lineHeight:1.7,marginBottom:16}}>
            Most agencies lock features behind expensive retainers. We work the opposite way: every service is available from day one, and you only pay for what you actually need.
          </p>
          <p style={{fontSize:"1rem",color:"#5B6B85",lineHeight:1.7}}>
            Whether you're a solo founder or a 50-person team, you get the same quality. No feature walls, no surprises, no "contact sales" gates.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="k-cta-section">
        <div className="k-cta-inner">
          <div className="k-cta-pill">
            <span className="k-cta-pill-dot"/>
            <span>Start free</span>
          </div>
          <h2 className="k-cta-title">Ready to get started?</h2>
          <p className="k-cta-sub">No lock-in, no upfront fees. Just results.</p>
          <div className="k-cta-btns">
            <Link href="/contact" className="k-btn-primary">
              Book a free call
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}