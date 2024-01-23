import React from 'react';
import { Text } from '.';

type InputProps = {
    name?: string;
    className?: string;
    label?: string;
    labelClassName?: string;
    wrapClassName?: string;
    placeHolder?: string;
    onChange?: (e: string) => void;
};

const Input: React.FC<InputProps> = ({ name, className, label, labelClassName, wrapClassName, placeHolder, onChange }) => {

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (onChange) onChange(e?.target?.value);
    };

    return (
        <div className={`flex flex-col ${className}`}>
            {!!label && <Text
                className={`text-left text-lg w-auto ${labelClassName}`}
                size="txtMontserratRomanSemiBold18"
            >
                {label}
            </Text>}
            <div className={`bg-white-A700 rounded-[10px] w-full items-start h-auto ${wrapClassName}`}>
                <input
                    name={name}
                    className="w-full bg-transparent border-0 px-5 py-3 w"
                    placeholder={placeHolder}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}

export { Input };