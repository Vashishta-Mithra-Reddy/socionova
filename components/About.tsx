"use client";
import { motion } from "framer-motion";
import { Zap, Globe2 } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-nippo font-bold mb-6">
          Welcome to <span className="text-primary">SocioNova</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
          SocioNova is a dynamic digital creative company transforming how
          businesses grow, communicate, and build trust online. We help brands
          elevate their presence across major platforms with measurable success.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="group p-8 rounded-[2rem] bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
            <Globe2 className="w-32 h-32 rotate-12" />
          </div>
          
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Globe2 className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-nippo">Why it matters</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              In today’s competitive digital ecosystem, customers rely on online
              presence and reputation before choosing a brand. SocioNova helps
              businesses navigate this journey with sustainable strategies that
              deliver long-term value, meaningful engagement, and real results.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group p-8 rounded-[2rem] bg-card border border-border hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
            <Zap className="w-32 h-32 -rotate-12" />
          </div>

          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-nippo">What we do</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We specialize in review management for all OTAs, online marketing,
              pay-per-click advertising, email marketing, and social media
              optimization—providing comprehensive digital solutions for
              businesses of all sizes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
