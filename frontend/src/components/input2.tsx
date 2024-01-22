import React from "react";
import { ErrorMessage } from ".";
import { Text } from ".";

const shapes = { square: "rounded-none", round: "rounded-[10px]" } as const;
const variants = {
  fill: {
    gray_200_01: "bg-gray-200_01",
    blue_gray_700: "bg-blue_gray-700 text-white-A700",
    white_A700: "bg-white-A700 text-black-900",
    blue_gray_100: "bg-blue_gray-100",
  },
} as const;
const sizes = {
  xs: "pb-[9px] pt-[11px] px-[9px]",
  sm: "pb-2.5 pt-4 px-2.5",
} as const;

export type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    wrapClassName: string;
    labelClassName: string;
    className: string;
    name: string;
    placeholder: string;
    type: string;
    errors: string[];
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      wrapClassName = "",
      labelClassName ="",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "round",
      size = "",
      variant = "fill",
      color = "white_A700",
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <div className="flex flex-col justify-center w-full">
        {!!label && <Text
          className={`text-left text-lg w-auto ${labelClassName}`}
          size="txtMontserratRomanSemiBold18"
        >
          {label}
        </Text>}
        <div
          className={`${wrapClassName} 
              ${(shape && shapes[shape]) || ""} 
              ${(variant && variants[variant]?.[color]) || ""} 
              ${(size && sizes[size]) || ""}`}
        >

          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0 pl-5`}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </div>
    );
  },
);

export { Input };