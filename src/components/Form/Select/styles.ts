import styled from "styled-components";

export const SelectContainer = styled.div`
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

type SelectInputProps = {
  hasError?: boolean;
}

export const SelectInput = styled.select<SelectInputProps>`
  background: ${({ theme }) => theme.colors.background};

  display: flex;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme, hasError }) => 
    hasError ? 
    theme.colors.attention: 
    theme.colors.inputStroke
  };
  padding: 0.5rem 1rem;

  flex: 1;
  
  border-right: 1rem solid transparent;

  outline-color: ${({ theme }) => theme.colors.primary};
`