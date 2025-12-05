"use client";

import { motion } from "framer-motion";
import { team } from "@/lib/data";

// Animation Variants for cleaner code
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Team() {
  const founder = team.find((m) => m.role.toLowerCase() === "founder");
  const others = team.filter((m) => m.role.toLowerCase() !== "founder");

  return (
    <section id="team" className="py-24 px-4 md:px-12 bg-secondary/20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ willChange: "transform, opacity" }}
          className="mb-20 text-center max-w-2xl mx-auto transform-gpu"
        >
          <h2 className="text-4xl md:text-5xl font-nippo font-bold mb-2 tracking-tight">
            The Team
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl leading-relaxed">
            The creative and technical minds dedicated to your exponential growth.
          </p>
        </motion.div>

        {/* Main Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ willChange: "transform, opacity" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center transform-gpu"
        >
          {/* 1. Founder Column (Takes up 4 cols on large screens) */}
          {founder && (
            <div className="lg:col-span-4 flex justify-center lg:justify-end lg:pr-8 border-b lg:border-b-0 lg:border-r border-zinc-200/50 dark:border-zinc-800 pb-12 lg:pb-0">
              <motion.div
                variants={itemVariants as any}
                className="flex flex-col items-center text-center group w-full max-w-xs"
              >
                <div className="relative mb-6 rounded-full p-1.5 border-2 border-transparent group-hover:border-primary/50 transition-colors duration-500">
                  <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-2xl">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-nippo tracking-wide text-foreground">
                    {founder.name}
                  </h3>
                  <div className="px-3 py-1 inline-block rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider">
                    {founder.role}
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* 2. Others Grid (Takes up 8 cols on large screens) */}
          <div className={`${founder ? 'lg:col-span-8' : 'lg:col-span-12'} w-full`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12 justify-items-center">
              {others.map((member) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants as any}
                  className="flex flex-col items-center text-center group w-full max-w-[200px]"
                >
                  {/* Image Container */}
                  <div className="relative mb-5 w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-lg border-4 border-background group-hover:border-primary/20 transition-all duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-500 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="transition-transform duration-300 group-hover:-translate-y-1">
                    <h3 className="text-lg font-bold font-nippo text-foreground/90">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mt-1">
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}