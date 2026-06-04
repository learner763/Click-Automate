import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const cases = [
  { client:"FreshCart",    industry:"E-commerce",    icon:"🛒", result:"340% organic traffic increase",  desc:"Built a full Next.js storefront with SEO strategy. Within 6 months, organic sessions tripled and conversion rate improved from 1.2% to 3.8%.", tags:["Web Dev","SEO"] },
  { client:"LegalFlow",   industry:"LegalTech SaaS", icon:"⚖️", result:"$1.2M ARR in first year",         desc:"Designed and built their entire SaaS platform with subscription billing, onboarding flows, and an AI-powered document assistant.",              tags:["Web Dev","AI Agents","Payments"] },
  { client:"NomadGear",   industry:"D2C Brand",      icon:"🎒", result:"5.1× ROAS on Meta Ads",           desc:"Rebuilt a bleeding ad account from scratch. New creative strategy cut CPA by 62% in 90 days.",                                                 tags:["SM Ads"] },
  { client:"MindfulMD",   industry:"Health",         icon:"🧘", result:"18,000 new email subscribers",    desc:"Content strategy placed them page 1 for 40+ competitive keywords. Newsletter grew from 800 to 18k in 8 months.",                             tags:["SEO & Content"] },
  { client:"StackOps",    industry:"DevTools",       icon:"⚙️", result:"80% reduction in manual ops",     desc:"Built AI agents automating customer support triage, invoice processing, and reporting — saving 30+ hours/week.",                              tags:["AI Agents"] },
  { client:"PulseStudio", industry:"Creative Agency",icon:"🎨", result:"220% growth in inbound leads",    desc:"Rebuilt their website, added a booking system, and ran targeted LinkedIn + Meta campaigns to fill their pipeline.",                            tags:["Web Dev","SM Ads"] },
];

const awards = [
  { icon:"🏆", title:"Top Digital Agency 2025",  org:"Clutch.co"       },
  { icon:"⭐", title:"5-Star Rated",             org:"Trustpilot"      },
  { icon:"🚀", title:"100+ Projects Milestone",  org:"Internal — 2024" },
  { icon:"🌍", title:"Clients in 18 Countries",  org:"Global Reach"    },
];

