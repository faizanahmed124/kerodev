// src/app/(site)/technologies/page.tsx
"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";

/* ─── Data ─────────────────────────────────────────── */
const CATS = [
  { id:"all",      label:"All",           icon:"mdi:view-grid",              color:"#2563eb" },
  { id:"frontend", label:"Frontend",      icon:"mdi:monitor-code",           color:"#3b82f6" },
  { id:"backend",  label:"Backend",       icon:"mdi:server-outline",         color:"#10b981" },
  { id:"mobile",   label:"Mobile",        icon:"mdi:cellphone-link",         color:"#8b5cf6" },
  { id:"database", label:"Database",      icon:"mdi:database-outline",       color:"#f59e0b" },
  { id:"devops",   label:"Cloud & DevOps",icon:"mdi:cloud-upload-outline",   color:"#ef4444" },
  { id:"ai",       label:"AI & ML",       icon:"mdi:brain",                  color:"#ec4899" },
];

const TECHS = [
  // Frontend
  { cat:"frontend", name:"React",        icon:"mdi:react",                   color:"#3b82f6" },
  { cat:"frontend", name:"Next.js",      icon:"simple-icons:nextdotjs",      color:"#3b82f6" },
  { cat:"frontend", name:"TypeScript",   icon:"simple-icons:typescript",     color:"#3b82f6" },
  { cat:"frontend", name:"Tailwind CSS", icon:"simple-icons:tailwindcss",    color:"#3b82f6" },
  { cat:"frontend", name:"JavaScript",   icon:"simple-icons:javascript",     color:"#3b82f6" },
  { cat:"frontend", name:"Redux",        icon:"simple-icons:redux",          color:"#3b82f6" },
  { cat:"frontend", name:"Vue.js",       icon:"simple-icons:vuedotjs",       color:"#3b82f6" },
  { cat:"frontend", name:"Framer Motion",icon:"simple-icons:framer",         color:"#3b82f6" },
  // Backend
  { cat:"backend",  name:"Node.js",      icon:"simple-icons:nodedotjs",      color:"#10b981" },
  { cat:"backend",  name:"Python",       icon:"simple-icons:python",         color:"#10b981" },
  { cat:"backend",  name:"Express.js",   icon:"simple-icons:express",        color:"#10b981" },
  { cat:"backend",  name:"Django",       icon:"simple-icons:django",         color:"#10b981" },
  { cat:"backend",  name:"GraphQL",      icon:"simple-icons:graphql",        color:"#10b981" },
  { cat:"backend",  name:"REST APIs",    icon:"mdi:api",                     color:"#10b981" },
  { cat:"backend",  name:"FastAPI",      icon:"simple-icons:fastapi",        color:"#10b981" },
  { cat:"backend",  name:"Socket.io",    icon:"simple-icons:socketdotio",    color:"#10b981" },
  // Mobile
  { cat:"mobile",   name:"Flutter",      icon:"simple-icons:flutter",        color:"#8b5cf6" },
  { cat:"mobile",   name:"React Native", icon:"mdi:react",                   color:"#8b5cf6" },
  { cat:"mobile",   name:"Dart",         icon:"simple-icons:dart",           color:"#8b5cf6" },
  { cat:"mobile",   name:"Swift",        icon:"simple-icons:swift",          color:"#8b5cf6" },
  { cat:"mobile",   name:"Kotlin",       icon:"simple-icons:kotlin",         color:"#8b5cf6" },
  { cat:"mobile",   name:"Firebase",     icon:"simple-icons:firebase",       color:"#8b5cf6" },
  // Database
  { cat:"database", name:"MongoDB",      icon:"simple-icons:mongodb",        color:"#f59e0b" },
  { cat:"database", name:"PostgreSQL",   icon:"simple-icons:postgresql",     color:"#f59e0b" },
  { cat:"database", name:"MySQL",        icon:"simple-icons:mysql",          color:"#f59e0b" },
  { cat:"database", name:"Redis",        icon:"simple-icons:redis",          color:"#f59e0b" },
  { cat:"database", name:"Supabase",     icon:"simple-icons:supabase",       color:"#f59e0b" },
  { cat:"database", name:"Prisma",       icon:"simple-icons:prisma",         color:"#f59e0b" },
  // DevOps
  { cat:"devops",   name:"AWS",          icon:"simple-icons:amazonaws",      color:"#ef4444" },
  { cat:"devops",   name:"Docker",       icon:"simple-icons:docker",         color:"#ef4444" },
  { cat:"devops",   name:"Kubernetes",   icon:"simple-icons:kubernetes",     color:"#ef4444" },
  { cat:"devops",   name:"Vercel",       icon:"simple-icons:vercel",         color:"#ef4444" },
  { cat:"devops",   name:"GitHub Actions",icon:"simple-icons:githubactions", color:"#ef4444" },
  { cat:"devops",   name:"Nginx",        icon:"simple-icons:nginx",          color:"#ef4444" },
  // AI
  { cat:"ai",       name:"OpenAI",       icon:"simple-icons:openai",         color:"#ec4899" },
  { cat:"ai",       name:"LangChain",    icon:"mdi:link-chain",              color:"#ec4899" },
  { cat:"ai",       name:"TensorFlow",   icon:"simple-icons:tensorflow",     color:"#ec4899" },
  { cat:"ai",       name:"PyTorch",      icon:"simple-icons:pytorch",        color:"#ec4899" },
  { cat:"ai",       name:"Hugging Face", icon:"simple-icons:huggingface",    color:"#ec4899" },
  { cat:"ai",       name:"Scikit-learn", icon:"mdi:chart-scatter-plot",      color:"#ec4899" },
];

