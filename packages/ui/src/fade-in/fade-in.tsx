import { motion, useInView, type AnimationProps } from "framer-motion";
import React, { useRef, type ReactNode } from "react";
import { cn } from "@chiastack/ui-utils";
import { type DefaultProps } from "../type";

const FadeIn = ({
  children,
  className,
  noVertical,
  viewTriggerOffset,
  transition,
  ...rest
}: {
  children: ReactNode;
  noVertical?: boolean;
  viewTriggerOffset?: boolean;
} & AnimationProps &
  DefaultProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: viewTriggerOffset ? "-128px" : "0px",
  });

  const fadeUpVariants = {
    initial: {
      opacity: 0,
      y: noVertical ? 0 : 24,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      animate={inView ? "animate" : "initial"}
      variants={fadeUpVariants}
      className={cn(className)}
      initial={false}
      transition={{
        type: "spring",
        delay: 0,
        ...transition,
      }}
      {...rest}>
      {children}
    </motion.div>
  );
};

export default FadeIn;
