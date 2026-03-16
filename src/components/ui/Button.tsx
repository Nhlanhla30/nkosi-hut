import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary";
  arrow?: "right" | "down" | "none";
  children: ReactNode;
  href: string;
  className?: string;
}

export function Button({
  variant = "primary",
  arrow = "right",
  children,
  href,
  className,
}: ButtonProps) {
  const ArrowIcon = arrow === "down" ? ArrowDown : ArrowRight;

  const styles = cn(
    "group inline-flex items-center gap-2 rounded-lg font-display text-[0.95rem] font-semibold transition-all duration-300",
    variant === "primary" &&
      "bg-brand-accent px-8 py-3.5 text-surface-dark hover:-translate-y-0.5 hover:bg-brand-accent-light hover:shadow-[0_8px_30px_rgba(138,190,83,0.25)]",
    variant === "secondary" &&
      "border border-border-hover bg-transparent px-8 py-3.5 text-text-primary hover:border-brand-accent hover:bg-brand-accent/[0.08]",
    className
  );

  const content = (
    <>
      {children}
      {arrow !== "none" && (
        <ArrowIcon
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  // Use Next.js Link for internal routes, regular <a> for anchors and external
  if (href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto")) {
    return (
      <a href={href} className={styles}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={styles}>
      {content}
    </Link>
  );
}