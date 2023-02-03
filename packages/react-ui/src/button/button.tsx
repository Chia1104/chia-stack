import React, { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../utils";
import { type VariantProps, cva } from "class-variance-authority";
import { motion, type MotionProps } from "framer-motion";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default:
          "bg-ctw_secondary dark:bg-ctw_primary text-white hover:bg-ctw_secondary/80 dark:hover:bg-ctw_primary/80",
        outline:
          "bg-transparent border border-ctw_secondary dark:border-ctw_primary hover:bg-ctw_secondary/10 dark:hover:bg-ctw_primary/10",
        ghost:
          "bg-transparent hover:bg-ctw_secondary/10 dark:hover:bg-ctw_primary/10 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
        success: "bg-ctw_success text-white hover:bg-ctw_success/80",
        successOutline:
          "bg-transparent border border-ctw_success text-ctw_success hover:bg-ctw_success/10",
        danger: "bg-ctw_danger text-white hover:bg-ctw_danger/80",
        dangerOutline:
          "bg-transparent border border-ctw_danger text-ctw_danger hover:bg-ctw_danger/10",
        warning: "bg-ctw_warning text-white hover:bg-ctw_warning/80",
        warningOutline:
          "bg-transparent border border-ctw_warning text-ctw_warning hover:bg-ctw_warning/10",
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
