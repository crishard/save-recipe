import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import React from 'react'
import { useRecipeForm } from '../hooks/useRecipeForm'
import type { Recipe } from '../types/Recipe'
import FormField from './form/FormField'
import IngredientsSection from './form/IngredientsSection'

interface RecipeFormProps {
    onSubmit: (data: Recipe) => void
    initialData?: Recipe
}

const RecipeForm: React.FC<RecipeFormProps> = ({ onSubmit, initialData }) => {
    const {
        register,
        fields,
        errors,
        append,
        remove,
        handleSubmit,
    } = useRecipeForm(initialData, onSubmit)

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <FormField label="Nome da Receita" error={errors.name?.message}>
                <Input 
                    type="text" 
                    {...register("name")} 
                />
            </FormField>

            <IngredientsSection
                fields={fields}
                register={register}
                error={errors.ingredients?.message}
                onAdd={() => append("")}
                onRemove={remove}
            />

            <FormField label="Modo de Preparo" error={errors.instructions?.message}>
                <Textarea
                    {...register("instructions")}
                    rows={5}
                />
            </FormField>

            <Button type="submit" className="w-full">
                {initialData ? "Atualizar Receita" : "Adicionar Receita"}
            </Button>
        </form>
    )
}

export default RecipeForm