"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import services from "../data/services";

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products", hasDropdown: true },
    { href: "/accomplishments", label: "Accomplishments" },
    { href: "/contact", label: "Contact Us" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  /* CLOSE DROPDOWN WHEN CLICKING ANYWHERE OUTSIDE */
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setProductsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          borderBottom: "1px solid #E6EAF1",
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 24px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: "#2563EB",
                display: "grid",
                placeItems: "center",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.875rem",
                fontFamily: "'Inter Tight',sans-serif",
              }}
            >
              CA
            </div>

            <span
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "#0E1729",
                letterSpacing: "-0.02em",
                fontFamily: "'Inter Tight',sans-serif",
              }}
            >
              ClickAutomate
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="desktop-nav"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                borderRadius: 99,
                background: "#F8FAFC",
                border: "1px solid #E6EAF1",
                padding: "4px 6px",
              }}
            >
              {links.map((l) =>
                l.hasDropdown ? (
                  <div
                    key={l.href}
                    ref={dropdownRef}
                    style={{
                      position: "relative",
                    }}
                  >
                    {/* Products Button */}
                    <button
                      onClick={() =>
                        setProductsOpen((prev) => !prev)
                      }
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        padding: "6px 14px",
                        borderRadius: 99,
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        color: isActive(l.href)
                          ? "#fff"
                          : "#5B6B85",
                        background: isActive(l.href)
                          ? "#0E1729"
                          : "transparent",
                        border: "none",
                        cursor: "pointer",
                        transition:
                          "background 0.15s, color 0.15s",
                      }}
                    >
                      {l.label}

                      {/* Rotating Arrow */}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        style={{
                          transform: productsOpen
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                          transition:
                            "transform 0.2s ease",
                        }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {/* Dropdown */}
                    {productsOpen && (
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          top: "100%",
                          marginTop: 8,
                          width: 240,
                          borderRadius: 12,
                          border:
                            "1px solid #E6EAF1",
                          background: "#fff",
                          boxShadow:
                            "0 20px 40px rgba(15,23,42,0.12)",
                          padding: 8,
                          zIndex: 100,
                        }}
                      >
                        {services.map((svc) => (
                          <Link
                            key={svc.slug}
                            href={`/products/${svc.slug}`}
                            onClick={() =>
                              setProductsOpen(false)
                            }
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 10,
                              padding: "10px 12px",
                              borderRadius: 8,
                              textDecoration: "none",
                              transition:
                                "background 0.15s",
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.background =
                                "#EFF6FF")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.background =
                                "transparent")
                            }
                          >
                            <div
                              style={{
                                width: 28,
                                height: 28,
                                borderRadius: 8,
                                background:
                                  "rgba(37,99,235,0.08)",
                                display: "grid",
                                placeItems: "center",
                                fontSize: "0.9rem",
                                flexShrink: 0,
                              }}
                            >
                              {svc.icon}
                            </div>

                            <span
                              style={{
                                fontSize:
                                  "0.875rem",
                                fontWeight: 500,
                                color: "#0E1729",
                              }}
                            >
                              {svc.title}
                            </span>
                          </Link>
                        ))}

                        {/* View all */}
                        <div
                          style={{
                            borderTop:
                              "1px solid #E6EAF1",
                            marginTop: 4,
                            paddingTop: 4,
                          }}
                        >
                          <Link
                            href="/products"
                            onClick={() =>
                              setProductsOpen(false)
                            }
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                              padding: "10px 12px",
                              borderRadius: 8,
                              fontSize: "0.875rem",
                              fontWeight: 500,
                              color: "#2563EB",
                              textDecoration:
                                "none",
                              transition:
                                "background 0.15s",
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.background =
                                "#EFF6FF")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.background =
                                "transparent")
                            }
                          >
                            View all products

                            <svg
                              width="12"
                              height="12"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={l.href}
                    href={l.href}
                    style={{
                      padding: "6px 14px",
                      borderRadius: 99,
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: isActive(l.href)
                        ? "#fff"
                        : "#5B6B85",
                      background: isActive(l.href)
                        ? "#0E1729"
                        : "transparent",
                      textDecoration: "none",
                      transition:
                        "background 0.15s, color 0.15s",
                    }}
                  >
                    {l.label}
                  </Link>
                )
              )}
            </div>
          </nav>

          {/* Right Side */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            {/* CTA */}
            <Link
              href="/contact"
              className="desktop-nav"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 20px",
                background: "#2563EB",
                color: "#fff",
                fontSize: "0.875rem",
                fontWeight: 600,
                borderRadius: 8,
                textDecoration: "none",
                transition:
                  "background 0.15s, transform 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "#1D4ED8";
                e.currentTarget.style.transform =
                  "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "#2563EB";
                e.currentTarget.style.transform =
                  "translateY(0)";
              }}
            >
              Book a call

              <svg
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="mobile-menu-btn"
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }
              style={{
                padding: 8,
                borderRadius: 8,
                border: "none",
                background: "none",
                cursor: "pointer",
                color: "#5B6B85",
              }}
              aria-label="Open menu"
            >
              {mobileOpen ? (
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            style={{
              borderTop:
                "1px solid rgba(230,234,241,0.5)",
              background:
                "rgba(255,255,255,0.97)",
              backdropFilter: "blur(20px)",
              padding: "20px 24px",
            }}
          >
            {links.map((l) => (
              <div key={l.href}>
                <Link
                  href={l.href}
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  style={{
                    display: "block",
                    padding: "10px 16px",
                    borderRadius: 8,
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    textDecoration: "none",
                    marginBottom: 4,
                    color: isActive(l.href)
                      ? "#2563EB"
                      : "#5B6B85",
                    background: isActive(l.href)
                      ? "#EFF6FF"
                      : "transparent",
                  }}
                >
                  {l.label}
                </Link>

                {l.hasDropdown && (
                  <div
                    style={{
                      paddingLeft: 16,
                      marginBottom: 8,
                    }}
                  >
                    {services.map((svc) => (
                      <Link
                        key={svc.slug}
                        href={`/products/${svc.slug}`}
                        onClick={() =>
                          setMobileOpen(false)
                        }
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "8px 12px",
                          borderRadius: 8,
                          fontSize: "0.8125rem",
                          fontWeight: 500,
                          color: "#5B6B85",
                          textDecoration: "none",
                        }}
                      >
                        <span>{svc.icon}</span>
                        {svc.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div
              style={{
                borderTop:
                  "1px solid rgba(230,234,241,0.5)",
                marginTop: 12,
                paddingTop: 16,
              }}
            >
              <Link
                href="/contact"
                onClick={() =>
                  setMobileOpen(false)
                }
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "12px",
                  borderRadius: 8,
                  background: "#2563EB",
                  color: "#fff",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Book a call →
              </Link>
            </div>
          </div>
        )}
      </header>

      <style>{`
        .desktop-nav {
          display: flex !important;
        }

        .mobile-menu-btn {
          display: none !important;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }

          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}