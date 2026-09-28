"use client";

import React from "react";
import { Wallet, CircleDollarSign, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface HowToBeckonProps {
  currentCA: string;
}

export default function HowToBeckon({ currentCA }: HowToBeckonProps) {
  const steps = [
    {
      num: "01",
      title: "CREATE A WALLET",
      subtitle: "Phantom or Solflare",
      desc: "Download Phantom or Solflare wallet from official stores. Set up your secret recovery phrase and keep it offline and safe.",
      actionText: "Get Phantom Wallet",
      actionUrl: "https://phantom.app",
      icon: Wallet,
      bg: "bg-[#FFD166]",
    },
    {
      num: "02",
      title: "LOAD UP ON SOL",
      subtitle: "The Fuel for Fortune",
      desc: "Purchase SOL on Coinbase, Binance, Kraken, or directly within Phantom wallet, then transfer it to your public Solana wallet address.",
      actionText: "Buy SOL Directly",
      actionUrl: "https://phantom.app",
      icon: CircleDollarSign,
      bg: "bg-[#06D6A0]",
    },
    {
      num: "03",
      title: "BECKON ON PUMP.FUN",
      subtitle: "Swap SOL for $FUKU",
      desc: "Head over to Pump.fun, paste the official $FUKU Contract Address, select your desired SOL amount, and click Buy to join the Fortune Kitten family.",
      actionText: "Swap on Pump.fun",
      actionUrl: `https://pump.fun/coin/${currentCA}`,
      icon: ArrowUpRight,
      bg: "bg-[#E63946]",
      textColor: "text-white",
    },
  ];

  return (
    <section id="how-to-buy" className="py-20 px-4 bg-[#FFFDF0] border-b-4 border-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#FFD166] text-black border-2 border-black font-mono font-black text-xs uppercase px-3 py-1 mb-3 shadow-[2px_2px_0px_#000]">
            QUICK ONBOARDING
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-black tracking-tight uppercase">
            HOW TO <span className="text-[#06D6A0]">BECKON</span>
          </h2>
          <p className="text-gray-700 font-mono text-sm sm:text-base max-w-xl mx-auto mt-2">
            3 simple steps to get your paws right and align with the Fortune Kitten.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isWhiteText = step.textColor === "text-white";
            return (
              <div
                key={idx}
                className={`neo-box-lg ${step.bg} p-8 flex flex-col justify-between relative`}
              >
                {/* Step Big Number Badge */}
                <div className="flex justify-between items-center mb-6 border-b-3 border-black pb-4">
                  <span className="text-4xl font-black font-mono text-black bg-white px-3 py-1 border-2 border-black shadow-[3px_3px_0px_#000]">
                    STEP {step.num}
                  </span>
                  <div className="w-12 h-12 rounded-full border-3 border-black bg-white text-black flex items-center justify-center shadow-[2px_2px_0px_#000]">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="mb-8">
                  <div className={`text-xs font-mono font-bold uppercase tracking-wider mb-1 ${isWhiteText ? "text-white/80" : "text-gray-800"}`}>
                    {step.subtitle}
                  </div>
                  <h3 className={`text-2xl font-black uppercase mb-3 ${isWhiteText ? "text-white" : "text-black"}`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm font-bold leading-relaxed ${isWhiteText ? "text-white/90" : "text-gray-900"}`}>
                    {step.desc}
                  </p>
                </div>

                {/* Button */}
                <a
                  href={step.actionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full neo-btn bg-white text-black py-3 px-4 font-black text-sm uppercase text-center flex items-center justify-center gap-2 hover:bg-gray-100"
                >
                  <span>{step.actionText}</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Pro Tip Card */}
        <div className="mt-12 neo-box bg-[#FFF9D2] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-8 h-8 text-[#06D6A0] shrink-0" />
            <div>
              <div className="text-sm font-black text-black uppercase">
                DEGEN TIP: SLIPPAGE TOLERANCE
              </div>
              <div className="text-xs font-mono font-bold text-gray-700">
                Pump.fun auto-adjusts slippage, but during volatile green candles, set slippage to 1-3% to ensure your transactions execute smoothly.
              </div>
            </div>
          </div>
          <span className="neo-box-sm bg-[#E63946] text-white font-mono font-black text-xs px-3 py-1.5 uppercase shrink-0">
            FAST PRIORITY
          </span>
        </div>
      </div>
    </section>
  );
}
