import React, { HTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { RadioContainer } from "./styles";

type RadioProps = {
  label: string;
  name: string;
  register: UseFormRegisterReturn;
  options: {
    label: string;
    value: string;
  }[];
} & HTMLAttributes<HTMLDivElement>;

export const Radio: React.FC<RadioProps> = React.forwardRef(({ label, name, options, register, ...rest }, _) => {
  return (
    <RadioContainer {...rest}>
      <span>{ label }</span>

      <div className="options-container">
        {options.map(({ label: optionLabel, value }) => (
          <div key={value}>
            <label htmlFor={value}>{optionLabel}</label>
            <input type="radio" {...register} name={name} value={value} id={value} />
          </div>
        ))}
      </div>
    </RadioContainer>
  );
});
