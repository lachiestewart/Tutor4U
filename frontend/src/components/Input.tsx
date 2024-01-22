import React from "react";
import { Text } from ".";

type InputProps = {
  className?: string;
  label?: string;
  labelClassName?: string;
  wrapClassName?: string;
  placeHolder?: string;
  onChange?: (e: string) => void;
};

const Input: React.FC<InputProps> = ({
  className,
  label,
  labelClassName,
  wrapClassName,
  placeHolder,
  onChange,
}) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (onChange) onChange(e?.target?.value);
  };

  return (
    <div className={`flex flex-col ${className}`}>
      {!!label && (
        <Text
          className={`w-auto text-left text-lg ${labelClassName}`}
          size="txtMontserratRomanSemiBold18"
        >
          {label}
        </Text>
      )}
      <div
        className={`h-auto w-full items-start rounded-[10px] bg-white-A700 ${wrapClassName}`}
      >
        <input
          className="w w-full border-0 bg-transparent px-5 py-3"
          placeholder={placeHolder}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export { Input };
