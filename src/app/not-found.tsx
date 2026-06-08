"use client";

import { getImagePath } from "@/lib/utils/imagePath";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const NotFound = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 18;
      const y = ((e.clientY - top) / height - 0.5) * 18;
      const img = el.querySelector<HTMLElement>(".nf-img");
      const glow = el.querySelector<HTMLElement>(".nf-glow");
      if (img) img.style.transform = `translate(${x * 0.6}px, ${y * 0.6}px)`;
      if (glow) glow.style.transform = `translate(${x * 1.2}px, ${y * 1.2}px)`;
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .nf-root {
          min-height: 100vh;
          background: #0a0a0f;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
          position: relative;
        }

        .nf-noise {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 0;
        }

        .nf-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(59,88,249,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,88,249,0.06) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none; z-index: 0;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%);
        }

        .nf-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }
        .nf-orb-1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(59,88,249,0.18) 0%, transparent 70%);
          top: -100px; right: -100px;
        }
        .nf-orb-2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%);
          bottom: -80px; left: -80px;
        }

        .nf-inner {
          position: relative; z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          max-width: 1100px;
          width: 100%;
          padding: 60px 40px;
        }

        @media (max-width: 768px) {
          .nf-inner { grid-template-columns: 1fr; gap: 40px; padding: 40px 24px; text-align: center; }
          .nf-img-wrap { order: -1; }
        }

        .nf-img-wrap {
          position: relative;
          display: flex; align-items: center; justify-content: center;
        }

        .nf-glow {
          position: absolute;
          width: 340px; height: 340px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59,88,249,0.25) 0%, transparent 65%);
          transition: transform 0.15s ease-out;
          pointer-events: none;
        }

        .nf-img {
          position: relative; z-index: 1;
          transition: transform 0.15s ease-out;
          filter: drop-shadow(0 30px 60px rgba(59,88,249,0.3));
          animation: nf-float 4s ease-in-out infinite;
        }

        @keyframes nf-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        .nf-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(59,88,249,0.15);
          animation: nf-ring-pulse 3s ease-in-out infinite;
        }
        .nf-ring-1 { width: 280px; height: 280px; animation-delay: 0s; }
        .nf-ring-2 { width: 360px; height: 360px; animation-delay: 0.5s; }
        .nf-ring-3 { width: 440px; height: 440px; animation-delay: 1s; }

        @keyframes nf-ring-pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.03); }
        }

        .nf-content { }

        .nf-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(59,88,249,0.1);
          border: 1px solid rgba(59,88,249,0.25);
          color: #7b9cff;
          font-size: 12px; font-weight: 500; letter-spacing: 0.08em;
          padding: 6px 14px; border-radius: 100px;
          margin-bottom: 24px;
          text-transform: uppercase;
        }
        .nf-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #3758f9;
          animation: nf-blink 1.4s ease-in-out infinite;
        }
        @keyframes nf-blink { 0%,100%{opacity:1;} 50%{opacity:0.3;} }

        .nf-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(52px, 8vw, 96px);
          font-weight: 800;
          line-height: 1;
          margin: 0 0 16px;
          background: linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.55) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nf-sub {
          font-family: 'Syne', sans-serif;
          font-size: clamp(20px, 3vw, 28px);
          font-weight: 600;
          color: rgba(255,255,255,0.75);
          margin: 0 0 14px;
          line-height: 1.3;
        }

        .nf-desc {
          font-size: 16px;
          color: rgba(255,255,255,0.4);
          line-height: 1.7;
          margin: 0 0 40px;
          max-width: 420px;
        }

        .nf-actions {
          display: flex; gap: 14px; flex-wrap: wrap;
        }

        .nf-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: #3758f9;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px; font-weight: 500;
          padding: 13px 28px;
          border-radius: 10px;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 0 30px rgba(59,88,249,0.35);
          border: none;
        }
        .nf-btn-primary:hover {
          background: #2545e8;
          transform: translateY(-2px);
          box-shadow: 0 0 40px rgba(59,88,249,0.55);
        }

        .nf-btn-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent;
          color: rgba(255,255,255,0.6);
          font-family: 'DM Sans', sans-serif;
          font-size: 15px; font-weight: 400;
          padding: 13px 28px;
          border-radius: 10px;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.1);
          transition: border-color 0.2s, color 0.2s, transform 0.15s;
        }
        .nf-btn-secondary:hover {
          border-color: rgba(255,255,255,0.3);
          color: #fff;
          transform: translateY(-2px);
        }

        .nf-divider {
          width: 48px; height: 2px;
          background: linear-gradient(90deg, #3758f9, transparent);
          margin: 0 0 28px;
          border-radius: 2px;
        }

        .nf-dots {
          position: absolute;
          display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px;
          opacity: 0.25; pointer-events: none;
        }
        .nf-dots-tl { top: 40px; left: 40px; }
        .nf-dots-br { bottom: 40px; right: 40px; }
        .nf-dot {
          width: 4px; height: 4px; border-radius: 50%;
          background: rgba(255,255,255,0.5);
        }
      `}</style>

      <div className="nf-root" ref={containerRef}>
        <div className="nf-noise" />
        <div className="nf-grid" />
        <div className="nf-orb nf-orb-1" />
        <div className="nf-orb nf-orb-2" />

        <div className="nf-dots nf-dots-tl">
          {Array.from({ length: 25 }).map((_, i) => <span key={i} className="nf-dot" />)}
        </div>
        <div className="nf-dots nf-dots-br">
          {Array.from({ length: 25 }).map((_, i) => <span key={i} className="nf-dot" />)}
        </div>

        <div className="nf-inner">
          <div className="nf-content">
            <div className="nf-badge">
              <span className="nf-badge-dot" />
              Error 404
            </div>

            <h1 className="nf-heading">404</h1>
            <div className="nf-divider" />
            <p className="nf-sub">Page not found</p>
            <p className="nf-desc">
              The page you&apos;re looking for has vanished into the void.
              It may have been moved, deleted, or never existed.
            </p>

            <div className="nf-actions">
              <Link href="/" className="nf-btn-primary">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Go to homepage
              </Link>
              <Link href="javascript:history.back()" className="nf-btn-secondary">
                Go back
              </Link>
            </div>
          </div>

          <div className="nf-img-wrap">
            <div className="nf-ring nf-ring-3" />
            <div className="nf-ring nf-ring-2" />
            <div className="nf-ring nf-ring-1" />
            <div className="nf-glow" />
            <div className="nf-img">
              <Image
                src={getImagePath("/images/404.svg")}
                alt="404 illustration"
                width={360}
                height={360}
                quality={100}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;