"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube, Send, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useTheme } from "next-themes";



export default function Footer() {
  const year = new Date().getFullYear();
  const { resolvedTheme } = useTheme();
  const logo = resolvedTheme === "dark" ? "/dark_logo.webp" : "/light_logo.webp";

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div>
            <div className="text-2xl font-nippo font-bold">
              <img
                src={logo}
                alt="SOCIONOVA"
                className="w-40 inline-block"
              />
            </div>
            <p className="text-muted-foreground mt-3 text-sm max-w-sm pl-4">
              Premium social media optimization and growth solutions for brands
              and creators.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-6 pl-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-card/60 text-sm"
              >
                Explore Services
              </a>
              <a
                href="mailto:contact@socionova.com"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-primary text-primary-foreground text-sm"
              >
                <Mail className="w-4 h-4" /> Contact
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:justify-items-end">
            <div>
              <h4 className="font-nippo font-semibold mb-4">Platforms</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <a
                    href="https://www.facebook.com/socionovaaa"
                    target="_blank"
                    rel="noreferrer"
                    className="flex gap-2 items-center justify-center"
                  >
                    <Facebook className="w-4 h-4" /> Facebook
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a
                    href="https://www.instagram.com/socionovaaa"
                    target="_blank"
                    rel="noreferrer"
                    className="flex gap-2 items-center justify-center"
                  >
                    <Instagram className="w-4 h-4" /> Instagram
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a
                    href="https://www.youtube.com/@socionovaaa"
                    target="_blank"
                    rel="noreferrer"
                    className="flex gap-2 items-center justify-center"
                  >
                    <Youtube className="w-4 h-4" /> YouTube
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a
                    href="https://t.me/socionovaaa"
                    target="_blank"
                    rel="noreferrer"
                    className="flex gap-2 items-center justify-center"
                  >
                    <Send className="w-4 h-4" /> Telegram
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a
                    href="https://wa.me/919459697172"
                    target="_blank"
                    rel="noreferrer"
                    className="flex gap-2 items-center justify-center"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-nippo font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#pricing">Pricing</Link>
                </li>
                <li>
                  <Link href="#team">Team</Link>
                </li>
                <li>
                  <Link href="#contact">Contact</Link>
                </li>
                <li>
                  <a href="tel:+919736697172">Call</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-nippo font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Service Disclaimer</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {year} Socionova. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-muted-foreground">
            <a
              aria-label="Facebook"
              href="https://www.facebook.com/socionovaaa"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              aria-label="Instagram"
              href="https://www.instagram.com/socionovaaa"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              aria-label="YouTube"
              href="https://www.youtube.com/@socionovaaa"
              target="_blank"
              rel="noreferrer"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              aria-label="Telegram"
              href="https://t.me/socionovaaa"
              target="_blank"
              rel="noreferrer"
            >
              <Send className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
