import React, { HTMLAttributes } from "react";
import { RadioContainer } from "./styles";

type RadioProps = {
  label: string;
  name: string;
  options: {
    label: string;
    value: string;
  }[];
} & HTMLAttributes<HTMLDivElement>;

export const Radio: React.FC<RadioProps> = React.forwardRef(({ label, name, options, ...rest }, _) => {
  return (
    <RadioContainer {...rest}>
      <span>{ label }</span>

      <div className="options-container">
        {options.map(({ label: optionLabel, value }) => (
          <div key={value}>
            <label htmlFor={value}>{optionLabel}</label>
            <input type="radio" name={name} value={value} id={value} />
          </div>
        ))}
      </div>
    </RadioContainer>
  );
});
