"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const subject = encodeURIComponent("Newsletter Subscription");
    const body = encodeURIComponent(
      `Please subscribe ${email} to the newsletter.`,
    );
    window.location.href = `mailto:contact@socionova.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="newsletter" className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-nippo font-bold">
          Get Newsletter
        </h2>
        <p className="text-muted-foreground mt-3">
          Enter your email to receive latest news and updates
        </p>
      </motion.div>

      <form onSubmit={onSubmit} className="max-w-xl mx-auto flex gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="flex-1 px-4 py-3 rounded-xl border border-border bg-background text-foreground"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-xl bg-foreground text-background font-semibold hover:opacity-90 transition-opacity"
        >
          Submit now
        </button>
      </form>
    </section>
  );
}
