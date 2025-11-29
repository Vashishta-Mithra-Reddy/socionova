import type { Metadata } from "next";
import { Geist, Geist_Mono, Silkscreen } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "@/components/providers/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const silkScreen = Silkscreen({
  variable: "--font-silkscreen",
  subsets: ["latin"],
  weight: "400",
});

const clashDisplay = localFont({
  src: "./fonts/clashdisplay.woff2",
  variable: "--font-clash-display",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nippo = localFont({
  src: "./fonts/nippo.woff2",
  variable: "--font-nippo",
});

export const metadata: Metadata = {
  title: "Socionova | SMM & Growth Platform",
  description:
    "Premium Social Media Marketing services for Facebook, Instagram, YouTube, Telegram and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${nippo.variable} ${geistSans.variable} ${geistMono.variable} ${silkScreen.variable} ${clashDisplay.variable} antialiased`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
