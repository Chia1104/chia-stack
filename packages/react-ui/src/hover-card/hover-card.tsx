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
      "z-50 w-64 rounded-md border border-ctw_secondary p-4 shadow-md outline-none animate-in zoom-in-90 dark:border-ctw_primary ctw-component-bg-secondary shadow-ctw_secondary/40 dark:shadow-ctw_primary/40",
      className
    )}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
