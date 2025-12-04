"use client";

import React, { useEffect, useState } from "react";
import GradientBlinds from "./GradientBlinds";
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
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-100 hidden dark:block">
        <GradientBlinds
          gradientColors={["#000040", "#5227ff"]}
          angle={20}
          noise={0.3}
          blindCount={18}
          blindMinWidth={60}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={0.6}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      </div>
      {/* Gradient Overlay: Adapts to theme (white fade in light mode, black fade in dark mode) */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background pointer-events-none" />

      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
          className="text-5xl md:text-6xl font-bold font-nippo tracking-tighter mb-4 transform-gpu max-w-4xl leading-tight"
        >
          The Only Marketing Agency <span className="text-primary">You'll Ever Need.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          style={{ willChange: "transform, opacity" }}
          className="text-lg md:text-2xl text-muted-foreground max-w-xl font-light mb-8 transform-gpu"
        >
          Social media and PPC solutions designed to make your business unforgettable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ willChange: "transform, opacity" }}
          className="flex flex-col sm:flex-row gap-4 transform-gpu"
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
            Get Free Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
