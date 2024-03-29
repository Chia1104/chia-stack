import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@chiastack/ui-utils";
import { type DefaultProps } from "../type";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & DefaultProps
>(({ className, noneStyle, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      !noneStyle && "border-b border-b-slate-200 dark:border-b-slate-700",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> &
    DefaultProps
>(({ className, children, noneStyle, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        !noneStyle &&
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}>
      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> &
    DefaultProps
>(({ className, children, noneStyle, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      !noneStyle &&
        "data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden text-sm transition-all",
      className
    )}
    {...props}>
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
