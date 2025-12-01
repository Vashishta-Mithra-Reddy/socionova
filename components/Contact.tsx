"use client";

import { ArrowRight, Mail, Phone, Clock, ShieldCheck } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gradient-to-br from-background to-card p-8 md:p-16 rounded-[3rem] border border-border text-left relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col justify-center">
            <h2 className="text-5xl font-nippo font-bold mb-6 text-foreground">
              Ready to Grow?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl">
              Get your free quote today. SocioNova delivers strategic review
              management, online marketing, PPC, and email solutions tailored to
              your goals.
            </p>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3 bg-card/60 border border-border rounded-xl px-4 py-3">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Trusted by leading brands
                </span>
              </div>
              <div className="flex items-center gap-3 bg-card/60 border border-border rounded-xl px-4 py-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Fast onboarding
                </span> 
              </div>
            </div> */}

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:contact@socionova.com?subject=Free%20Quote%20Request&body=Share%20your%20requirements%2C%20timeline%2C%20and%20budget%20range."
                className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-xl font-bold hover:opacity-90 transition-opacity"
                aria-label="Get a free quote"
              >
                <Mail className="w-5 h-5" /> Get Free Quote
              </a>
              <a
                href="mailto:contact@socionova.com?subject=Request%20a%20Proposal&body=Please%20share%20your%20requirements%20and%20budget%20range."
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition-opacity"
                aria-label="Request a proposal"
              >
                <ArrowRight className="w-5 h-5" /> Start Project
              </a>
            </div>
          </div>

          <div className="relative z-10 bg-card/60 border border-border rounded-4xl p-6 md:p-8">
            <h3 className="text-2xl font-nippo font-bold mb-4">
              Contact Details
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:contact@socionova.com"
                  className="text-foreground hover:underline"
                >
                  contact@socionova.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:+919736697172"
                  className="text-foreground hover:underline"
                >
                  Call: 9736697172
                </a>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border bg-background/60 p-4">
                <p className="text-sm text-muted-foreground">Response Time</p>
                <p className="text-lg font-semibold">Under 24 hours</p>
              </div>
              <div className="rounded-xl border border-border bg-background/60 p-4">
                <p className="text-sm text-muted-foreground">Support</p>
                <p className="text-lg font-semibold">Priority for clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
