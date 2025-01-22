import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import React from 'react'
import type { Recipe } from "../../types/Recipe"
import CardActions from './CardActions'
import FavoriteButton from './FavoriteButton'

interface RecipeCardProps {
    recipe: Recipe
    onClick: () => void
    onEdit: (recipe: Recipe) => void
    onDelete: (id: string) => void
    onToggleFavorite: (id: string) => void
}

const RecipeCard: React.FC<RecipeCardProps> = ({
    recipe,
    onClick,
    onEdit,
    onDelete,
    onToggleFavorite
}) => (
    <Card
        className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.67rem)] cursor-pointer"
        onClick={onClick}
    >
        <CardHeader>
            <CardTitle className="flex justify-between items-center text-lg">
                {recipe.name}
                <FavoriteButton
                    isFavorite={recipe.favorite}
                    onClick={(e) => {
                        e.stopPropagation()
                        onToggleFavorite(recipe.id)
                    }}
                />
            </CardTitle>
            <CardDescription className="text-base">
                Ingredientes: {recipe.ingredients.length}
            </CardDescription>
        </CardHeader>
        <CardContent>
            <p className="text-base text-gray-600 line-clamp-3">
                {recipe.instructions}
            </p>
        </CardContent>
        <CardActions
            onEdit={(e) => {
                e.stopPropagation()
                onEdit(recipe)
            }}
            onDelete={(e) => {
                e.stopPropagation()
                onDelete(recipe.id)
            }}
        />
    </Card>
)

export default RecipeCard

