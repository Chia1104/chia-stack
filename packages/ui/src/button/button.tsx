import React, { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@chiastack/ui-utils";
import { type VariantProps, cva } from "class-variance-authority";
import { motion, type MotionProps } from "framer-motion";
import { tv, type VariantProps as TVariantProps } from "tailwind-variants";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const baseVariants = tv({
  base: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
});

const newVariants = tv({
  extend: baseVariants,
  variants: {
    color: {
      primary: "bg-primary text-white hover:bg-primary/80",
      secondary: "bg-secondary text-white hover:bg-secondary/80",
      success: "bg-success text-white hover:bg-success/80",
      danger: "bg-danger text-white hover:bg-danger/80",
      warning: "bg-warning text-white hover:bg-warning/80",
      info: "bg-info text-white hover:bg-info/80",
    },
    outline: {
      true: "bg-transparent border border-secondary dark:border-primary hover:bg-secondary/10 dark:hover:bg-primary/10",
    },
    ghost: {
      true: "bg-transparent hover:bg-secondary/10 dark:hover:bg-primary/10 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
    },
    link: {
      true: "bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
    },
  },
  compoundVariants: [
    {
      color: "success",
      outline: true,
      class: "border-success hover:bg-success/10",
    },
    {
      color: "success",
      ghost: true,
      class: "hover:bg-success/10 dark:hover:bg-success/10",
    },
    {
      color: "danger",
      outline: true,
      class: "border-danger hover:bg-danger/10",
    },
    {
      color: "danger",
      ghost: true,
      class: "hover:bg-danger/10 dark:hover:bg-danger/10",
    },
    {
      color: "warning",
      outline: true,
      class: "border-warning hover:bg-warning/10",
    },
    {
      color: "warning",
      ghost: true,
      class: "hover:bg-warning/10 dark:hover:bg-warning/10",
    },
    {
      color: "info",
      outline: true,
      class: "border-info hover:bg-info/10",
    },
  ],
});

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default:
          "bg-secondary dark:bg-primary text-white hover:bg-secondary/80 dark:hover:bg-primary/80",
        outline:
          "bg-transparent border border-secondary dark:border-primary hover:bg-secondary/10 dark:hover:bg-primary/10",
        ghost:
          "bg-transparent hover:bg-secondary/10 dark:hover:bg-primary/10 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
        success: "bg-success text-white hover:bg-success/80",
        successOutline:
          "bg-transparent border border-success text-success hover:bg-success/10",
        successGhost:
          "bg-transparent hover:bg-success/10 dark:hover:bg-success/10 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        successLink:
          "bg-transparent underline-offset-4 hover:underline text-success hover:bg-transparent dark:hover:bg-transparent",
        danger: "bg-danger text-white hover:bg-danger/80",
        dangerOutline:
          "bg-transparent border border-danger text-danger hover:bg-danger/10",
        dangerGhost:
          "bg-transparent hover:bg-danger/10 dark:hover:bg-danger/10 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        dangerLink:
          "bg-transparent underline-offset-4 hover:underline text-danger hover:bg-transparent dark:hover:bg-transparent",
        warning: "bg-warning text-white hover:bg-warning/80",
        warningOutline:
          "bg-transparent border border-warning text-warning hover:bg-warning/10",
        warningGhost:
          "bg-transparent hover:bg-warning/10 dark:hover:bg-warning/10 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        warningLink:
          "bg-transparent underline-offset-4 hover:underline text-warning hover:bg-transparent dark:hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = forwardRef<HTMLButtonElement, ButtonProps & MotionProps>(
  ({ className, children, variant, size, ...props }) => {
    return (
      <motion.button
        whileTap={{
          scale: 0.95,
        }}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}>
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export default Button;
export { type ButtonProps, buttonVariants };
