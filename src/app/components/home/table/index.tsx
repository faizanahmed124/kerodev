// ─────────────────────────────────────────────────────────────
//  Replace your existing WorkFlow file with this combined file
//  Path: src/app/components/home/WorkFlow/index.tsx
//  (or wherever your WorkFlow component currently lives)
// ─────────────────────────────────────────────────────────────
"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { MutableRefObject } from "react";

/* ═══════════════════════════════════════════════════
   SERVICES DATA
═══════════════════════════════════════════════════ */
const SERVICES = [
  {
    icon: "mdi:monitor-dashboard",
    short: "Web Development",
    title: "Web Development",
    desc: "We craft fast, scalable, and pixel-perfect web applications using React, Next.js, and modern full-stack technologies — optimized for performance, SEO, and conversion from day one.",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "REST APIs"],
  },
  {
    icon: "mdi:cellphone-link",
    short: "Mobile Apps",
    title: "Mobile App Development",
    desc: "Cross-platform iOS and Android apps built with Flutter and React Native — delivering smooth, native-quality experiences with a single, maintainable codebase.",
    tags: ["Flutter", "React Native", "iOS", "Android", "Push Notifications"],
  },
  {
    icon: "mdi:cog-transfer-outline",
    short: "Custom Software",
    title: "Custom Software Development",
    desc: "Tailor-made enterprise software, automation tools, and internal systems designed specifically around your unique business workflows — secure, scalable, and reliable.",
    tags: ["Enterprise Apps", "Process Automation", "System Integration", "Cloud Deploy"],
  },
  {
    icon: "mdi:brain",
    short: "AI Solutions",
    title: "AI & Smart Solutions",
    desc: "We embed cutting-edge AI into your products — intelligent chatbots, recommendation engines, and custom ML models that turn your data into a competitive advantage.",
    tags: ["OpenAI API", "LangChain", "Machine Learning", "Data Pipelines"],
  },
  {
    icon: "mdi:palette-outline",
    short: "UI / UX Design",
    title: "UI / UX Design",
    desc: "User-centered design that converts. We create intuitive wireframes, high-fidelity prototypes, and design systems that look stunning and feel effortless to use.",
    tags: ["Figma", "Wireframing", "Prototyping", "Design Systems", "User Research"],
  },
  {
    icon: "mdi:cloud-upload-outline",
    short: "Cloud & DevOps",
    title: "Cloud & DevOps",
    desc: "From infrastructure setup to CI/CD pipelines and containerized deployments — we make sure your product is fast, fault-tolerant, and ready to scale on demand.",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD", "PostgreSQL"],
  },
];

/* ═══════════════════════════════════════════════════
   WORKFLOW DATA
═══════════════════════════════════════════════════ */
const steps = [
  { id: "01", title: "Ideate",   icon: "mdi:lightbulb-on-outline",   description: "Define goals & brainstorm ideas.",           position: "top"    },
  { id: "02", title: "Design",   icon: "mdi:pencil-ruler",            description: "Create wireframes & visual layouts.",        position: "bottom" },
  { id: "03", title: "Develop",  icon: "mdi:code-tags",               description: "Build clean, scalable code.",               position: "top"    },
  { id: "04", title: "Test",     icon: "mdi:test-tube",               description: "QA, debugging & performance.",              position: "bottom" },
  { id: "05", title: "Launch",   icon: "mdi:rocket-launch-outline",   description: "Deploy & go live with confidence.",         position: "top"    },
  { id: "06", title: "Support",  icon: "mdi:cog-outline",             description: "Ongoing maintenance & client support.",     position: "bottom" },
];

