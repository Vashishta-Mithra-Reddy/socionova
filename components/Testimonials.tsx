"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";

const quotes = [
  "SocioNova improved our online visibility within weeks. Excellent service!",
  "Their review management system streamlined all our OTA feedback.",
  "Outstanding results with social media optimisation. Highly recommended.",
  "Our PPC campaigns performed better than ever after partnering with them.",
  "Professional, fast, and result-driven digital marketing solutions.",
  "SocioNova helped us boost customer engagement across all platforms.",
  "Their email marketing strategies brought us real conversions.",
  "Perfect agency for online reputation and review handling.",
  "We saw measurable growth through their online marketing efforts.",
  "Very responsive team with deep expertise in digital strategies.",
  "Transparent reporting and real performance.",
  "Great agency for long-term digital growth.",
];

const avatars = [
  "/avatars/Teamwork-1.svg",
  "/avatars/Teamwork-2.svg",
  "/avatars/Upstream-5.svg",
  "/avatars/E-commerce.svg",
  "/avatars/Teamwork-5.svg",
  "/avatars/Guacamole.svg",
  "/avatars/Teamwork-4.svg",
  "/avatars/Upstream-5.svg",
  "/avatars/Upstream-1.svg",
  "/avatars/Upstream-4.svg",
  "/avatars/Teamwork.svg",
  "/avatars/Upstream-6.svg",
];

export default function Testimonials() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? quotes.length : 6;
  return (
    <section id="feedback" className="py-24 px-4 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-nippo font-bold">
          Love from Clients
        </h2>
      </motion.div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AnimatePresence>
          {quotes.slice(0, visible).map((q, i) => (
            <motion.div
              key={i}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="p-6 rounded-[1.5rem] bg-card border border-border"
            >
              <div className="flex justify-start mb-3">
                <div className="w-12 h-12 rounded-full border border-border bg-background overflow-hidden">
                  <img
                    src={avatars[i % avatars.length]}
                    width={48}
                    height={48}
                    alt="Client avatar"
                    className="w-full h-full object-contain"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              </div>
              <div className="flex items-center gap-1 text-yellow-500 mb-3">
                <Star className="w-4 h-4 fill-yellow-500" />
                <Star className="w-4 h-4 fill-yellow-500" />
                <Star className="w-4 h-4 fill-yellow-500" />
                <Star className="w-4 h-4 fill-yellow-500" />
                <Star className="w-4 h-4 fill-yellow-500" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{q}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {!expanded && (
        <div className="mt-10 flex justify-center">
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => setExpanded(true)}
            className="px-6 py-3 rounded-xl bg-foreground text-background font-semibold hover:opacity-90 transition-opacity"
          >
            Show More Reviews
          </motion.button>
        </div>
      )}
    </section>
  );
}
