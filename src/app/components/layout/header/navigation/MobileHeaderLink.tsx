"use client";
import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <div className="w-full">
      <div
        className="flex items-center justify-between w-full rounded-xl px-4 py-3 mb-1 transition-all duration-200 cursor-pointer"
        style={{
          background: submenuOpen ? "rgba(56,189,248,0.08)" : "transparent",
          border: submenuOpen ? "1px solid rgba(56,189,248,0.25)" : "1px solid transparent",
        }}
        onMouseEnter={e => {
          if (!submenuOpen)
            (e.currentTarget as HTMLElement).style.background = "rgba(56,189,248,0.05)";
        }}
        onMouseLeave={e => {
          if (!submenuOpen)
            (e.currentTarget as HTMLElement).style.background = "transparent";
        }}
        onClick={() => item.submenu && setSubmenuOpen(!submenuOpen)}
      >
        <Link
          href={item.submenu ? "#" : item.href}
          onClick={e => item.submenu && e.preventDefault()}
          className="flex-1 text-sm font-semibold tracking-wide"
          style={{ fontFamily: "'Outfit', sans-serif", color: "#1e3a5f" }}
        >
          {item.label}
        </Link>

        {item.submenu && (
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0"
            style={{
              background: submenuOpen ? "rgba(56,189,248,0.2)" : "rgba(30,58,95,0.06)",
              transform: submenuOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="m7 10 5 5 5-5" stroke="#0ea5e9" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}
      </div>

      {/* Submenu */}
      {submenuOpen && item.submenu && (
        <div
          className="ml-4 mb-2 rounded-xl overflow-hidden"
          style={{ border: "1px solid rgba(56,189,248,0.15)", background: "#f8fbff" }}
        >
          {item.submenu.map((subItem, i) => (
            <Link
              key={i}
              href={subItem.href}
              className="flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-150"
              style={{ fontFamily: "'Outfit', sans-serif", color: "#475569", borderBottom: i < item.submenu!.length - 1 ? "1px solid rgba(56,189,248,0.1)" : "none" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(56,189,248,0.08)";
                (e.currentTarget as HTMLElement).style.color = "#1d4ed8";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "#475569";
              }}
            >
              {/* dot accent */}
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "#38bdf8" }} />
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;