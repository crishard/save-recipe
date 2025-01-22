import { Button } from "@/components/ui/button"
import { CardFooter } from "@/components/ui/card"
import { Pencil, Trash } from "lucide-react"
import React from 'react'

interface CardActionsProps {
    onEdit: (e: React.MouseEvent) => void
    onDelete: (e: React.MouseEvent) => void
}

const CardActions: React.FC<CardActionsProps> = ({ onEdit, onDelete }) => (
    <CardFooter className="flex justify-end space-x-2">
        <Button variant="outline" size="lg" onClick={onEdit}>
            <Pencil className="h-4 w-4" />
            Editar
        </Button>
        <Button variant="outline" size="lg" onClick={onDelete}>
            <Trash className="h-4 w-4" />
            Excluir
        </Button>
    </CardFooter>
)

export default CardActions