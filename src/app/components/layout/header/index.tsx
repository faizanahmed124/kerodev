"use client";
import { Headerdata } from "@/lib/data/pageData";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useRef, useState } from "react";
import Logo from "./logo";
import HeaderLink from "./navigation/HeaderLink";
import MobileHeaderLink from "./navigation/MobileHeaderLink";

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY >= 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = navbarOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [navbarOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');
        @keyframes drawerIn  { from{transform:translateX(100%)} to{transform:translateX(0)} }
        @keyframes drawerOut { from{transform:translateX(0)} to{transform:translateX(100%)} }
        .drawer-open  { animation: drawerIn  .28s cubic-bezier(.4,0,.2,1) forwards; }
        .drawer-close { animation: drawerOut .25s cubic-bezier(.4,0,.2,1) forwards; }
      `}</style>

      {/* ── Main Header ── */}
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{
          background: sticky ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.88)",
          backdropFilter: "blur(14px)",
          borderBottom: sticky ? "1px solid #e2e8f0" : "1px solid transparent",
          boxShadow: sticky ? "0 1px 20px rgba(30,58,95,0.08)" : "none",
          padding: sticky ? "10px 0" : "16px 0",
        }}
      >
        <div className="container flex items-center justify-between">
          <Logo />
          <nav className="hidden lg:flex items-center gap-8 ml-auto">
            {Headerdata.map((item, i) => <HeaderLink key={i} item={item} />)}
          </nav>
          <button
            className="flex lg:hidden flex-col gap-1.5 p-2 rounded-lg z-50"
            onClick={() => setNavbarOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span className="block h-0.5 w-6 rounded transition-all duration-300"
              style={{
                background: "#1e3a5f",
                transform: navbarOpen ? "rotate(45deg) translateY(8px)" : "none",
              }} />
            <span className="block h-0.5 w-6 rounded transition-all duration-300"
              style={{ background: "#1e3a5f", opacity: navbarOpen ? 0 : 1 }} />
            <span className="block h-0.5 w-6 rounded transition-all duration-300"
              style={{
                background: "#1e3a5f",
                transform: navbarOpen ? "rotate(-45deg) translateY(-8px)" : "none",
              }} />
          </button>
        </div>
      </header>

      {/* ── Mobile Overlay ── */}
      {navbarOpen && (
        <div
          className="fixed inset-0 z-50"
          style={{ background: "rgba(15,23,42,0.5)", backdropFilter: "blur(3px)" }}
          onClick={() => setNavbarOpen(false)}
        />
      )}

      {/* ── Mobile Drawer ── */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full z-50 flex flex-col ${navbarOpen ? "drawer-open" : "drawer-close pointer-events-none"}`}
        style={{
          width: "min(300px, 85vw)",
          background: "#ffffff",
          boxShadow: "-6px 0 40px rgba(30,58,95,0.15)",
          borderLeft: "1px solid #e2e8f0",
        }}
      >
        <div className="flex items-center justify-between px-5 py-4"
          style={{ borderBottom: "1px solid #f1f5f9" }}>
          <Logo />
          <button
            onClick={() => setNavbarOpen(false)}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
            style={{ background: "#f1f5f9" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#dbeafe"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#f1f5f9"}
          >
            <Icon icon="mdi:close" style={{ color: "#64748b", fontSize: 16 }} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-4 py-4">
          {Headerdata.map((item, i) => (
            <MobileHeaderLink key={i} item={item} />
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;