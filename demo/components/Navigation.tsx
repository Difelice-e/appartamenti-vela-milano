'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X } from '@phosphor-icons/react/dist/ssr';
import { EASE_SOFT_OUT } from '@/lib/motion';

const links = [
  { href: '#appartamenti', label: 'Appartamenti' },
  { href: '#garage', label: 'Garage' },
  { href: '#business', label: 'Business' },
  { href: '#prenota', label: 'Prenota' },
];

const MENU_ID = 'primary-mobile-menu';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = '';
      return;
    }
    document.body.style.overflow = 'hidden';
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE_SOFT_OUT, delay: 0.1 }}
        className="fixed inset-x-0 top-0 z-[40]"
      >
        {/*
          Transition only the visual surface, not the layout box.
          The inner container keeps its size; the scrolled state changes
          background/border/shadow via the .nav-shell-scrolled class.
        */}
        <div
          className={`nav-shell transition-[background-color,backdrop-filter,box-shadow,border-color] duration-[300ms] ease-soft-out ${
            scrolled ? 'nav-shell-scrolled' : ''
          }`}
        >
          <div className="mx-auto flex h-[64px] max-w-[1280px] items-center justify-between px-5 lg:h-[72px] lg:px-8">
            <a href="#top" className="group flex items-baseline gap-1">
              <span className="font-display italic font-normal text-[22px] leading-none text-ink transition-colors group-hover:text-primary">
                Appartamenti
              </span>
              <span className="font-display italic font-medium text-[22px] leading-none text-primary">
                Vela
              </span>
              <span className="font-display italic font-normal text-[22px] leading-none text-ink hidden sm:inline">
                Milano
              </span>
            </a>

            <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigazione principale">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="nav-link">
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a href="#prenota" className="btn-primary hidden md:inline-flex">
                Chiedi disponibilità
              </a>
              <button
                type="button"
                aria-label={open ? 'Chiudi menu' : 'Apri menu'}
                aria-expanded={open}
                aria-controls={MENU_ID}
                onClick={() => setOpen(!open)}
                className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-pill border border-ink/15 bg-white/60"
              >
                {open ? <X size={20} weight="regular" /> : <List size={20} weight="regular" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id={MENU_ID}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_SOFT_OUT }}
            className="fixed inset-0 z-[45] lg:hidden"
          >
            <div className="glass absolute inset-0" />
            <div className="relative flex h-full flex-col items-start justify-center gap-6 px-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: EASE_SOFT_OUT, delay: 0.08 * i + 0.1 }}
                  className="font-display text-[40px] leading-[1.1] text-ink"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#prenota"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE_SOFT_OUT, delay: 0.4 }}
                className="btn-primary mt-6"
              >
                Chiedi disponibilità
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
