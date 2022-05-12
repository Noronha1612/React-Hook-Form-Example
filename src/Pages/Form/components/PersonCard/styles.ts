import { FiTrash } from "react-icons/fi";
import styled from "styled-components";
import { Radio } from "../../../../components/Form/Radio";

export const PersonCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  border: 0.5px solid ${({ theme }) => theme.colors.secondary_light};
  border-radius: 0.5rem;
  padding: 1.5rem 1rem;

  margin-top: 1rem;

  .row-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  input {
    flex: 1;
  }
`

export const TrashIcon = styled(FiTrash)`
  color: ${({ theme }) => theme.colors.attention};

  transition: 0.1s color;

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.attention_light};
  }
`;

export const GenreInput = styled(Radio).attrs({
  label: 'Sexo'
})`
  margin-top: 1rem;
`