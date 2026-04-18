"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { label: "Appartamenti", href: "#gli-appartamenti" },
  { label: "Garage", href: "#garage" },
  { label: "Business", href: "#business" },
  { label: "Prenota", href: "#prenota" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[40] transition-all duration-300
          ${scrolled ? "glass" : "bg-transparent"}
        `}
        style={{ height: "var(--nav-h-desktop)" }}
      >
        <div className="container-brand h-full flex items-center justify-between">
          {/* Wordmark */}
          <a
            href="#"
            className="font-display font-medium text-neutral-dark hover:text-primary transition-colors duration-200"
            style={{ fontSize: "var(--fs-h3)", letterSpacing: "-0.01em" }}
          >
            Appartamenti Vela
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-small text-neutral-dark/75 hover:text-primary transition-colors duration-200"
                style={{ letterSpacing: "var(--ls-nav-link)" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#prenota"
              className="bg-primary hover:bg-primary-hover text-white text-small font-medium px-5 py-2.5 rounded-pill transition-colors duration-200 cursor-pointer"
            >
              Chiedi disponibilità
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-neutral-dark p-2 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          >
            {menuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[39] glass flex flex-col items-center justify-center gap-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="heading-h2 text-neutral-dark hover:text-primary transition-colors duration-200 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#prenota"
              className="bg-primary hover:bg-primary-hover text-white font-medium px-8 py-4 rounded-pill transition-colors duration-200 cursor-pointer mt-4"
              onClick={() => setMenuOpen(false)}
            >
              Chiedi disponibilità
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
