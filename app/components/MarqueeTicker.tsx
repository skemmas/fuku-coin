"use client";

import React from "react";

interface MarqueeTickerProps {
  variant?: "primary" | "secondary";
  customText?: string;
}

export default function MarqueeTicker({
  variant = "primary",
  customText,
}: MarqueeTickerProps) {
  const defaultItems = [
    "🐾 $FUKU",
    "SOME SAY HE'S LUCKY",
    "OTHERS SAY HE IS THE LUCK",
    "GET YOUR PAWS RIGHT",
    "100% BECKONED",
    "招福万来",
    "1,000,000,000 SUPPLY",
    "0% TAX",
    "GOD CANDLES ONLY",
    "LUCK OVER LEVERAGE",
  ];

  const content = customText ? [customText] : defaultItems;

  const bgStyles =
    variant === "primary"
      ? "bg-[#FFD166] text-black border-y-4 border-black"
      : "bg-[#E63946] text-white border-y-4 border-black";

  return (
    <div className={`overflow-hidden py-3 font-mono font-black text-sm sm:text-base tracking-wider ${bgStyles} select-none`}>
      <div className="animate-marquee whitespace-nowrap flex gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex gap-8 items-center">
            {content.map((item, idx) => (
              <span key={idx} className="flex items-center gap-3">
                <span>{item}</span>
                <span className="text-xs opacity-75">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
