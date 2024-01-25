import React from "react";
import Text from "./Text";

type InputProps = {
  name?: string;
  className?: string;
  label?: string;
  labelClassName?: string;
  placeholder?: string;
  onChange?: (e: string) => void;
  required?: boolean;
  type?: string;
};

const Input: React.FC<InputProps> = ({ name, className, label, labelClassName, placeholder, onChange, required, type }) => {

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
        className="h-auto w-full items-start rounded-[10px] bg-white-A700"
      >
        <input
          name={name}
          className="w-full border-0 bg-transparent px-5 py-3"
          placeholder={placeholder}
          onChange={handleChange}
          required={required}
          type={type}
        />
      </div>
    </div>
  );
};

Input.defaultProps = {required: false, type: "text"};

export default Input;
