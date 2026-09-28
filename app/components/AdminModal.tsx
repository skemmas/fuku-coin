"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { playTempleBell } from "../lib/audio";

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentCA: string;
  onCAUpdated: (newCA: string) => void;
}

export default function AdminModal({
  isOpen,
  onClose,
  currentCA,
  onCAUpdated,
}: AdminModalProps) {
  const [passcode, setPasscode] = useState("");
  const [newCA, setNewCA] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      setNewCA(currentCA);
      setStatus("idle");
      setErrorMessage("");
      playTempleBell();
    }
  }, [isOpen, currentCA]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passcode) {
      setErrorMessage("Shrine Passcode is required!");
      return;
    }
    if (!newCA || newCA.trim().length < 10) {
      setErrorMessage("Please provide a valid Contract Address.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/ca", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passcode: passcode.trim(), ca: newCA.trim() }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        onCAUpdated(data.ca);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#E63946", "#FFD166", "#06D6A0", "#000000"],
        });
        setTimeout(() => {
          onClose();
        }, 1500);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to update Contract Address");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error connecting to Shrine API.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#FFFDF0] border-4 border-black p-6 sm:p-8 shadow-[10px_10px_0px_#000]">
        {/* Header */}
        <div className="flex items-start justify-between border-b-4 border-black pb-4 mb-6">
          <div>
            <div className="inline-block bg-[#E63946] text-white text-xs font-mono font-bold px-2 py-0.5 border-2 border-black mb-1">
              TOP SECRET • SHRINE MASTER ONLY
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black flex items-center gap-2">
              <span>🐾</span> Fuku Shrine Master Panel
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 border-2 border-black bg-[#FFD166] text-black font-black text-xl hover:bg-[#E63946] hover:text-white transition-colors flex items-center justify-center shadow-[2px_2px_0px_#000]"
          >
            ✕
          </button>
        </div>

        {/* Current Active CA */}
        <div className="bg-[#FFF9D2] border-2 border-black p-3 mb-6">
          <p className="text-xs font-mono font-bold text-gray-700 uppercase tracking-wider mb-1">
            Current Active CA:
          </p>
          <p className="font-mono text-xs sm:text-sm font-bold text-black break-all select-all">
            {currentCA}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-black text-black mb-1 font-mono uppercase">
              1. Admin Shrine Passcode:
            </label>
            <input
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="Enter passcode (default: fuku2026)"
              className="w-full border-3 border-black p-3 font-mono text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#FFD166] shadow-[3px_3px_0px_#000]"
              required
            />
            <p className="text-[11px] text-gray-500 font-mono mt-1">
              Default password: <code className="bg-yellow-100 px-1 py-0.5 border border-black font-bold">fuku2026</code>
            </p>
          </div>

          <div>
            <label className="block text-sm font-black text-black mb-1 font-mono uppercase">
              2. New Contract Address (Pump.fun CA):
            </label>
            <input
              type="text"
              value={newCA}
              onChange={(e) => setNewCA(e.target.value)}
              placeholder="e.g. FUKU7x8Kz9pP2vX6mQ4wE1yR3tL8jH5nB4sD6uC9pump"
              className="w-full border-3 border-black p-3 font-mono text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#06D6A0] shadow-[3px_3px_0px_#000]"
              required
            />
          </div>

          {errorMessage && (
            <div className="bg-[#FFCCD5] border-2 border-[#E63946] p-3 text-xs sm:text-sm font-bold text-[#E63946] font-mono">
              ⚠️ {errorMessage}
            </div>
          )}

          {status === "success" && (
            <div className="bg-[#D8F3DC] border-2 border-[#06D6A0] p-3 text-xs sm:text-sm font-bold text-emerald-900 font-mono">
              ✨ CA UPDATED! All links & copy boxes synced across the realm!
            </div>
          )}

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              disabled={status === "loading"}
              className="flex-1 neo-btn bg-[#06D6A0] text-black py-3 px-4 font-black text-base uppercase tracking-wider disabled:opacity-50"
            >
              {status === "loading" ? "SYNCING TO SHRINE..." : "⚡ UPDATE LIVE CA NOW"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="neo-btn bg-white text-black py-3 px-4 font-bold text-base uppercase font-mono"
            >
              Cancel
            </button>
          </div>
        </form>

        <p className="text-center text-[10px] font-mono text-gray-500 mt-4">
          Secret Trigger: Press <kbd className="bg-gray-200 border px-1">J</kbd> +{" "}
          <kbd className="bg-gray-200 border px-1">K</kbd> +{" "}
          <kbd className="bg-gray-200 border px-1">L</kbd> on any page.
        </p>
      </div>
    </div>
  );
}
