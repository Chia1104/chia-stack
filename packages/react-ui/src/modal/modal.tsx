import React, { type FC } from "react";
import { AnimatePresence, motion, MotionProps } from "framer-motion";
import { createPortal } from "react-dom";
import { usePortal, useLockedBody } from "@chia-stack/usehook";
import { cn } from "../utils";

interface ModalProps extends MotionProps {
  isOpen: boolean;
  handleModal: () => void;
  className?: string;
}

const Modal: FC<ModalProps> = (props) => {
  const { isOpen, children, handleModal, className, ...rest } = props;
  const ov = {
    open: { opacity: 1 },
    closed: { opacity: 0, delay: 300 },
  };
  const iv = {
    open: { opacity: 1, y: 0, delay: 3000 },
    closed: { opacity: 0, y: -100 },
  };
  useLockedBody(isOpen);
  const portal = usePortal("modal");
  if (!portal) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          transition={{ duration: 0.5, type: "spring" }}
          onClick={handleModal}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          exit="closed"
          variants={ov}
          className="ctw-component-modal">
          <motion.div
            transition={{ duration: 0.5, type: "spring" }}
            initial="closed"
            onClick={(e) => e.stopPropagation()}
            animate={isOpen ? "open" : "closed"}
            exit="closed"
            variants={iv}
            className={cn(className)}
            {...rest}>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    portal
  );
};

export default Modal;
