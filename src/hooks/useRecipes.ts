import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import type { Recipe } from "../types/Recipe"

const RECIPES_KEY = "recipes"

const getRecipes = (): Recipe[] => {
    const recipes = localStorage.getItem(RECIPES_KEY)
    return recipes ? JSON.parse(recipes) : []
}

const saveRecipes = (recipes: Recipe[]) => {
    localStorage.setItem(RECIPES_KEY, JSON.stringify(recipes))
}

export const useRecipes = () => {
    const queryClient = useQueryClient()

    const { data: recipes = [] } = useQuery({
        queryKey: [RECIPES_KEY],
        queryFn: getRecipes,
    })

    const addRecipe = useMutation({
        mutationFn: (newRecipe: Recipe) => {
            return new Promise<Recipe[]>((resolve) => {
                const updatedRecipes = [...recipes, newRecipe]
                saveRecipes(updatedRecipes)
                resolve(updatedRecipes)
            })
        },
        onSuccess: (updatedRecipes) => {
            queryClient.setQueryData([RECIPES_KEY], updatedRecipes)
            toast.success("Receita adicionada com sucesso!")
        },
        onError: () => {
            toast.error("Erro ao adicionar receita.")
        },
    })

    const updateRecipe = useMutation({
        mutationFn: (updatedRecipe: Recipe) => {
            return new Promise<Recipe[]>((resolve) => {
                const updatedRecipes = recipes.map((recipe) => (recipe.id === updatedRecipe.id ? updatedRecipe : recipe))
                saveRecipes(updatedRecipes)
                resolve(updatedRecipes)
            })
        },
        onSuccess: (updatedRecipes) => {
            queryClient.setQueryData([RECIPES_KEY], updatedRecipes)
            toast.success("Receita atualizada com sucesso!")
        },
        onError: () => {
            toast.error("Erro ao atualizar receita.")
        },
    })

    const deleteRecipe = useMutation({
        mutationFn: (id: string) => {
            return new Promise<Recipe[]>((resolve) => {
                const updatedRecipes = recipes.filter((recipe) => recipe.id !== id)
                saveRecipes(updatedRecipes)
                resolve(updatedRecipes)
            })

        },
        onSuccess: (updatedRecipes) => {
            queryClient.setQueryData([RECIPES_KEY], updatedRecipes)
            toast.success("Receita excluída com sucesso!")
        },
        onError: () => {
            toast.error("Erro ao excluir receita.")
        },
    })

    const toggleFavorite = useMutation({
        mutationFn: (id: string) => {
            return new Promise<Recipe[]>((resolve) => {
                const updatedRecipes = recipes.map((recipe) =>
                    recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe,
                )
                saveRecipes(updatedRecipes)
                resolve(updatedRecipes)
            })
            
        },
        onSuccess: (updatedRecipes) => {
            queryClient.setQueryData([RECIPES_KEY], updatedRecipes)
            toast.success("Status de favorito atualizado!")
        },
        onError: () => {
            toast.error("Erro ao atualizar status de favorito.")
        },
    })

    return { recipes, addRecipe, updateRecipe, deleteRecipe, toggleFavorite }
}

