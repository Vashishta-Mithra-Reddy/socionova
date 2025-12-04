"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹1999 /mo",
    popular: false,
    accent: "border-slate-400/40",
    features: [
      "Increase traffic 130%",
      "Backlink analysis",
      "Organic traffic growth",
      "10 Free Optimization",
      "24/7 Customer support",
    ],
  },
  {
    name: "Basic",
    price: "₹4990 /mo",
    popular: true,
    accent: "border-primary/40",
    features: [
      "Includes everything in Starter",
      "25 Analytics Campaigns",
      "1,300 Keywords",
      "25 social media reviews",
      "25 Free Optimization",
      "24/7 support",
    ],
  },
  {
    name: "Business",
    price: "₹9990 /mo",
    popular: false,
    accent: "border-emerald-400/40",
    features: [
      "Includes everything in Basic",
      "Increase traffic 130%",
      "Backlink analysis",
      "Organic traffic generation 215%",
      "35 Optimization",
      "All Social Media leads",
      "24/7 support",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 px-4 md:px-12 max-w-7xl mx-auto flicker-fix">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ ease: "easeIn", duration: 0.6 }}
        className="text-center mb-16 transform-gpu"
        style={{ willChange: "transform, opacity" }}
        suppressHydrationWarning
      >
        {/* <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">Best Pricing</span> */}
        <h2 className="text-4xl md:text-5xl font-nippo font-bold">Our Pricing Plans</h2>
        <p className="text-muted-foreground mt-2">Transparent monthly plans. Higher tiers include previous features plus more.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: i * 0.1, ease: "easeIn", duration: 0.6 }}
            whileHover={{ y: -8 }}
            suppressHydrationWarning
            className={`flex flex-col p-8 rounded-[2rem] bg-card border ${
              plan.popular
                ? "border-2 border-foreground/30 shadow-xl shadow-primary/10 relative z-10 scale-105"
                : "border-border/50 relative z-0 hover:border-primary/50"
            } h-full transition-all duration-300 transform-gpu`}
           style={{ willChange: "transform, opacity" }}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-lg tracking-wide">
                MOST POPULAR
              </div>
            )}

            <div className="flex items-center justify-between mb-8 pb-6 border-b border-border/50">
              <h3 className="text-2xl font-bold font-nippo tracking-wide">
                {plan.name}
              </h3>
              <div className="text-xl font-bold">{plan.price}</div>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto grid grid-cols-1 gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center w-full py-3.5 rounded-xl bg-foreground text-background font-bold hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
              >
                Get Free Quote
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center w-full py-3.5 rounded-xl bg-background border border-border text-foreground font-bold hover:bg-muted transition-colors"
              >
                Start Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
