import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import { type ComponentProps } from "react";
import { cn } from "@chiastack/ui-utils";
import { type DefaultProps } from "../type";

const InternalAspectRatio = AspectRatioPrimitive.Root;

const AspectRatio = ({
  children,
  className,
  ...props
}: ComponentProps<typeof InternalAspectRatio> & DefaultProps) => {
  return (
    <InternalAspectRatio className={cn(className)} {...props}>
      {children}
    </InternalAspectRatio>
  );
};

export default AspectRatio;
