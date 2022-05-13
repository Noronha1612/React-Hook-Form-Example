import { FiUser } from 'react-icons/fi';
import { useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  Container,
  FormContainer,
  FieldInput,
  ButtonWrapper,
  ButtonLink,
} from './styles';

import { PersonCard } from './components/PersonCard';
import { FormFields, Genre } from '../../models/FormFields';
import { FormSchema } from '../../validators/Form';

const newPerson: FormFields['persons'][0] = {
  name: '',
  lastName: '',
  genre: Genre.Male,
  role: ''
}

export const Form = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<FormFields>({
    mode: 'onBlur',
    resolver: yupResolver(FormSchema),
    defaultValues: {
      persons: [newPerson],
    }
  });

  const PERSONS_KEY = 'persons';
  const { fields: persons, append, remove } = useFieldArray({
    control,
    name: PERSONS_KEY,
  });

  const handleAddPerson = () => {
    append(newPerson);
  }

  const handleSendData = (data: FormFields) => {
    console.log(data);
  }

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit(handleSendData)}>
        <h1>Formulário</h1>

        <fieldset>
          <h4>Dados da equipe</h4>
          <FieldInput inputProps={{placeholder: "Nome *"}} register={register('name')} error={errors?.name} />
          <FieldInput inputProps={{placeholder: "Apelido"}} register={register('nickname')} error={errors?.nickname} />
          <FieldInput currency inputProps={{placeholder: "Orçamento *"}} register={register('amount')} error={errors?.amount} />
        </fieldset>

        <fieldset>
          <header>
            <h4>Dados das pessoas</h4>

            <ButtonLink onClick={handleAddPerson}>
              <span>Adicionar nova pessoa</span>
              <FiUser />
            </ButtonLink>
          </header>

          {!persons.length && (
            <span className='no-persons'>Nenhuma pessoa na equipe ;-;</span>
          )}

          {persons.map((person, index) => (
            <PersonCard
              key={person.id}
              onDelete={() => remove(index)}
              control={control}
              rootKey={`${PERSONS_KEY}.${index}`}
              errors={errors?.persons?.[index]}
            />
          ))}
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
