"use client";

import { Footerlinkdata, Sociallinkdata } from "@/lib/data/pageData";
import { getImagePath } from "@/lib/utils/imagePath";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;900&display=swap');
      `}</style>

      <footer
        style={{
          background: "#0d1b35",
          fontFamily: "'Outfit', sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Bg blobs */}
        <div
          style={{
            position: "absolute", top: 0, right: 0,
            width: "400px", height: "400px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(56,189,248,0.08), transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute", bottom: 0, left: 0,
            width: "300px", height: "300px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(29,78,216,0.10), transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Top border accent */}
        <div style={{ height: "2px", background: "linear-gradient(90deg, #1d4ed8, #38bdf8, #1d4ed8)" }} />

        {/* Main content */}
        <div className="container relative z-10 py-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">

            {/* Brand col */}
            <div className="lg:col-span-5 sm:col-span-2">
              <img
                className="block h-12 mb-5"
                src={getImagePath("/images/logo/logo.svg")}
                alt="Kerodev Logo"
              />
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "#94a3b8",
                  lineHeight: 1.85,
                  maxWidth: "360px",
                  marginBottom: "24px",
                }}
              >
                At Kerodev, we craft intelligent, future-ready digital solutions
                blending innovation with precision — high-performance web, mobile,
                and AI systems that grow with your business.
              </p>

              {/* Social icons */}
              <div style={{ display: "flex", gap: "10px" }}>
                {Sociallinkdata.map((item, i) => (
                  <Link
                    key={i}
                    href="#!"
                    onClick={(e) => e.preventDefault()}
                    style={{
                      width: "38px", height: "38px",
                      borderRadius: "50%",
                      border: "1.5px solid rgba(56,189,248,0.30)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.3s",
                      background: "rgba(56,189,248,0.05)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "#38bdf8";
                      (e.currentTarget as HTMLElement).style.background = "rgba(56,189,248,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(56,189,248,0.30)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(56,189,248,0.05)";
                    }}
                  >
                    <img src={item.imgsrc} alt={item.imgsrc} style={{ width: "16px", height: "16px" }} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Useful Links */}
            <div className="lg:col-span-3">
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  color: "#f1f5f9",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                Useful Links
              </p>
              <div
                style={{
                  width: "32px", height: "2px",
                  background: "linear-gradient(90deg,#1d4ed8,#38bdf8)",
                  borderRadius: "99px",
                  marginBottom: "20px",
                }}
              />
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {Footerlinkdata.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 400,
                        fontSize: "14px",
                        color: "#94a3b8",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        transition: "color 0.3s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#38bdf8";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                      }}
                    >
                      <span
                        style={{
                          width: "5px", height: "5px", borderRadius: "50%",
                          background: "linear-gradient(135deg,#1d4ed8,#38bdf8)",
                          flexShrink: 0,
                          display: "inline-block",
                        }}
                      />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div className="lg:col-span-4">
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  color: "#f1f5f9",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                Contact Us
              </p>
              <div
                style={{
                  width: "32px", height: "2px",
                  background: "linear-gradient(90deg,#1d4ed8,#38bdf8)",
                  borderRadius: "99px",
                  marginBottom: "20px",
                }}
              />

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {/* Phone */}
                <Link
                  href="tel:(406) 555-012"
                  style={{
                    display: "flex", alignItems: "center", gap: "12px",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "14px", color: "#94a3b8",
                    textDecoration: "none",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#38bdf8"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#94a3b8"; }}
                >
                  <span
                    style={{
                      width: "34px", height: "34px", borderRadius: "50%", flexShrink: 0,
                      background: "rgba(56,189,248,0.10)",
                      border: "1.5px solid rgba(56,189,248,0.25)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >
                    <Icon icon="mdi:phone" style={{ fontSize: "15px", color: "#38bdf8" }} />
                  </span>
                  (406) 555-012
                </Link>

                {/* Email */}
                <Link
                  href="mailto:tim.jennings@example.com"
                  style={{
                    display: "flex", alignItems: "center", gap: "12px",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "14px", color: "#94a3b8",
                    textDecoration: "none",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#38bdf8"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#94a3b8"; }}
                >
                  <span
                    style={{
                      width: "34px", height: "34px", borderRadius: "50%", flexShrink: 0,
                      background: "rgba(56,189,248,0.10)",
                      border: "1.5px solid rgba(56,189,248,0.25)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >
                    <Icon icon="mdi:email-outline" style={{ fontSize: "15px", color: "#38bdf8" }} />
                  </span>
                  tim.jennings@example.com
                </Link>

                {/* Address */}
                <div
                  style={{
                    display: "flex", alignItems: "center", gap: "12px",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "14px", color: "#94a3b8",
                  }}
                >
                  <span
                    style={{
                      width: "34px", height: "34px", borderRadius: "50%", flexShrink: 0,
                      background: "rgba(56,189,248,0.10)",
                      border: "1.5px solid rgba(56,189,248,0.25)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >
                    <Icon icon="mdi:map-marker-outline" style={{ fontSize: "15px", color: "#38bdf8" }} />
                  </span>
                  Elgin St. Celina, Delaware 10299
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(56,189,248,0.15)",
            padding: "20px 0",
          }}
        >
          <div className="container">
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 400,
                fontSize: "13px",
                color: "#64748b",
                textAlign: "center",
                margin: 0,
              }}
            >
              © 2025 All Rights Reserved by{" "}
              <Link
                href="https://kerodev.com"
                target="_blank"
                style={{
                  color: "#38bdf8",
                  textDecoration: "none",
                  fontWeight: 600,
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#7dd3fc"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#38bdf8"; }}
              >
                Kerodev
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;