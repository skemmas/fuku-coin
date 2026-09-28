"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { playTempleBell, playCoinChime } from "../lib/audio";
import { Sparkles, Share2, RotateCcw } from "lucide-react";

interface Fortune {
  rank: string;
  kanji: string;
  badgeBg: string;
  badgeText: string;
  title: string;
  prediction: string;
  luckyNumber: string;
  luckyHour: string;
  luckyPair: string;
}

const FORTUNES: Fortune[] = [
  {
    rank: "DAIKICHI",
    kanji: "大吉",
    badgeBg: "bg-[#E63946]",
    badgeText: "text-white",
    title: "GOD CANDLE INCOMING",
    prediction:
      "A Tier-1 whale fat-fingers a market buy directly into your bag. Generational wealth has been beckoned straight to your Phantom wallet.",
    luckyNumber: "777",
    luckyHour: "04:20 UTC",
    luckyPair: "SOL / $FUKU",
  },
  {
    rank: "CHUKICHI",
    kanji: "中吉",
    badgeBg: "bg-[#06D6A0]",
    badgeText: "text-black",
    title: "YOUR DIP GETS EATEN INSTANTLY",
    prediction:
      "Every red wick you see will be consumed in under 60 seconds. The community is relentless and the feline paw remains held high.",
    luckyNumber: "888",
    luckyHour: "13:37 UTC",
    luckyPair: "SOL / $FUKU",
  },
  {
    rank: "KICHI",
    kanji: "吉",
    badgeBg: "bg-[#FFD166]",
    badgeText: "text-black",
    title: "DEV IS SLEEPING, CHART IS PUMPING",
    prediction:
      "Zero intervention required. The natural organic energy of the Fortune Kitten carries the floor price past previous resistance lines.",
    luckyNumber: "108",
    luckyHour: "02:15 UTC",
    luckyPair: "SOL / $FUKU",
  },
  {
    rank: "SHOKICHI",
    kanji: "小吉",
    badgeBg: "bg-[#118AB2]",
    badgeText: "text-white",
    title: "SASHIMI GAINS UNLOCKED",
    prediction:
      "A brisk 5x–10x greets your portfolio before market close. Take initial, buy your real-life cat the highest quality salmon on earth.",
    luckyNumber: "99",
    luckyHour: "18:00 UTC",
    luckyPair: "SOL / $FUKU",
  },
  {
    rank: "HANKICHI",
    kanji: "半吉",
    badgeBg: "bg-[#073B4C]",
    badgeText: "text-white",
    title: "SIXTH SENSE SHIELD ACTIVATED",
    prediction:
      "Your feline instincts kick in right on time. You sidestep 3 cabal copycats and 2 fake tokens to hold the one true Fortune Kitten.",
    luckyNumber: "222",
    luckyHour: "09:30 UTC",
    luckyPair: "SOL / $FUKU",
  },
  {
    rank: "SUEKICHI",
    kanji: "末吉",
    badgeBg: "bg-[#F77F00]",
    badgeText: "text-white",
    title: "JEET CAPITULATION -> PARABOLIC RUN",
    prediction:
      "The paper hands dump at the bottom. $FUKU scoops the liquidity floor and initiates the legendary multi-day green ladder.",
    luckyNumber: "404",
    luckyHour: "23:59 UTC",
    luckyPair: "SOL / $FUKU",
  },
  {
    rank: "TOKUKICHI",
    kanji: "特吉",
    badgeBg: "bg-[#FF007A]",
    badgeText: "text-white",
    title: "DIVINE MANEKI-NEKO BLESSING",
    prediction:
      "The golden koban coin shines directly into your soul. You are now the luck. Every transaction you touch turns into Solana green.",
    luckyNumber: "1000X",
    luckyHour: "ALL DAY",
    luckyPair: "SOL / $FUKU",
  },
];

