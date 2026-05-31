"use client";

import Link from "next/link";

type FooterType = {
  label: string;
  href: string;
};

export const Footerlinkdata: FooterType[] = [
  { label: "About", href: "/#about" },
  { label: "Features", href: "/#TechStacks" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact Us", href: "/#contact" },
];

const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
        @keyframes kf-pulse { 0%,100%{opacity:1;} 50%{opacity:0.3;} }

        .kf-root { font-family: 'Outfit', sans-serif; background: #0b1628; position: relative; overflow: hidden; }
        .kf-root * { box-sizing: border-box; }
        .kf-top-bar { height: 3px; background: linear-gradient(90deg, #1d4ed8 0%, #38bdf8 50%, #1d4ed8 100%); }
        .kf-orb1 { position: absolute; top: -80px; right: -80px; width: 380px; height: 380px; border-radius: 50%; background: radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%); pointer-events: none; }
        .kf-orb2 { position: absolute; bottom: -60px; left: -60px; width: 280px; height: 280px; border-radius: 50%; background: radial-gradient(circle, rgba(29,78,216,0.09) 0%, transparent 70%); pointer-events: none; }
        .kf-orb3 { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 600px; height: 300px; border-radius: 50%; background: radial-gradient(ellipse, rgba(56,189,248,0.025) 0%, transparent 70%); pointer-events: none; }

        .kf-inner { position: relative; z-index: 2; max-width: 1100px; margin: 0 auto; padding: 60px 32px 48px; }
        .kf-grid { display: grid; grid-template-columns: 2fr 1.2fr 1.2fr 1.5fr; gap: 48px; }

        @media(max-width: 900px) { .kf-grid { grid-template-columns: 1fr 1fr; gap: 36px; } }
        @media(max-width: 580px) { .kf-grid { grid-template-columns: 1fr; gap: 32px; } }

        .kf-logo { font-family: 'Outfit', sans-serif; font-size: 22px; font-weight: 700; color: #f1f5f9; letter-spacing: -0.3px; margin-bottom: 14px; display: flex; align-items: center; gap: 8px; }
        .kf-tagline { font-size: 13.5px; color: #94a3b8; line-height: 1.8; margin-bottom: 22px; }
        .kf-badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(56,189,248,0.08); border: 1px solid rgba(56,189,248,0.20); border-radius: 20px; padding: 5px 12px; font-size: 12px; color: #38bdf8; margin-bottom: 22px; }
        .kf-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: #38bdf8; animation: kf-pulse 2s infinite; }

        .kf-socials { display: flex; gap: 8px; }
        .kf-social { width: 36px; height: 36px; border-radius: 10px; border: 1px solid rgba(56,189,248,0.22); background: rgba(56,189,248,0.04); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.25s; text-decoration: none; color: #94a3b8; font-size: 16px; }
        .kf-social:hover { background: rgba(56,189,248,0.14); border-color: #38bdf8; transform: translateY(-2px); color: #38bdf8; }

        .kf-col-title { font-size: 11px; font-weight: 600; color: #f1f5f9; letter-spacing: 2.5px; text-transform: uppercase; margin-bottom: 8px; }
        .kf-title-bar { width: 28px; height: 2px; border-radius: 2px; background: linear-gradient(90deg, #1d4ed8, #38bdf8); margin-bottom: 18px; }

        .kf-links { display: flex; flex-direction: column; gap: 2px; }
        .kf-link { display: flex; align-items: center; justify-content: space-between; font-size: 13.5px; color: #64748b; padding: 5px 0; text-decoration: none; border-radius: 6px; transition: color 0.2s; }
        .kf-link:hover { color: #e2e8f0; }
        .kf-link-arrow { font-size: 12px; color: #38bdf8; opacity: 0; transform: translateX(-6px); transition: all 0.2s; }
        .kf-link:hover .kf-link-arrow { opacity: 1; transform: translateX(0); }

        .kf-contact-item { display: flex; align-items: center; gap: 12px; font-size: 13.5px; color: #64748b; padding: 7px 0; text-decoration: none; transition: color 0.2s; cursor: pointer; border-bottom: 1px solid rgba(255,255,255,0.04); }
        .kf-contact-item:last-child { border-bottom: none; }
        .kf-contact-item:hover { color: #e2e8f0; }
        .kf-contact-icon { width: 32px; height: 32px; border-radius: 8px; background: rgba(56,189,248,0.08); border: 1px solid rgba(56,189,248,0.18); display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: all 0.2s; }
        .kf-contact-item:hover .kf-contact-icon { background: rgba(56,189,248,0.16); border-color: rgba(56,189,248,0.45); }

        .kf-stack-pill { display: flex; gap: 6px; flex-wrap: wrap; }
        .kf-pill { font-size: 11px; color: #38bdf8; background: rgba(56,189,248,0.08); border: 1px solid rgba(56,189,248,0.18); border-radius: 12px; padding: 3px 10px; font-weight: 500; }

        .kf-divider { height: 1px; background: rgba(56,189,248,0.10); margin: 0 32px; position: relative; z-index: 2; }
        .kf-bottom { max-width: 1100px; margin: 0 auto; padding: 18px 32px; display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap; }
        .kf-copy { font-size: 12.5px; color: #475569; }
        .kf-copy a { color: #38bdf8; text-decoration: none; font-weight: 500; }
        .kf-copy a:hover { color: #7dd3fc; }
        .kf-bottom-links { display: flex; gap: 20px; }
        .kf-bottom-link { font-size: 12px; color: #475569; text-decoration: none; cursor: pointer; transition: color 0.2s; }
        .kf-bottom-link:hover { color: #94a3b8; }
      `}</style>

      <footer className="kf-root">
        {/* Top gradient bar */}
        <div className="kf-top-bar" />

        {/* Background orbs */}
        <div className="kf-orb1" />
        <div className="kf-orb2" />
        <div className="kf-orb3" />

        {/* Main content */}
        <div className="kf-inner">
          <div className="kf-grid">

            {/* ── Brand Column ── */}
            <div>
              <div className="kf-logo">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect width="28" height="28" rx="7" fill="#1d4ed8" />
                  <path d="M8 14h4l2-5 3 10 2-5h1" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Kerodev
              </div>

              <div className="kf-badge">
                <span className="kf-badge-dot" />
                Available for new projects
              </div>

              <p className="kf-tagline">
                We craft intelligent, future-ready digital solutions — high-performance
                web, mobile, and AI systems that scale with your ambitions.
              </p>

              <div className="kf-stack-pill" style={{ marginBottom: "20px" }}>
                <span className="kf-pill">Web</span>
                <span className="kf-pill">Mobile</span>
                <span className="kf-pill">AI Systems</span>
              </div>

              {/* Social icons */}
              <div className="kf-socials">
                <Link className="kf-social" href="#" aria-label="Twitter">𝕏</Link>
                <Link className="kf-social" href="#" aria-label="LinkedIn">in</Link>
                <Link className="kf-social" href="#" aria-label="GitHub">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                </Link>
                <Link className="kf-social" href="#" aria-label="Dribbble">🏀</Link>
              </div>
            </div>

            {/* ── Services Column ── */}
            <div>
              <p className="kf-col-title">Services</p>
              <div className="kf-title-bar" />
              <div className="kf-links">
                {["Web Development", "Mobile Apps", "AI Integration", "UI/UX Design", "Consulting"].map((item) => (
                  <Link key={item} href="#" className="kf-link">
                    {item}
                    <span className="kf-link-arrow">→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* ── Company Column (Footerlinkdata se) ── */}
            <div>
              <p className="kf-col-title">Company</p>
              <div className="kf-title-bar" />
              <div className="kf-links">
                {Footerlinkdata.map((item) => (
                  <Link key={item.label} href={item.href} className="kf-link">
                    {item.label}
                    <span className="kf-link-arrow">→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* ── Contact Column ── */}
            <div>
              <p className="kf-col-title">Get in Touch</p>
              <div className="kf-title-bar" />

              <div>
                <Link href="tel:+923157449740" className="kf-contact-item">
                  <span className="kf-contact-icon">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.9 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.8 2.72h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </span>
                  (+92) 315-744-974
                </Link>

                <Link href="mailto:hi@kerodevs.com" className="kf-contact-item">
                  <span className="kf-contact-icon">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </span>
                  hi@kerodevs.com
                </Link>

                <div className="kf-contact-item">
                  <span className="kf-contact-icon">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </span>
                  275 Barki Rd,Grove Block Paragon City, Lahore, 54000, Pakistan
                </div>
              </div>

              {/* CTA card */}
              <div style={{
                marginTop: "18px",
                background: "linear-gradient(135deg, rgba(29,78,216,0.15), rgba(56,189,248,0.10))",
                border: "1px solid rgba(56,189,248,0.18)",
                borderRadius: "10px",
                padding: "14px 16px",
              }}>
                <p style={{ fontSize: "12px", color: "#94a3b8", marginBottom: "8px" }}>
                  Ready to start your project?
                </p>
                <Link href="mailto:hi@kerodevs.com" style={{
                  fontSize: "13px", fontWeight: 600, color: "#38bdf8",
                  textDecoration: "none", display: "flex", alignItems: "center", gap: "6px",
                }}>
                  Let&apos;s talk →
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="kf-divider" />

        {/* Bottom bar */}
        <div className="kf-bottom">
          <p className="kf-copy">
            © 2025 All rights reserved by{" "}
            <Link href="https://kerodev.com" target="_blank">Kerodev</Link>
          </p>
          <div className="kf-bottom-links">
            <Link href="#" className="kf-bottom-link">Privacy Policy</Link>
            <Link href="#" className="kf-bottom-link">Terms of Service</Link>
            <Link href="#" className="kf-bottom-link">Cookie Policy</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;