import React from 'react'
import type { Recipe } from '../../types/Recipe'
import RecipeList from '../RecipeList'
import SearchBar from '../SearchBar'
import FavoriteToggleButton from './FavoriteToggleButton'

interface RecipeListSectionProps {
    recipes: Recipe[]
    searchQuery: string
    showFavorites: boolean
    onSearchChange: (query: string) => void
    onToggleFavorites: () => void
    onEdit: (recipe: Recipe) => void
    onDelete: (id: string) => void
    onToggleFavorite: (id: string) => void
}

const RecipeListSection: React.FC<RecipeListSectionProps> = ({
    recipes,
    showFavorites,
    onSearchChange,
    onToggleFavorites,
    onEdit,
    onDelete,
    onToggleFavorite
}) => (
    <div className="md:col-span-2">
        <div className="flex items-center gap-5 mb-4">
            <SearchBar onSearch={onSearchChange} />
            <FavoriteToggleButton
                showFavorites={showFavorites}
                onToggle={onToggleFavorites}
            />
        </div>
        <RecipeList
            recipes={recipes}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggleFavorite={onToggleFavorite}
        />
    </div>
)

export default RecipeListSection