export default function DailyOmikuji() {
  const [isShaking, setIsShaking] = useState(false);
  const [currentFortune, setCurrentFortune] = useState<Fortune | null>(null);

  const drawFortune = () => {
    if (isShaking) return;
    setIsShaking(true);
    playTempleBell();

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * FORTUNES.length);
      const chosen = FORTUNES[randomIndex];
      setCurrentFortune(chosen);
      setIsShaking(false);
      playCoinChime();

      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#E63946", "#FFD166", "#06D6A0", "#000000"],
      });
    }, 1200);
  };

  const shareOnX = () => {
    if (!currentFortune) return;
    const tweetText = `🐾 I just pulled "${currentFortune.rank} (${currentFortune.kanji})" on the $FUKU Daily Degen Omikuji!\\n\\n"${currentFortune.prediction}"\\n\\nLucky Pair: ${currentFortune.luckyPair} | Number: ${currentFortune.luckyNumber}\\n\\nBeckon your fortune:`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweetText
    )}&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "https://fuku-coin.vercel.app")}`;
    window.open(url, "_blank");
  };

  return (
    <section id="omikuji" className="py-20 px-4 bg-[#FFFDF0] relative border-b-4 border-black">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FFD166] text-black border-2 border-black font-mono font-bold text-xs uppercase px-3 py-1 mb-3 shadow-[2px_2px_0px_#000]">
            <Sparkles className="w-3.5 h-3.5 text-[#E63946]" />
            SHRINE RITUAL • 毎日のおみくじ
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-black tracking-tight uppercase">
            Daily Degen <span className="text-[#E63946]">Omikuji</span>
          </h2>
          <p className="text-gray-700 font-mono text-sm sm:text-base max-w-xl mx-auto mt-2">
            Draw your sacred crypto fortune slip directly from the high paw of $FUKU.
            Will you summon a god candle or eat the dip?
          </p>
        </div>

        {/* Fortune Cylinder Box Area */}
        <div className="flex flex-col items-center">
          {!currentFortune ? (
            <div className="neo-box-lg bg-[#FFD166] p-8 sm:p-12 text-center max-w-md w-full">
              {/* Wooden Cylinder Visual */}
              <div
                className={`w-32 h-44 mx-auto mb-6 bg-[#E63946] border-4 border-black shadow-[6px_6px_0px_#000] rounded-xl flex flex-col items-center justify-between p-3 relative ${
                  isShaking ? "animate-shake" : ""
                }`}
              >
                <div className="w-full bg-[#111] h-3 rounded-full border border-white/20"></div>
                <div className="text-center text-white">
                  <div className="text-3xl font-black mb-1">福</div>
                  <div className="text-[10px] font-mono tracking-widest uppercase text-yellow-300">
                    OMIKUJI
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full bg-[#FFD166] border-2 border-black flex items-center justify-center text-[10px] font-bold">
                  ★
                </div>
              </div>

              <h3 className="text-2xl font-black text-black uppercase mb-2">
                The Shrine Cylinder is Ready
              </h3>
              <p className="text-xs font-mono text-gray-800 mb-6">
                Shake the cylinder to release your divine Solana trade prediction.
              </p>

              <button
                onClick={drawFortune}
                disabled={isShaking}
                className="w-full neo-btn bg-[#06D6A0] text-black py-4 px-6 text-lg font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#05b386]"
              >
                {isShaking ? (
                  <>
                    <span className="inline-block animate-spin">🌀</span> SHAKING SHRINE...
                  </>
                ) : (
                  <>
                    <span>🐾</span> DRAW FORTUNE SLIP
                  </>
                )}
              </button>
            </div>
          ) : (
            /* Revealed Fortune Slip */
            <div className="neo-box-lg bg-white p-6 sm:p-10 max-w-lg w-full text-black relative animate-in zoom-in-95 duration-200">
              {/* Slip Top Seal */}
              <div className="flex justify-between items-center border-b-4 border-black pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <span
                    className={`${currentFortune.badgeBg} ${currentFortune.badgeText} text-2xl sm:text-3xl font-black px-3 py-1 border-3 border-black shadow-[3px_3px_0px_#000]`}
                  >
                    {currentFortune.kanji}
                  </span>
                  <div>
                    <div className="text-xs font-mono font-bold text-gray-500 uppercase">
                      Rank Classification
                    </div>
                    <div className="text-xl font-black tracking-wide">
                      {currentFortune.rank}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#E63946] flex items-center justify-center text-[#E63946] font-bold text-xs rotate-12">
                    招福
                  </div>
                </div>
              </div>

              {/* Title & Prediction */}
              <div className="mb-6">
                <h4 className="text-2xl font-black uppercase text-[#E63946] mb-3 leading-tight">
                  "{currentFortune.title}"
                </h4>
                <p className="text-base sm:text-lg font-medium leading-relaxed bg-[#FFFDF0] p-4 border-2 border-black font-sans shadow-[2px_2px_0px_#000]">
                  {currentFortune.prediction}
                </p>
              </div>

              {/* Lucky Indicators Grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6 font-mono text-center">
                <div className="bg-[#FEF9E7] border-2 border-black p-2 shadow-[2px_2px_0px_#000]">
                  <div className="text-[10px] text-gray-600 font-bold uppercase">Lucky Number</div>
                  <div className="text-base font-black text-black">{currentFortune.luckyNumber}</div>
                </div>
                <div className="bg-[#FEF9E7] border-2 border-black p-2 shadow-[2px_2px_0px_#000]">
                  <div className="text-[10px] text-gray-600 font-bold uppercase">Lucky Hour</div>
                  <div className="text-base font-black text-black">{currentFortune.luckyHour}</div>
                </div>
                <div className="bg-[#FEF9E7] border-2 border-black p-2 shadow-[2px_2px_0px_#000]">
                  <div className="text-[10px] text-gray-600 font-bold uppercase">Lucky Pair</div>
                  <div className="text-xs font-black text-[#E63946] mt-1">{currentFortune.luckyPair}</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={shareOnX}
                  className="flex-1 neo-btn bg-[#111] text-white py-3 px-4 font-black text-sm uppercase flex items-center justify-center gap-2 hover:bg-black"
                >
                  <Share2 className="w-4 h-4 text-[#FFD166]" /> Share on X
                </button>
                <button
                  onClick={() => setCurrentFortune(null)}
                  className="neo-btn bg-[#FFD166] text-black py-3 px-4 font-black text-sm uppercase flex items-center justify-center gap-2 hover:bg-[#ffe082]"
                >
                  <RotateCcw className="w-4 h-4" /> Draw Again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
