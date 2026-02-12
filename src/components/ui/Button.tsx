import { cn } from "@/lib/utils";
import { ArrowRight, ArrowDown } from "lucide-react";
import { ReactNode, AnchorHTMLAttributes } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
  arrow?: "right" | "down" | "none";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  arrow = "right",
  children,
  className,
  ...props
}: ButtonProps) {
  const ArrowIcon = arrow === "down" ? ArrowDown : ArrowRight;

  return (
    <a
      className={cn(
        "group inline-flex items-center gap-2 rounded-lg font-display text-[0.95rem] font-semibold transition-all duration-300",
        variant === "primary" &&
          "bg-brand-accent px-8 py-3.5 text-surface-dark hover:-translate-y-0.5 hover:bg-brand-accent-light hover:shadow-[0_8px_30px_rgba(138,190,83,0.25)]",
        variant === "secondary" &&
          "border border-border-hover bg-transparent px-8 py-3.5 text-text-primary hover:border-brand-accent hover:bg-brand-accent/[0.08]",
        className
      )}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <ArrowIcon
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </a>
  );
}
