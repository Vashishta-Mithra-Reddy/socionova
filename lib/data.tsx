import { Facebook, Instagram, Youtube, Send } from "lucide-react";

export const services = [
  {
    platform: "Facebook",
    icon: Facebook,
    description:
      "Establish authority and drive engagement with comprehensive Facebook growth solutions.",
    details:
      "Our Facebook services are designed to build credible social proof. From increasing page followers to boosting post engagement, we help you create a thriving community around your brand.",
    stats: ["10k+ Pages Scaled", "5M+ Likes Delivered", "24/7 Support"],
    items: [
      {
        name: "Page Likes & Followers",
        desc: "Real profiles to boost credibility",
      },
      { name: "Post Reactions & Likes", desc: "Increase visibility in feeds" },
      { name: "Live Stream Views", desc: "Boost concurrent viewership" },
      { name: "All Types of Followers", desc: "Targeted & Global options" },
    ],
    gradient: "from-blue-600 to-blue-800",
    accent: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    platform: "Instagram",
    icon: Instagram,
    description:
      "Dominate the visual landscape with high-quality followers, likes, and views.",
    details:
      "Instagram is all about perception. We provide high-retention followers and authentic engagement to ensure your profile looks professional and attractive to potential sponsors or customers.",
    stats: ["20k+ Influencers", "10M+ Followers", "Instant Start"],
    items: [
      { name: "Followers & Reach", desc: "High-quality & stable growth" },
      { name: "Story & Post Views", desc: "Enhance your analytics" },
      {
        name: "Live Stream & Comments",
        desc: "Active engagement during lives",
      },
      { name: "Indian Services", desc: "Region-specific targeting available" },
    ],
    gradient: "from-pink-600 to-purple-600",
    accent: "text-pink-500",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
  },
  {
    platform: "YouTube",
    icon: Youtube,
    description:
      "Accelerate channel monetization and video rankings with strategic growth.",
    details:
      "Stop waiting for the algorithm. Our YouTube services help you reach monetization thresholds faster and get your videos recommended to a broader audience through retention-focused views.",
    stats: ["50M+ Views", "1M+ Subs", "Monetization Ready"],
    items: [
      { name: "Subscribers & Likes", desc: "Permanent & non-drop subs" },
      { name: "Watchtime (Non-Drop)", desc: "4000 hours packages available" },
      { name: "Shorts & Live Views", desc: "Viral boost for short-form" },
      { name: "Native Ads Views", desc: "Legitimate discovery traffic" },
    ],
    gradient: "from-red-600 to-red-800",
    accent: "text-red-500",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
  },
  {
    platform: "Telegram",
    icon: Send,
    description:
      "Build massive communities and channels with active, targeted members.",
    details:
      "Telegram is the future of community building. We help you launch and scale channels with thousands of members, ensuring high activity rates and post views for maximum impact.",
    stats: ["100k+ Groups", "20M+ Members", "Crypto Friendly"],
    items: [
      { name: "Targeted Members", desc: "Crypto, Forex, or Niche specific" },
      { name: "Premium Members", desc: "High-value user accounts" },
      { name: "Post & Story Views", desc: "Consistent channel activity" },
      { name: "Bot Start & Referrals", desc: "Boost bot user base" },
    ],
    gradient: "from-sky-500 to-blue-500",
    accent: "text-sky-500",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
  },
];

export const team = [
  { name: "Aditya", role: "Founder", image: "/team/aditya_plain.webp" },
  {
    name: "Yashpal Chauhan",
    role: "Operations Manager",
    image: "/team/yashpal_chauhan.webp",
  },
  {
    name: "Samridhi Tomar",
    role: "Team Leader",
    image: "/team/samridhi_tomar.webp",
  },
  { name: "Ketan", role: "Front End Manager", image: "/team/ketan.webp" },
  {
    name: "Sneha Chauhan",
    role: "Accountant",
    image: "/team/sneha_chauhan.webp",
  },
];
