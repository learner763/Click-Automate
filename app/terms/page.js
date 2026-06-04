"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", label: "Introduction" },
    { id: "services", label: "Our Services" },
    { id: "data-use", label: "Data Submission" },
    { id: "intellectual-property", label: "Intellectual Property" },
    { id: "limitation", label: "Limitation of Liability" },
  ];

  // Dynamic Scrollspy Logic using IntersectionObserver
  useEffect(() => {
    const observers = [];
    
    const callback = (entries) => {
      entries.forEach((entry) => {
        // If the section takes up the top portion of the screen, mark it active
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Adjusts the "sweet spot" trigger area on screen
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
          
          {/* Sidebar - Matches image_2297d8.png layout */}
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
              Terms of Service
            </h1>
            <p style={{ color: "#94A3B8", fontSize: "0.875rem", marginBottom: 40 }}>
              Last updated: May 30, 2026
            </p>

            <section id="introduction" style={{ marginBottom: 60, paddingTop: 20 }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0F172A", marginBottom: 16 }}>Introduction</h2>
              <p>Welcome to ClickAutomate. These Terms of Service govern your use of our website and digital services. By accessing or using our platform, you agree to be bound by these terms. If you do not agree, please do not use our services.</p>
            </section>

            <section id="services" style={{ marginBottom: 60, paddingTop: 20 }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0F172A", marginBottom: 16 }}>Our Services</h2>
              <p>ClickAutomate is a comprehensive digital agency serving service businesses. We offer development, SEO optimizations, automated payment system integrations, ad campaign generation, and AI configurations.</p>
            </section>

            <section id="data-use" style={{ marginBottom: 60, paddingTop: 20 }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0F172A", marginBottom: 16 }}>Data Submission</h2>
              <p>When you contact us through our website, you provide details such as your name, email, and project goals. You agree to submit accurate, truthful, and lawful inquiries. We secure and retain this information to properly respond to your service request.</p>
            </section>

            <section id="intellectual-property" style={{ marginBottom: 60, paddingTop: 20 }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0F172A", marginBottom: 16 }}>Intellectual Property</h2>
              <p>All brand graphics, custom systems, text content, and UI designs featured on this platform are the property of ClickAutomate and protected under explicit intellectual property regulations.</p>
            </section>

            <section id="limitation" style={{ marginBottom: 120, paddingTop: 20 }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0F172A", marginBottom: 16 }}>Limitation of Liability</h2>
              <p>ClickAutomate provides its informational content on an "as-is" basis. We are not liable for external technical issues or project interruptions resulting from network system dropouts outside of our code control.</p>
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