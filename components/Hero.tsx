"use client";

import React, { useEffect, useState } from "react";
import PixelBlast from "@/components/PixelBlast";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function Hero() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine effective theme for conditional rendering
  const currentTheme = mounted
    ? theme === "system"
      ? resolvedTheme
      : theme
    : "dark";
  const isLight = currentTheme === "light";

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-100">
        <PixelBlast
          variant="square"
          pixelSize={4}
          color={isLight ? "#3b82f6" : "#B19EEF"}
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1}
          speed={0.5}
          edgeFade={0.25}
          transparent
        />
      </div>
      {/* Gradient Overlay: Adapts to theme (white fade in light mode, black fade in dark mode) */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background pointer-events-none" />

      <div className="relative z-10 text-center px-4 flex flex-col items-center gap-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold font-nippo tracking-tighter"
        >
          Socio<span className="text-primary">nova</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light"
        >
          Premium Social Media Marketing & Growth Solutions
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <a
            href="#services"
            className="px-8 py-4 bg-foreground text-background rounded-full font-bold hover:opacity-90 transition-opacity"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-background/50 backdrop-blur-md border border-border text-foreground rounded-full font-bold hover:bg-muted transition-all duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
