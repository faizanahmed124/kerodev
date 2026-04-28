"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useState, useEffect } from "react";

const Banner = () => {
  const [isOpen, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const words = ["Digital Solutions.", "Smart Systems.", "AI Products."];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (index === words.length) return;
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(words[index].substring(0, subIndex + 1));
        setSubIndex(subIndex + 1);
        if (subIndex + 1 === words[index].length) setDeleting(true);
      } else {
        setText(words[index].substring(0, subIndex - 1));
        setSubIndex(subIndex - 1);
        if (subIndex === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, deleting ? 80 : 160);
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;900&display=swap');

        /* subtle animated gradient on typewriter text */
        @keyframes shimmer {
          0%   { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .tw-gradient {
          background: linear-gradient(90deg, #1e40af, #38bdf8, #0ea5e9, #1d4ed8);
          background-size: 300% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        /* fade-up entrance */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up-1 { animation: fadeUp 0.7s ease 0.1s both; }
        .fade-up-2 { animation: fadeUp 0.7s ease 0.35s both; }
        .fade-up-3 { animation: fadeUp 0.7s ease 0.6s both; }

        /* cursor blink */
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .cursor { animation: blink 0.9s step-end infinite; color: #38bdf8; }

        /* pill badge shimmer */
        @keyframes badgeSlide {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .badge-in { animation: badgeSlide 0.5s ease 0.05s both; }
      `}</style>

      <section
        className="relative pt-32 lg:pt-55  pb-22 lg:pb-68 overflow-hidden"
        style={{ background: "#ffffff" }}
      >

        {/* ── Soft decorative blobs (light bg) ── */}
        <div
          className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #93c5fd, transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #1d4ed8, transparent 70%)" }}
        />

        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center">

            {/* ── Badge ── */}
            <div className="badge-in mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  background: "rgba(56,189,248,0.10)",
                  border: "1px solid rgba(56,189,248,0.35)",
                  color: "#0369a1",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse inline-block" />
                Next-Gen Software Studio
              </span>
            </div>

            {/* ── Heading Line 1 ── */}
            <h1
              className="fade-up-1 font-black uppercase leading-tight"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(32px, 7vw, 72px)",
                color: "#0f172a",
                letterSpacing: "5px",
              }}
            >
              Building Intelligent.
            </h1>

            {/* ── Typewriter Line ── */}
            <h1
              className="fade-up-2 mb-6 font-black leading-tight flex justify-center items-center"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(36px, 7vw, 78px)",
                letterSpacing: "6px",
                minHeight: "120px",
              }}
            >
              <span className="tw-gradient">
                {text}
              </span>
              <span className="cursor ml-1" style={{ WebkitTextFillColor: "#38bdf8" }}>|</span>
            </h1>

            {/* ── Subheading ── */}
            <p
              className="fade-up-3 max-w-2xl mb-10 leading-relaxed"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(15px, 2vw, 18px)",
                color: "#475569",
                letterSpacing: "0.2px",
              }}
            >
              We build high-performance web apps, mobile products, and AI-powered
              systems that solve real problems — with clean code and precision design.
            </p>

            {/* ── CTA Buttons ── */}
            <div className="fade-up-3 flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setOpen(true)}
                className="px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "15px",
                  background: "linear-gradient(135deg, #1d4ed8, #38bdf8)",
                  boxShadow: "0 4px 20px rgba(56,189,248,0.3)",
                }}
              >
                See How It Works
              </button>

              <button
                className="px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 border"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "15px",
                  color: "#1d4ed8",
                  border: "1.5px solid #93c5fd",
                  background: "rgba(219,234,254,0.4)",
                }}
              >
                View Our Work →
              </button>
            </div>

            {/* ── Trust strip ── */}
            <div
              className="fade-up-3 flex flex-wrap items-center justify-center gap-6 mt-14 pt-8 border-t w-full max-w-xl"
              style={{ borderColor: "#e2e8f0" }}
            >
              {[
                { icon: "mdi:check-circle-outline", label: "50+ Projects Delivered" },
                { icon: "mdi:lightning-bolt",       label: "Fast Turnaround" },
                { icon: "mdi:shield-check-outline", label: "Production Ready" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Icon icon={item.icon} className="text-sky-500 text-lg" />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "#64748b",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ── Modal ── */}
        {isOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{ background: "rgba(15,23,42,0.5)", backdropFilter: "blur(4px)" }}
            onClick={() => setOpen(false)}
          >
            <div
              className="relative rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
              style={{ background: "#ffffff", border: "1px solid #e2e8f0" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition"
              >
                <Icon icon="tabler:circle-x" className="text-2xl" />
              </button>
              <h3
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: "20px",
                  color: "#0f172a",
                  marginBottom: "12px",
                }}
              >
                How It Works
              </h3>
              <p style={{ fontFamily: "'Outfit', sans-serif", color: "#64748b", fontSize: "15px", lineHeight: 1.7 }}>
                We start with a discovery call to understand your goals, then move into
                design, development, and launch — keeping you in the loop at every step.
              </p>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Banner;