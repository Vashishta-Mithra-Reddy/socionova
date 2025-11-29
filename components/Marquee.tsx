"use client";

import CurvedLoop from "@/components/CurvedLoop";

export default function Marquee() {
  return (
    <div className="py-10 border-y border-border/50 bg-background/50 backdrop-blur-sm overflow-hidden">
      <CurvedLoop marqueeText="SOCIAL MEDIA OPTIMIZATION • PREMIUM GROWTH • 24/7 SUPPORT • REAL RESULTS • " />
    </div>
  );
}
