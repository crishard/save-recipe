import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import React from 'react'
import type { UseFormRegister } from 'react-hook-form'
import type { Recipe } from '../../types/Recipe'
import FormField from './FormField'
import IngredientField from './IngredientField'

interface IngredientsSectionProps {
    fields: { id: string }[]
    register: UseFormRegister<Recipe>
    error?: string
    onAdd: () => void
    onRemove: (index: number) => void
}

const IngredientsSection: React.FC<IngredientsSectionProps> = ({
    fields,
    register,
    error,
    onAdd,
    onRemove
}) => (
    <FormField label="Ingredientes" error={error}>
        {fields.map((field, index) => (
            <IngredientField
                key={field.id}
                index={index}
                register={register}
                onRemove={() => onRemove(index)}
            />
        ))}
        <Button 
            type="button" 
            variant="outline" 
            size="lg" 
            onClick={onAdd} 
            className="mt-2"
        >
            <Plus className="h-4 w-4 mr-2" />
            Adicionar Ingrediente
        </Button>
    </FormField>
)

export default IngredientsSection
