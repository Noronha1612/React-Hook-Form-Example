import React, { HTMLAttributes } from "react";
import { SelectContainer, SelectInput } from "./styles";

type SelectProps = HTMLAttributes<HTMLDivElement> & {
  options: {
    label: string;
    value: string;
  }[];
  selectProps?: HTMLAttributes<HTMLSelectElement>;
};

export const Select: React.FC<SelectProps> = React.forwardRef(({
  placeholder,
  options,
  selectProps,
  ...rest
}, _) => {
  return (
    <SelectContainer {...rest}>
      <SelectInput {...selectProps} hasError={!!false}>
        <option value="">{placeholder}</option>

        {options.map(({ value, label }) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </SelectInput>
    </SelectContainer>
  );
})