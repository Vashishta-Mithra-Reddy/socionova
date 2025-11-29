"use client";

import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-zinc-900 to-black dark:from-zinc-900 dark:to-black from-zinc-100 to-white p-8 md:p-16 rounded-[3rem] border border-border text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 blur-[80px] rounded-full pointer-events-none" />

          <h2 className="text-4xl md:text-7xl font-nippo font-bold mb-8 relative z-10 text-foreground">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Scale?
            </span>
          </h2>
          <p className="text-muted-foreground text-xl mb-10 max-w-xl mx-auto relative z-10">
            Join hundreds of brands that have transformed their digital presence
            with Socionova.
          </p>

          <a
            href="mailto:contact@socionova.com"
            className="relative z-10 inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background rounded-full font-bold text-lg hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Get in Touch <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
