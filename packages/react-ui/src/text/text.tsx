import React, { type ComponentProps } from "react";

type TextType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "i" | "b";

interface TextProps extends ComponentProps<"p"> {
  type?: TextType;
}

/** The component is still in development */
const Text = ({ children }: TextProps) => {
  return <p>{children}</p>;
};

export default Text;
