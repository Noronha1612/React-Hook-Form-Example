import styled, { css } from "styled-components";
import CurrencyInput from 'react-currency-masked-input';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  .error {
    color: ${({ theme }) => theme.colors.attention};
    font-size: .6rem;
    margin-left: 0.6rem;
    margin-bottom: 0.4rem;
  }
`;

type FieldInputProps = {
  hasError?: boolean;
}

export const FieldInput = styled.input<FieldInputProps>`
  background: ${({ theme }) => theme.colors.background};

  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme, hasError }) => 
    hasError ? 
    theme.colors.attention: 
    theme.colors.inputStroke
  };;

  outline-color: ${({ theme }) => theme.colors.primary};
`;

export const FieldInputCurrency = styled(CurrencyInput as any)<FieldInputProps>`
  background: ${({ theme }) => theme.colors.background};

  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme, hasError }) => 
    hasError ? 
    theme.colors.attention: 
    theme.colors.inputStroke
  };;

  outline-color: ${({ theme }) => theme.colors.primary};
`;
