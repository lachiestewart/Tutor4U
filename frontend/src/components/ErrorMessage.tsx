import React from "react";

type Props = Partial<{
  errors: any[];
  className: string;
}>;

const ErrorMessage: React.FC<Props> = ({ errors = [], className = "" }) => {
  return errors?.length > 0 ? (
    <div className={`mt-1 w-full text-left text-xs text-red-500 ${className}`}>
      {errors.join(", ")}
    </div>
  ) : (
    <></>
  );
};

export default ErrorMessage;
