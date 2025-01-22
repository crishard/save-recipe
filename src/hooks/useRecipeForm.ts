import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { schema } from '../lib/schema';

interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string;
  favorite: boolean;
}

const defaultValues: Recipe = {
  id: "",
  name: "",
  ingredients: [""],
  instructions: "",
  favorite: false,
};

export const useRecipeForm = (
  initialData?: Recipe,
  onSubmit?: (data: Recipe) => void
) => {
  const methods = useForm<Recipe>({
    resolver: yupResolver(schema),
    defaultValues: initialData || defaultValues,
  });

  const { register, control, handleSubmit, reset, formState: { errors } } = methods;

  const { fields, append, remove } = useFieldArray<Recipe, never, "id">({
    control,
    name: "ingredients" as never,
    keyName: "id",
  });

  const handleFormSubmit = (data: Recipe) => {
    onSubmit?.(data);
    reset(defaultValues);
  };

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  return {
    register,
    fields,
    errors,
    append,
    remove,
    handleSubmit: handleSubmit(handleFormSubmit),
  };
};