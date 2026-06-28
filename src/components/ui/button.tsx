import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "luxe-button-fill hover:-translate-y-0.5 hover:brightness-105",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:brightness-95",
        outline:
          "border border-border bg-panel text-panel-foreground shadow-sm hover:border-luxury/60 hover:bg-surface",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-surface",
        ghost: "text-foreground hover:bg-surface hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        nav: "bg-panel text-panel-foreground border border-transparent hover:border-border hover:bg-surface",
        hero:
          "luxe-button-fill px-7 py-6 text-sm uppercase tracking-[0.18em] hover:-translate-y-0.5",
        dark:
          "bg-primary text-primary-foreground shadow-[0_16px_40px_color-mix(in_oklab,var(--primary)_22%,transparent)] hover:bg-primary/90",
      },
      size: {
        default: "h-11 px-5 py-3",
        sm: "h-9 px-4 text-xs uppercase tracking-[0.16em]",
        lg: "h-12 px-7 text-sm uppercase tracking-[0.18em]",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
