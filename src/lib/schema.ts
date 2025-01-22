import * as yup from 'yup';
import type { Recipe } from '../types/Recipe';

export const schema: yup.ObjectSchema<Recipe> = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required('Nome é obrigatório'),
  ingredients: yup
    .array()
    .of(yup.string().required('Ingrediente é obrigatório'))
    .required('Adicione pelo menos um ingrediente'),
  instructions: yup.string().required('Instruções são obrigatórias'),
  favorite: yup.boolean().required(),
});