import React, { HTMLAttributes } from "react";
import { ErrorOption, UseFormRegisterReturn } from "react-hook-form";
import { SelectContainer, SelectInput } from "./styles";

type SelectProps = HTMLAttributes<HTMLDivElement> & {
  register: UseFormRegisterReturn;
  options: {
    label: string;
    value: string;
  }[];
  selectProps?: HTMLAttributes<HTMLSelectElement>;
  error?: ErrorOption;
};

export const Select: React.FC<SelectProps> = React.forwardRef(({
  placeholder,
  options,
  selectProps,
  register,
  error,
  ...rest
}, _) => {
  return (
    <SelectContainer {...rest}>
      {error && (
        <span className="error">{error.message}</span>
      )}

      <SelectInput {...register} {...selectProps} hasError={!!error}>
        <option value="">{placeholder}</option>

        {options.map(({ value, label }) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </SelectInput>
    </SelectContainer>
  );
})