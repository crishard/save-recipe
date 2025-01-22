import { useMemo } from 'react'
import type { Recipe } from '../types/Recipe'

export const useFilteredRecipes = (
    recipes: Recipe[],
    searchQuery: string,
    showFavorites: boolean
) => {
    return useMemo(() => 
        recipes.filter(
            (recipe) =>
                (showFavorites ? recipe.favorite : true) &&
                (recipe.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    recipe.ingredients.some((ingredient) => 
                        ingredient.toLowerCase().includes(searchQuery.toLowerCase())
                    ))
        ),
        [recipes, searchQuery, showFavorites]
    )
}