// components/Nav.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Values", href: "#values" },
  { label: "Team", href: "#team" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? "bg-[rgba(1,13,20,0.95)] border-b border-cyan-500/12"
            : "bg-[rgba(1,13,20,0.5)] border-b border-white/4"
        } backdrop-blur-xl`}
      >
        <div className="flex items-center justify-between px-[5%] h-17 max-w-350 mx-auto">
          
          {/* Logo */}
          <Link
            href="/"
            className="text-[1.4rem] font-black tracking-tight text-slate-100 no-underline flex items-center gap-0.5"
          >
            Ba<span className="text-cyan-400">dili</span>
            <span className="inline-block w-1.25 h-1.25 rounded-full bg-emerald-400 mb-0.5 ml-0.5" />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setActive(link.href)}
                  className={`relative text-sm font-medium tracking-wide no-underline transition-colors duration-200 pb-0.5 ${
                    active === link.href
                      ? "text-slate-100"
                      : "text-cyan-100/50 hover:text-slate-100"
                  }`}
                >
                  {link.label}
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-cyan-400 rounded-full"
                    />
                  )}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-700 hover:bg-cyan-600 text-white text-sm font-bold rounded-[10px] no-underline transition-all duration-200 hover:-translate-y-px"
              >
                Let's talk
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.25 p-2 cursor-pointer bg-transparent border-none"
            aria-label="Toggle menu"
          >
            <span
              className="block w-5.5 h-[1.5px] bg-cyan-100/60 rounded-sm transition-all duration-300 origin-center"
              style={{ transform: mobileOpen ? "rotate(45deg) translate(4.5px, 4.5px)" : "none" }}
            />
            <span
              className="block w-5.5 h-[1.5px] bg-cyan-100/60 rounded-sm transition-all duration-300"
              style={{ opacity: mobileOpen ? 0 : 1 }}
            />
            <span
              className="block w-5.5 h-[1.5px] bg-cyan-100/60 rounded-sm transition-all duration-300 origin-center"
              style={{ transform: mobileOpen ? "rotate(-45deg) translate(4.5px, -4.5px)" : "none" }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden border-t border-cyan-500/10"
            >
              <div className="px-[5%] py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => { setActive(link.href); setMobileOpen(false); }}
                    className="flex items-center justify-between px-4 py-3.5 rounded-xl text-cyan-100/55 hover:text-slate-100 hover:bg-cyan-500/6 text-[0.9rem] font-medium no-underline transition-all duration-200"
                  >
                    {link.label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                ))}
                <Link
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-3 flex items-center justify-center gap-2 px-4 py-3.5 bg-cyan-700 hover:bg-cyan-600 text-white font-bold rounded-xl text-[0.9rem] no-underline transition-colors"
                >
                  Let's talk →
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}