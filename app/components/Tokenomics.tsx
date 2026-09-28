"use client";

import React from "react";
import { Coins, Percent, Lock, Flame } from "lucide-react";

export default function Tokenomics() {
  const cards = [
    {
      title: "TOTAL SUPPLY",
      value: "1,000,000,000",
      subtext: "$FUKU TOKENS IN EXISTENCE",
      icon: Coins,
      bg: "bg-[#FFD166]",
      textColor: "text-black",
      badge: "FIXED CAP",
    },
    {
      title: "BUY / SELL TAX",
      value: "0% / 0%",
      subtext: "ZERO BS • ZERO HIDDEN FEES",
      icon: Percent,
      bg: "bg-[#06D6A0]",
      textColor: "text-black",
      badge: "ZERO EXTRACTION",
    },
    {
      title: "MINT AUTHORITY",
      value: "REVOKED",
      subtext: "IMMUTABLE SOLANA PROGRAM",
      icon: Lock,
      bg: "bg-white",
      textColor: "text-black",
      badge: "UNRUGGABLE",
    },
    {
      title: "LIQUIDITY POOL",
      value: "100% BURNT",
      subtext: "LOCKED FOREVER INTO THE VOID",
      icon: Flame,
      bg: "bg-[#E63946]",
      textColor: "text-white",
      badge: "BURNT TO ASHES",
    },
  ];

  return (
    <section id="tokenomics" className="py-20 px-4 bg-[#FFFDF0] bg-dot-pattern border-b-4 border-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#06D6A0] text-black border-2 border-black font-mono font-black text-xs uppercase px-3 py-1 mb-3 shadow-[2px_2px_0px_#000]">
            FAIR LAUNCH ARCHITECTURE
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-black tracking-tight uppercase">
            ZERO BS <span className="text-[#E63946]">TOKENOMICS</span>
          </h2>
          <p className="text-gray-700 font-mono text-sm sm:text-base max-w-xl mx-auto mt-2">
            No team allocations. No presale cabals. Pure decentralized feline luck on pump.fun.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`neo-box-lg ${card.bg} p-6 flex flex-col justify-between relative overflow-hidden`}
              >
                {/* Card Top Pill */}
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-mono font-black px-2.5 py-0.5 border-2 border-black bg-white text-black shadow-[2px_2px_0px_#000]">
                    {card.badge}
                  </span>
                  <div className="w-10 h-10 rounded-full border-2 border-black bg-black text-white flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Main Stats */}
                <div>
                  <div className={`text-xs font-mono font-bold uppercase tracking-wider mb-1 ${card.textColor === "text-white" ? "text-white/80" : "text-gray-700"}`}>
                    {card.title}
                  </div>
                  <div className={`text-3xl sm:text-4xl font-black tracking-tight mb-2 ${card.textColor}`}>
                    {card.value}
                  </div>
                  <div className={`text-xs font-mono font-bold ${card.textColor === "text-white" ? "text-white/90" : "text-gray-900"}`}>
                    {card.subtext}
                  </div>
                </div>

                {/* Decorative Bottom Corner Kanji */}
                <div className="mt-6 pt-3 border-t-2 border-black/30 flex justify-between items-center text-xs font-mono font-bold">
                  <span>100% COMMUNITY</span>
                  <span className="font-black text-base">福</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
