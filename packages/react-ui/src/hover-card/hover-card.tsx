import React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { cn } from "../utils";

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "border-ctw_secondary animate-in zoom-in-90 dark:border-ctw_primary bg-ctw_white/90 dark:bg-ctw_dark/90 text-ctw_dark dark:text-ctw_white shadow-ctw_secondary/40 dark:shadow-ctw_primary/40 z-50 w-64 rounded-md border p-4 shadow-md outline-none backdrop-blur-sm transition ease-in-out",
      className
    )}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
