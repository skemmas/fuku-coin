import type { Metadata } from "next";
import { Fredoka, Space_Mono } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fuku-coin.vercel.app"),
  title: "$FUKU — The Fortune Kitten | Solana's Lucky Beckoning Cat",
  description:
    "Some say he's just lucky. Others say he IS the luck. $FUKU is the viral Maneki-neko beckoning god candles and generational fortune on Solana pump.fun.",
  keywords: [
    "FUKU",
    "Fortune Kitten",
    "Maneki Neko",
    "Solana",
    "Pump.fun",
    "Memecoin",
    "Crypto",
    "Lucky Cat",
  ],
  openGraph: {
    title: "$FUKU — The Fortune Kitten | 100% Beckoned",
    description:
      "Strolling into the trenches with paw held high, inviting god candles and generational luck. Get your paws right.",
    images: ["/mascot.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "$FUKU — The Fortune Kitten",
    description: "The viral lucky cat memecoin on Solana pump.fun.",
    images: ["/mascot.jpg"],
  },
  icons: {
    icon: "/mascot.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${spaceMono.variable}`}>
      <body className="min-h-screen flex flex-col font-sans selection:bg-[#FFD166] selection:text-black">
        {children}
      </body>
    </html>
  );
}
