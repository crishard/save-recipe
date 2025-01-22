import { Recipe } from "@/types/Recipe";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRecipes } from "../hooks/useRecipes";
import Header from "./recipeManager/Header";
import RecipeFormSection from "./recipeManager/RecipeFormSection";
import RecipeListSection from "./recipeManager/RecipeListSection";

const RecipeManager: React.FC = () => {
  const { recipes, addRecipe, updateRecipe, deleteRecipe, toggleFavorite } = useRecipes();
  const [searchQuery, setSearchQuery] = useState("");
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);
  const [showFavorites, setShowFavorites] = useState(false);

  const handleAddRecipe = (data: Recipe) => {
    addRecipe.mutate(
      { ...data, id: uuidv4(), favorite: false },
    );
  };

  const handleUpdateRecipe = (data: Recipe) => {
    updateRecipe.mutate(data, {
      onSuccess: () => {
        setEditingRecipe(null);
      },
    });
  };

  const handleDeleteRecipe = (id: string) => {
    if (window.confirm("Tem certeza que deseja excluir esta receita?")) {
      deleteRecipe.mutate(id, );
    }
  };

  const handleToggleFavorite = (id: string) => {
    toggleFavorite.mutate(id, );
  };

  const filteredRecipes = recipes.filter(
    (recipe) =>
      (showFavorites ? recipe.favorite : true) &&
      (recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(searchQuery.toLowerCase())
        ))
  );

  return (
    <div className="container mx-auto px-4 py-8">
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
          onToggleFavorite={handleToggleFavorite}
        />
      </div>
    </div>
  );
};

export default RecipeManager;
