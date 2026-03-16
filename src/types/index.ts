import { z } from 'zod'
import { CategoriesAPIResponseSchema, DataQuerySchema, DrinkResponseSchema, DrinksListResponseSchema, RecipeResponseSchema } from '../utils/recipes-schema'


export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;

export type QueryDataType = z.infer<typeof DataQuerySchema>;

export type Drinks = z.infer<typeof DrinksListResponseSchema>

export type Drink = z.infer<typeof DrinkResponseSchema>

export type Recipe = z.infer<typeof RecipeResponseSchema>

