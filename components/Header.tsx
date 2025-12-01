"use client";

import Link from "next/link";
import * as React from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import ModeToggle from "./mode-toggle";
import { Menu, X } from "lucide-react";

export default function Header() {
  // const pathname = usePathname();

  const routes = [
    { key: "about", label: "About", href: "/#about" },
    { key: "services", label: "Services", href: "/#services" },
    { key: "social-services", label: "Social Media", href: "/#social-services" },
    { key: "team", label: "Team", href: "/#team" },
    { key: "contact", label: "Contact", href: "/#contact" },
  ];

  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
  });

  // Smoothly round header to 2xl (~16px)
  const headerRadius = useTransform(scrollY, [0, 120], [10, 16]);
  // Animate container width from 7xl (1280px) to 5xl (1024px)
  const headerMaxWidth = useTransform(scrollY, [60, 120], [1280, 1024]);

  return (
    <motion.header
      className="w-full fixed top-0 md:top-6 left-0 md:left-1/2 md:-translate-x-1/2 z-40 backdrop-blur-3xl transition-all duration-700 bg-foreground/5"
      style={{ borderRadius: headerRadius, maxWidth: headerMaxWidth }}
    >
      {/* Color layer: transparent initially, fades in on scroll */}
      <motion.div
        className="absolute inset-0"
        style={{ borderRadius: "inherit" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 0.9 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
      {/* Use bg via style to keep theme color without class flicker */}
      <motion.div
        className="absolute inset-0"
        style={{
          borderRadius: "inherit",
          backgroundColor: "var(--color-header)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />

      <div className="relative w-full flex justify-between items-center px-4 py-3">
        <Link href="/" className="pl-2">
          <motion.span className="font-bold flex items-center justify-center text-2xl font-nippo text-foreground">
            {/* <Smartphone className="mr-2 inline-block" size={20} /> */}
            SOCIONOVA
          </motion.span>
        </Link>

        <nav className="font-nippo hidden md:block">
          <ul className="flex items-center gap-4">
            {routes.map((route) => (
              <li key={route.key}>
                <Link
                  href={route.href}
                  className="text-foreground/70 hover:text-foreground transition-all duration-500"
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 transition-all duration-0 font-nippo">
          <ModeToggle />
          <Link
            href="/#contact"
            className="hidden md:inline-flex text-white transition-all duration-500 bg-blue-600 px-4.5 py-2.5 corner-squircle rounded-[100px] "
          >
            Contact Us
          </Link>
          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-foreground/80 hover:text-foreground"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="md:hidden bg-card border-t border-border"
        >
          <ul className="px-4 py-3 space-y-2">
            {routes.map((route) => (
              <li key={route.key}>
                <Link
                  href={route.href}
                  className="block rounded-lg px-3 py-2 text-foreground/80 hover:bg-secondary hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {route.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact-us"
                className="block rounded-lg px-3 py-2 bg-blue-600 text-white text-center"
                onClick={() => setOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
