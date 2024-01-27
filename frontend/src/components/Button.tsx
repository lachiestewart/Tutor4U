import React from "react";

const shapes = { round: "rounded-[10px]" } as const;
const variants = {
  fill: {
    blue_A200: "bg-blue-A200 text-white-A700",
    gray_400: "bg-gray-400",
    blue_gray_700: "bg-blue_gray-700 text-white-A700",
  },
} as const;
const sizes = { xs: "p-[5px]", sm: "p-2.5", md: "p-3.5" } as const;

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
  variant = "blue_gray_700",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className="rounded-xl border-2 border-blue_gray-700 bg-blue_gray-700 py-2 px-3 font-semibold text-violet-100 shadow-lg duration-300 ease-in-out  hover:border-2 hover:border-gray-300 hover:bg-blue-800 hover:text-white-A700 hover:shadow-xl"
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export default Button;
