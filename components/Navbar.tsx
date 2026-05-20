"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

const navLinks = [
  { name: "Services", href: "/#services" },
  { name: "Work", href: "/#work" },
  { name: "About", href: "/#about" },
  { name: "Team", href: "/team" },
  
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200 dark:border-cyan-500/10 bg-white/70 dark:bg-[#030b11]/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-[5%]">

        {/* Logo */}
        <Link href="/"  target="_blank" rel="noopener noreferrer">
          <Image src="/1.png" alt=" Logo" width={50} height={50} loading="eager"
          className="inline-block mr-2 width:auto height:auto " />
           
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-white/60 hover:text-cyan-500 dark:hover:text-cyan-400 transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <button className="hidden md:inline-flex px-4 py-2 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-cyan-600 transition">
            Start a Project 
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-cyan-500/10 text-slate-800 dark:text-white"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-cyan-500/10 bg-white dark:bg-[#030b11] px-[5%] py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-base font-medium text-slate-700 dark:text-white/70 hover:text-cyan-500 transition"
            >
              {link.name}
            </a>
          ))}

          <button className="w-full mt-4 px-4 py-3 rounded-xl bg-primary text-white font-semibold">
            Start a Project 
          </button>
        </div>
      )}
    </nav>
  );
}