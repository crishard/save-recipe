import { useState } from 'react'
import type { Recipe } from '../types/Recipe'

export const useRecipeSelection = () => {
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null)

    const handleSelect = (recipe: Recipe) => setSelectedRecipe(recipe)
    const handleClose = () => setSelectedRecipe(null)

    return {
        selectedRecipe,
        isOpen: !!selectedRecipe,
        handleSelect,
        handleClose
    }
}
