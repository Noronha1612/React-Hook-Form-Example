import styled from 'styled-components';
import { Input } from '../../components/Form/Input';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;
`;

export const FormContainer = styled.form`
  background: ${({ theme }) => theme.colors.shape};
  padding: 2rem;
  border-radius: .5rem;
  box-shadow: 0 0 1rem #00000033;
  min-width: 720px;

  h1 {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.title};
    font-size: 1.5rem;
    font-weight: 600;
  }

  fieldset {
    border: 0;
    border-top: 1px solid ${({ theme }) => theme.colors.secondary_light};

    padding: 1rem 0 2rem 0;

    display: flex;
    flex-direction: column;

    .no-persons {
      text-align: center;
      margin-top: 2rem;
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 1.2rem;
      font-weight: 400;
    }

    header {
      display: flex;

      justify-content: space-between;
    }

    h4 {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.title};
    }
  }
`;

export const FieldInput = styled(Input)`
  margin-top: 1rem;
  flex: 1;
`;

export const ButtonLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme.colors.secondary};

  cursor: pointer;

  transition: .1s color;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  button {
    padding: 0.67rem 4rem;

    border: none;
    border-radius: 1rem;
    background: ${({ theme }) => theme.colors.secondary};

    color: ${({ theme }) => theme.colors.shape};

    cursor: pointer;

    transition: .1s filter;

    &:hover {
      filter: brightness(1.15);
    }
  }
`;
