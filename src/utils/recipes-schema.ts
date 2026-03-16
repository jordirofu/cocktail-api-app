import { z } from 'zod';

export const CategoriesAPIResponseSchema = z.object({
    drinks: z.array(
        z.object({
            strCategory: z.string()
        })
    )
})

export const DataQuerySchema = z.object({
    ingredient: z.string(),
    category: z.string()
})

export const DrinkResponseSchema = z.object({
    strDrink: z.string(),
    strDrinkThumb: z.string(),
    idDrink: z.string()
})

export const DrinksListResponseSchema = z.object({
    drinks: z.array(DrinkResponseSchema)
})

export const RecipeResponseSchema = z.object({
    strDrink: z.string(),
    idDrink: z.string(),
    strCategory: z.string(),
    strDrinkThumb: z.string(),
    strGlass: z.string(),
    strIngredient1: z.string().nullable(),
    strIngredient2: z.string().nullable(),
    strIngredient3: z.string().nullable(),
    strIngredient4: z.string().nullable(),
    strIngredient5: z.string().nullable(),
    strIngredient6: z.string().nullable(),
    strInstructions: z.string().nullable(),
    strMeasure1: z.string().nullable(),
    strMeasure2: z.string().nullable(),
    strMeasure3: z.string().nullable(), 
    strMeasure4: z.string().nullable(),
    strMeasure5: z.string().nullable(), 
    strMeasure6: z.string().nullable()
})

export const RecipesListSchema = z.object({
    drinks: z.array(RecipeResponseSchema)
})