/* ═══════════════════════════════════════════════════
   COMBINED COMPONENT
═══════════════════════════════════════════════════ */
const ServicesAndWorkFlow = () => {
  /* ── Services state ── */
  const [active, setActive] = useState(0);
  const svc = SERVICES[active];

  /* ── WorkFlow intersection observers ── */
  const [visibleD, setVisibleD] = useState(() => steps.map(() => false));
  const [visibleM, setVisibleM] = useState(() => steps.map(() => false));
  const refsD = useRef<(HTMLDivElement | null)[]>([]);
  const refsM = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const watch = (
      refsArr: MutableRefObject<(HTMLDivElement | null)[]>,
      setFn: React.Dispatch<React.SetStateAction<boolean[]>>
    ) =>
      refsArr.current.map((el, i) => {
        if (!el) return null;
        const obs = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setFn((prev) => {
                if (prev[i]) return prev;
                const next = [...prev]; next[i] = true; return next;
              });
              obs.disconnect();
            }
          },
          { threshold: 0.3, rootMargin: "0px 0px -10% 0px" }
        );
        obs.observe(el);
        return obs;
      });

    const obsD = watch(refsD, setVisibleD);
    const obsM = watch(refsM, setVisibleM);
    return () => {
      obsD.forEach((o) => o && o.disconnect());
      obsM.forEach((o) => o && o.disconnect());
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;900&display=swap');

        /* ════════════════ SERVICES STYLES ════════════════ */

        .sb-tile {
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 10px; padding: 28px 16px 24px;
          border-radius: 18px;
          border: 1.5px solid #e8eef6;
          background: #ffffff;
          cursor: pointer;
          transition: all .28s cubic-bezier(.16,1,.3,1);
          text-align: center;
        }
        .sb-tile:hover {
          border-color: #93c5fd;
          box-shadow: 0 6px 24px rgba(29,78,216,.08);
          transform: translateY(-3px);
        }
        .sb-tile.active {
          background: #071736;
          border-color: #38bdf8;
          box-shadow: 0 8px 32px rgba(56,189,248,.22);
          transform: translateY(-3px);
        }
        .sb-tile.active .sb-icon-wrap {
          background: rgba(56,189,248,.18);
          border-color: rgba(56,189,248,.4);
        }
        .sb-tile.active .sb-tile-label { color: #f1f5f9; }

        .sb-icon-wrap {
          width: 52px; height: 52px; border-radius: 15px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(29,78,216,.07);
          border: 1px solid rgba(56,189,248,.18);
          transition: all .28s ease;
        }

        .sb-tag {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 6px 14px; border-radius: 100px;
          font-size: 12px; font-weight: 600;
          background: rgba(29,78,216,.06);
          border: 1px solid rgba(56,189,248,.22);
          color: #1d4ed8;
          transition: all .2s ease;
        }
        .sb-tag:hover { background: rgba(29,78,216,.12); border-color: #38bdf8; }

        @keyframes sbFade {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .sb-detail { animation: sbFade .35s ease both; }

        .sb-cta {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 14px 28px; border-radius: 12px;
          background: linear-gradient(135deg,#1e40af,#2563eb);
          color: #fff;
          font-family: 'Outfit',sans-serif; font-weight:700; font-size:14px;
          border: none; cursor: pointer;
          box-shadow: 0 6px 22px rgba(37,99,235,.35);
          transition: all .3s ease; text-decoration: none;
        }
        .sb-cta:hover { transform:translateY(-2px); box-shadow:0 10px 30px rgba(37,99,235,.5); }

        .sb-all {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 11px 24px; border-radius: 100px;
          background: linear-gradient(135deg,#1e40af,#2563eb);
          color: #fff;
          font-family: 'Outfit',sans-serif; font-weight:600; font-size:13.5px;
          border: none; cursor: pointer;
          box-shadow: 0 4px 16px rgba(37,99,235,.3);
          transition: all .3s ease; text-decoration: none; white-space: nowrap;
        }
        .sb-all:hover { transform:translateY(-2px); box-shadow:0 8px 24px rgba(37,99,235,.45); }

        /* ════════════════ WORKFLOW STYLES ════════════════ */

        @keyframes pulse-ring {
          0%   { box-shadow: 0 0 0 0   rgba(56,189,248,0.35); }
          70%  { box-shadow: 0 0 0 10px rgba(56,189,248,0); }
          100% { box-shadow: 0 0 0 0   rgba(56,189,248,0); }
        }
        .step-circle { animation: pulse-ring 2.4s ease-out infinite; }

        .wf-circle {
          opacity:0; transform:scale(0.4);
          transition: transform .55s cubic-bezier(0.34,1.56,0.64,1), opacity .4s ease;
        }
        .wf-circle.is-visible { opacity:1; transform:scale(1); }

        .wf-label {
          opacity:0; transform:translateY(14px);
          transition: opacity .45s ease .12s, transform .45s ease .12s;
        }
        .wf-label.is-visible { opacity:1; transform:translateY(0); }

        .wf-arrow {
          opacity:0; transform:scale(0.85);
          transition: opacity .5s ease .2s, transform .5s ease .2s;
        }
        .wf-arrow.is-visible { opacity:1; transform:scale(1); }

        .wf-m-circle {
          opacity:0; transform:scale(0.4);
          transition: transform .55s cubic-bezier(0.34,1.56,0.64,1), opacity .4s ease;
        }
        .wf-m-circle.is-visible { opacity:1; transform:scale(1); }

        .wf-m-connector {
          width:2px; margin-top:6px;
          background: linear-gradient(180deg,#38bdf8,#1d4ed8);
          transform:scaleY(0); transform-origin:top;
          transition: transform .6s cubic-bezier(0.65,0,0.35,1);
        }
        .wf-m-connector.is-visible { transform:scaleY(1); }

        .wf-m-content {
          opacity:0; transform:translateX(-10px);
          transition: opacity .45s ease .15s, transform .45s ease .15s;
        }
        .wf-m-content.is-visible { opacity:1; transform:translateX(0); }

        @media (prefers-reduced-motion: reduce) {
          .wf-circle,.wf-label,.wf-arrow,
          .wf-m-circle,.wf-m-connector,.wf-m-content {
            transition:none !important; opacity:1 !important; transform:none !important;
          }
        }

        /* ════════════════ RESPONSIVE ════════════════ */
        @media (max-width:767px) {
          .sb-main  { flex-direction:column !important; }
          .sb-left  { width:100% !important; }
          .sb-right { width:100% !important; border-left:none !important; padding-left:0 !important; border-top:1px solid #e8eef6; padding-top:28px !important; }
          .sb-grid  { grid-template-columns:repeat(2,1fr) !important; }
          .sb-top   { flex-direction:column !important; gap:16px !important; align-items:flex-start !important; }
        }
      `}</style>

      {/* ████████████████████████████████████████████
          BLOCK 1 — SERVICES
      ████████████████████████████████████████████ */}
      <section
        style={{
          background:"#f8faff",
          fontFamily:"'Outfit',sans-serif",
          padding:"88px 0 80px",
          position:"relative",
          overflow:"hidden",
        }}
      >
        {/* bg glows */}
        <div style={{ position:"absolute", top:"-80px", right:"-80px", width:"400px", height:"400px", borderRadius:"50%", background:"radial-gradient(circle,rgba(56,189,248,.07),transparent 70%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"-60px", left:"-60px", width:"320px", height:"320px", borderRadius:"50%", background:"radial-gradient(circle,rgba(29,78,216,.06),transparent 70%)", pointerEvents:"none" }} />

        <div className="container" style={{ position:"relative", zIndex:10 }}>

          {/* ── Top row ── */}
          <div
            className="sb-top"
            style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"10px", gap:"24px", flexWrap:"wrap" }}
          >
            <div style={{ flex:1 }}>
              <span style={{
                display:"inline-block", padding:"5px 16px", borderRadius:"100px",
                fontSize:"11px", fontWeight:700, textTransform:"uppercase", letterSpacing:"2px",
                background:"rgba(56,189,248,.10)", border:"1px solid rgba(56,189,248,.32)", color:"#0369a1",
                marginBottom:"14px",
              }}>
                What We Offer
              </span>
              <h2 style={{
                fontFamily:"'Outfit',sans-serif", fontWeight:900,
                fontSize:"clamp(1.7rem,4vw,2.6rem)",
                color:"#0b1a40", lineHeight:1.18, letterSpacing:"-0.4px", margin:0,
              }}>
                Software Development<br />
                <span style={{ background:"linear-gradient(90deg,#1d4ed8,#38bdf8)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                  & Engineering Services
                </span>
              </h2>
              <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(14px,1.5vw,16px)", color:"#64748b", lineHeight:1.72, marginTop:"12px", maxWidth:"520px" }}>
                End-to-end digital solutions designed to help businesses innovate, scale, and stay ahead in a competitive market.
              </p>
            </div>

            <Link href="/services" className="sb-all">
              See All Services
              <Icon icon="mdi:arrow-right" style={{ fontSize:"16px" }} />
            </Link>
          </div>

          {/* ── Main area ── */}
          <div className="sb-main" style={{ display:"flex", gap:"32px", alignItems:"stretch", marginTop:"36px" }}>

            {/* LEFT — tile grid */}
            <div className="sb-left" style={{ width:"44%", flexShrink:0 }}>
              <div className="sb-grid" style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"14px" }}>
                {SERVICES.map((s, i) => (
                  <div
                    key={i}
                    className={`sb-tile${active === i ? " active" : ""}`}
                    onClick={() => setActive(i)}
                  >
                    <div className="sb-icon-wrap">
                      <Icon icon={s.icon} style={{ fontSize:"24px", color: active === i ? "#38bdf8" : "#2563eb" }} />
                    </div>
                    <span
                      className="sb-tile-label"
                      style={{ fontFamily:"'Outfit',sans-serif", fontWeight:600, fontSize:"13px", color:"#334155", lineHeight:1.3 }}
                    >
                      {s.short}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — detail */}
            <div
              className="sb-right"
              style={{ flex:1, borderLeft:"1.5px solid #e8eef6", paddingLeft:"36px", display:"flex", flexDirection:"column", justifyContent:"center" }}
            >
              <div key={active} className="sb-detail">
                <div style={{ display:"flex", alignItems:"center", gap:"16px", marginBottom:"18px" }}>
                  <div style={{ width:"56px", height:"56px", borderRadius:"16px", flexShrink:0, background:"linear-gradient(135deg,rgba(29,78,216,.1),rgba(56,189,248,.14))", border:"1px solid rgba(56,189,248,.25)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <Icon icon={svc.icon} style={{ fontSize:"26px", color:"#1d4ed8" }} />
                  </div>
                  <h3 style={{ fontFamily:"'Outfit',sans-serif", fontWeight:800, fontSize:"clamp(1.4rem,3vw,2rem)", color:"#0b1a40", margin:0, letterSpacing:"-0.3px" }}>
                    {svc.title}
                  </h3>
                </div>

                <div style={{ height:"2px", background:"linear-gradient(90deg,#1d4ed8,#38bdf8,transparent)", borderRadius:"2px", marginBottom:"20px" }} />

                <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(14.5px,1.4vw,16px)", color:"#475569", lineHeight:1.8, marginBottom:"24px" }}>
                  {svc.desc}
                </p>

                <div style={{ display:"flex", flexWrap:"wrap", gap:"8px", marginBottom:"32px" }}>
                  {svc.tags.map((tag, j) => (
                    <span key={j} className="sb-tag">{tag}</span>
                  ))}
                </div>

                <Link href="/services" className="sb-cta">
                  Learn More about {svc.short}
                  <Icon icon="mdi:arrow-right" style={{ fontSize:"17px" }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ████████████████████████████████████████████
          BLOCK 2 — WORKFLOW  (unchanged from original)
      ████████████████████████████████████████████ */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background:"#ffffff", fontFamily:"'Outfit', sans-serif" }}
      >
        {/* bg blobs */}
        <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10"
          style={{ background:"radial-gradient(circle, #38bdf8, transparent 70%)" }} />
        <div className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10"
          style={{ background:"radial-gradient(circle, #1d4ed8, transparent 70%)" }} />

        <div className="container mx-auto px-6 relative z-10">

          {/* Heading */}
          <div className="text-center mb-20">
            <span
              className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
              style={{ background:"rgba(56,189,248,0.10)", border:"1px solid rgba(56,189,248,0.35)", color:"#0369a1" }}
            >
              Our Process
            </span>
            <h2 className="font-black"
              style={{ fontSize:"clamp(2rem, 5vw, 3rem)", color:"#0f172a", letterSpacing:"4px", textTransform:"uppercase" }}>
              How We Work?
            </h2>
            <div className="mx-auto mt-4 w-14 h-1 rounded-full"
              style={{ background:"linear-gradient(90deg, #1d4ed8, #38bdf8)" }} />
          </div>

          {/* ── DESKTOP ZIGZAG ── */}
          <div className="hidden md:flex relative items-start justify-between">
            {steps.map((step, index) => {
              const isTop = step.position === "top";
              const isLast = index === steps.length - 1;
              const on = visibleD[index];
              return (
                <div
                  key={step.id}
                  ref={(el) => { refsD.current[index] = el; }}
                  className="relative flex flex-col items-center"
                  style={{ flex:1 }}
                >
                  {isTop && (
                    <div className={`wf-label text-center mb-4 h-20 flex flex-col justify-end ${on ? "is-visible" : ""}`}>
                      <span className="text-xs font-bold" style={{ color:"#0ea5e9" }}>{step.id}</span>
                      <span className="text-base font-bold mt-1" style={{ color:"#0f172a" }}>{step.title}</span>
                      <span className="text-xs mt-1 leading-tight max-w-[90px] mx-auto" style={{ color:"#64748b" }}>{step.description}</span>
                    </div>
                  )}
                  {!isTop && <div className="h-20" />}

                  <div
                    className={`wf-circle step-circle relative z-10 flex items-center justify-center rounded-full ${on ? "is-visible" : ""}`}
                    style={{ width:80, height:80, background:"linear-gradient(135deg,#1d4ed8,#38bdf8)", marginTop:isTop?0:80, marginBottom:isTop?80:0 }}
                  >
                    <div className="flex items-center justify-center rounded-full"
                      style={{ width:62, height:62, background:"#ffffff", border:"2px solid rgba(56,189,248,0.3)" }}>
                      <Icon icon={step.icon} style={{ fontSize:26, color:"#1d4ed8" }} />
                    </div>
                  </div>

                  {!isTop && (
                    <div className={`wf-label text-center mt-4 h-20 flex flex-col justify-start ${on ? "is-visible" : ""}`}>
                      <span className="text-xs font-bold" style={{ color:"#0ea5e9" }}>{step.id}</span>
                      <span className="text-base font-bold mt-1" style={{ color:"#0f172a" }}>{step.title}</span>
                      <span className="text-xs mt-1 leading-tight max-w-[90px] mx-auto" style={{ color:"#64748b" }}>{step.description}</span>
                    </div>
                  )}

                  {!isLast && (
                    <svg
                      className={`wf-arrow absolute z-10 ${on ? "is-visible" : ""}`}
                      style={{ top:isTop?118:38, left:"49%", width:"80%", height:100, overflow:"visible", pointerEvents:"none" }}
                      viewBox="0 0 100 100" preserveAspectRatio="none"
                    >
                      <defs>
                        <marker id={`arrow-${index}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                          <path d="M2 1L8 5L2 9" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </marker>
                      </defs>
                      <path
                        d={isTop ? "M0 10 Q50 10 100 90" : "M0 90 Q50 90 100 10"}
                        fill="none" stroke="#38bdf8" strokeWidth="1.5"
                        strokeDasharray="6 4" markerEnd={`url(#arrow-${index})`}
                      />
                    </svg>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── MOBILE TIMELINE ── */}
          <div className="flex md:hidden flex-col mt-4">
            {steps.map((step, index) => {
              const isLast = index === steps.length - 1;
              const on = visibleM[index];
              return (
                <div key={step.id} ref={(el) => { refsM.current[index] = el; }} className="flex gap-4">
                  <div className="flex flex-col items-center" style={{ width:56 }}>
                    <div
                      className={`wf-m-circle step-circle flex items-center justify-center rounded-full ${on ? "is-visible" : ""}`}
                      style={{ width:56, height:56, background:"linear-gradient(135deg,#1d4ed8,#38bdf8)", flexShrink:0 }}
                    >
                      <div className="flex items-center justify-center rounded-full"
                        style={{ width:44, height:44, background:"#ffffff", border:"2px solid rgba(56,189,248,0.3)" }}>
                        <Icon icon={step.icon} style={{ fontSize:20, color:"#1d4ed8" }} />
                      </div>
                    </div>
                    {!isLast && <div className={`wf-m-connector flex-1 ${on ? "is-visible" : ""}`} />}
                  </div>
                  <div className={`wf-m-content ${on ? "is-visible" : ""}`} style={{ paddingBottom:isLast?4:32 }}>
                    <span className="text-xs font-bold" style={{ color:"#0ea5e9" }}>{step.id}</span>
                    <h3 className="text-base font-bold mt-1" style={{ color:"#0f172a" }}>{step.title}</h3>
                    <p className="text-xs mt-1 leading-relaxed" style={{ color:"#64748b" }}>{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
};

export default ServicesAndWorkFlow;