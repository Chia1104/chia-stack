import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@chiastack/ui-utils";
import { type DefaultProps } from "../type";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & DefaultProps
>(({ className, noneStyle, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      !noneStyle &&
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> & DefaultProps
>(({ className, noneStyle, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn(!noneStyle && "aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> & DefaultProps
>(({ className, noneStyle, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      !noneStyle &&
        "flex h-full w-full animate-pulse items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
