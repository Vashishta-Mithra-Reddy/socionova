"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import { useState } from "react";
import ServiceDetailModal from "./ServiceDetailModal";

export default function Services() {
  const [selectedService, setSelectedService] = useState<
    (typeof services)[0] | null
  >(null);

  return (
    <>
      <section
        id="services"
        className="py-32 px-4 md:px-12 max-w-7xl mx-auto relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 text-center relative z-10"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
            OUR EXPERTISE
          </span>
          <h2 className="text-4xl md:text-6xl font-nippo font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
            Digital Ecosystem
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We don't just sell services; we engineer growth. Explore our
            comprehensive suite of solutions designed for every major platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {services.map((service, idx) => (
            <motion.div
              key={service.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedService(service)}
              className={`group relative p-8 rounded-[2rem] border border-border/50 bg-card/50 backdrop-blur-xl hover:bg-card/80 transition-all duration-500 cursor-pointer hover:border-primary/20 hover:shadow-2xl dark:hover:shadow-primary/10`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-[2rem]`}
              />

              <div className="flex items-start justify-between mb-6">
                <div
                  className={`p-4 rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}
                >
                  {service.icon}
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${service.border} ${service.bg} ${service.accent}`}
                >
                  {service.items.length} Services
                </div>
              </div>

              <h3 className="text-3xl font-bold mb-3 font-nippo tracking-wide group-hover:text-foreground transition-colors">
                {service.platform}
              </h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed group-hover:text-foreground/80 transition-colors">
                {service.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.items.slice(0, 4).map((item, i) => (
                  <div
                    key={i}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <CheckCircle2 className={`w-4 h-4 ${service.accent}`} />
                    {item.name}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center text-sm font-medium text-foreground/50 group-hover:text-foreground transition-colors">
                View Details <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </>
  );
}
