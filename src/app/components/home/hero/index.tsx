"use client";

import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState, useEffect, Fragment } from "react";

/* ─── Constants ─────────────────────────────────────────────────────── */
const WORDS = ["Digital Solutions.", "Smart Systems.", "AI Products."];

const STATS = [
  { icon: "mdi:cube-outline",             v: "10+", l: "PROJECTS DELIVERED"  },
  { icon: "mdi:star-four-points-outline", v: "98%", l: "CLIENT SATISFACTION" },
  { icon: "mdi:rocket-launch-outline",    v: "2wk", l: "AVG. DELIVERY TIME"  },
];

const CLIENTS = [
  { icon: "mdi:medical-bag",          name: "CLEARMEDAi" },
  { icon: "mdi:package-variant",      name: "ShipEzzy"   },
  { icon: "mdi:view-grid-outline",    name: "BuildFlow"  },
  { icon: "mdi:database-outline",     name: "DataNest"   },
  { icon: "mdi:check-circle-outline", name: "Taskly"     },
];

/* ─── Component ─────────────────────────────────────────────────────── */
export default function Banner() {
  const [isOpen, setOpen] = useState(false);

  /* Typewriter */
  const [text,  setText]  = useState("");
  const [wi,    setWi]    = useState(0);
  const [ci,    setCi]    = useState(0);
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    let t;
    if (phase === "typing") {
      t = setTimeout(() => {
        const n = ci + 1;
        setText(WORDS[wi].substring(0, n));
        setCi(n);
        if (n === WORDS[wi].length) setPhase("pause");
      }, 120);
    } else if (phase === "pause") {
      t = setTimeout(() => setPhase("deleting"), 1500);
    } else {
      t = setTimeout(() => {
        const n = ci - 1;
        if (n < 0) {
          setText(""); setCi(0);
          setWi(p => (p + 1) % WORDS.length);
          setPhase("typing");
        } else {
          setText(WORDS[wi].substring(0, n));
          setCi(n);
        }
      }, 52);
    }
    return () => clearTimeout(t);
  }, [ci, wi, phase]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;900&display=swap');

        /* ── Section ── */
        .bx-hero {
          background: #ffffff;
          font-family: 'Outfit', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Subtle blue radial glow — right half only, behind illustration */
        .bx-hero::before {
          content: '';
          position: absolute;
          top: -140px; right: -160px;
          width: 820px; height: 820px;
          border-radius: 50%;
          background: radial-gradient(circle,
            rgba(210,228,255,.52) 0%,
            rgba(230,242,255,.28) 46%,
            transparent 68%);
          pointer-events: none;
          z-index: 0;
        }

        /* ── Typewriter shimmer ── */
        @keyframes shimmer {
          0%   { background-position: 0%; }
          100% { background-position: 400%; }
        }
        .tw-text {
          background: linear-gradient(90deg,#1236c8,#1d4ed8,#2563eb,#3b82f6,#1236c8);
          background-size: 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 5s linear infinite;
        }

        /* ── Cursor ── */
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .cur { animation: blink 1s step-end infinite; }

        /* ── Fade-up ── */
        @keyframes fu {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .f1 { animation: fu .75s cubic-bezier(.16,1,.3,1) .06s  both; }
        .f2 { animation: fu .75s cubic-bezier(.16,1,.3,1) .16s  both; }
        .f3 { animation: fu .75s cubic-bezier(.16,1,.3,1) .26s  both; }
        .f4 { animation: fu .75s cubic-bezier(.16,1,.3,1) .38s  both; }
        .f5 { animation: fu .75s cubic-bezier(.16,1,.3,1) .50s  both; }
        .f6 { animation: fu .75s cubic-bezier(.16,1,.3,1) .62s  both; }

        /* ── Badge ── */
        .badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 7px 16px; border-radius: 100px;
          background: rgba(219,234,254,.65);
          border: 1px solid rgba(147,197,253,.6);
        }

        /* ── Buttons ── */
        .btn-blue {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 14px 28px; border-radius: 10px;
          background: linear-gradient(135deg, #1e40af, #2563eb);
          color: #fff; font-weight: 600; font-size: 15px;
          font-family: 'Outfit', sans-serif;
          border: none; cursor: pointer;
          box-shadow: 0 4px 18px rgba(37,99,235,.38);
          transition: all .3s ease;
        }
        .btn-blue:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(37,99,235,.52); }
        .btn-blue:active { transform: none; }

        .btn-outline {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 13px 28px; border-radius: 10px;
          background: transparent;
          color: #1d4ed8; font-weight: 600; font-size: 15px;
          font-family: 'Outfit', sans-serif;
          border: 1.5px solid #bfdbfe;
          cursor: pointer; transition: all .3s ease;
        }
        .btn-outline:hover { background: #eff6ff; border-color: #93c5fd; transform: translateY(-2px); }
        .btn-outline:active { transform: none; }

        /* ── Stats card ── */
        .stats-card {
          display: flex; align-items: center;
          background: #ffffff;
          border: 1px solid #e8eef6;
          border-radius: 18px;
          box-shadow:
            0 2px 16px rgba(29,78,216,.06),
            0 1px 4px rgba(0,0,0,.04);
          padding: 22px 0;
        }
        .stat-col {
          flex: 1; display: flex; align-items: center;
          justify-content: center; gap: 16px; padding: 0 28px;
        }
        .stat-sep {
          width: 1px; height: 54px; flex-shrink: 0;
          background: linear-gradient(to bottom, transparent, #e2e8f0, transparent);
        }
        .stat-icon-box {
          width: 46px; height: 46px; border-radius: 13px; flex-shrink: 0;
          background: linear-gradient(135deg, rgba(29,78,216,.07), rgba(59,130,246,.11));
          border: 1px solid rgba(59,130,246,.16);
          display: flex; align-items: center; justify-content: center;
        }

        /* ── Trusted by ── */
        .trust-bar {
          border-top: 1px solid #f1f5f9;
          background: #fafbff;
          padding: 20px 0 28px;
        }
        .trust-logo {
          display: flex; align-items: center; gap: 7px;
          opacity: .5; transition: opacity .2s; cursor: default;
        }
        .trust-logo:hover { opacity: .9; }

        /* ── Mobile responsive ── */
        @media (max-width: 768px) {
          /* Hide illustration completely */
          .illus-col { display: none !important; }

          /* Center all left-column content */
          .bx-left {
            padding-right: 0 !important;
            align-items: center !important;
            text-align: center !important;
          }

          /* Center badge */
          .bx-left .badge { margin-left: auto; margin-right: auto; }

          /* Paragraph full width, centered */
          .bx-left p { max-width: 100% !important; }

          /* Center buttons row */
          .bx-btns { justify-content: center !important; }

          /* Hide background glow on mobile */
          .bx-hero::before { display: none; }

          /* Typewriter centered */
          .bx-tw { justify-content: center !important; }
        }
      `}</style>

      {/* ══════════════════════ HERO SECTION ══════════════════════ */}
      <section className="bx-hero" style={{ paddingTop: "80px" }}>
        <div className="container" style={{ position: "relative", zIndex: 10 }}>

          {/* ── Two-column row ── */}
          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>

            {/* ━━━━━━━━ LEFT — Text ━━━━━━━━ */}
            <div className="bx-left" style={{ flex: "1 1 400px", paddingTop: "20px", paddingBottom: "48px", paddingRight: "40px" }}>

              {/* Badge */}
              <div className="f1" style={{ marginBottom: "22px" }}>
                <div className="badge">
                  <span style={{
                    width: "6px", height: "6px", borderRadius: "50%",
                    background: "#3b82f6", display: "inline-block",
                    animation: "blink 2s ease-in-out infinite",
                  }} />
                  <span style={{
                    fontFamily: "Outfit", fontWeight: 600, fontSize: "11.5px",
                    color: "#1d4ed8", textTransform: "uppercase", letterSpacing: "1.6px",
                  }}>
                    Next-Gen Software Studio
                  </span>
                </div>
              </div>

              {/* Headings */}
              <h1
                className="f2"
                style={{
                  fontFamily: "Outfit", fontWeight: 900,
                  fontSize: "clamp(44px, 5.5vw, 70px)",
                  color: "#0b1a40", lineHeight: 1.04,
                  letterSpacing: "-0.5px", margin: 0,
                }}
              >
                Building
              </h1>

              <h1
                className="f2"
                style={{
                  fontFamily: "Outfit", fontWeight: 900,
                  fontSize: "clamp(44px, 5.5vw, 70px)",
                  color: "#0b1a40", lineHeight: 1.04,
                  letterSpacing: "-0.5px", margin: "0 0 2px",
                }}
              >
                Intelligent.
              </h1>

              {/* Typewriter line — font scaled so even "Digital Solutions."
                  fits on ONE line. white-space:nowrap prevents any wrap.
                  minHeight = 1 line height so nothing shifts. */}
              <div
                className="f3 bx-tw"
                style={{
                  fontSize: "clamp(26px, 4.2vw, 58px)",
                  fontWeight: 900, letterSpacing: "-0.5px",
                  minHeight: "clamp(32px, 6.5vw, 66px)",
                  display: "flex", alignItems: "flex-start",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  paddingTop: "2px",
                  marginBottom: "22px",
                }}
              >
                <span className="tw-text">{text}</span>
                <span
                  className="cur"
                  style={{
                    color: "#1d4ed8",
                    WebkitTextFillColor: "#1d4ed8",
                    fontFamily: "Outfit", fontWeight: 900, marginLeft: "4px",
                  }}
                >|</span>
              </div>

              {/* Subtext */}
              <p
                className="f3"
                style={{
                  fontFamily: "Outfit",
                  fontSize: "clamp(15px, 1.55vw, 17px)",
                  color: "#3d5280", fontWeight: 400,
                  lineHeight: 1.72, marginBottom: "30px",
                  maxWidth: "440px",
                }}
              >
                We build high-performance web apps, mobile products,
                and AI-powered systems that solve real problems —
                with clean code and precision design.
              </p>

              {/* CTA Buttons */}
              <div className="f4 bx-btns" style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <button className="btn-blue" onClick={() => setOpen(true)}>
                  See How It Works <span style={{ fontSize: "17px" }}>→</span>
                </button>
                <button className="btn-outline">
                  View Our Work <span style={{ fontSize: "17px" }}>→</span>
                </button>
              </div>
            </div>

            {/* ━━━━━━━━ RIGHT — Hero Illustration ━━━━━━━━ */}
            <div
              className="illus-col"
              style={{
                flex: "1 1 420px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                paddingTop: "20px",
                paddingBottom: "48px",
              }}
            >
              <Image
                src="/images/banner/herobanner.png"
                alt="Kerodevs AI Platform Illustration"
                width={600}
                height={560}
                priority
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  height: "auto",
                  display: "block",
                  mixBlendMode: "multiply",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              />
            </div>

          </div>
        </div>

        {/* ══════════════════ STATS BAR ══════════════════ */}
        <div className="container f5" style={{ position: "relative", zIndex: 10, paddingBottom: 0 }}>
          <div className="stats-card">
            {STATS.map((s, i) => (
              <Fragment key={i}>
                {i > 0 && <div className="stat-sep" />}
                <div className="stat-col">
                  <div className="stat-icon-box">
                    <Icon icon={s.icon} style={{ color: "#2563eb", fontSize: "22px" }} />
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "Outfit", fontWeight: 800,
                      fontSize: "28px", color: "#0b1a40",
                      lineHeight: 1, letterSpacing: "-0.5px",
                    }}>
                      {s.v}
                    </div>
                    <div style={{
                      fontFamily: "Outfit", fontSize: "10px",
                      fontWeight: 600, color: "#94a3b8",
                      letterSpacing: "1.2px", marginTop: "4px",
                    }}>
                      {s.l}
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>



        {/* ══════════════════ MODAL ══════════════════ */}
        {isOpen && (
          <div
            style={{
              position: "fixed", inset: 0, zIndex: 50,
              background: "rgba(11,26,64,.5)", backdropFilter: "blur(6px)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
            onClick={() => setOpen(false)}
          >
            <div
              style={{
                position: "relative", background: "#fff",
                borderRadius: "20px", padding: "32px",
                maxWidth: "440px", width: "calc(100% - 32px)",
                border: "1px solid #e2e8f0",
                boxShadow: "0 24px 64px rgba(0,0,0,.12)",
              }}
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                style={{ position: "absolute", top: "16px", right: "16px", background: "none", border: "none", cursor: "pointer", color: "#94a3b8" }}
              >
                <Icon icon="tabler:circle-x" style={{ fontSize: "22px" }} />
              </button>
              <h3 style={{ fontFamily: "Outfit", fontWeight: 700, fontSize: "20px", color: "#0f172a", marginBottom: "12px" }}>
                How It Works
              </h3>
              <p style={{ fontFamily: "Outfit", color: "#64748b", fontSize: "15px", lineHeight: 1.75, margin: 0 }}>
                We start with a discovery call to understand your goals, then
                move into design, development, and launch — keeping you in
                the loop at every step.
              </p>
            </div>
          </div>
        )}
      </section>
    </>
  );
}