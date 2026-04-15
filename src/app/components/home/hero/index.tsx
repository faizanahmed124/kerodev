"use client";

import { getImagePath } from "@/lib/utils/imagePath";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { useState, useEffect } from "react";

const Banner = () => {
  const [isOpen, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  // Typewriter state
  const words = ["Digital Solutions.", "Smart Systems.", "AI Products."];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (index === words.length) return;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(words[index].substring(0, subIndex + 1));
        setSubIndex(subIndex + 1);

        if (subIndex + 1 === words[index].length) {
          setDeleting(true);
        }
      } else {
        setText(words[index].substring(0, subIndex - 1));
        setSubIndex(subIndex - 1);

        if (subIndex === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, deleting ? 100 : 200);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <section className="relative pt-32 lg:pt-36 pb-24 overflow-hidden">
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">

          {/* Heading Line 1 */}
          <h1
            className="font-black uppercase leading-tight"
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(38px, 9vw, 80px)",
              color: "#E5E5E5",
              // WebkitTextStroke: "1px rgb(255,254,255)",
              letterSpacing: "7px",
            }}
          >
            Building Intelligent.
          </h1>

          {/* Heading Line 2 (TYPEWRITER FIXED HEIGHT) */}
          <h1
            className="mb-8 font-black leading-tight flex justify-center items-center"
            style={{
              fontFamily: "Syne",
              fontSize: "clamp(48px, 8vw, 100px)",
              letterSpacing: "8px",
              minHeight: "140px", // 🔥 IMPORTANT (no jumping)
            }}
          >
            <span
              style={{
                color: "#60b8ff",
                // WebkitTextStroke: "2px rgba(96,184,255,0.6)",
              }}
            >
              {text.split(" ")[0]}{" "}
            </span>

            <span style={{ color: "#60b8ff" }}>
              {text.split(" ").slice(1).join(" ")}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
        </div>
      </div>

      {/* MODAL */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-lg m-4">
            <div className="flex justify-between p-5">
              <h3 className="text-white">How It Works</h3>
              <button onClick={closeModal}>
                <Icon icon="tabler:circle-x" className="text-2xl text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Banner;