import { FiUser } from 'react-icons/fi';

import {
  Container,
  FormContainer,
  FieldInput,
  ButtonWrapper,
  ButtonLink,
} from './styles';

import { PersonCard } from './components/PersonCard';
import { FormFields, Genre } from '../../models/FormFields';
import { FormEvent } from 'react';

const newPerson: FormFields['persons'][0] = {
  name: '',
  lastName: '',
  genre: Genre.Male,
  role: ''
}

export const Form = () => {
  const handleAddPerson = () => {
    // Adicionar pessoa
  }

  const handleSendData = (event: FormEvent) => {
    event.preventDefault();
  }

  return (
    <Container>
      <FormContainer onSubmit={handleSendData}>
        <h1>Formulário</h1>

        <fieldset>
          <h4>Dados da equipe</h4>
          <FieldInput inputProps={{placeholder: "Nome *"}} />
          <FieldInput inputProps={{placeholder: "Apelido"}} />
          <FieldInput inputProps={{placeholder: "Orçamento *"}} />
        </fieldset>

        <fieldset>
          <header>
            <h4>Dados das pessoas</h4>

            <ButtonLink onClick={handleAddPerson}>
              <span>Adicionar nova pessoa</span>
              <FiUser />
            </ButtonLink>
          </header>

          {!true && (
            <span className='no-persons'>Nenhuma pessoa na equipe ;-;</span>
          )}

        <PersonCard />
        </fieldset>

        <ButtonWrapper>
          <button type='submit'>
            Enviar
          </button>
        </ButtonWrapper>
      </FormContainer>
    </Container>
  )
}
