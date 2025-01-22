import type { Recipe } from "@/types/Recipe"
import { yupResolver } from "@hookform/resolvers/yup"
import { useEffect } from "react"
import { useFieldArray, useForm, type FieldArrayPath } from "react-hook-form"
import { schema } from "../lib/schema"

const defaultValues: Recipe = {
  id: "",
  name: "",
  ingredients: [""],
  instructions: "",
  favorite: false,
}

export const useRecipeForm = (initialData?: Recipe, onSubmit?: (data: Recipe) => void) => {
  const methods = useForm<Recipe>({
    resolver: yupResolver(schema),
    defaultValues: initialData || defaultValues,
  })

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods

  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients" as FieldArrayPath<Recipe>,
  })

  const handleFormSubmit = (data: Recipe) => {
    onSubmit?.(data)
    reset(defaultValues)
  }

  useEffect(() => {
    if (initialData) {
      reset(initialData)
    }
  }, [initialData, reset])

  return {
    register,
    fields,
    errors,
    append,
    remove,
    handleSubmit: handleSubmit(handleFormSubmit),
  }
}

