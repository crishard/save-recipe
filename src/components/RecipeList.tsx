import React from 'react'
import { useRecipeSelection } from '../hooks/useRecipeSelection'
import type { Recipe } from '../types/Recipe'
import RecipeCard from './recipeCard/RecipeCard'
import RecipeDetailsPopup from './RecipeDetailsPopup'

interface RecipeListProps {
    recipes: Recipe[]
    onEdit: (recipe: Recipe) => void
    onDelete: (id: string) => void
    onToggleFavorite: (id: string) => void
}

const RecipeList: React.FC<RecipeListProps> = ({
    recipes,
    onEdit,
    onDelete,
    onToggleFavorite
}) => {
    const {
        selectedRecipe,
        isOpen,
        handleSelect,
        handleClose
    } = useRecipeSelection()

    return (
        <>
            <div className="flex flex-wrap gap-4">
                {recipes.map((recipe) => (
                    <RecipeCard
                        key={recipe.id}
                        recipe={recipe}
                        onClick={() => handleSelect(recipe)}
                        onEdit={onEdit}
                        onDelete={onDelete}
                        onToggleFavorite={onToggleFavorite}
                    />
                ))}
            </div>
            <RecipeDetailsPopup
                recipe={selectedRecipe}
                isOpen={isOpen}
                onClose={handleClose}
                onToggleFavorite={onToggleFavorite}
            />
        </>
    )
}

export default RecipeList