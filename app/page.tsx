"use client";

import React, { useState, useEffect, useRef } from "react";
import HeroSection from "./components/HeroSection";
import MarqueeTicker from "./components/MarqueeTicker";
import DailyOmikuji from "./components/DailyOmikuji";
import TheLore from "./components/TheLore";
import Tokenomics from "./components/Tokenomics";
import HowToBeckon from "./components/HowToBeckon";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";
import AdminModal from "./components/AdminModal";

const DEFAULT_CA = "MvmoYvZcekJT5v5rUAUK7dNngi2YDQzKRHRpT1Upump";

export default function Home() {
  const [ca, setCa] = useState<string>(DEFAULT_CA);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const keyBuffer = useRef<string[]>([]);

  // 1. Sync CA from API on load & poll periodically
  useEffect(() => {
    // Check localStorage cache first
    try {
      const cached = localStorage.getItem("fuku_active_ca");
      if (cached && cached.trim().length > 10) {
        setCa(cached.trim());
      }
    } catch {
      // ignore
    }

    const fetchCA = async () => {
      try {
        const res = await fetch("/api/ca", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (data?.ca) {
            setCa(data.ca);
            try {
              localStorage.setItem("fuku_active_ca", data.ca);
            } catch {
              // ignore
            }
          }
        }
      } catch {
        // Fallback remains active
      }
    };

    fetchCA();
    const interval = setInterval(fetchCA, 10000); // 10s auto-sync
    return () => clearInterval(interval);
  }, []);

  // 2. Secret Keystroke Listener for sequence 'j' -> 'k' -> 'l'
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore keystrokes when typing inside inputs/textareas
      const target = e.target as HTMLElement;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) {
        return;
      }

      const key = e.key.toLowerCase();
      keyBuffer.current.push(key);
      if (keyBuffer.current.length > 5) {
        keyBuffer.current.shift();
      }

      // Check if the last 3 keys pressed are 'j', 'k', 'l'
      const len = keyBuffer.current.length;
      if (
        len >= 3 &&
        keyBuffer.current[len - 3] === "j" &&
        keyBuffer.current[len - 2] === "k" &&
        keyBuffer.current[len - 1] === "l"
      ) {
        setIsAdminOpen(true);
        keyBuffer.current = [];
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCAUpdated = (newCA: string) => {
    setCa(newCA);
    try {
      localStorage.setItem("fuku_active_ca", newCA);
    } catch {
      // ignore
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#FFFDF0]">
      {/* Top Banner Ribbon */}
      <MarqueeTicker variant="secondary" />

      {/* Hero Section */}
      <HeroSection currentCA={ca} />

      {/* Mid-section Ribbon */}
      <MarqueeTicker variant="primary" />

      {/* Daily Degen Omikuji (Fortune Slip Drawer) */}
      <DailyOmikuji />

      {/* The Lore of The High Paw */}
      <TheLore />

      {/* Zero BS Tokenomics */}
      <Tokenomics />

      {/* How to Beckon Guide */}
      <HowToBeckon currentCA={ca} />

      {/* Fortune Multiplier Calculator */}
      <Calculator />

      {/* Footer */}
      <Footer currentCA={ca} onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* Secret Admin CA Master Panel Modal */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        currentCA={ca}
        onCAUpdated={handleCAUpdated}
      />
    </main>
  );
}
