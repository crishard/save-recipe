import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import React from 'react'

interface FavoriteButtonProps {
    isFavorite: boolean
    onClick: (e: React.MouseEvent) => void
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ isFavorite, onClick }) => (
    <Button
        variant="outline"
        size="sm"
        onClick={onClick}
    >
        <Star
            className={`w-16 h-16 ${isFavorite ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
        />
    </Button>
)

export default FavoriteButton