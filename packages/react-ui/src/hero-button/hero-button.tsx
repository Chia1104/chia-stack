import React, { type FC, type ComponentProps } from "react";
import { cn } from "../utils";

const HeroButton: FC<
  ComponentProps<"button"> & { upClassName?: string; downClassName?: string }
> = (props) => {
  const { children, disabled, upClassName, downClassName, ...rest } = props;
  return (
    <button
      disabled={disabled}
      className={cn(
        "bg-ctw_secondary dark:bg-ctw_primary group relative inline-flex self-center rounded transition ease-in-out",
        downClassName
      )}
      {...rest}>
      <span
        className={cn(
          "bg-ctw_white/90 dark:bg-ctw_dark/90 text-ctw_dark dark:text-ctw_white transform p-3 text-base backdrop-blur-sm transition ease-in-out",
          disabled
            ? "cursor-not-allowed text-gray-400"
            : "group-hover:-translate-x-1 group-hover:-translate-y-1",
          upClassName
        )}>
        {children}
      </span>
    </button>
  );
};

export default HeroButton;
