"use client";

import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import type { MutableRefObject } from "react";

const steps = [
  {
    id: "01",
    title: "Ideate",
    icon: "mdi:lightbulb-on-outline",
    description: "Define goals & brainstorm ideas.",
    position: "top",
  },
  {
    id: "02",
    title: "Design",
    icon: "mdi:pencil-ruler",
    description: "Create wireframes & visual layouts.",
    position: "bottom",
  },
  {
    id: "03",
    title: "Develop",
    icon: "mdi:code-tags",
    description: "Build clean, scalable code.",
    position: "top",
  },
  {
    id: "04",
    title: "Test",
    icon: "mdi:test-tube",
    description: "QA, debugging & performance.",
    position: "bottom",
  },
  {
    id: "05",
    title: "Launch",
    icon: "mdi:rocket-launch-outline",
    description: "Deploy & go live with confidence.",
    position: "top",
  },
  {
    id: "06",
    title: "Support",
    icon: "mdi:cog-outline",
    description: "Ongoing maintenance & client support.",
    position: "bottom",
  },
];

const WorkFlow = () => {
  // separate visibility tracking for the desktop zigzag and the mobile timeline,
  // since both versions exist in the DOM at once (CSS just toggles which shows)
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
                const next = [...prev];
                next[i] = true;
                return next;
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

        @keyframes pulse-ring {
          0%   { box-shadow: 0 0 0 0 rgba(56,189,248,0.35); }
          70%  { box-shadow: 0 0 0 10px rgba(56,189,248,0); }
          100% { box-shadow: 0 0 0 0 rgba(56,189,248,0); }
        }
        .step-circle { animation: pulse-ring 2.4s ease-out infinite; }

        /* ── entrance animations (desktop zigzag) ── */
        .wf-circle {
          opacity: 0;
          transform: scale(0.4);
          transition: transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease;
        }
        .wf-circle.is-visible { opacity: 1; transform: scale(1); }

        .wf-label {
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.45s ease 0.12s, transform 0.45s ease 0.12s;
        }
        .wf-label.is-visible { opacity: 1; transform: translateY(0); }

        .wf-arrow {
          opacity: 0;
          transform: scale(0.85);
          transition: opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s;
        }
        .wf-arrow.is-visible { opacity: 1; transform: scale(1); }

        /* ── entrance + self-drawing line (mobile timeline) ── */
        .wf-m-circle {
          opacity: 0;
          transform: scale(0.4);
          transition: transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease;
        }
        .wf-m-circle.is-visible { opacity: 1; transform: scale(1); }

        .wf-m-connector {
          width: 2px;
          margin-top: 6px;
          background: linear-gradient(180deg, #38bdf8, #1d4ed8);
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.6s cubic-bezier(0.65, 0, 0.35, 1);
        }
        .wf-m-connector.is-visible { transform: scaleY(1); }

        .wf-m-content {
          opacity: 0;
          transform: translateX(-10px);
          transition: opacity 0.45s ease 0.15s, transform 0.45s ease 0.15s;
        }
        .wf-m-content.is-visible { opacity: 1; transform: translateX(0); }

        @media (prefers-reduced-motion: reduce) {
          .wf-circle, .wf-label, .wf-arrow,
          .wf-m-circle, .wf-m-connector, .wf-m-content {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "#ffffff", fontFamily: "'Outfit', sans-serif" }}
      >
        {/* bg blobs */}
        <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #38bdf8, transparent 70%)" }} />
        <div className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #1d4ed8, transparent 70%)" }} />

        <div className="container mx-auto px-6 relative z-10">

          {/* ── Heading ── */}
          <div className="text-center mb-20">
            <span
              className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
              style={{
                background: "rgba(56,189,248,0.10)",
                border: "1px solid rgba(56,189,248,0.35)",
                color: "#0369a1",
              }}
            >
              Our Process
            </span>

            <h2
              className="font-black"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                color: "#0f172a",
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}
            >
              How We Work?
            </h2>

            <div className="mx-auto mt-4 w-14 h-1 rounded-full"
              style={{ background: "linear-gradient(90deg, #1d4ed8, #38bdf8)" }} />
          </div>

          {/* ══════════════ DESKTOP ZIGZAG (md and up) ══════════════ */}
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
                  style={{ flex: 1 }}
                >
                  {isTop && (
                    <div className={`wf-label text-center mb-4 h-20 flex flex-col justify-end ${on ? "is-visible" : ""}`}>
                      <span className="text-xs font-bold" style={{ color: "#0ea5e9" }}>{step.id}</span>
                      <span className="text-base font-bold mt-1" style={{ color: "#0f172a" }}>{step.title}</span>
                      <span className="text-xs mt-1 leading-tight max-w-[90px] mx-auto" style={{ color: "#64748b" }}>
                        {step.description}
                      </span>
                    </div>
                  )}

                  {!isTop && <div className="h-20" />}

                  <div
                    className={`wf-circle step-circle relative z-10 flex items-center justify-center rounded-full ${on ? "is-visible" : ""}`}
                    style={{
                      width: 80,
                      height: 80,
                      background: "linear-gradient(135deg, #1d4ed8, #38bdf8)",
                      marginTop: isTop ? 0 : 80,
                      marginBottom: isTop ? 80 : 0,
                    }}
                  >
                    <div
                      className="flex items-center justify-center rounded-full"
                      style={{ width: 62, height: 62, background: "#ffffff", border: "2px solid rgba(56,189,248,0.3)" }}
                    >
                      <Icon icon={step.icon} style={{ fontSize: 26, color: "#1d4ed8" }} />
                    </div>
                  </div>

                  {!isTop && (
                    <div className={`wf-label text-center mt-4 h-20 flex flex-col justify-start ${on ? "is-visible" : ""}`}>
                      <span className="text-xs font-bold" style={{ color: "#0ea5e9" }}>{step.id}</span>
                      <span className="text-base font-bold mt-1" style={{ color: "#0f172a" }}>{step.title}</span>
                      <span className="text-xs mt-1 leading-tight max-w-[90px] mx-auto" style={{ color: "#64748b" }}>
                        {step.description}
                      </span>
                    </div>
                  )}

                  {!isLast && (
                    <svg
                      className={`wf-arrow absolute z-10 ${on ? "is-visible" : ""}`}
                      style={{ top: isTop ? 118 : 38, left: "49%", width: "80%", height: 100, overflow: "visible", pointerEvents: "none" }}
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <marker id={`arrow-${index}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                          <path d="M2 1L8 5L2 9" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </marker>
                      </defs>
                      <path
                        d={isTop ? "M0 10 Q50 10 100 90" : "M0 90 Q50 90 100 10"}
                        fill="none"
                        stroke="#38bdf8"
                        strokeWidth="1.5"
                        strokeDasharray="6 4"
                        markerEnd={`url(#arrow-${index})`}
                      />
                    </svg>
                  )}
                </div>
              );
            })}
          </div>

          {/* ══════════════ MOBILE VERTICAL TIMELINE (below md) ══════════════ */}
          <div className="flex md:hidden flex-col mt-4">
            {steps.map((step, index) => {
              const isLast = index === steps.length - 1;
              const on = visibleM[index];

              return (
                <div
                  key={step.id}
                  ref={(el) => { refsM.current[index] = el; }}
                  className="flex gap-4"
                >
                  <div className="flex flex-col items-center" style={{ width: 56 }}>
                    <div
                      className={`wf-m-circle step-circle flex items-center justify-center rounded-full ${on ? "is-visible" : ""}`}
                      style={{ width: 56, height: 56, background: "linear-gradient(135deg, #1d4ed8, #38bdf8)", flexShrink: 0 }}
                    >
                      <div
                        className="flex items-center justify-center rounded-full"
                        style={{ width: 44, height: 44, background: "#ffffff", border: "2px solid rgba(56,189,248,0.3)" }}
                      >
                        <Icon icon={step.icon} style={{ fontSize: 20, color: "#1d4ed8" }} />
                      </div>
                    </div>

                    {!isLast && (
                      <div className={`wf-m-connector flex-1 ${on ? "is-visible" : ""}`} />
                    )}
                  </div>

                  <div
                    className={`wf-m-content ${on ? "is-visible" : ""}`}
                    style={{ paddingBottom: isLast ? 4 : 32 }}
                  >
                    <span className="text-xs font-bold" style={{ color: "#0ea5e9" }}>{step.id}</span>
                    <h3 className="text-base font-bold mt-1" style={{ color: "#0f172a" }}>{step.title}</h3>
                    <p className="text-xs mt-1 leading-relaxed" style={{ color: "#64748b" }}>{step.description}</p>
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

export default WorkFlow;