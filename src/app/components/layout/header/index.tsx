"use client";
import { Headerdata } from "@/lib/data/pageData";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Signin from "../../auth/sign-in";
import SignUp from "../../auth/sign-up";
import Logo from "./logo";
import HeaderLink from "./navigation/HeaderLink";
import MobileHeaderLink from "./navigation/MobileHeaderLink";

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen]     = useState(false);
  const [sticky, setSticky]             = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const signInRef     = useRef<HTMLDivElement>(null);
  const signUpRef     = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY >= 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (signInRef.current && !signInRef.current.contains(e.target as Node))
        setIsSignInOpen(false);
      if (signUpRef.current && !signUpRef.current.contains(e.target as Node))
        setIsSignUpOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      isSignInOpen || isSignUpOpen || navbarOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isSignInOpen, isSignUpOpen, navbarOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');
        .hdr-btn-outline {
          font-family:'Outfit',sans-serif; font-size:14px; font-weight:600;
          padding:9px 22px; border-radius:10px;
          border:1.5px solid #93c5fd; color:#1d4ed8;
          background:rgba(219,234,254,0.4);
          transition:all .2s; cursor:pointer; width:100%;
        }
        .hdr-btn-outline:hover { background:#dbeafe; border-color:#3b82f6; }
        .hdr-btn-fill {
          font-family:'Outfit',sans-serif; font-size:14px; font-weight:600;
          padding:9px 22px; border-radius:10px; border:none; color:#fff;
          background:linear-gradient(135deg,#1d4ed8,#38bdf8);
          box-shadow:0 3px 14px rgba(56,189,248,0.28);
          transition:all .2s; cursor:pointer; width:100%;
        }
        .hdr-btn-fill:hover { box-shadow:0 4px 18px rgba(56,189,248,0.45); }
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

          {/* Logo */}
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {Headerdata.map((item, i) => <HeaderLink key={i} item={item} />)}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              className="hdr-btn-outline"
              style={{ width: "auto" }}
              onClick={() => setIsSignInOpen(true)}
            >
              Sign In
            </button>
            <button
              className="hdr-btn-fill"
              style={{ width: "auto" }}
              onClick={() => setIsSignUpOpen(true)}
            >
              Get Started
            </button>
          </div>

          {/* Hamburger */}
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
              style={{
                background: "#1e3a5f",
                opacity: navbarOpen ? 0 : 1,
              }} />
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
        {/* Drawer header */}
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

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-4 py-4">
          {Headerdata.map((item, i) => (
            <MobileHeaderLink key={i} item={item} />
          ))}
        </nav>

        {/* CTA buttons */}
        <div className="px-5 py-5 flex flex-col gap-3"
          style={{ borderTop: "1px solid #f1f5f9" }}>
          <button className="hdr-btn-outline"
            onClick={() => { setIsSignInOpen(true); setNavbarOpen(false); }}>
            Sign In
          </button>
          <button className="hdr-btn-fill"
            onClick={() => { setIsSignUpOpen(true); setNavbarOpen(false); }}>
            Get Started
          </button>
        </div>
      </div>

      {/* ── Sign In Modal ── */}
      {isSignInOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[60]"
          style={{ background: "rgba(15,23,42,0.5)", backdropFilter: "blur(4px)" }}
          onClick={() => setIsSignInOpen(false)}>
          <div ref={signInRef}
            className="relative mx-auto w-full max-w-md rounded-2xl px-8 pt-12 pb-8 text-center"
            style={{ background: "#fff", boxShadow: "0 20px 60px rgba(30,58,95,0.18)", border: "1px solid #e2e8f0" }}
            onClick={e => e.stopPropagation()}>
            <button onClick={() => setIsSignInOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition">
              <Icon icon="tabler:circle-x" className="text-2xl" />
            </button>
            <Signin />
          </div>
        </div>
      )}

      {/* ── Sign Up Modal ── */}
      {isSignUpOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[60]"
          style={{ background: "rgba(15,23,42,0.5)", backdropFilter: "blur(4px)" }}
          onClick={() => setIsSignUpOpen(false)}>
          <div ref={signUpRef}
            className="relative mx-auto w-full max-w-md rounded-2xl px-8 pt-12 pb-8 text-center"
            style={{ background: "#fff", boxShadow: "0 20px 60px rgba(30,58,95,0.18)", border: "1px solid #e2e8f0" }}
            onClick={e => e.stopPropagation()}>
            <button onClick={() => setIsSignUpOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition">
              <Icon icon="tabler:circle-x" className="text-2xl" />
            </button>
            <SignUp />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;