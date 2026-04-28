"use client";

import { Icon } from "@iconify/react";

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

            {/* gradient underline */}
            <div className="mx-auto mt-4 w-14 h-1 rounded-full"
              style={{ background: "linear-gradient(90deg, #1d4ed8, #38bdf8)" }} />
          </div>

          {/* ── Zigzag Steps ── */}
          <div className="relative flex items-start justify-between">
            {steps.map((step, index) => {
              const isTop  = step.position === "top";
              const isLast = index === steps.length - 1;

              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center"
                  style={{ flex: 1 }}
                >
                  {/* Top label */}
                  {isTop && (
                    <div className="text-center mb-4 h-20 flex flex-col justify-end">
                      <span
                        className="text-xs font-bold"
                        style={{ color: "#0ea5e9" }}
                      >
                        {step.id}
                      </span>
                      <span
                        className="text-base font-bold mt-1"
                        style={{ color: "#0f172a" }}
                      >
                        {step.title}
                      </span>
                      <span
                        className="text-xs mt-1 leading-tight max-w-[90px] mx-auto"
                        style={{ color: "#64748b" }}
                      >
                        {step.description}
                      </span>
                    </div>
                  )}

                  {/* Spacer for bottom steps */}
                  {!isTop && <div className="h-20" />}

                  {/* ── Circle ── */}
                  <div
                    className="step-circle relative z-10 flex items-center justify-center rounded-full"
                    style={{
                      width: 80,
                      height: 80,
                      background: "linear-gradient(135deg, #1d4ed8, #38bdf8)",
                      marginTop: isTop ? 0 : 80,
                      marginBottom: isTop ? 80 : 0,
                    }}
                  >
                    {/* inner white ring */}
                    <div
                      className="flex items-center justify-center rounded-full"
                      style={{
                        width: 62,
                        height: 62,
                        background: "#ffffff",
                        border: "2px solid rgba(56,189,248,0.3)",
                      }}
                    >
                      <Icon
                        icon={step.icon}
                        style={{ fontSize: 26, color: "#1d4ed8" }}
                      />
                    </div>
                  </div>

                  {/* Bottom label */}
                  {!isTop && (
                    <div className="text-center mt-4 h-20 flex flex-col justify-start">
                      <span
                        className="text-xs font-bold"
                        style={{ color: "#0ea5e9" }}
                      >
                        {step.id}
                      </span>
                      <span
                        className="text-base font-bold mt-1"
                        style={{ color: "#0f172a" }}
                      >
                        {step.title}
                      </span>
                      <span
                        className="text-xs mt-1 leading-tight max-w-[90px] mx-auto"
                        style={{ color: "#64748b" }}
                      >
                        {step.description}
                      </span>
                    </div>
                  )}

                  {/* ── Dashed arrow ── */}
                  {!isLast && (
                    <svg
                      className="absolute z-10"
                      style={{
                        top: isTop ? 118 : 38,
                        left: "49%",
                        width: "80%",
                        height: 100,
                        overflow: "visible",
                        pointerEvents: "none",
                      }}
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <marker
                          id={`arrow-${index}`}
                          viewBox="0 0 10 10"
                          refX="8"
                          refY="5"
                          markerWidth="6"
                          markerHeight="6"
                          orient="auto"
                        >
                          <path
                            d="M2 1L8 5L2 9"
                            fill="none"
                            stroke="#38bdf8"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </marker>
                      </defs>
                      <path
                        d={isTop
                          ? "M0 10 Q50 10 100 90"
                          : "M0 90 Q50 90 100 10"}
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
        </div>
      </section>
    </>
  );
};

export default WorkFlow;