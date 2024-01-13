import React from "react";

const shapes = { round: "rounded-[10px]" } as const;
const variants = {
  fill: {
    gray_400: "bg-gray-400 text-black-900",
    blue_100: "bg-blue-100",
    light_green_900: "bg-light_green-900 text-white-A700",
    red_900: "bg-red-900 text-white-A700",
    blue_A200: "bg-blue-A200 text-white-A700",
    blue_gray_700: "bg-blue_gray-700 text-white-A700",
  },
} as const;
const sizes = { xs: "p-[5px]", sm: "p-[9px]", md: "p-3.5" } as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
