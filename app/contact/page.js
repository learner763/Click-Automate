"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {useRef, useState} from "react";
export default function Contact() {
  const dialogref=useRef(null);
  const [dialogmsg,setdialogmsg]=useState('');
  function save_data(e) 
  {
    e.preventDefault();
    fetch('api/save_data',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        name:e.target.name.value,
        email:e.target.email.value,
        whatsapp:e.target.whatsapp.value,
        service:e.target.service.value,
        message:e.target.message.value,
        meeting_time:new Date(e.target.consultation_date.value).toLocaleString(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone

      })
    })
    .then(res=>res.json())
    .then(data=>{
      if (data.success) {
        setdialogmsg(
          <div
            style={{
              padding: "18px",
              borderRadius: "14px",
              background: "#ecfdf5",
              border: "1px solid #16a34a",
              color: "#166534",
              fontWeight: "500",
              lineHeight: "1.6",
              boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "22px",
                fontWeight: "700",
                marginBottom: "10px",
              }}
            >
              ✓ Message Sent
            </div>

            <div>
              Your message has been sent successfully! We will get back to you quickly.
            </div>

            <button
              onClick={() => dialogref.current.close()}
              style={{
                marginTop: "20px",
                padding: "10px 22px",
                border: "none",
                borderRadius: "10px",
                background: "#16a34a",
                color: "white",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Close
            </button>
          </div>
        );

        dialogref.current.showModal();

        e.target.reset();
      } else {
        setdialogmsg(
          <div
            style={{
              padding: "18px",
              borderRadius: "14px",
              background: "#fef2f2",
              border: "1px solid #dc2626",
              color: "#991b1b",
              fontWeight: "500",
              lineHeight: "1.6",
              boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "22px",
                fontWeight: "700",
                marginBottom: "10px",
              }}
            >
              ⚠ Error
            </div>

            <div>
              Something went wrong while sending your message. Please try again later.
            </div>

            <button
              onClick={() => dialogref.current.close()}
              style={{
                marginTop: "20px",
                padding: "10px 22px",
                border: "none",
                borderRadius: "10px",
                background: "#dc2626",
                color: "white",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Close
            </button>
          </div>
        );
        dialogref.current.showModal();
      }
    })

  }
  return (
    <div style={{ minHeight: "100vh", background: "#ffffff" }}>
      <Navbar />
      <dialog style={{margin:'auto',border:'none',borderRadius:'20px'}} ref={dialogref}>{dialogmsg}</dialog>
      {/* Hero — equal padding top and bottom */}
      <section style={{
        position: "relative", overflow: "hidden",
        borderBottom: "1px solid rgba(230,234,241,0.7)",
        background: "#ffffff",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg,#ffffff 0%,rgba(37,99,235,0.04) 52%,#F4F7FB 100%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "relative", maxWidth: 1024, margin: "0 auto",
          padding: "80px 24px", textAlign: "center",
        }}>
          <p style={{
            fontSize: "0.75rem", fontWeight: 700,
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "#7C3AED", marginBottom: 12,
          }}>GET IN TOUCH</p>
          <h1 style={{
            fontFamily: "'Inter Tight',sans-serif",
            fontSize: "clamp(2.2rem,4.5vw,3.25rem)",
            fontWeight: 800, letterSpacing: "-0.025em",
            lineHeight: 1.08, color: "#0E1729", marginBottom: 20,
          }}>
            Book a free consultation
          </h1>
          <p style={{
            maxWidth: 480, margin: "0 auto",
            fontSize: "1.05rem", color: "#5B6B85", lineHeight: 1.6,
          }}>
            Tell us what you're building. We'll get back to you within 24 hours with a clear plan — no commitment, no pressure.
          </p>
        </div>
      </section>

      {/* Body */}
      <section style={{ padding: "64px 24px 80px", background: "#F4F7FB" }}>
        <div style={{
          maxWidth: 1024, margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 320px",
          gap: 24, 
          alignItems: "stretch", // Fixed: Forces form and sidebar to match heights
        }} className="contact-grid">

          {/* Form card */}
          <div style={{
            background: "#ffffff",
            border: "1px solid #E6EAF1",
            borderRadius: 20, padding: 36,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}>
            <form method="POST" onSubmit={save_data} style={{ display: "flex", flexDirection: "column", gap: 0 }}>

              {/* Row 1: Name + Email */}
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr",
                gap: 16, marginBottom: 16,
              }} className="form-row-2">
                <div>
                  <label style={labelStyle}>Your name *</label>
                  <input style={inputStyle} type="text" name="name" placeholder="Jane Smith" required />
                </div>
                <div>
                  <label style={labelStyle}>Email address *</label>
                  <input style={inputStyle} type="email" name="email" placeholder="jane@company.com" required />
                </div>
              </div>

              {/* Row 2: WhatsApp + Service */}
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr",
                gap: 16, marginBottom: 16,
              }} className="form-row-2">
                <div>
                  <label style={labelStyle}>WhatsApp number</label>
                  <div style={{ position: "relative" }}>
                    <span style={{
                      position: "absolute", left: 12, top: "50%",
                      transform: "translateY(-50%)",
                      fontSize: "1rem", pointerEvents: "none",
                      lineHeight: 1,
                    }}>📱</span>
                    <input
                      style={{ ...inputStyle, paddingLeft: 40 }}
                      type="tel" name="whatsapp"
                      placeholder="+92 300 1234567"
                      onChange={(e)=>e.target.value=e.target.value.replace(/[^0-9+]/g, '')}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>What do you need help with? *</label>
                  <select style={{ ...inputStyle, cursor: "pointer" }} name="service" required>
                    <option value="">Select a service...</option>
                    <option>Web Development</option>
                    <option>SEO &amp; Content</option>
                    <option>Apps &amp; Payment Integrations</option>
                    <option>SM Ads Management</option>
                    <option>AI Agents &amp; Workflows</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
              </div>
                  
              {/* Preferred Consultation Date & Time */}
              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>
                  Preferred consultation date & time *
                </label>

                <input
                  style={inputStyle}
                  type="datetime-local"
                  name="consultation_date"
                  required
                />
              </div>
              {/* Message */}
              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>Tell us about your project *</label>
                <textarea
                  style={{ ...inputStyle, minHeight: 120, resize: "none" }} // Fixed: Disabled manual resizing
                  name="message"
                  placeholder="What are you building? What's your timeline? Any budget in mind?"
                  rows={5}
                  required
                />
              </div>

              <button type="submit" style={{
                width: "100%", padding: "14px",
                background: "#0E1729", color: "#fff",
                fontFamily: "'Inter',sans-serif",
                fontSize: "0.9375rem", fontWeight: 600,
                borderRadius: 10, border: "none", cursor: "pointer",
                display: "flex", alignItems: "center",
                justifyContent: "center", gap: 8,
                transition: "background 0.15s, transform 0.15s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "#2563EB"; e.currentTarget.style.transform = "translateY(-1px)" }}
                onMouseLeave={e => { e.currentTarget.style.background = "#0E1729"; e.currentTarget.style.transform = "translateY(0)" }}
              >
                Send message
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
              </button>
            </form>
          </div>

          {/* Sidebar — Height matched via flex box column stretch */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16, height: "100%" }}>

            {/* What happens next */}
            <div style={{
              background: "#ffffff", border: "1px solid #E6EAF1",
              borderRadius: 20, padding: 24, flex: 1
            }}>
              <h3 style={{
                fontFamily: "'Inter Tight',sans-serif",
                fontWeight: 700, fontSize: "0.9375rem",
                color: "#0E1729", marginBottom: 20,
              }}>What happens next?</h3>
              <ol style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16, paddingLeft: 0, margin: 0 }}>
                {[
                  { n: "1", title: "We review your message", desc: "Usually within a few hours on business days." },
                  { n: "2", title: "Discovery call", desc: "30 minutes to understand your goals and challenges." },
                  { n: "3", title: "Proposal within 24hrs", desc: "Clear scope, timeline, and transparent pricing." },
                ].map((s) => (
                  <li key={s.n} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{
                      width: 24, height: 24, borderRadius: "50%",
                      background: "#F4F7FB", border: "1px solid #DDE3EE",
                      display: "grid", placeItems: "center",
                      fontSize: "0.7rem", fontWeight: 700, color: "#5B6B85",
                      flexShrink: 0, marginTop: 2,
                    }}>{s.n}</span>
                    <div>
                      <strong style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "#0E1729", marginBottom: 2 }}>{s.title}</strong>
                      <p style={{ fontSize: "0.775rem", color: "#5B6B85", lineHeight: 1.5, margin: 0 }}>{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Direct contact */}
            <div style={{
              background: "#ffffff", border: "1px solid #E6EAF1",
              borderRadius: 20, padding: 24,
            }}>
              <h3 style={{
                fontFamily: "'Inter Tight',sans-serif",
                fontWeight: 700, fontSize: "0.9375rem",
                color: "#0E1729", marginBottom: 16,
              }}>Prefer direct contact?</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                
                {/* Fixed: Both anchor tags now use an aligned grid layout */}
                <a href="mailto:hello@click-automate.com" style={{
                  display: "grid", gridTemplateColumns: "20px 1fr", gap: 10,
                  alignItems: "center", fontSize: "0.875rem", fontWeight: 500,
                  color: "#2563EB", textDecoration: "none",
                }}>
                  <span style={{ fontSize: "1rem", display: "inline-block", textAlign: "center" }}>✉️</span>
                  <span>clickautomate2@gmail.com</span>
                </a>

                <a href="https://wa.me/35795572311" target="_blank" rel="noreferrer" style={{
                  display: "grid", gridTemplateColumns: "20px 1fr", gap: 10,
                  alignItems: "center", fontSize: "0.875rem", fontWeight: 500,
                  color: "#16a34a", textDecoration: "none",
                }}>
                  <span style={{ fontSize: "1rem", display: "inline-block", textAlign: "center" }}>📱</span>
                  <span>WhatsApp us directly</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media(max-width:860px){
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media(max-width:560px){
          .form-row-2 { grid-template-columns: 1fr !important; }
        }
        input::placeholder, textarea::placeholder, select {
          color: #9aa5b4;
        }
        input:focus, textarea:focus, select:focus {
          border-color: #2563EB !important;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
          outline: none;
        }
      `}</style>
    </div>
  );
}

const labelStyle = {
  display: "block",
  fontSize: "0.8rem",
  fontWeight: 600,
  color: "#5B6B85",
  marginBottom: 6,
};

const inputStyle = {
  width: "100%",
  padding: "10px 14px",
  background: "#F8FAFC",
  border: "1px solid #E6EAF1",
  borderRadius: 10,
  fontSize: "0.875rem",
  fontFamily: "'Inter',sans-serif",
  color: "#0E1729",
  outline: "none",
  transition: "border-color 0.15s, box-shadow 0.15s",
  boxSizing: "border-box",
  display: "block",
};