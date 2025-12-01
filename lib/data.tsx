import { Star, Megaphone, MousePointerClick, Mail } from "lucide-react";

export const services = [
  {
    platform: "Review Management (OTAs)",
    icon: Star,
    description:
      "Manage reviews across major OTAs to build trust and credibility.",
    details:
      "Monitor feedback, respond professionally, manage negatives, and encourage positive reviews. We deliver clear reports and reputation strategies that strengthen your brand.",
    stats: [
      "Reputation Improvement",
      "Transparent Reporting",
      "Faster Conversions",
    ],
    items: [
      { name: "Monitor & Track Reviews", desc: "All major OTAs and listings" },
      {
        name: "Respond & Resolve",
        desc: "Professional replies and escalation",
      },
      {
        name: "Negative Review Management",
        desc: "Address issues and mitigate impact",
      },
      {
        name: "Encourage Positive Feedback",
        desc: "Programs for satisfied customers",
      },
      { name: "Performance Reporting", desc: "Trends, insights, and actions" },
    ],
    gradient: "from-slate-600 to-slate-800",
    accent: "text-slate-500",
    bg: "bg-slate-500/10",
    border: "border-slate-500/20",
  },
  {
    platform: "Online Marketing",
    icon: Megaphone,
    description:
      "Data-driven strategies to reach the right audience at the right time.",
    details:
      "SEO, content, lead gen, brand campaigns, and conversion-focused landing pages. We blend creativity with analytics for consistent growth.",
    stats: ["Targeted Reach", "Consistent Growth", "Measurable Outcomes"],
    items: [
      { name: "SEO", desc: "Technical, on-page, off-page" },
      { name: "Content Marketing", desc: "Authority-building content" },
      { name: "Lead Generation", desc: "Funnels and qualification" },
      { name: "Brand Awareness", desc: "Multi-channel campaigns" },
      { name: "Landing Page Strategy", desc: "Conversion-first design" },
    ],
    gradient: "from-indigo-600 to-indigo-800",
    accent: "text-indigo-500",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
  },
  {
    platform: "PPC Advertising",
    icon: MousePointerClick,
    description:
      "High-intent traffic and leads through optimized paid campaigns.",
    details:
      "Research, setup, optimization, budget control, A/B testing, and continuous monitoring. Every dollar is tracked to outcomes.",
    stats: ["Optimized CPL", "Granular Targeting", "Real-Time Monitoring"],
    items: [
      { name: "Keyword Research", desc: "Match intent to offers" },
      { name: "Campaign Setup", desc: "Google & social platforms" },
      { name: "Budget Management", desc: "Cost control & scaling" },
      { name: "A/B Testing", desc: "Ads and landing pages" },
      { name: "Conversion Tracking", desc: "Analytics & reporting" },
    ],
    gradient: "from-emerald-600 to-emerald-800",
    accent: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    platform: "Email Marketing",
    icon: Mail,
    description:
      "Direct, personalized engagement that nurtures leads and drives retention.",
    details:
      "Automations, promos, newsletters, segmentation, templates, and advanced analytics. Built for consistent results.",
    stats: [
      "Higher Retention",
      "Personalized Campaigns",
      "Actionable Analytics",
    ],
    items: [
      { name: "Automated Drips", desc: "Lifecycle and nurture flows" },
      { name: "Promotional Sequences", desc: "Offer-led campaigns" },
      { name: "Newsletters", desc: "Editorial & updates" },
      { name: "Segmentation", desc: "Targeted lists by behavior" },
      { name: "Analytics & Templates", desc: "Performance tracking & design" },
    ],
    gradient: "from-rose-600 to-rose-800",
    accent: "text-rose-500",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
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
