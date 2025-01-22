import * as yup from 'yup';

export const schema = yup.object().shape({
  id: yup.string(),
  name: yup.string().required("Nome da receita é obrigatório"),
  ingredients: yup
    .array()
    .of(yup.string().required("Ingrediente é obrigatório"))
    .min(1, "Adicione pelo menos um ingrediente"),
  instructions: yup.string().required("Modo de preparo é obrigatório"),
  favorite: yup.boolean(),
})