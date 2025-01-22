import { Button } from "@/components/ui/button"
import { Minus } from "lucide-react"
import React from "react"
import type { UseFormRegister } from "react-hook-form"
import type { Recipe } from "../../types/Recipe"

interface IngredientFieldProps {
    index: number
    register: UseFormRegister<Recipe>
    onRemove: () => void
}

const IngredientField: React.FC<IngredientFieldProps> = ({
    index,
    register,
    onRemove
}) => (
    <div className="flex items-center mt-2">
        <input 
            type="text" 
            {...register(`ingredients.${index}`)} 
            className="flex-grow border rounded-md p-2" 
        />
        <Button 
            type="button" 
            variant="outline" 
            size="icon" 
            onClick={onRemove} 
            className="ml-2"
        >
            <Minus className="h-4 w-4" />
        </Button>
    </div>
);

export default IngredientField;
