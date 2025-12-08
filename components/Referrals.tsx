"use client";

import { motion } from "framer-motion";
import { Server, ArrowRight, ShieldCheck, Zap, IndianRupee } from "lucide-react";

export default function Referrals() {
  return (
    <section className="py-16 px-4 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        style={{ willChange: "transform, opacity" }}
        className="relative rounded-[2.5rem] overflow-hidden bg-[#673de6] text-white p-8 md:px-12 md:py-10 transform-gpu"
      >
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-black/20 blur-[60px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Content - Spans 7 columns */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-wider">
              <Server className="w-3 h-3" />
              Trusted Partner
            </div>
            
            <h2 className="text-4xl md:text-5xl font-nippo font-bold leading-tight">
              Power Your Digital Growth with Hostinger
            </h2>
            
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-xl">
              We trust Hostinger for reliable, high-speed hosting. Get exclusive discounts and start your online journey with the best infrastructure.
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-xs font-medium bg-white/10 px-3 py-1.5 rounded-lg">
                <IndianRupee className="w-3.5 h-3.5 text-emerald-300" />
                Budget Friendly
              </div>
              <div className="flex items-center gap-2 text-xs font-medium bg-white/10 px-3 py-1.5 rounded-lg">
                <Zap className="w-3.5 h-3.5 text-yellow-300" />
                99.9% Uptime
              </div>
              <div className="flex items-center gap-2 text-xs font-medium bg-white/10 px-3 py-1.5 rounded-lg">
                <ShieldCheck className="w-3.5 h-3.5 text-pink-500" />
                Free SSL
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://hostinger.in?REFERRALCODE=DNFSOCION60I"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#673de6] rounded-xl font-bold text-base hover:bg-white/90 transition-colors shadow-xl shadow-black/10"
              >
                Get Started with Hostinger
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Visual - Spans 5 columns */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
             <div className="relative w-full max-w-sm bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm p-6 flex items-center justify-center transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="text-center w-full">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                            {/* <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#673de6]" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 3v18" />
                                <path d="M18 3v18" />
                                <path d="M6 12h12" />
                            </svg> */}
                            <img src="/hostinger.svg" alt="Hostinger" className="w-full h-full p-3.5" />
                        </div>
                        <div className="text-left">
                            <div className="text-2xl font-bold leading-none">Hostinger</div>
                            <div className="text-white/60 text-xs">Web Hosting</div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                        <div>
                            <div className="text-xl font-bold">2M+</div>
                            <div className="text-[10px] text-white/50 uppercase tracking-wider">Users</div>
                        </div>
                        <div>
                            <div className="text-xl font-bold">24/7</div>
                            <div className="text-[10px] text-white/50 uppercase tracking-wider">Support</div>
                        </div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
