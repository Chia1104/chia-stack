import React, {
  forwardRef,
  useId,
  useState,
  type ChangeEvent,
  type ComponentProps,
  useImperativeHandle,
  useRef,
} from "react";
import { ZodType } from "zod";
import { cn } from "@chiastack/utils";

interface Props extends ComponentProps<"textarea"> {
  title?: string;
  error?: string;
  titleClassName?: string;
  errorClassName?: string;
  schema?: ZodType<any>;
}

interface TextareaRef {
  getValidity: () => boolean;
  getNativeInput: () => HTMLTextAreaElement;
}

const Textarea = forwardRef<TextareaRef, Props>((props, ref) => {
  const {
    title,
    error,
    titleClassName,
    schema,
    className,
    onChange,
    onBlur,
    onFocus,
    errorClassName,
    ...rest
  } = props;
  const [isValid, setIsValid] = useState<boolean>(true);
  const id = useId();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useImperativeHandle(ref, () => ({
    getValidity: () => {
      if (schema) return isValid;
      return true;
    },
    getNativeInput: () => {
      return textareaRef.current as HTMLTextAreaElement;
    },
  }));

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (schema) {
      const { value } = e.target;
      setIsValid(schema.safeParse(value).success);
    }
    onChange && onChange(e);
  };

  return (
    <>
      {title && (
        <label className={titleClassName} htmlFor={`${id}-textarea`}>
          {title}
        </label>
      )}
      <textarea
        ref={textareaRef}
        id={`${id}-textarea`}
        onChange={handleChange}
        className={cn(
          "dark:bg-dark/90 text-dark disable:border-danger w-full rounded border bg-white/90 p-1 backdrop-blur-sm transition ease-in-out focus:shadow-md focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:text-white",
          isValid
            ? "focus:border-secondary focus:shadow-secondary/40 dark:focus:border-primary dark:focus:shadow-primary/40 dark:border-slate-700"
            : "border-danger focus:shadow-danger/40",
          className
        )}
        {...rest}
      />
      {!isValid && error && (
        <p className={cn("text-danger", errorClassName)}>{error ?? ""}</p>
      )}
    </>
  );
});

Textarea.displayName = "Input";

export { type TextareaRef };
export default Textarea;
