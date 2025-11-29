"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowRight } from "lucide-react";

interface ServiceItem {
  name: string;
  desc: string;
}

interface Service {
  platform: string;
  icon: React.ReactNode;
  description: string;
  details: string;
  stats: string[];
  items: ServiceItem[];
  gradient: string;
  accent: string;
  bg: string;
  border: string;
}

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
}

export default function ServiceDetailModal({
  service,
  onClose,
}: ServiceDetailModalProps) {
  return (
    <AnimatePresence>
      {service && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-background/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-[2rem] shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-background/20 hover:bg-background/40 transition-colors z-10 text-foreground"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div
                className={`p-10 bg-gradient-to-br ${service.gradient} text-white flex flex-col justify-between relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-4xl font-bold font-nippo mb-4">
                    {service.platform}
                  </h2>
                  <p className="text-white/90 text-lg leading-relaxed mb-8">
                    {service.details}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 relative z-10">
                  {service.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="bg-black/20 backdrop-blur-sm p-4 rounded-xl border border-white/10"
                    >
                      <p className="font-bold text-lg">{stat}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-10 bg-card">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-500" />
                  Available Services
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {service.items.map((item, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/20 transition-colors group"
                    >
                      <h4 className="font-bold text-foreground mb-1 flex items-center justify-between">
                        {item.name}
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-border">
                  <a
                    href="#contact"
                    onClick={onClose}
                    className="flex items-center justify-center w-full py-4 bg-foreground text-background rounded-xl font-bold hover:opacity-90 transition-opacity"
                  >
                    Get Started with {service.platform}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
