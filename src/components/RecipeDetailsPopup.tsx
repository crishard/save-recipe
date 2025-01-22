import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Star } from "lucide-react"
import type React from "react"
import type { Recipe } from "../types/Recipe"

interface RecipeDetailsPopupProps {
  recipe: Recipe | null
  isOpen: boolean
  onClose: () => void
  onToggleFavorite: (id: string) => void
}

const RecipeDetailsPopup: React.FC<RecipeDetailsPopupProps> = ({ recipe, isOpen, onClose, onToggleFavorite }) => {
  if (!recipe) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center">
            {recipe.name}
            <Button variant="outline" className="m-4" size="sm" onClick={() => onToggleFavorite(recipe.id)}>
              <Star className={` ${recipe.favorite ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`} />
            </Button>
          </DialogTitle>
          <DialogDescription>Detalhes da receita</DialogDescription>
        </DialogHeader>
        <ScrollArea className="mt-4 max-h-[60vh]">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Ingredientes:</h3>
              <ul className="list-disc list-inside">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Modo de Preparo:</h3>
              <p className="whitespace-pre-wrap">{recipe.instructions}</p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

export default RecipeDetailsPopup

