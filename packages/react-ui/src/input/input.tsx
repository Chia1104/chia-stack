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

interface Props extends ComponentProps<"input"> {
  title?: string;
  error?: string;
  titleClassName?: string;
  errorClassName?: string;
  schema?: ZodType<any>;
}

interface InputRef {
  getValidity: () => boolean;
  getNativeInput: () => HTMLInputElement;
}

const Input = forwardRef<InputRef, Props>((props, ref) => {
  const {
    title,
    error,
    titleClassName,
    schema,
    type = "text",
    className,
    onChange,
    onBlur,
    onFocus,
    errorClassName,
    ...rest
  } = props;
  const [isValid, setIsValid] = useState<boolean>(true);
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    getValidity: () => {
      if (schema) return isValid;
      return true;
    },
    getNativeInput: () => {
      return inputRef.current as HTMLInputElement;
    },
  }));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (schema) {
      const { value } = e.target;
      setIsValid(schema.safeParse(value).success);
    }
    onChange && onChange(e);
  };

  return (
    <>
      {title && (
        <label className={titleClassName} htmlFor={`${id}-input`}>
          {title}
        </label>
      )}
      <input
        ref={inputRef}
        id={`${id}-input`}
        onChange={handleChange}
        type={type}
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

Input.displayName = "Input";

export { type InputRef };
export default Input;
