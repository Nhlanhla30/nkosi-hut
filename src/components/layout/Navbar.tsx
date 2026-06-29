"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { navLinks, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isInternal = (href: string) => href.startsWith("/") && !href.startsWith("#");

  const linkClass =
    "text-[0.8125rem] font-light tracking-[0.05em] text-text-secondary/65 transition-colors duration-500 hover:text-text-primary";

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/[0.05] bg-[#0a0f0d]/82 py-4 backdrop-blur-2xl"
          : "py-6"
      )}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-[clamp(20px,5vw,80px)]">

        {/* Logo */}
        <Link href="/" aria-label={`${siteConfig.name} Home`}>
          <Logo size="md" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              {isInternal(link.href) ? (
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              ) : (
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              )}
            </li>
          ))}

          {/* Solid CTA */}
          <li>
            <Link
              href="/contact"
              className="inline-block rounded-md bg-brand-accent px-5 py-[0.45rem] text-[0.8125rem] font-semibold text-surface-dark transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(138,190,83,0.38)]"
            >
              Get in Touch
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="z-[60] md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{ duration: 0.18 }}
                className="block"
              >
                <X size={22} className="text-text-primary" />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ opacity: 0, rotate: 45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -45 }}
                transition={{ duration: 0.18 }}
                className="block"
              >
                <Menu size={22} className="text-text-secondary" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-[#0a0f0d]/[0.97] backdrop-blur-xl md:hidden"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 + i * 0.055, duration: 0.35 }}
                >
                  {isInternal(link.href) ? (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-2xl font-light tracking-wide text-text-secondary transition-colors duration-300 hover:text-text-primary"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-2xl font-light tracking-wide text-text-secondary transition-colors duration-300 hover:text-text-primary"
                    >
                      {link.label}
                    </a>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 + navLinks.length * 0.055, duration: 0.35 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 inline-block rounded-md bg-brand-accent px-8 py-3 text-base font-semibold text-surface-dark transition-all duration-300 hover:scale-[1.03]"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
