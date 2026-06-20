"use client";
import { Icon } from "@iconify/react/dist/iconify.js";

const base = [
  {
    name: "Appraisals",
    role: "Website Development",
    avatar: "AP",
    rating: 5,
    text: "Developed a modern and scalable Next.js website focused on performance, responsiveness, and user experience.",
    website: "https://appraisals.com"
  },
  {
    name: "Kaixen ERP",
    role: "Website + ERP Software",
    avatar: "KE",
    rating: 5,
    text: "Designed and developed a complete ERP solution along with a professional company website to streamline business operations.",
    website: "https://kaixenerp.com"
  },
  {
    name: "Umar & Company",
    role: "Website Development + SEO",
    avatar: "UC",
    rating: 5,
    text: "Built a high-performance Next.js website and implemented SEO optimization to improve search visibility.",
    website: "https://umarandcompany.com"
  },
  {
    name: "Forty Shoes",
    role: "E-commerce Store",
    avatar: "FS",
    rating: 5,
    text: "Created a complete e-commerce platform with product management, shopping cart, and modern user experience.",
    website: "https://fortyshoes.com"
  },
  {
    name: "Brandify",
    role: "SEO Services",
    avatar: "BR",
    rating: 5,
    text: "Implemented technical SEO and optimization strategies to improve rankings and online visibility.",
    website: "https://brandify.com"
  }
];

// Pick an item from `base` using modulo, so adding/removing clients
// from `base` never produces an out-of-range (undefined) entry.
const pick = (i: number) => base[i % base.length];

// 4 columns x 4 rows = 16 slots, built from the 5 real clients above.
// Each column mixes a different rotation so the grid doesn't feel repetitive.
const col1 = [pick(0), pick(4), pick(3), pick(1)];
const col2 = [pick(1), pick(0), pick(2), pick(4)];
const col3 = [pick(2), pick(1), pick(4), pick(0)];
const col4 = [pick(3), pick(2), pick(0), pick(3)];

// blur levels per row index (0 = clear, increases down)
const blurLevels = [0, 1, 2.4, 1.2];
const opacityLevels = [1, 1, 0.6, 0.25];

const TestimonialCard = ({
  t,
  rowIndex,
}: {
  t: (typeof base)[0];
  rowIndex: number;
}) => {
  const blurVal = blurLevels[rowIndex] ?? 1.5;
  const opacityVal = opacityLevels[rowIndex] ?? 0.2;

  return (
    <div
      className="rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300"
      style={{
        background: "#ffffff",
        border: "1.5px solid rgba(56,189,248,0.45)",
        boxShadow: "0 2px 10px rgba(56,189,248,0.07)",
        filter: blurVal > 0 ? `blur(${blurVal}px)` : "none",
        opacity: opacityVal,
        pointerEvents: blurVal > 0 ? "none" : "auto",
      }}
    >
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Icon key={i} icon="mdi:star" style={{ color: "#f59e0b", fontSize: "13px" }} />
        ))}
      </div>

      {/* Text */}
      <p
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 400,
          color: "#475569",
          fontSize: "13px",
          lineHeight: 1.75,
          fontStyle: "italic",
          margin: 0,
        }}
      >
        "{t.text}"
      </p>

      {/* Author */}
      <div
        className="flex items-center gap-3 mt-auto pt-3"
        style={{ borderTop: "1px solid rgba(56,189,248,0.18)" }}
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: "linear-gradient(135deg,#1d4ed8,#38bdf8)" }}
        >
          <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: "#fff", fontSize: "10px" }}>
            {t.avatar}
          </span>
        </div>
        <div>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, color: "#0f172a", fontSize: "13px", margin: 0 }}>
            {t.name}
          </p>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, color: "#0369a1", fontSize: "11px", margin: 0 }}>
            {t.role}
          </p>
        </div>
      </div>

      {/* Visit website link */}
      {t.website && (
        <a
          href={t.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-medium"
          style={{ color: "#1d4ed8" }}
        >
          Visit Website
          <Icon icon="mdi:open-in-new" />
        </a>
      )}
    </div>
  );
};

const columns = [col1, col2, col3, col4];
const colOffsets = ["mt-0", "mt-8", "mt-4", "mt-12"];

const Testimonials = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;900&display=swap');
    `}</style>

    <section
      id="testimonials"
      className="relative py-20 overflow-hidden"
      style={{ background: "#ffffff", fontFamily: "'Outfit', sans-serif" }}
    >
      {/* Bg blobs */}
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #38bdf8, transparent 70%)" }} />
      <div className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #1d4ed8, transparent 70%)" }} />

      <div className="container relative z-10">

        {/* Heading */}
        <div className="text-center mb-14">
          <span
            className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
            style={{ background: "rgba(56,189,248,0.10)", border: "1px solid rgba(56,189,248,0.35)", color: "#0369a1" }}
          >
            Client Stories
          </span>
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#0f172a",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            Success Stories From{" "}
            <span style={{ color: "#1d4ed8" }}>Our Clients</span>
          </h2>
          <div className="mx-auto mb-6 w-14 h-1 rounded-full"
            style={{ background: "linear-gradient(90deg,#1d4ed8,#38bdf8)" }} />
          <p className="max-w-2xl mx-auto"
            style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, color: "#475569", fontSize: "16px", lineHeight: 1.8 }}>
            We're proud to have worked with amazing teams globally. Here's what they say about working with Kerodevs.
          </p>
        </div>

        {/* Grid */}
        <div className="relative">

          {/* Desktop: 4 cols */}
          <div className="hidden lg:grid gap-4"
            style={{ gridTemplateColumns: "repeat(4, 1fr)", alignItems: "start" }}>
            {columns.map((col, colIdx) => (
              <div key={colIdx} className={`flex flex-col gap-4 ${colOffsets[colIdx]}`}>
                {col.map((t, rowIdx) => (
                  <TestimonialCard key={rowIdx} t={t} rowIndex={rowIdx} />
                ))}
              </div>
            ))}
          </div>

          {/* Tablet: 2 cols */}
          <div className="hidden md:grid lg:hidden gap-4"
            style={{ gridTemplateColumns: "repeat(2, 1fr)", alignItems: "start" }}>
            {[col1, col2].map((col, colIdx) => (
              <div key={colIdx} className={`flex flex-col gap-4 ${colIdx === 1 ? "mt-8" : ""}`}>
                {col.map((t, rowIdx) => (
                  <TestimonialCard key={rowIdx} t={t} rowIndex={rowIdx} />
                ))}
              </div>
            ))}
          </div>

          {/* Mobile: 1 col */}
          <div className="flex md:hidden flex-col gap-4">
            {col1.map((t, rowIdx) => (
              <TestimonialCard key={rowIdx} t={t} rowIndex={rowIdx} />
            ))}
          </div>

          {/* Bottom fade overlay — smooth white fade, no blur overlay */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0"
            style={{
              height: "120px",
              background: "linear-gradient(to top, #ffffff 0%, rgba(255,255,255,0) 100%)",
              zIndex: 10,
            }}
          />
        </div>

      </div>
    </section>
  </>
);

export default Testimonials;