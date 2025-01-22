import React from "react";
import type { Recipe } from "../../types/Recipe";
import RecipeForm from "../RecipeForm";

interface RecipeFormSectionProps {
  editingRecipe: Recipe | null;
  onSubmit: (data: Recipe) => void;
}

const RecipeFormSection: React.FC<RecipeFormSectionProps> = ({
  editingRecipe,
  onSubmit,
}) => (
  <div className="sm:col-span-1">
    <h2 className="text-xl font-semibold mb-4">
      {editingRecipe ? "Editar Receita" : "Adicionar Nova Receita"}
    </h2>
    <RecipeForm
      onSubmit={onSubmit}
      initialData={editingRecipe || undefined}
    />
  </div>
);

export default RecipeFormSection;