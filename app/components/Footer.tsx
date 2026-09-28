"use client";

import React from "react";
import { ExternalLink, Heart, KeyRound } from "lucide-react";

interface FooterProps {
  currentCA: string;
  onOpenAdmin: () => void;
}

export default function Footer({ currentCA, onOpenAdmin }: FooterProps) {
  const pumpFunUrl = `https://pump.fun/coin/${currentCA}`;
  const dexScreenerUrl = `https://dexscreener.com/solana/${currentCA}`;

  return (
    <footer className="bg-[#111111] text-white border-t-4 border-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-3xl">🐾</span>
              <span className="text-3xl font-black tracking-tight text-[#FFD166]">
                $FUKU
              </span>
              <span className="text-xs bg-[#E63946] text-white px-2 py-0.5 font-mono font-bold border border-white">
                SOLANA
              </span>
            </div>
            <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-sm mb-4">
              The Fortune Kitten of Solana. Strolling through the trenches with one paw held high, inviting god candles and generational luck to all who believe.
            </p>
            <div className="text-xs font-mono text-gray-500">
              Contract Address:
              <div className="text-gray-300 font-bold break-all select-all mt-1 bg-black p-2 border border-gray-800">
                {currentCA}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 font-mono">
            <div className="text-sm font-black text-[#06D6A0] uppercase tracking-wider mb-4">
              SHRINE NAVIGATION
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#lore" className="hover:text-[#FFD166] transition-colors">
                  ➔ The Lore of High Paw
                </a>
              </li>
              <li>
                <a href="#tokenomics" className="hover:text-[#FFD166] transition-colors">
                  ➔ Zero BS Tokenomics
                </a>
              </li>
              <li>
                <a href="#omikuji" className="hover:text-[#FFD166] transition-colors">
                  ➔ Daily Degen Omikuji
                </a>
              </li>
              <li>
                <a href="#how-to-buy" className="hover:text-[#FFD166] transition-colors">
                  ➔ How to Beckon $FUKU
                </a>
              </li>
            </ul>
          </div>

          {/* Community & Socials */}
          <div className="md:col-span-4 font-mono">
            <div className="text-sm font-black text-[#FFD166] uppercase tracking-wider mb-4">
              OFFICIAL CHANNELS
            </div>
            <div className="flex flex-col gap-2.5">
              <a
                href={pumpFunUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn bg-[#06D6A0] text-black py-2.5 px-4 text-xs font-black uppercase flex items-center justify-between hover:bg-[#05b386]"
              >
                <span>TRADE ON PUMP.FUN</span>
                <ExternalLink className="w-3.5 h-3.5 stroke-[3]" />
              </a>
              <a
                href={dexScreenerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn bg-[#FFD166] text-black py-2.5 px-4 text-xs font-black uppercase flex items-center justify-between hover:bg-[#ffc83b]"
              >
                <span>DEXSCREENER CHART</span>
                <ExternalLink className="w-3.5 h-3.5 stroke-[3]" />
              </a>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://t.me/fukukitten"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn bg-white text-black py-2 px-3 text-xs font-black uppercase text-center hover:bg-gray-200"
                >
                  TELEGRAM
                </a>
                <a
                  href="https://x.com/fukukitten"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn bg-[#E63946] text-white py-2 px-3 text-xs font-black uppercase text-center hover:bg-red-700"
                >
                  X (TWITTER)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 pt-8 pb-4 text-xs text-gray-400 font-mono leading-relaxed">
          <p className="mb-3">
            <strong className="text-white">DISCLAIMER:</strong> $FUKU is a viral memecoin created solely for entertainment and community purposes inspired by Japanese folklore and Solana culture. It does not represent any financial investment, company shares, or guarantee of monetary return. Cryptocurrency trading carries substantial risk. Only beckon what you can afford to risk.
          </p>
          <div className="flex flex-wrap justify-between items-center gap-4 text-gray-400 pt-4 border-t border-gray-900">
            <div>&copy; 2026 $FUKU — The Fortune Kitten. All paws reserved.</div>
            
            {/* Secret Master Panel Access Trigger */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-gray-400">Press [J+K+L] or</span>
              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-900 border border-gray-700 text-gray-300 text-xs font-mono hover:text-[#FFD166] hover:border-[#FFD166] transition-colors rounded"
                title="Shrine Master Admin Panel (Press J then K then L)"
              >
                <KeyRound className="w-3 h-3 text-[#FFD166]" />
                <span>Shrine Portal</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
