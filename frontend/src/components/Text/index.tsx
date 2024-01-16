import React from "react";

const sizeClasses = {
  txtMontserratRomanMedium12Black900: "font-medium font-montserrat",
  txtMontserratRomanSemiBold28WhiteA700: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold18WhiteA700: "font-montserrat font-semibold",
  txtMontserratRomanBold36: "font-bold font-montserrat",
  txtInterRegular10: "font-inter font-normal",
  txtMontserratRomanRegular20: "font-montserrat font-normal",
  txtMontserratRomanBold32: "font-bold font-montserrat",
  txtMontserratRomanRegular12: "font-montserrat font-normal",
  txtMontserratRomanRegular18: "font-montserrat font-normal",
  txtMontserratRomanSemiBold25: "font-montserrat font-semibold",
  txtMontserratRomanMedium14: "font-medium font-montserrat",
  txtMontserratRomanSemiBold28Indigo600: "font-montserrat font-semibold",
  txtMontserratRomanBlack18: "font-black font-montserrat",
  txtInterRegular10Black900: "font-inter font-normal",
  txtMontserratRomanSemiBold20: "font-montserrat font-semibold",
  txtMontserratRomanBold32WhiteA700: "font-bold font-montserrat",
  txtInterRegular12: "font-inter font-normal",
  txtMontserratRomanBold32Indigo600: "font-bold font-montserrat",
  txtMontserratRomanMedium20: "font-medium font-montserrat",
  txtMontserratRomanSemiBold18: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold28: "font-montserrat font-semibold",
  txtMontserratRomanMedium12: "font-medium font-montserrat"
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
