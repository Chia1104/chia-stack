import React, { type FC, type ComponentProps } from "react";
import { cn } from "../utils";

const HeroButton: FC<ComponentProps<"button">> = (props) => {
  const { children, disabled, className, ...rest } = props;
  return (
    <button
      disabled={disabled}
      className={cn(
        "group relative inline-flex transition ease-in-out rounded self-center bg-ctw_secondary dark:bg-ctw_primary",
        className
      )}
      {...rest}>
      <span
        className={cn(
          "ctw-component-button-secondary transform text-base",
          disabled
            ? "text-gray-400 cursor-not-allowed"
            : "group-hover:-translate-x-1 group-hover:-translate-y-1"
        )}>
        {children}
      </span>
    </button>
  );
};

export default HeroButton;