export default function TechnologiesPage() {
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? TECHS
    : TECHS.filter(t => t.cat === active);

  const activeCat = CATS.find(c => c.id === active)!;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;900&display=swap');

        * { box-sizing: border-box; }
        .tp { font-family:'Outfit',sans-serif; background:#fff; }

        /* ── Filter tab ── */
        .tp-tab {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 9px 18px; border-radius: 100px;
          font-family:'Outfit',sans-serif; font-size:13px; font-weight:600;
          border: 1.5px solid #e2e8f0; background:#fff;
          color:#64748b; cursor:pointer; white-space:nowrap;
          transition: all .22s ease;
        }
        .tp-tab:hover { border-color:#93c5fd; color:#1d4ed8; background:#eff6ff; }
        .tp-tab.on {
          background: #1d4ed8; border-color:#1d4ed8;
          color:#fff; box-shadow: 0 4px 14px rgba(29,78,216,.3);
        }

        /* ── Tech badge ── */
        @keyframes tpPop {
          from { opacity:0; transform:scale(.88) translateY(8px); }
          to   { opacity:1; transform:scale(1)   translateY(0); }
        }
        .tp-badge {
          display: flex; align-items: center; gap: 10px;
          padding: 12px 16px; border-radius: 14px;
          background: #fff; border: 1.5px solid #e8eef6;
          cursor: default;
          transition: all .22s cubic-bezier(.16,1,.3,1);
          animation: tpPop .3s ease both;
          position: relative; overflow: hidden;
        }
        .tp-badge::after {
          content:''; position:absolute; bottom:0; left:0; right:0;
          height:2.5px; background:var(--tc); opacity:0;
          transition:opacity .22s ease;
        }
        .tp-badge:hover {
          border-color:var(--tc);
          box-shadow:0 6px 20px rgba(0,0,0,.07);
          transform:translateY(-3px);
        }
        .tp-badge:hover::after { opacity:1; }

        .tp-icon {
          width:38px; height:38px; border-radius:10px; flex-shrink:0;
          display:flex; align-items:center; justify-content:center;
          background:var(--tc-soft); transition: transform .22s ease;
        }
        .tp-badge:hover .tp-icon { transform:scale(1.1); }

        /* ── Stat number ── */
        .tp-stat {
          display:flex; flex-direction:column; align-items:center;
          padding:24px 32px; border-radius:18px;
          border:1px solid #e8eef6; background:#fff;
          transition:all .25s ease;
        }
        .tp-stat:hover { border-color:#93c5fd; box-shadow:0 8px 24px rgba(29,78,216,.08); transform:translateY(-3px); }

        /* ── CTA ── */
        .tp-cta {
          background:linear-gradient(135deg,#0d1b35,#071738);
          border-radius:24px; padding:56px 40px; text-align:center;
          position:relative; overflow:hidden;
        }
        .tp-cta::before {
          content:''; position:absolute; top:-60px; right:-60px;
          width:260px; height:260px; border-radius:50%;
          background:radial-gradient(circle,rgba(56,189,248,.14),transparent 70%);
          pointer-events:none;
        }
        .tp-btn {
          display:inline-flex; align-items:center; gap:8px;
          padding:13px 28px; border-radius:12px;
          background:linear-gradient(135deg,#1e40af,#2563eb);
          color:#fff; font-family:'Outfit',sans-serif;
          font-weight:700; font-size:14px; border:none; cursor:pointer;
          box-shadow:0 5px 20px rgba(37,99,235,.35);
          transition:all .3s ease; text-decoration:none;
        }
        .tp-btn:hover { transform:translateY(-2px); box-shadow:0 9px 28px rgba(37,99,235,.5); }
        .tp-btn-out {
          display:inline-flex; align-items:center; gap:8px;
          padding:12px 28px; border-radius:12px;
          color:#cbd5e1; font-family:'Outfit',sans-serif;
          font-weight:600; font-size:14px;
          border:1.5px solid rgba(255,255,255,.18);
          cursor:pointer; background:transparent; text-decoration:none;
          transition:all .3s ease;
        }
        .tp-btn-out:hover { background:rgba(255,255,255,.07); border-color:rgba(255,255,255,.38); transform:translateY(-2px); }

        /* ── Filter scroll on mobile ── */
        @media(max-width:640px) {
          .tp-tabs { flex-wrap:nowrap !important; overflow-x:auto; -webkit-overflow-scrolling:touch; padding-bottom:6px; }
          .tp-tabs::-webkit-scrollbar { display:none; }
          .tp-grid { grid-template-columns:repeat(2,1fr) !important; }
          .tp-cta   { padding:40px 20px; }
        }
      `}</style>

      <div className="tp">

        {/* ── HERO ── */}
        <section style={{ paddingTop:"120px", paddingBottom:"48px", textAlign:"center", position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", top:"-80px", right:"-80px", width:"400px", height:"400px", borderRadius:"50%", background:"radial-gradient(circle,rgba(56,189,248,.07),transparent 70%)", pointerEvents:"none" }} />

          <div className="container" style={{ position:"relative", zIndex:10 }}>
            <span style={{ display:"inline-block", padding:"5px 16px", borderRadius:"100px", fontSize:"11px", fontWeight:700, textTransform:"uppercase", letterSpacing:"2px", background:"rgba(56,189,248,.10)", border:"1px solid rgba(56,189,248,.3)", color:"#0369a1", marginBottom:"16px" }}>
              Tech Stack
            </span>
            <h1 style={{ fontFamily:"'Outfit',sans-serif", fontWeight:900, fontSize:"clamp(2rem,5vw,3.2rem)", color:"#0b1a40", letterSpacing:"-0.5px", margin:"0 0 12px" }}>
              Technologies We Use
            </h1>
            <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"clamp(14px,1.6vw,16px)", color:"#64748b", lineHeight:1.7, maxWidth:"520px", margin:"0 auto" }}>
              Modern, battle-tested tools across every layer of the stack — chosen for performance, scalability, and developer velocity.
            </p>
          </div>
        </section>

        {/* ── STATS ROW (compact inline) ── */}
        <section style={{ padding:"0 0 40px" }}>
          <div className="container">
            <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"12px" }}>
              {[
                { v:"40+", l:"Technologies" },
                { v:"6",   l:"Categories"   },
                { v:"50+", l:"Projects"      },
                { v:"3+",  l:"Years Exp."    },
              ].map((s,i)=>(
                <div key={i} style={{ display:"flex", alignItems:"center", gap:"8px", padding:"10px 22px", borderRadius:"100px", border:"1px solid #e8eef6", background:"#fff" }}>
                  <span style={{ fontFamily:"'Outfit',sans-serif", fontWeight:800, fontSize:"18px", color:"#1d4ed8" }}>{s.v}</span>
                  <span style={{ fontFamily:"'Outfit',sans-serif", fontSize:"12px", color:"#64748b", fontWeight:500 }}>{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FILTER + GRID ── */}
        <section style={{ background:"#f8faff", padding:"40px 0 64px" }}>
          <div className="container">

            {/* Filter tabs */}
            <div className="tp-tabs" style={{ display:"flex", flexWrap:"wrap", gap:"8px", marginBottom:"32px" }}>
              {CATS.map(cat => (
                <button
                  key={cat.id}
                  className={`tp-tab${active===cat.id?" on":""}`}
                  onClick={()=>setActive(cat.id)}
                >
                  <Icon icon={cat.icon} style={{ fontSize:"15px", color:active===cat.id?"#fff":cat.color }} />
                  {cat.label}
                  <span style={{
                    fontSize:"10px", fontWeight:700, padding:"1px 7px", borderRadius:"100px",
                    background:active===cat.id?"rgba(255,255,255,.22)":"#f1f5f9",
                    color:active===cat.id?"#fff":"#64748b",
                  }}>
                    {cat.id==="all" ? TECHS.length : TECHS.filter(t=>t.cat===cat.id).length}
                  </span>
                </button>
              ))}
            </div>

            {/* Active category label */}
            {active !== "all" && (
              <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"20px" }}>
                <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:activeCat.color }} />
                <span style={{ fontFamily:"'Outfit',sans-serif", fontSize:"13px", fontWeight:600, color:"#64748b" }}>
                  Showing {filtered.length} technologies in <strong style={{ color:"#0b1a40" }}>{activeCat.label}</strong>
                </span>
              </div>
            )}

            {/* Tech badges grid */}
            <div
              className="tp-grid"
              style={{
                display:"grid",
                gridTemplateColumns:"repeat(auto-fill, minmax(185px, 1fr))",
                gap:"10px",
              }}
            >
              {filtered.map((t, i) => (
                <div
                  key={`${t.cat}-${t.name}`}
                  className="tp-badge"
                  style={{
                    "--tc":      t.color,
                    "--tc-soft": t.color + "15",
                    animationDelay: `${(i % 12) * 28}ms`,
                  } as React.CSSProperties}
                >
                  <div className="tp-icon">
                    <Icon icon={t.icon} style={{ fontSize:"19px", color:t.color }} />
                  </div>
                  <span style={{ fontFamily:"'Outfit',sans-serif", fontWeight:600, fontSize:"13.5px", color:"#0f172a", lineHeight:1.2 }}>
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ background:"#fff", padding:"56px 0 80px" }}>
          <div className="container">
            <div className="tp-cta">
              <div style={{ position:"relative", zIndex:10 }}>
                <h2 style={{ fontFamily:"'Outfit',sans-serif", fontWeight:900, fontSize:"clamp(1.6rem,4vw,2.4rem)", color:"#fff", letterSpacing:"-0.4px", margin:"0 0 12px" }}>
                  Have a Project in Mind?
                </h2>
                <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"15px", color:"#94a3b8", lineHeight:1.7, maxWidth:"420px", margin:"0 auto 28px" }}>
                  Tell us your idea — we'll pick the right stack and build it fast.
                </p>
                <div style={{ display:"flex", gap:"12px", justifyContent:"center", flexWrap:"wrap" }}>
                  <Link href="/#contact" className="tp-btn">
                    Start a Project <Icon icon="mdi:arrow-right" style={{ fontSize:"16px" }} />
                  </Link>
                  <Link href="/services" className="tp-btn-out">
                    Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}