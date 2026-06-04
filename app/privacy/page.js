"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("data-collect");

  const sections = [
    { id: "data-collect", label: "Information We Collect" },
    { id: "data-use", label: "How We Use Your Data" },
    { id: "data-storage", label: "Data Storage & Security" },
    { id: "cookies", label: "Cookies Disclaimer" },
    { id: "rights", label: "Your Rights" },
  ];

  // Dynamic Scrollspy Logic using IntersectionObserver
  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(callback, observerOptions);

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Account for the sticky navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ background: "#F8FAFC", minHeight: "100vh", padding: "60px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "280px 1fr", gap: 64 }} className="legal-layout">
          
          {/* Sidebar */}
          <aside className="legal-sidebar" style={{ position: "sticky", top: 100, height: "fit-content" }}>
            <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 16 }}>
              Table of Contents
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  style={{
                    textAlign: "left",
                    padding: "10px 16px",
                    borderRadius: 8,
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    border: "none",
                    cursor: "pointer",
                    background: activeSection === sec.id ? "#EFF6FF" : "transparent",
                    color: activeSection === sec.id ? "#2563EB" : "#64748B",
                    transition: "all 0.2s ease",
                  }}
                >
                  {sec.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content Area */}
          <main style={{ color: "#334155", lineHeight: "1.7" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "#0F172A", marginBottom: 8, letterSpacing: "-0.03em" }}>
              Privacy Policy
            </h1>
            <p style={{ color: "#94A3B8", fontSize: "0.875rem", marginBottom: 40 }}>
              Last updated: May 30, 2026
            </p>

            <section id="data-collect" style={{ marginBottom: 60, paddingTop: 20 }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0F172A", marginBottom: 16 }}>Information We Collect</h2>
              <p>We only collect data that you willingly submit via our website contact forms. This includes details like your full name, email address, corporate identity, and specific notes concerning your project objectives.</p>
            </section>

            <section id="data-use" style={{ marginBottom: 60, paddingTop: 20 }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0F172A", marginBottom: 16 }}>How We Use Your Data</h2>
              <p>Your data is processed explicitly to answer your inquiries, handle consultations, structure specialized service evaluations, and update you regarding custom implementation items built for your business profile.</p>
            </section>

            <section id="data-storage" style={{ marginBottom: 60, paddingTop: 20 }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0F172A", marginBottom: 16 }}>Data Storage & Security</h2>
              <p>When you press submit, information is routed into an internal, securely partitioned database. We run system firewalls and database access layers to ensure data is protected from external security breaches.</p>
            </section>

            <section id="cookies" style={{ marginBottom: 60, paddingTop: 20 }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0F172A", marginBottom: 16 }}>Cookies Disclaimer</h2>
              <p>ClickAutomate does not engage in user cookie logging, behavioral tracking pixels, or background device identification metrics. Your browsing footprint remains anonymous on our core pages.</p>
            </section>

            <section id="rights" style={{ marginBottom: 120, paddingTop: 20 }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0F172A", marginBottom: 16 }}>Your Rights</h2>
              <p>You retain full authority over your personal information. You can drop us a line anytime at <strong>clickautomate2@gmail.com</strong> to query what submission entries we hold or request their immediate, permanent erasure from our records.</p>
            </section>
          </main>

        </div>
      </div>
      <Footer />

      <style>{`
        @media (max-width: 800px) {
          .legal-layout { grid-template-columns: 1fr !important; gap: 32px !important; }
          .legal-sidebar { display: none !important; }
        }
      `}</style>
    </>
  );
}