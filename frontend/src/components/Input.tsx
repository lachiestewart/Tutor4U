import React from "react";


type InputProps = {
  name?: string;
  className?: string;
  label?: string;
  description?: string;
  labelClassName?: string;
  wrapClassName?: string;
  placeholder?: string;
  onChange?: (e: string) => void;
  required?: boolean;
  type?: string;
};

const Input: React.FC<InputProps> = ({ name, description, className, label, labelClassName, wrapClassName, placeholder, onChange, required, type }) => {

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (onChange) onChange(e?.target?.value); 
  };

  return (
    <div className={`flex w-full flex-col ${className}`}>
      {!!label && (
        <h4
          className={`w-auto text-left  ${labelClassName}`}
          
        >
          {label}
        </h4>
      )}
      {!!description && (
        <p
          className={`w-auto text-left text-sm`}
          
        >
          {description}
        </p>
      )}
      <div
        className={`h-auto w-full items-start rounded-[10px] bg-white-A700 ${wrapClassName}`}
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
