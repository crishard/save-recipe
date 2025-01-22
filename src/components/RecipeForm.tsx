import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { schema } from "@/lib/schema"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useEffect } from "react"
import { FieldArrayPath, useFieldArray, useForm } from "react-hook-form"
import type { Recipe } from "../types/Recipe"
import FormField from "./form/FormField"
import IngredientsSection from "./form/IngredientsSection"

interface RecipeFormProps {
    onSubmit: (data: Recipe) => void
    initialData?: Recipe
}

const RecipeForm: React.FC<RecipeFormProps> = ({ onSubmit, initialData }) => {
    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Recipe>({
        resolver: yupResolver(schema) as any,
        defaultValues: initialData || {
            id: "",
            name: "",
            ingredients: [""],
            instructions: "",
            favorite: false,
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "ingredients" as FieldArrayPath<Recipe>,
    });

    useEffect(() => {
        reset(
            initialData || {
                id: "",
                name: "",
                ingredients: [""],
                instructions: "",
                favorite: false,
            }
        );
    }, [initialData, reset]);

    const onSubmitForm = (data: Recipe) => {
        onSubmit(data);
        reset({
            id: "",
            name: "",
            ingredients: [""],
            instructions: "",
            favorite: false,
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
            <FormField label="Nome da Receita" error={errors.name?.message}>
                <input 
                    type="text" 
                    {...register("name")} 
                    className="mt-1 block w-full border rounded-md p-2" 
                />
            </FormField>

            <IngredientsSection 
                fields={fields} 
                register={register} 
                error={errors.ingredients?.message} 
                onAdd={() => append("")} 
                onRemove={remove} 
            />

            <FormField label="Modo de Preparo" error={errors.instructions?.message}>
                <Textarea 
                    rows={5} 
                    {...register("instructions")} 
                    className="mt-1 block w-full border rounded-md p-2" 
                />
            </FormField>

            <Button type="submit" className="w-full">
                {initialData ? "Atualizar Receita" : "Adicionar Receita"}
            </Button>
        </form>
    );
};

export default RecipeForm;