export default function Accomplishments() {
  return (
    <div style={{minHeight:"100vh",background:"#ffffff"}}>
      <Navbar />

      {/* Page Hero */}
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
          }}>PROOF OF WORK</p>
          <h1 style={{
            fontFamily:"'Inter Tight',sans-serif",
            fontSize:"clamp(2.2rem,4.5vw,3.25rem)",
            fontWeight:800,letterSpacing:"-0.025em",
            lineHeight:1.08,color:"#0E1729",marginBottom:24,
            animation:"fadeUp 0.4s 0.07s ease both",
          }}>Our Accomplishments</h1>
          <p style={{
            maxWidth:520,margin:"0 auto",
            fontSize:"1.1rem",color:"#5B6B85",lineHeight:1.6,
            animation:"fadeUp 0.4s 0.13s ease both",
          }}>
            Real results for real businesses. Here's a look at what we've built, grown, and achieved alongside our clients.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <div style={{
        borderTop:"1px solid #E6EAF1",
        borderBottom:"1px solid #E6EAF1",
        background:"#ffffff",
      }}>
        <div style={{
          maxWidth:1280,margin:"0 auto",
          padding:"56px 24px",
          display:"grid",
          gridTemplateColumns:"1.2fr repeat(3,1fr)",
          gap:32,alignItems:"center",
        }} className="stats-bar-inner">
          <div style={{fontSize:"0.875rem",color:"#5B6B85",lineHeight:1.55}}>
            <strong style={{display:"block",fontSize:"0.9375rem",color:"#0E1729",marginBottom:4}}>By the numbers</strong>
            Results that speak for themselves.
          </div>
          {[
            {n:"23", l:"Projects Delivered"},
            {n:"$300K", l:"Client Revenue Generated"},
            {n:"98%",  l:"Client Retention Rate"},
          ].map((s) => (
            <div key={s.l} style={{paddingLeft:24,borderLeft:"1px solid #E6EAF1"}}>
              <div style={{
                fontFamily:"'Inter Tight',sans-serif",
                fontSize:"clamp(1.8rem,3vw,2.5rem)",
                fontWeight:800,
                background:"linear-gradient(95deg,#2563EB 10%,#7C3AED 50%,#EC4983 90%)",
                WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",
                letterSpacing:"-0.02em",
              }}>{s.n}</div>
              <div style={{fontSize:"0.78rem",color:"#5B6B85",marginTop:6}}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Studies */}
      <section style={{padding:"80px 24px",background:"#F4F7FB"}}>
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <p style={{fontSize:"0.75rem",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"#7C3AED",marginBottom:12}}>
              CASE STUDIES
            </p>
            <h2 style={{
              fontFamily:"'Inter Tight',sans-serif",
              fontSize:"clamp(1.8rem,3vw,2.5rem)",
              fontWeight:800,letterSpacing:"-0.025em",color:"#0E1729",
            }}>
              Client success stories
            </h2>
          </div>
          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",
            gap:16,
          }}>
            {cases.map((c,i) => (
              <article key={c.client} className="k-card fade-up" style={{animationDelay:`${i*0.08}s`,display:"flex",flexDirection:"column",gap:12}}>
                <div style={{display:"flex",alignItems:"center",gap:14}}>
                  <div style={{
                    width:44,height:44,background:"#F4F7FB",
                    borderRadius:12,display:"grid",placeItems:"center",
                    fontSize:"1.4rem",flexShrink:0,
                  }}>{c.icon}</div>
                  <div>
                    <div style={{fontFamily:"'Inter Tight',sans-serif",fontWeight:700,fontSize:"1rem",color:"#0E1729"}}>{c.client}</div>
                    <div style={{fontSize:"0.75rem",color:"#8896A8"}}>{c.industry}</div>
                  </div>
                </div>
                <div style={{
                  fontFamily:"'Inter Tight',sans-serif",
                  fontWeight:700,fontSize:"1rem",color:"#2563EB",
                }}>{c.result}</div>
                <p style={{fontSize:"0.85rem",color:"#5B6B85",lineHeight:1.65,flex:1,margin:0}}>{c.desc}</p>
                <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                  {c.tags.map((t) => (
                    <span key={t} style={{
                      padding:"4px 10px",background:"#F4F7FB",
                      border:"1px solid #E6EAF1",borderRadius:99,
                      fontSize:"0.72rem",fontWeight:500,color:"#5B6B85",
                    }}>{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section style={{padding:"80px 24px",background:"#ffffff"}}>
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:64}}>
            <p style={{fontSize:"0.75rem",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"#7C3AED",marginBottom:12}}>
              BEFORE VS AFTER
            </p>
            <h2 style={{
              fontFamily:"'Inter Tight',sans-serif",
              fontSize:"clamp(1.8rem,3vw,2.5rem)",
              fontWeight:800,letterSpacing:"-0.025em",color:"#0E1729",marginBottom:16,
            }}>How your typical week changes.</h2>
            <p style={{fontSize:"1rem",color:"#5B6B85",lineHeight:1.7,maxWidth:560,margin:"0 auto"}}>
              Same team. Same hours. The difference is where your energy goes.
            </p>
          </div>
          <div style={{
            display:"grid",gridTemplateColumns:"1fr 1fr",
            gap:20,maxWidth:960,margin:"0 auto",
          }} className="ba-grid">
            {/* Before */}
            <div style={{
              borderRadius:22,border:"1px solid #E6EAF1",
              background:"#ffffff",padding:32,
            }}>
              <span style={{
                display:"inline-flex",padding:"6px 14px",borderRadius:99,
                fontSize:"0.7rem",fontWeight:800,letterSpacing:"0.12em",
                textTransform:"uppercase",
                border:"1px solid #E6EAF1",background:"#F4F7FB",color:"#5B6B85",
              }}>Before</span>
              <h3 style={{
                fontFamily:"'Inter Tight',sans-serif",fontSize:"1.5rem",
                fontWeight:800,margin:"16px 0 20px",color:"#0E1729",
              }}>Without Click-Automate</h3>
              <ul style={{display:"flex",flexDirection:"column",gap:14,marginBottom:24,paddingLeft:0,listStyle:"none"}}>
                {["~7 h/week on manual tasks","Missed leads after hours","5 tools that don't talk to each other","No clear ROI on marketing spend","Ad-hoc fixes, no strategy"].map((t) => (
                  <li key={t} style={{fontSize:"0.9rem",color:"#0E1729",lineHeight:1.5}}>{t}</li>
                ))}
              </ul>
              <p style={{
                paddingTop:20,borderTop:"1px solid #E6EAF1",
                fontSize:"0.84rem",fontStyle:"italic",color:"#5B6B85",margin:0,
              }}>Result: stress, scattered operations, lost revenue.</p>
            </div>
            {/* After */}
            <div style={{
              borderRadius:22,
              background:"linear-gradient(135deg,#1D4ED8 0%,#6D2E96 50%,#EC4983 100%)",
              padding:32,color:"#fff",
            }}>
              <span style={{
                display:"inline-flex",padding:"6px 14px",borderRadius:99,
                fontSize:"0.7rem",fontWeight:800,letterSpacing:"0.12em",
                textTransform:"uppercase",
                border:"1px solid rgba(255,255,255,0.3)",
                background:"rgba(255,255,255,0.2)",color:"#fff",
              }}>After</span>
              <h3 style={{
                fontFamily:"'Inter Tight',sans-serif",fontSize:"1.5rem",
                fontWeight:800,margin:"16px 0 20px",color:"#fff",
              }}>With Click-Automate</h3>
              <ul style={{display:"flex",flexDirection:"column",gap:14,marginBottom:24,paddingLeft:0,listStyle:"none"}}>
                {["~1 h/week on admin — runs on autopilot","AI captures leads 24/7","One unified growth stack","Clear attribution on every campaign","Proactive strategy, not reactive fixes"].map((t) => (
                  <li key={t} style={{fontSize:"0.9rem",color:"rgba(255,255,255,0.9)",lineHeight:1.5}}>{t}</li>
                ))}
              </ul>
              <p style={{
                paddingTop:20,borderTop:"1px solid rgba(255,255,255,0.2)",
                fontSize:"0.84rem",fontStyle:"italic",color:"rgba(255,255,255,0.75)",margin:0,
              }}>Result: time for clients, steadier revenue, focus on what you love.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="k-cta-section">
        <div className="k-cta-inner">
          <div className="k-cta-pill">
            <span className="k-cta-pill-dot"/>
            <span>Let's talk</span>
          </div>
          <h2 className="k-cta-title">Want results like these?</h2>
          <p className="k-cta-sub">Let's build your success story together — book a free consultation.</p>
          <div className="k-cta-btns">
            <Link href="/contact" className="k-btn-primary">
              Book a consultation
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media(max-width:640px){
          .ba-grid { grid-template-columns: 1fr !important; }
          .stats-bar-inner { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}