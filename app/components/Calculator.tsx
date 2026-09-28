"use client";

import React, { useState } from "react";
import { Sparkles, Calculator as CalcIcon, Flame } from "lucide-react";

export default function Calculator() {
  const [solAmount, setSolAmount] = useState<number>(1);
  const estimatedTokensPerSol = 25000000; // 25M tokens per 1 SOL roughly on early bonding curve
  const currentTokens = solAmount * estimatedTokensPerSol;

  const targets = [
    { label: "BONDING CURVE COMPLETE", cap: "$69K", multiple: "1x", color: "bg-[#FFD166]" },
    { label: "RAYDIUM MIGRATION", cap: "$500K", multiple: "7.2x", color: "bg-[#06D6A0]" },
    { label: "TIER-1 VIRAL RUN", cap: "$5M", multiple: "72x", color: "bg-[#118AB2]" },
    { label: "FULL GOD-CANDLE LUCK", cap: "$50M", multiple: "720x", color: "bg-[#E63946]" },
  ];

  return (
    <section className="py-20 px-4 bg-[#FFFDF0] bg-dot-pattern border-b-4 border-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#FFD166] text-black border-2 border-black font-mono font-black text-xs uppercase px-3 py-1 mb-3 shadow-[2px_2px_0px_#000]">
            <CalcIcon className="w-3.5 h-3.5" />
            POTENTIAL PROJECTION ENGINE
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-black tracking-tight uppercase">
            FORTUNE <span className="text-[#E63946]">MULTIPLIER</span>
          </h2>
          <p className="text-gray-700 font-mono text-sm sm:text-base max-w-lg mx-auto mt-2">
            Calculate your beckoned bag size and simulate what happens when the high paw touches Solana.
          </p>
        </div>

        <div className="neo-box-lg bg-white p-6 sm:p-10">
          {/* Input slider / buttons */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2 font-mono">
              <label className="text-sm font-black text-black uppercase">
                SOL Input Amount:
              </label>
              <span className="text-xl font-black text-[#E63946] bg-[#FFF9D2] px-3 py-1 border-2 border-black">
                {solAmount} SOL
              </span>
            </div>

            <input
              type="range"
              min="0.1"
              max="20"
              step="0.1"
              value={solAmount}
              onChange={(e) => setSolAmount(parseFloat(e.target.value))}
              className="w-full h-3 bg-gray-200 border-2 border-black rounded-none appearance-none cursor-pointer accent-[#E63946]"
            />

            <div className="flex flex-wrap gap-2 mt-4 font-mono">
              {[0.5, 1, 2, 5, 10].map((val) => (
                <button
                  key={val}
                  onClick={() => setSolAmount(val)}
                  className={`neo-btn text-xs font-black px-3 py-1.5 uppercase ${
                    solAmount === val ? "bg-[#E63946] text-white" : "bg-[#FFF9D2] text-black"
                  }`}
                >
                  {val} SOL
                </button>
              ))}
            </div>
          </div>

          {/* Estimated Tokens Output */}
          <div className="bg-[#06D6A0] border-3 border-black p-4 mb-8 text-black shadow-[4px_4px_0px_#000] flex flex-col sm:flex-row justify-between items-center gap-2">
            <div>
              <div className="text-xs font-mono font-black uppercase text-black/80">
                ESTIMATED $FUKU BAG
              </div>
              <div className="text-2xl sm:text-3xl font-black font-mono">
                ~{currentTokens.toLocaleString()} $FUKU
              </div>
            </div>
            <div className="neo-box-sm bg-white text-black font-mono font-black text-xs px-3 py-1">
              PAW ALLOCATION: ~{((currentTokens / 1000000000) * 100).toFixed(2)}%
            </div>
          </div>

          {/* Milestone Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
            {targets.map((t, idx) => (
              <div
                key={idx}
                className={`neo-box p-4 ${t.color} text-black flex flex-col justify-between`}
              >
                <div>
                  <div className="text-[10px] font-black uppercase text-black/75">
                    {t.label}
                  </div>
                  <div className="text-xl font-black">{t.cap} MCAP</div>
                </div>
                <div className="mt-4 pt-2 border-t-2 border-black flex justify-between items-center text-xs font-black">
                  <span>MULTIPLIER:</span>
                  <span className="bg-black text-white px-1.5 py-0.5">{t.multiple}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
