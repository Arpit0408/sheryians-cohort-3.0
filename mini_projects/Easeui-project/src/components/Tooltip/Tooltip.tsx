import React, { useState, useRef, useEffect } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import gsap from "gsap";

const tooltipVariants = cva(
  "absolute z-50 pointer-events-none whitespace-nowrap font-medium transition-all duration-200 select-none shadow-md",
  {
    variants: {
      variant: {
        dark: "bg-slate-900 text-white border border-slate-700/60",
        light: "bg-white text-gray-900 border border-gray-200 shadow-xl",
        primary: "bg-indigo-600 text-white shadow-indigo-500/20",
        outline: "bg-slate-900/90 text-white border border-gray-400 backdrop-blur-md",
        glass: "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-gray-900 dark:text-white border border-gray-200/50 shadow-xl",
      },
      size: {
        sm: "text-xs py-1 px-2 rounded",
        md: "text-xs py-1.5 px-3 rounded-md",
        lg: "text-sm py-2 px-4 rounded-lg",
      },
      position: {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2",
      },
    },
    defaultVariants: {
      variant: "dark",
      size: "md",
      position: "top",
    },
  }
);

export type TooltipPosition = "top" | "bottom" | "left" | "right";
export type TooltipVariant = "dark" | "light" | "primary" | "outline" | "glass";
export type TooltipSize = "sm" | "md" | "lg";
export type TooltipAnimation = "fadeIn" | "scaleIn" | "slide" | "bounce" | "none";

export interface TooltipProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "content">,
    VariantProps<typeof tooltipVariants> {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: TooltipPosition;
  variant?: TooltipVariant;
  size?: TooltipSize;
  delay?: number;
  arrow?: boolean;
  disabled?: boolean;
  animation?: TooltipAnimation;
  contentClassName?: string;
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      content,
      children,
      position = "top",
      variant = "dark",
      size = "md",
      delay = 100,
      arrow = true,
      disabled = false,
      animation = "scaleIn",
      className,
      contentClassName,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const tooltipRef = useRef<HTMLDivElement | null>(null);

    const showTooltip = () => {
      if (disabled || !content) return;
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, delay);
    };

    const hideTooltip = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsVisible(false);
    };

    useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, []);

    useEffect(() => {
      if (!isVisible || !tooltipRef.current || animation === "none") return;

      const el = tooltipRef.current;
      if (animation === "fadeIn") {
        gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.2, ease: "power2.out" });
      } else if (animation === "scaleIn") {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 0.2, ease: "back.out(1.7)" }
        );
      } else if (animation === "slide") {
        const offset = position === "top" ? 6 : position === "bottom" ? -6 : 0;
        const offsetX = position === "left" ? 6 : position === "right" ? -6 : 0;
        gsap.fromTo(
          el,
          { opacity: 0, y: offset, x: offsetX },
          { opacity: 1, y: 0, x: 0, duration: 0.2, ease: "power2.out" }
        );
      } else if (animation === "bounce") {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.6 },
          { opacity: 1, scale: 1, duration: 0.35, ease: "elastic.out(1, 0.5)" }
        );
      }
    }, [isVisible, animation, position]);

    const arrowPositionClasses = {
      top: "top-full left-1/2 -translate-x-1/2 border-t-[5px] border-x-[5px] border-b-0 border-x-transparent border-b-transparent",
      bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-[5px] border-x-[5px] border-t-0 border-x-transparent border-t-transparent",
      left: "left-full top-1/2 -translate-y-1/2 border-l-[5px] border-y-[5px] border-r-0 border-y-transparent border-r-transparent",
      right: "right-full top-1/2 -translate-y-1/2 border-r-[5px] border-y-[5px] border-l-0 border-y-transparent border-l-transparent",
    };

    const arrowColorClasses = {
      dark: {
        top: "border-t-slate-900",
        bottom: "border-b-slate-900",
        left: "border-l-slate-900",
        right: "border-r-slate-900",
      },
      light: {
        top: "border-t-white",
        bottom: "border-b-white",
        left: "border-l-white",
        right: "border-r-white",
      },
      primary: {
        top: "border-t-indigo-600",
        bottom: "border-b-indigo-600",
        left: "border-l-indigo-600",
        right: "border-r-indigo-600",
      },
      outline: {
        top: "border-t-slate-900",
        bottom: "border-b-slate-900",
        left: "border-l-slate-900",
        right: "border-r-slate-900",
      },
      glass: {
        top: "border-t-white/80 dark:border-t-slate-900/80",
        bottom: "border-b-white/80 dark:border-b-slate-900/80",
        left: "border-l-white/80 dark:border-l-slate-900/80",
        right: "border-r-white/80 dark:border-r-slate-900/80",
      },
    };

    return (
      <div
        ref={ref}
        className={cn("relative inline-flex items-center justify-center", className)}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        {...props}
      >
        {children}

        {isVisible && (
          <div
            ref={tooltipRef}
            role="tooltip"
            aria-hidden={!isVisible}
            className={cn(
              tooltipVariants({ variant, size, position }),
              contentClassName
            )}
          >
            {content}
            {arrow && (
              <span
                className={cn(
                  "absolute w-0 h-0 pointer-events-none",
                  arrowPositionClasses[position],
                  arrowColorClasses[variant][position]
                )}
              />
            )}
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = "Tooltip";

export { Tooltip, tooltipVariants };
