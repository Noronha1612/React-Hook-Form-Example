import React, { HTMLAttributes } from "react";
import { FieldInput, FieldInputCurrency, InputContainer } from "./styles";

type InputProps = HTMLAttributes<HTMLDivElement> & {
  inputProps?: HTMLAttributes<HTMLInputElement>;
  currency?: boolean;
};

export const Input: React.FC<InputProps> = React.forwardRef(({ inputProps, currency, ...rest }, _) => {
  return (
    <InputContainer {...rest}>
      {currency ? 
        <FieldInputCurrency {...inputProps} hasError={!!false} /> :
        <FieldInput {...inputProps} hasError={!!false}  />
      }
    </InputContainer>
  );
});
