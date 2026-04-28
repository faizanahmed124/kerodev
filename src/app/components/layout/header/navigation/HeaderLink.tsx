"use client";
import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => item.submenu && setSubmenuOpen(true)}
      onMouseLeave={() => setSubmenuOpen(false)}
    >
      <Link
        href={item.href}
        className="flex items-center gap-0.5 text-sm font-semibold transition-all duration-200"
        style={{
          fontFamily: "'Outfit', sans-serif",
          color: "#1e3a5f",
          borderBottom: "2px solid transparent",
          paddingBottom: "2px",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.color = "#0ea5e9";
          (e.currentTarget as HTMLElement).style.borderBottomColor = "#38bdf8";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.color = "#1e3a5f";
          (e.currentTarget as HTMLElement).style.borderBottomColor = "transparent";
        }}
      >
        {item.label}
        {item.submenu && (
          <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round"
              strokeLinejoin="round" strokeWidth="1.5" d="m7 10l5 5l5-5" />
          </svg>
        )}
      </Link>

      {/* Submenu */}
      {submenuOpen && item.submenu && (
        <div
          className="absolute left-0 mt-2 w-52 rounded-xl overflow-hidden z-50"
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            boxShadow: "0 8px 30px rgba(30,58,95,0.12)",
          }}
          data-aos="fade-up"
          data-aos-duration="300"
        >
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className="block px-4 py-2.5 text-sm font-medium transition-all duration-150"
              style={{ fontFamily: "'Outfit', sans-serif", color: "#1e3a5f" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "#eff6ff";
                (e.currentTarget as HTMLElement).style.color = "#1d4ed8";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "#1e3a5f";
              }}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderLink;