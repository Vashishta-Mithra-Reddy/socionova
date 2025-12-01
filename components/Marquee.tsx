"use client";

import CurvedLoop from "@/components/CurvedLoop";

export default function Marquee() {
  return (
    <div className="bg-background/50 backdrop-blur-sm overflow-hidden">
      <CurvedLoop
        speed={1.2}
        curveAmount={200}
        direction="right"
        marqueeText="REVIEW MANAGEMENT ✦ ONLINE MARKETING ✦ PPC ADVERTISING ✦ EMAIL MARKETING ✦ GET YOUR FREE QUOTE ✦ "
      />
      {/* <CurvedLoop curveAmount={100} direction="left" marqueeText="REVIEW MANAGEMENT ✦ ONLINE MARKETING ✦ PPC ADVERTISING ✦ EMAIL MARKETING ✦ GET YOUR FREE QUOTE ✦ " /> */}
    </div>
  );
}
