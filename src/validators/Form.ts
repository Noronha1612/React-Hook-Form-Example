import * as yup from 'yup';

export const FormSchema = yup.object({
  name: yup.string().required('Campo obrigatório*'),
  nickname: yup.string(),
  amount: yup.string().required('Campo obrigatório*'),
  persons: yup.array().of(yup.object({
    name:  yup.string().required('Campo obrigatório*'),
    lastName:  yup.string().required('Campo obrigatório*'),
    role: yup.string().required('Campo obrigatório*'),
    genre: yup.string(),
  }))
});
