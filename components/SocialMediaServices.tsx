"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, ChevronUp, ArrowRight, Sparkles } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube, FaTelegram } from "react-icons/fa6";

// --- Types & Data ---
type SocialPlatform = {
  name: string;
  icon: React.ElementType;
  color: string; // Base color for shadows/glows
  bgLight: string; // Light background for tags
  items: string[];
};

export const socialPlatforms: SocialPlatform[] = [
  {
    name: "Facebook",
    icon: FaFacebook,
    color: "#3b82f6", // blue-500
    bgLight: "bg-blue-500/10",
    items: [
      "Facebook Likes",
      "Post Reactions",
      "Live Stream Views",
      "Page Likes & Followers",
      "All Types of Followers",
    ],
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    color: "#ec4899", // pink-500
    bgLight: "bg-pink-500/10",
    items: [
      "Live Stream",
      "Channel Members",
      "Comments",
      "Reach + Impression",
      "Shares",
      "Story Views",
      "Followers",
      "Post Views",
      "Indian Service",
    ],
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    color: "#ef4444", // red-500
    bgLight: "bg-red-500/10",
    items: [
      "Native Ads Views (Indian)",
      "Shorts",
      "Watchtime (Drop/Non Drop)",
      "Native Social Ads",
      "Live Stream Views",
      "Community Likes",
      "Subscribers",
      "Comments + Likes",
      "Comment Likes",
    ],
  },
  {
    name: "Telegram",
    icon: FaTelegram,
    color: "#06b6d4", // cyan-500
    bgLight: "bg-cyan-500/10",
    items: [
      "Bot Start",
      "Real Views",
      "Post Share",
      "Story Views",
      "Bot Start Referral",
      "Story Reaction",
      "All Reaction",
      "Future Post View",
      "Cheapest Members",
      "Non Drop Members",
      "Targeted Members",
      "24 Hour Active Member",
      "Premium Exclusive Base",
      "Premium Members",
    ],
  },
];

// --- Sub-Component: Service Card ---
const ServiceCard = ({ platform, index }: { platform: SocialPlatform; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const INITIAL_VISIBLE_COUNT = 5;
  const hasMore = platform.items.length > INITIAL_VISIBLE_COUNT;

  // Slice items based on state
  const visibleItems = isExpanded
    ? platform.items
    : platform.items.slice(0, INITIAL_VISIBLE_COUNT);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      layout="position" /* Important for smooth grid readjustment */
      className="group relative flex flex-col h-full bg-card border border-border/40 hover:border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
      style={{
        // subtle colored glow on hover
        boxShadow: `0 0 0 1px transparent`, 
      }}
    >
        {/* Dynamic Hover Border Glow via inline styles or tailwind arbitrary values */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
        style={{
            background: `radial-gradient(600px circle at top right, ${platform.color}15, transparent 40%)`
        }}
      />

      {/* Card Header */}
      <div className="p-6 pb-2 relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div 
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg"
            style={{ backgroundColor: platform.color }}
          >
            <platform.icon className="w-6 h-6" />
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${platform.bgLight}`} style={{ color: platform.color }}>
            {platform.items.length} Services
          </span>
        </div>

        <h3 className="text-2xl font-bold font-nippo tracking-tight mb-1">{platform.name}</h3>
        <p className="text-sm text-muted-foreground">Comprehensive growth tools</p>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent my-2" />

      {/* List Items */}
      <div className="p-6 pt-2 flex-grow relative z-10">
        <ul className="space-y-3">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item, i) => (
              <motion.li
                key={`${platform.name}-${item}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-3 text-sm text-muted-foreground/90 group-hover:text-foreground transition-colors"
              >
                <div className="mt-0.5 min-w-[16px]">
                    <Check className="w-4 h-4" style={{ color: platform.color }} />
                </div>
                <span className="leading-tight">{item}</span>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        {/* Show More / Less Toggle */}
        {hasMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider hover:underline underline-offset-4 transition-all"
            style={{ color: platform.color }}
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="w-3 h-3" />
              </>
            ) : (
              <>
                Show {platform.items.length - INITIAL_VISIBLE_COUNT} More <ChevronDown className="w-3 h-3" />
              </>
            )}
          </button>
        )}
      </div>

      {/* Card Footer / CTA */}
      <div className="p-6 pt-0 mt-auto relative z-10">
        <a
          href="#contact"
          className="group/btn flex items-center justify-center w-full py-3 rounded-xl bg-secondary hover:bg-foreground hover:text-background text-foreground text-sm font-semibold transition-all duration-300"
        >
          Get Quote
          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};

// --- Main Component ---
export default function SocialMediaServices() {
  return (
    <section id="social-services" className="py-24 px-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-nippo font-bold mb-6 tracking-tight"
          >
            Elevate Your Social Presence
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            We provide verified, non-drop engagement metrics tailored for the Indian market across all major platforms.
          </motion.p>
        </div>

        {/* Grid Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {socialPlatforms.map((platform, idx) => (
            <ServiceCard key={platform.name} platform={platform} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}