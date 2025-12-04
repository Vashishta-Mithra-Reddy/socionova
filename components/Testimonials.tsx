"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";

const quotes = [
  {
    text: "SocioNova improved our online visibility within weeks. Excellent service!",
    name: "Aarav Patel",
    rating: 5,
  },
  {
    text: "Their review management system streamlined all our OTA feedback.",
    name: "Vihaan Gupta",
    rating: 5,
  },
  {
    text: "Outstanding results with social media optimisation. Highly recommended.",
    name: "Diya Sharma",
    rating: 5,
  },
  {
    text: "Our PPC campaigns performed better than ever after partnering with them.",
    name: "Sai Krishna",
    rating: 5,
  },
  {
    text: "Professional, fast, and result-driven digital marketing solutions.",
    name: "Ishaan Sharma",
    rating: 5,
  },
  {
    text: "SocioNova helped us boost customer engagement across all platforms.",
    name: "Ishita Verma",
    rating: 5,
  },
  {
    text: "Their email marketing strategies brought us real conversions.",
    name: "Anika Singh",
    rating: 5,
  },
  {
    text: "Perfect agency for online reputation and review handling.",
    name: "Sanya Mehta",
    rating: 5,
  },
  {
    text: "We saw measurable growth through their online marketing efforts.",
    name: "Vikram Reddy",
    rating: 5,
  },
  {
    text: "Very responsive team with deep expertise in digital strategies.",
    name: "Rahul Desai",
    rating: 4,
  },
  {
    text: "Transparent reporting and real performance.",
    name: "Meera Joshi",
    rating: 4,
  },
  {
    text: "Great agency for long-term digital growth.",
    name: "Arun Nair",
    rating: 4,
  },
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
        viewport={{ once: true, amount: 0.6 }}
        style={{ willChange: "transform, opacity" }}
        className="text-center mb-12 transform-gpu"
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
                <div className="ml-3 flex flex-col justify-center">
                  <h4 className="text-sm font-bold text-foreground mb-1">
                    {q.name}
                  </h4>
                  <div className="flex items-center gap-0.5 text-yellow-500">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star
                        key={starIdx}
                        className={`w-3 h-3 ${
                          starIdx < q.rating
                            ? "fill-yellow-500 text-yellow-500"
                            : "fill-muted text-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                "{q.text}"
              </p>
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
