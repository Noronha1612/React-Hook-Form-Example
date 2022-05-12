import styled from "styled-components";

export const RadioContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.colors.background};
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.inputStroke};

  padding: 0.5rem 1rem;

  span {
    flex: 1;
  }

  .options-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    div {
      display: flex;
      align-items: center;
      gap: .5rem;
      position: relative;

      &:not(:last-child)::after {
        content: "";

        position: absolute;
        right: -0.5rem;
        top: 0;

        width: 1px;
        height: 100%;
        background: ${({ theme }) => theme.colors.inputStroke};
      }
    }
  }
`;