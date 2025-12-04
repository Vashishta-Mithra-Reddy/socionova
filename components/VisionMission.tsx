"use client";

import { motion } from "framer-motion";
import { Target, Eye, Rocket, Lightbulb } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto relative overflow-hidden flicker-fix">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ ease: "easeIn", duration: 0.6 }}
        style={{ willChange: "transform, opacity" }}
        className="text-center mb-16 relative z-10 transform-gpu"
      >
        {/* <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
          OUR PURPOSE
        </span> */}
        <h2 className="text-4xl md:text-5xl font-nippo font-bold mb-2">
          Driving Digital Excellence
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
          Built on innovation, creativity, and excellence. Focused on measurable
          outcomes and customer-centric solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.1, ease: "easeIn", duration: 0.6 }}
          style={{ willChange: "transform, opacity" }}
          className="group p-10 rounded-[2.5rem] bg-card border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 relative overflow-hidden transform-gpu"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
            <Eye className="w-32 h-32 text-primary rotate-15" />
          </div>
          
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-4 font-nippo">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Empower businesses with strategic digital solutions that build
              trustworthy reputations and sustained growth. We aim to be a
              globally recognized leader known for reliability, transparency, and
              impact on business growth.
            </p>
            <div className="mt-8 flex gap-3">
              <span className="px-3 py-1 rounded-full bg-background border border-border text-xs font-medium flex items-center gap-1">
                <Lightbulb className="w-3 h-3" /> Innovation
              </span>
              <span className="px-3 py-1 rounded-full bg-background border border-border text-xs font-medium flex items-center gap-1">
                <Target className="w-3 h-3" /> Reliability
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.2, ease: "easeIn", duration: 0.6 }}
          style={{ willChange: "transform, opacity" }}
          className="group p-10 rounded-[2.5rem] bg-card border border-border hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 relative overflow-hidden transform-gpu"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
            <Target className="w-32 h-32 text-blue-500 -rotate-12" />
          </div>

          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Rocket className="w-7 h-7 text-blue-500" />
            </div>
            <h3 className="text-3xl font-bold mb-4 font-nippo">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Strengthen digital identity through accurate review management,
              targeted marketing, advanced advertising, and effective engagement.
              We deliver tailored strategies with actionable insights and
              consistent, sustainable success.
            </p>
            <div className="mt-8 flex gap-3">
              <span className="px-3 py-1 rounded-full bg-background border border-border text-xs font-medium flex items-center gap-1">
                <Target className="w-3 h-3" /> Impact
              </span>
              <span className="px-3 py-1 rounded-full bg-background border border-border text-xs font-medium flex items-center gap-1">
                <Rocket className="w-3 h-3" /> Growth
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
