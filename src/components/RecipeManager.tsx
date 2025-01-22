import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { useFilteredRecipes } from "../hooks/useFilteredRecipes"
import { useRecipes } from "../hooks/useRecipes"
import type { Recipe } from "../types/Recipe"
import Header from "./recipeManager/Header"
import RecipeFormSection from "./recipeManager/RecipeFormSection"
import RecipeListSection from "./recipeManager/RecipeListSection"

const RecipeManager: React.FC = () => {
    const { recipes, addRecipe, updateRecipe, deleteRecipe, toggleFavorite } = useRecipes()
    const [searchQuery, setSearchQuery] = useState("")
    const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null)
    const [showFavorites, setShowFavorites] = useState(false)

    const filteredRecipes = useFilteredRecipes(recipes, searchQuery, showFavorites)

    const handleAddRecipe = (data: Recipe) => {
        addRecipe.mutate({ ...data, id: uuidv4(), favorite: false })
    }

    const handleUpdateRecipe = (data: Recipe) => {
        updateRecipe.mutate(data)
    }

    const handleDeleteRecipe = (id: string) => {
        if (window.confirm("Tem certeza que deseja excluir esta receita?")) {
            deleteRecipe.mutate(id)
        }
    }

    return (
        <section className="sm:px-20 px-6 py-20">
            <div>
                <Header />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <RecipeFormSection
                        editingRecipe={editingRecipe}
                        onSubmit={editingRecipe ? handleUpdateRecipe : handleAddRecipe}
                    />
                    <RecipeListSection
                        recipes={filteredRecipes}
                        searchQuery={searchQuery}
                        showFavorites={showFavorites}
                        onSearchChange={setSearchQuery}
                        onToggleFavorites={() => setShowFavorites(!showFavorites)}
                        onEdit={setEditingRecipe}
                        onDelete={handleDeleteRecipe}
                        onToggleFavorite={toggleFavorite.mutate}
                    />
                </div>
            </div>
        </section>
    )
}

export default RecipeManager