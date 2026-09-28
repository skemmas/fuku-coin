"use client";

import React, { useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { playCoinChime } from "../lib/audio";
import { Copy, Check, ExternalLink, ArrowRight, Zap, Flame } from "lucide-react";

interface HeroSectionProps {
  currentCA: string;
}

export default function HeroSection({ currentCA }: HeroSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(currentCA);
    }
    setCopied(true);
    playCoinChime();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#E63946", "#FFD166", "#06D6A0", "#000000"],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const pumpFunUrl = `https://pump.fun/coin/${currentCA}`;
  const dexScreenerUrl = `https://dexscreener.com/solana/${currentCA}`;

  return (
    <section className="relative pt-8 pb-16 px-4 bg-[#FFFDF0] bg-dot-pattern border-b-4 border-black overflow-hidden">
      {/* Neo-brutalist floating tags */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-3 mb-8">
        <div className="flex items-center gap-2">
          <span className="neo-box-sm bg-[#E63946] text-white text-xs font-mono font-black px-3 py-1 uppercase tracking-wider">
            ★ PUMP.FUN FAIR LAUNCH
          </span>
          <span className="hidden sm:inline-block neo-box-sm bg-[#06D6A0] text-black text-xs font-mono font-black px-3 py-1 uppercase tracking-wider">
            SOLANA DEGEN SHRINE
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 neo-box-sm bg-[#FFD166] text-black text-xs font-mono font-black px-3 py-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E63946] animate-ping"></span>
            100% BECKONED
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Heading, Copy CA, Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Main Title Badge */}
          <div className="inline-block bg-[#06D6A0] text-black border-3 border-black font-black px-3.5 py-1 text-sm uppercase tracking-widest shadow-[3px_3px_0px_#000] mb-4">
            招き猫 • THE GOD OF GENERATIONAL LUCK
          </div>

          <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black text-black tracking-tight leading-[0.95] uppercase mb-4">
            $FUKU <br />
            <span className="text-[#E63946] inline-block mt-1">THE FORTUNE</span> <br />
            <span className="underline decoration-[#FFD166] decoration-wavy decoration-4">KITTEN</span>
          </h1>

          <p className="text-xl sm:text-2xl font-black text-gray-800 tracking-wide mb-8 bg-[#FFD166]/50 p-2 border-l-4 border-black">
            "Some say he's just lucky. <span className="text-[#E63946]">Others say he IS the luck.</span>"
          </p>

          {/* 1-Click Copy CA Box */}
          <div className="w-full mb-8">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-mono font-black text-black uppercase tracking-wider flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-[#E63946] fill-current" />
                OFFICIAL SOLANA CONTRACT ADDRESS:
              </span>
              {copied && (
                <span className="text-xs font-mono font-black text-[#06D6A0] bg-black px-2 py-0.5 rounded animate-bounce">
                  ✨ COPIED! +777 LUCK
                </span>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch gap-2">
              <div
                onClick={handleCopy}
                className="flex-1 bg-white border-3 border-black p-3 font-mono text-xs sm:text-sm font-bold text-gray-900 break-all select-all flex items-center justify-between shadow-[4px_4px_0px_#000] cursor-pointer hover:bg-yellow-50 transition-colors"
                title="Click to copy CA"
              >
                <span>{currentCA}</span>
              </div>
              <button
                onClick={handleCopy}
                className="neo-btn bg-[#FFD166] text-black px-6 py-3 font-black text-sm uppercase flex items-center justify-center gap-2 hover:bg-[#ffc83b]"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" /> COPIED!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 stroke-[3]" /> COPY CA
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Chunky CTAs */}
          <div className="w-full flex flex-wrap gap-4 items-center">
            {/* Buy on Pump.fun */}
            <a
              href={pumpFunUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn bg-[#06D6A0] text-black px-8 py-4 text-lg sm:text-xl font-black uppercase tracking-wide flex items-center gap-2 hover:bg-[#04bd8c] rounded-full"
            >
              <span>BUY ON PUMP.FUN</span>
              <ArrowRight className="w-5 h-5 stroke-[3]" />
            </a>

            {/* DexScreener */}
            <a
              href={dexScreenerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn bg-[#FFD166] text-black px-6 py-4 text-base sm:text-lg font-black uppercase flex items-center gap-2 hover:bg-[#f5c345] rounded-full"
            >
              <span>DEXSCREENER</span>
              <ExternalLink className="w-4 h-4 stroke-[3]" />
            </a>

            {/* Telegram & X */}
            <div className="flex gap-2">
              <a
                href="https://t.me/fukukitten"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn bg-white text-black px-4 py-4 text-sm font-black uppercase rounded-full hover:bg-gray-100"
                title="Telegram"
              >
                TELEGRAM
              </a>
              <a
                href="https://x.com/fukukitten"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn bg-[#111] text-white px-4 py-4 text-sm font-black uppercase rounded-full hover:bg-black"
                title="X / Twitter"
              >
                X (TWITTER)
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Animated Mascot Display */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Background offset card decoration */}
            <div className="absolute inset-0 bg-[#E63946] border-4 border-black translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 -z-10"></div>

            {/* Main Picture Frame */}
            <div className="neo-box-lg bg-[#FFD166] p-4 sm:p-5 relative">
              {/* Frame Header Bar */}
              <div className="flex justify-between items-center border-b-3 border-black pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#E63946] border-2 border-black"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FFD166] border-2 border-black"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#06D6A0] border-2 border-black"></div>
                </div>
                <div className="font-mono text-xs font-black uppercase bg-black text-white px-2 py-0.5">
                  FIG. 01 — THE HIGH PAW
                </div>
              </div>

              {/* Image Container with Waving Animation */}
              <div className="relative w-full aspect-square border-4 border-black overflow-hidden bg-white group">
                <Image
                  src="/mascot.jpg"
                  alt="$FUKU The Fortune Kitten"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />

                {/* Animated Waving Paw Sticker Overlay */}
                <div className="absolute top-3 right-3 bg-[#E63946] text-white border-2 border-black px-2.5 py-1 text-xs font-mono font-black uppercase shadow-[3px_3px_0px_#000] flex items-center gap-1.5">
                  <span className="text-xl animate-waving-paw inline-block">🐾</span>
                  <span>BECKONING</span>
                </div>

                {/* Bottom Mascot Stamp */}
                <div className="absolute bottom-3 left-3 bg-[#06D6A0] text-black border-2 border-black px-2.5 py-1 text-xs font-mono font-black uppercase shadow-[3px_3px_0px_#000]">
                  招福 • 1 PAW = 100X
                </div>
              </div>

              {/* Mascot Caption */}
              <div className="mt-4 flex items-center justify-between text-xs font-mono font-black text-black">
                <span>MANEKI-NEKO ARCHETYPE</span>
                <span className="flex items-center gap-1 text-[#E63946]">
                  <Flame className="w-4 h-4 fill-current" /> PURE SOLANA LUCK
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
