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
import { cn } from "../utils";

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
          "w-full rounded border transition ease-in-out focus:outline-none ctw-component-bg-secondary p-1 disabled:cursor-not-allowed disable:border-ctw_danger disabled:opacity-50 focus:shadow-md",
          isValid
            ? "dark:border-slate-700 focus:border-ctw_secondary focus:shadow-ctw_secondary/40 dark:focus:border-ctw_primary dark:focus:shadow-ctw_primary/40"
            : "border-ctw_danger focus:shadow-ctw_danger/40",
          className
        )}
        {...rest}
      />
      {!isValid && error && (
        <p className={cn("text-ctw_danger", errorClassName)}>{error ?? ""}</p>
      )}
    </>
  );
});

Textarea.displayName = "Input";

export { type TextareaRef };
export default Textarea;
