"use client";
import { Featuresdata } from "@/lib/data/pageData";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

const Features = () => {
  const icons = [
    "simple-icons:adobexd",
    "logos:figma",
    "logos:javascript",
    "simple-icons:express",
    "logos:html-5",
    "logos:tailwindcss-icon",
    "logos:vitejs",
    "logos:django-icon",
    "mdi:cloud-outline",
    "logos:nodejs-icon",
    "logos:python",
    "simple-icons:tensorflow",
    "logos:aws",
  ];

  return (
    <section id="TechStacks" className="scroll-mt-90 relative">

      {/* ✅ Blurred background overlay */}
      <div className="absolute inset-0  bg-white/5 pointer-events-none z-0" />

      <div className="container relative z-10">
        <div className="absolute w-full h-full top-0 -left-1/4 blur-390"></div>

        <div className="gap-x-4 gap-y-4 relative z-10">

          {/* Column-1 — Technologies */}
          <div className="mb-10">

            {/* ✅ Bigger heading */}
            <h2 className="font-semibold mb-6 text-center max-w-2xl mx-auto uppercase text-blue-900 text-4xl sm:text-5xl sm:leading-tight">
              Technologies we <br /> work on
            </h2>

            <p className="text-white/40 text-center">
              We specialize in a wide range of technologies to deliver cutting-edge solutions.
            </p>

            {/* Scrolling icons */}
            <div className="overflow-hidden w-full py-10">
              <div
                className="flex gap-16 text-lightpurple"
                style={{
                  width: "max-content",
                  animation: "marquee 30s linear infinite",
                }}
              >
                {icons.map((icon, i) => (
                  <Icon key={i} icon={icon} className="text-7xl flex-shrink-0" />
                ))}
                {icons.map((icon, i) => (
                  <Icon key={`dup-${i}`} icon={icon} className="text-7xl flex-shrink-0" />
                ))}
              </div>
            </div>
          </div>

          {/* Column-2 — 3 Cards */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="group relative bg-darkmode rounded-2xl p-8 flex flex-col gap-4 overflow-hidden border border-sky-400/60 hover:border-sky-400 hover:shadow-[0_0_24px_rgba(56,189,248,0.2)] transition-all duration-500">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/35 transition-all duration-500" />
              <span className="relative w-fit text-xs font-bold tracking-[0.2em] uppercase text-primary border border-primary/30 bg-primary/10 rounded-full px-3 py-1">
                01
              </span>
              <h5 className="relative text-white text-xl font-semibold capitalize">
                Innovative Design
              </h5>
              <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
              <p className="relative text-white/40 text-sm leading-relaxed">
                We focus on enhancing user experience through intuitive interface design
                and seamless navigation, creating visually appealing products that
                captivate and engage users.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-darkmode rounded-2xl p-8 flex flex-col gap-4 overflow-hidden border border-sky-400/60 hover:border-sky-400 hover:shadow-[0_0_24px_rgba(56,189,248,0.2)] transition-all duration-500">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-secondary/20 rounded-full blur-2xl group-hover:bg-secondary/35 transition-all duration-500" />
              <span className="relative w-fit text-xs font-bold tracking-[0.2em] uppercase text-secondary border border-secondary/30 bg-secondary/10 rounded-full px-3 py-1">
                02
              </span>
              <h5 className="relative text-white text-xl font-semibold capitalize">
                Web Development
              </h5>
              <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
              <p className="relative text-white/40 text-sm leading-relaxed">
                We provide comprehensive web application development services — from
                concept to deployment — ensuring your app is robust, scalable, and
                user-friendly at every stage.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-darkmode rounded-2xl p-8 flex flex-col gap-4 overflow-hidden border border-sky-400/60 hover:border-sky-400 hover:shadow-[0_0_24px_rgba(56,189,248,0.2)] transition-all duration-500">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/35 transition-all duration-500" />
              <span className="relative w-fit text-xs font-bold tracking-[0.2em] uppercase text-primary border border-primary/30 bg-primary/10 rounded-full px-3 py-1">
                03
              </span>
              <h5 className="relative text-white text-xl font-semibold capitalize">
                AI Solutions
              </h5>
              <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
              <p className="relative text-white/40 text-sm leading-relaxed">
                Our AI solutions harness machine learning and predictive analytics to
                revolutionize businesses, providing customized tools to optimize
                processes and drive innovation.
              </p>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Features;