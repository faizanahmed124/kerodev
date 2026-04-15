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
    <section className="py-20 relative overflow-hidden ">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-5xl flex items-center justify-center font-black mb-20 text-white leading-tight">
          HOW WE WORK?
        </h2>

        {/* Zigzag Steps */}
        <div className="relative flex items-start justify-between">

          {steps.map((step, index) => {
            const isTop = step.position === "top";
            const isLast = index === steps.length - 1;

            return (
              <div key={index} className="relative flex flex-col items-center" style={{ flex: 1 }}>

                {/* Top Label */}
                {isTop && (
                  <div className="text-center mb-4 h-20 flex flex-col justify-end">
                    <span className="text-sm font-bold text-blue-400">{step.id}</span>
                    <span className="text-lg font-bold text-gray-100 mt-1">{step.title}</span>
                    <span className="text-xs text-white mt-1 leading-tight max-w-[90px] mx-auto">{step.description}</span>
                  </div>
                )}

                {/* Spacer for bottom steps (push circle down) */}
                {!isTop && <div className="h-20" />}

                {/* Circle */}
                <div
                  className="relative z-10 flex items-center justify-center rounded-full"
                  style={{
                    width: 80,
                    height: 80,
                    background: "#F5A623",
                    marginTop: isTop ? 0 : 80,
                    marginBottom: isTop ? 80 : 0,
                  }}
                >
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{ width: 62, height: 62, background: "#D0021B" }}
                  >
                    <Icon icon={step.icon} className="text-white text-2xl" />
                  </div>
                </div>

                {/* Bottom Label */}
                {!isTop && (
                  <div className="text-center mt-4 h-20 flex flex-col justify-start">
                    <span className="text-sm font-bold text-blue-400">{step.id}</span>
                    <span className="text-lg font-bold text-white mt-1">{step.title}</span>
                    <span className="text-xs text-white mt-1 leading-tight max-w-[90px] mx-auto">{step.description}</span>
                  </div>
                )}

                {/* Dashed Arrow (not on last step) */}
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
                          stroke="#aaa"
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
                      stroke="#aaa"
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
  );
};

export default WorkFlow;