"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { navLinks, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 py-5 transition-all duration-400",
        scrolled &&
          "border-b border-border bg-surface-dark/85 py-3 backdrop-blur-xl"
      )}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-[clamp(20px,5vw,80px)]">
        <Link href="/" aria-label={`${siteConfig.name} Home`}>
          <Logo size="md" />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm text-text-secondary transition-colors duration-300 hover:text-text-primary"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-brand-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="rounded-md border border-brand-accent px-6 py-2.5 text-sm font-medium text-brand-accent transition-all duration-300 hover:bg-brand-accent hover:text-surface-dark"
            >
              Get in Touch
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="z-[60] md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X size={24} className="text-text-primary" />
          ) : (
            <Menu size={24} className="text-text-primary" />
          )}
        </button>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-surface-dark/[0.97] backdrop-blur-xl md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-medium text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded-md border border-brand-accent px-8 py-3 text-lg font-medium text-brand-accent transition-all duration-300 hover:bg-brand-accent hover:text-surface-dark"
            >
              Get in Touch
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}