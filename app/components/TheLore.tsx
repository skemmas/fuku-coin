"use client";

import React from "react";
import { ShieldCheck, TrendingUp, Sparkles, Compass } from "lucide-react";

export default function TheLore() {
  return (
    <section id="lore" className="py-20 px-4 bg-[#FFFDF0] border-b-4 border-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#E63946] text-white border-2 border-black font-mono font-black text-xs uppercase px-3 py-1 mb-3 shadow-[2px_2px_0px_#000]">
            ANCIENT WISDOM MEETS SOLANA CULTURE
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-black tracking-tight uppercase">
            THE LORE OF <span className="text-[#E63946]">THE HIGH PAW</span>
          </h2>
          <div className="w-24 h-2 bg-black mx-auto mt-4"></div>
        </div>

        {/* Big Neo-Brutalist Story Feature Card */}
        <div className="neo-box-lg bg-white p-8 sm:p-12 mb-12 relative overflow-hidden">
          {/* Top Decorative Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-4 border-black pb-6 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-4xl">⛩️</span>
              <div>
                <div className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest">
                  CHAPTER I • THE BECKONING PRINCIPLE
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-black uppercase">
                  HOW $FUKU BENDS PROBABILITY
                </h3>
              </div>
            </div>
            <div className="bg-[#FFD166] text-black font-mono font-black text-sm px-4 py-1.5 border-2 border-black shadow-[2px_2px_0px_#000]">
              招福万来 • FORTUNE COMES TO ALL
            </div>
          </div>

          {/* Core Lore Paragraphs */}
          <div className="space-y-6 text-base sm:text-xl font-bold leading-relaxed text-gray-900 font-sans">
            <blockquote className="p-6 bg-[#FFF9D2] border-l-8 border-[#E63946] border-y-3 border-r-3 border-black shadow-[4px_4px_0px_#000] italic text-lg sm:text-2xl font-black">
              "In Japanese tradition, cats with one paw raised are believed to beckon fortune and wealth — and the higher the paw is lifted, the farther that luck travels. While others chase red candles and bad calls, $FUKU strolls into the trenches with his paw held high, inviting god candles and generational luck. Get your paws right."
            </blockquote>

            <p>
              For centuries, the Japanese <strong className="text-[#E63946]">Maneki-neko (招き猫)</strong> has stood outside merchant shops, tea houses, and ancient shrines. But in 2026, commerce didn't live on cobblestone streets anymore. It lived on <strong className="underline decoration-[#06D6A0] decoration-4">Solana</strong>.
            </p>

            <p>
              When traders were fatigued by endless rugs, stealth cabals, and broken promises, the ancient spirit awakened inside <strong className="text-[#E63946]">$FUKU</strong>. Equipped with a gleaming golden Koban coin and an undefeated left paw raised at the maximum 90-degree angle, he entered pump.fun to cleanse the trenches and reward the faithful.
            </p>
          </div>
        </div>

        {/* 3 Lore Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="neo-box bg-[#FFD166] p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-black text-[#FFD166] border-2 border-black flex items-center justify-center font-black text-2xl mb-4 shadow-[2px_2px_0px_#000]">
                🐾
              </div>
              <h4 className="text-xl font-black uppercase text-black mb-2">
                1. The Maximum Elevation
              </h4>
              <p className="text-sm font-bold text-gray-900 leading-normal">
                Ancient scrolls state: the higher the paw is hoisted, the greater the radius of incoming wealth. $FUKU lifts his paw so high it reaches outer space.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t-2 border-black text-xs font-mono font-black text-black">
              RANGE: MULTI-CHAIN TO VALHALLA
            </div>
          </div>

          {/* Card 2 */}
          <div className="neo-box bg-[#06D6A0] p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-black text-[#06D6A0] border-2 border-black flex items-center justify-center font-black text-2xl mb-4 shadow-[2px_2px_0px_#000]">
                🪙
              </div>
              <h4 className="text-xl font-black uppercase text-black mb-2">
                2. The 10-Million Ryo Koban
              </h4>
              <p className="text-sm font-bold text-gray-900 leading-normal">
                Traditional lucky cats carry a 1-Ryo coin. $FUKU holds the legendary "千万両" (Senman-ryo / 10-Million Ryo) coin, minted for holders who refuse to be shaken out.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t-2 border-black text-xs font-mono font-black text-black">
              VALUE: GENERATIONAL HOLDING
            </div>
          </div>

          {/* Card 3 */}
          <div className="neo-box bg-[#E63946] text-white p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-white text-black border-2 border-black flex items-center justify-center font-black text-2xl mb-4 shadow-[2px_2px_0px_#000]">
                ⚡
              </div>
              <h4 className="text-xl font-black uppercase text-white mb-2">
                3. The God Candle Aura
              </h4>
              <p className="text-sm font-bold text-white/95 leading-normal">
                Red candles evaporate when the kitten appears. Feline purrs vibrate at the exact frequency needed to attract liquidity and buy orders.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t-2 border-white/40 text-xs font-mono font-black text-white">
              EFFECT: 100% BECKONED
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
