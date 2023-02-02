import React, {
  forwardRef,
  useId,
  useState,
  type ChangeEvent,
  type FocusEvent,
  type DetailedHTMLProps,
  type InputHTMLAttributes,
  useImperativeHandle,
  useRef,
} from "react";
import { ZodType } from "zod";
import { cn } from "../utils";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
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
  const [isFocus, setIsFocus] = useState(false);
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

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocus(false);
    onBlur && onBlur(e);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocus(true);
    onFocus && onFocus(e);
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
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={cn(
          "w-full rounded ctw-component-border-primary transition ease-in-out focus:outline-none ctw-component-bg-secondary p-1 shadow",
          !isValid && "border-ctw_danger",
          isFocus && isValid && "border-ctw_primary",
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
