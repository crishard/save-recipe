import { schema } from '@/lib/schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import type { Recipe } from '../types/Recipe'

const defaultValues = {
    id: "",
    name: "",
    ingredients: [""],
    instructions: "",
    favorite: false,
}

export const useRecipeForm = (initialData?: Recipe, onSubmit?: (data: Recipe) => void) => {
    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Recipe>({
        resolver: yupResolver(schema),
        defaultValues: initialData || defaultValues,
    })

    const { fields, append, remove } = useFieldArray({
        control,
        name: "ingredients",
    })

    const handleFormSubmit = (data: Recipe) => {
        onSubmit?.(data)
        reset(defaultValues)
    }

    useEffect(() => {
        reset(initialData)
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