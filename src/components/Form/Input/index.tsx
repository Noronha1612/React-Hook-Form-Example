import React, { HTMLAttributes } from "react";
import { FieldInput, InputContainer } from "./styles";

type InputProps = HTMLAttributes<HTMLDivElement> & {
  inputProps?: HTMLAttributes<HTMLInputElement>;
};

export const Input: React.FC<InputProps> = React.forwardRef(({ inputProps, ...rest }, _) => {
  return (
    <InputContainer {...rest}>
      <FieldInput {...inputProps} hasError={!!false} />
    </InputContainer>
  );
});
