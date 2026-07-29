// Replace old Features section with this
// src/app/components/home/WhyUs/index.tsx
// id="TechStacks" rakha hai taake nav link kaam kare
"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";

const REASONS = [
  {
    icon: "mdi:code-braces",
    title: "Clean, Production-Ready Code",
    desc:  "Every project we ship is well-structured, documented, and built to scale — no hacks, no technical debt.",
    color: "#38bdf8",
  },
  {
    icon: "mdi:clock-fast",
    title: "On-Time, Every Time",
    desc:  "We follow agile sprints with clear milestones. You always know what's being built and when it ships.",
    color: "#34d399",
  },
  {
    icon: "mdi:shield-check-outline",
    title: "Security & Reliability",
    desc:  "Industry-standard security practices baked into every layer — from API design to cloud infrastructure.",
    color: "#fb923c",
  },
  {
    icon: "mdi:headset",
    title: "Dedicated Support",
    desc:  "We stay with you after launch. Bug fixes, updates, and feature additions — your product never goes dark.",
    color: "#c084fc",
  },
];

const NUMBERS = [
  { v: "50+", l: "Projects Shipped"     },
  { v: "98%", l: "Client Satisfaction"  },
  { v: "2wk", l: "Avg. First Delivery"  },
];

export default function WhyUs() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;900&display=swap');

        /* ── Reason card ── */
        .wu-card {
          display: flex; gap: 18px; align-items: flex-start;
          padding: 26px 24px; border-radius: 18px;
          background: #ffffff;
          border: 1.5px solid #e8eef6;
          transition: all .3s ease;
          position: relative; overflow: hidden;
        }
        .wu-card::before {
          content: ''; position: absolute;
          left: 0; top: 0; bottom: 0; width: 3px;
          background: var(--cc);
          border-radius: 2px 0 0 2px;
          opacity: 0;
          transition: opacity .3s ease;
        }
        .wu-card:hover {
          border-color: #93c5fd;
          box-shadow: 0 8px 28px rgba(29,78,216,.09);
          transform: translateX(6px);
        }
        .wu-card:hover::before { opacity: 1; }

        /* ── Number stat ── */
        .wu-stat {
          text-align: center; padding: 20px 16px;
          border-radius: 16px;
          border: 1.5px solid #e8eef6;
          background: #f8faff;
          transition: all .3s ease;
        }
        .wu-stat:hover {
          background: #eff6ff;
          border-color: #93c5fd;
          transform: translateY(-4px);
          box-shadow: 0 6px 20px rgba(29,78,216,.08);
        }

        /* ── CTA button ── */
        .wu-btn {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 14px 30px; border-radius: 12px;
          background: linear-gradient(135deg,#1e40af,#2563eb);
          color: #fff; font-family:'Outfit',sans-serif;
          font-weight: 700; font-size: 14.5px;
          border: none; cursor: pointer;
          box-shadow: 0 6px 22px rgba(37,99,235,.35);
          transition: all .3s ease; text-decoration: none;
        }
        .wu-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(37,99,235,.5); }

        .wu-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 28px; border-radius: 12px;
          color: #1d4ed8; font-family:'Outfit',sans-serif;
          font-weight: 600; font-size: 14.5px;
          border: 1.5px solid #bfdbfe;
          cursor: pointer; background: transparent; text-decoration: none;
          transition: all .3s ease;
        }
        .wu-btn-ghost:hover { background: #eff6ff; border-color: #93c5fd; transform:translateY(-2px); }

        /* ── Responsive ── */
        @media(max-width:1023px) {
          .wu-split { flex-direction: column !important; }
          .wu-left, .wu-right { width: 100% !important; }
          .wu-left { padding-right: 0 !important; border-right: none !important; border-bottom: 1px solid #e8eef6; padding-bottom: 48px !important; }
          .wu-right { padding-left: 0 !important; padding-top: 40px !important; }
        }
        @media(max-width:640px) {
          .wu-numbers { grid-template-columns: repeat(3,1fr) !important; gap:10px !important; }
        }
      `}</style>

      <section
        id="TechStacks"
        className="scroll-mt-20"
        style={{
          background: "#ffffff",
          fontFamily: "'Outfit',sans-serif",
          padding: "88px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative glows */}
        <div style={{ position:"absolute", top:"-120px", right:"-120px", width:"480px", height:"480px", borderRadius:"50%", background:"radial-gradient(circle,rgba(56,189,248,.06),transparent 68%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"-80px", left:"-80px", width:"360px", height:"360px", borderRadius:"50%", background:"radial-gradient(circle,rgba(29,78,216,.05),transparent 68%)", pointerEvents:"none" }} />

        <div className="container" style={{ position:"relative", zIndex:10 }}>

          {/* ── Split layout ── */}
          <div className="wu-split" style={{ display:"flex", gap:"0", alignItems:"stretch" }}>

            {/* ── LEFT — headline + numbers + CTA ── */}
            <div
              className="wu-left"
              style={{ width:"42%", paddingRight:"56px", borderRight:"1px solid #e8eef6", display:"flex", flexDirection:"column", justifyContent:"center" }}
            >
              <span style={{
                display:"inline-block", padding:"5px 14px", borderRadius:"100px",
                fontSize:"11px", fontWeight:700, textTransform:"uppercase", letterSpacing:"2px",
                background:"rgba(56,189,248,.10)", border:"1px solid rgba(56,189,248,.32)", color:"#0369a1",
                marginBottom:"20px",
              }}>
                Why Kerodevs
              </span>

              <h2 style={{
                fontFamily:"'Outfit',sans-serif", fontWeight:900,
                fontSize:"clamp(2rem,4.2vw,3rem)",
                lineHeight:1.1, letterSpacing:"-0.5px",
                margin:"0 0 18px",
              }}>
                <span style={{ color:"#0b1a40" }}>We Don't Just</span><br />
                <span style={{
                  background:"linear-gradient(90deg,#1d4ed8,#2563eb,#38bdf8)",
                  WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
                }}>
                  Write Code.
                </span><br />
                <span style={{ color:"#0b1a40" }}>We Build Futures.</span>
              </h2>

              <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"15px", color:"#64748b", lineHeight:1.78, marginBottom:"36px", maxWidth:"340px" }}>
                From startups to enterprises — every project gets our full attention,
                best engineers, and a commitment to results that actually matter for your business.
              </p>

              {/* Numbers */}
              <div
                className="wu-numbers"
                style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"12px", marginBottom:"36px" }}
              >
                {NUMBERS.map((n,i) => (
                  <div key={i} className="wu-stat">
                    <div style={{ fontFamily:"'Outfit',sans-serif", fontWeight:900, fontSize:"clamp(1.6rem,3vw,2.2rem)", color:"#1d4ed8", lineHeight:1, letterSpacing:"-1px", marginBottom:"6px" }}>
                      {n.v}
                    </div>
                    <div style={{ fontFamily:"'Outfit',sans-serif", fontSize:"10.5px", fontWeight:600, color:"#94a3b8", textTransform:"uppercase", letterSpacing:"0.8px" }}>
                      {n.l}
                    </div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div style={{ display:"flex", flexWrap:"wrap", gap:"12px" }}>
                <Link href="/#contact" className="wu-btn">
                  Start a Project <Icon icon="mdi:arrow-right" style={{ fontSize:"17px" }} />
                </Link>
                <Link href="/about" className="wu-btn-ghost">
                  About Us
                </Link>
              </div>
            </div>

            {/* ── RIGHT — 4 reason cards ── */}
            <div
              className="wu-right"
              style={{ flex:1, paddingLeft:"56px", display:"flex", flexDirection:"column", gap:"14px", justifyContent:"center" }}
            >
              {REASONS.map((r, i) => (
                <div
                  key={i}
                  className="wu-card"
                  style={{ "--cc": r.color } as React.CSSProperties}
                >
                  {/* Icon */}
                  <div style={{
                    width:"46px", height:"46px", borderRadius:"14px", flexShrink:0,
                    background: r.color + "18",
                    border:`1px solid ${r.color}35`,
                    display:"flex", alignItems:"center", justifyContent:"center",
                  }}>
                    <Icon icon={r.icon} style={{ fontSize:"22px", color:r.color }} />
                  </div>

                  {/* Text */}
                  <div style={{ flex:1 }}>
                    <h3 style={{
                      fontFamily:"'Outfit',sans-serif", fontWeight:700,
                      fontSize:"15.5px", color:"#0b1a40",
                      margin:"0 0 6px",
                    }}>
                      {r.title}
                    </h3>
                    <p style={{
                      fontFamily:"'Outfit',sans-serif", fontSize:"13.5px",
                      color:"#64748b", lineHeight:1.7, margin:0,
                    }}>
                      {r.desc}
                    </p>
                  </div>

                  {/* Number label */}
                  <span style={{
                    fontFamily:"'Outfit',sans-serif", fontWeight:900,
                    fontSize:"32px", color:"rgba(0,0,0,.04)",
                    lineHeight:1, flexShrink:0, alignSelf:"center",
                  }}>
                    0{i + 1}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}