import React, { HTMLAttributes } from "react";
import { ErrorOption, UseFormRegisterReturn } from "react-hook-form";
import { FieldInput, FieldInputCurrency, InputContainer } from "./styles";

type InputProps = HTMLAttributes<HTMLDivElement> & {
  inputProps?: HTMLAttributes<HTMLInputElement>;
  currency?: boolean;
  register?: UseFormRegisterReturn;
  error?: ErrorOption;
};

export const Input: React.FC<InputProps> = React.forwardRef(({ inputProps, currency, register, error, ...rest }, _) => {
  return (
    <InputContainer {...rest}>
      {error && (
        <span className="error">{error.message}</span>
      )}

      {currency ? 
        <FieldInputCurrency {...inputProps} hasError={!!error} {...register} /> :
        <FieldInput {...inputProps} hasError={!!error} {...register} />
      }
    </InputContainer>
  );
});
