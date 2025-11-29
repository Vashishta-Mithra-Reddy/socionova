"use client";

import PixelBlast from "@/components/PixelBlast";
import CurvedLoop from "@/components/CurvedLoop";
import { motion } from "framer-motion";

// Service Data
const services = [
  {
    platform: "Facebook",
    items: [
      "Facebook Likes",
      "Facebook Post Reaction",
      "Facebook Live Stream Views",
      "Facebook Page Likes and Followers",
      "Facebook All Types of Followers",
    ],
    color: "bg-blue-600",
  },
  {
    platform: "Instagram",
    items: [
      "Instagram Live Stream",
      "Instagram Chanel Members",
      "Instagram Comment",
      "Instagram Reach + Impression",
      "Instagram Share",
      "Instagram Story Views",
      "Instagram Followers",
      "Instagram Post Views",
      "Instagram Indian Service",
    ],
    color: "bg-pink-600",
  },
  {
    platform: "YouTube",
    items: [
      "Native Ads Views Indian",
      "Shorts",
      "Watchtime (Drop / Non Drop) 30 Day / 60 Day + Native Social Ads",
      "Live Stream Views",
      "YouTube Community Likes",
      "YouTube Subscribers",
      "Comments + Likes",
      "Comment Likes",
    ],
    color: "bg-red-600",
  },
  {
    platform: "Telegram",
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
      "Telegram Targeted Members",
      "Telegram 24 Hour Active Member",
      "Premium Exclusive Base 1 - 6",
      "Telegram Premium Members",
    ],
    color: "bg-sky-500",
  },
];

// Team Data
const team = [
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

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-foreground/20">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 dark:opacity-100">
          <PixelBlast
            variant="square"
            pixelSize={4}
            color="#B19EEF"
            patternScale={2}
            patternDensity={1}
            pixelSizeJitter={0}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1}
            speed={0.5}
            edgeFade={0.25}
            transparent
          />
        </div>
        <div className="relative z-10 text-center px-4 flex flex-col items-center gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-bold font-nippo tracking-tighter"
          >
            SOCIO<span className="text-primary">NOVA</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light"
          >
            Premium Social Media Marketing & Growth Solutions
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#services"
              className="px-8 py-4 bg-foreground text-background rounded-full font-bold hover:opacity-90 transition-opacity"
            >
              Explore Services
            </a>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <div className="py-10 border-y border-border/50 bg-background/50 backdrop-blur-sm overflow-hidden">
        <CurvedLoop marqueeText="SOCIAL MEDIA OPTIMIZATION • PREMIUM GROWTH • 24/7 SUPPORT • REAL RESULTS • " />
      </div>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-nippo font-bold mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive solutions for every platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-6 rounded-3xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div
                className={`absolute top-0 left-0 w-full h-1 ${service.color} rounded-t-3xl opacity-50 group-hover:opacity-100 transition-opacity`}
              />
              <h3 className="text-2xl font-bold mb-6 font-nippo">
                {service.platform}
              </h3>
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span
                      className={`mt-1.5 w-1.5 h-1.5 rounded-full ${service.color} shrink-0`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-4 md:px-12 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-6xl font-nippo font-bold mb-4">
              The Team
            </h2>
            <p className="text-muted-foreground text-lg">
              Experts behind your growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group w-full max-w-[250px]"
              >
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-6 rounded-full overflow-hidden border-4 border-background shadow-xl group-hover:border-primary transition-colors duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full scale-100 object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold font-nippo">{member.name}</h3>
                <p className="text-primary font-medium text-sm mt-1">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 text-center">
        <h2 className="text-3xl font-nippo font-bold mb-8">Ready to Scale?</h2>
        <a
          href="mailto:contact@socionova.com"
          className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition-opacity"
        >
          Get in Touch
        </a>
      </section>
    </main>
  );
}
