import React, {
  forwardRef,
  useId,
  useState,
  type ChangeEvent,
  type ComponentProps,
  useImperativeHandle,
  useRef,
  useCallback,
} from "react";
import { ZodType } from "zod";
import { cn } from "../utils";

interface Props extends ComponentProps<"input"> {
  title?: string;
  error?: string;
  titleClassName?: string;
  errorClassName?: string;
  schema?: ZodType<any>;
  isValid?: boolean;
  firstTimeError?: boolean;
}

interface InputRef extends Partial<HTMLInputElement> {
  isValid: () => boolean;
}

const Input = forwardRef<InputRef, Props>((props, ref) => {
  const {
    title,
    error,
    titleClassName,
    schema,
    type = "text",
    value,
    className,
    onChange,
    errorClassName,
    isValid: isValidProp = false,
    firstTimeError: firstTimeErrorProp = false,
    ...rest
  } = props;
  const [isValid, setIsValid] = useState<boolean>(isValidProp);
  const [isFirstRender, setIsFirstRender] = useState<boolean>(
    !firstTimeErrorProp
  );
  const [valueState, setValueState] = useState(value ?? "");
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    isValid: () => {
      if (schema) return isValid;
      return true;
    },
    ...inputRef.current,
  }));

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setValueState(value);
      setIsFirstRender(false);
      if (schema) {
        setIsValid(schema.safeParse(value).success);
      }
      onChange && onChange(e);
    },
    [schema, onChange, setIsValid, setValueState, setIsFirstRender]
  );

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
        value={valueState}
        type={type}
        className={cn(
          "bg-ctw_white/90 dark:bg-ctw_dark/90 text-ctw_dark dark:text-ctw_white disable:border-ctw_danger w-full rounded border p-1 backdrop-blur-sm transition transition ease-in-out ease-in-out focus:shadow-md focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          !isFirstRender && !isValid
            ? "border-ctw_danger focus:shadow-ctw_danger/40"
            : "focus:border-ctw_secondary focus:shadow-ctw_secondary/40 dark:focus:border-ctw_primary dark:focus:shadow-ctw_primary/40 dark:border-slate-700",
          className
        )}
        {...rest}
      />
      {!isFirstRender && !isValid && error && (
        <p className={cn("text-ctw_danger", errorClassName)}>{error ?? ""}</p>
      )}
    </>
  );
});

Input.displayName = "Input";

export { type InputRef };
export default Input;
