import type { StateCreator } from "zustand"
import { getCategories, getDrinks, getRecipe } from "../services/RecipeService"
import type { Categories, QueryDataType, Drinks, Drink, Recipe } from "../types"



export type RecipesSliceType = {
    categories: Categories
    drinks: Drinks
    showModal: boolean
    recipe: Recipe
    fetchCategories: () => Promise<void>
    searchDrinks: (dataQuery: QueryDataType) => Promise<void>
    showRecipe: (id: Drink['idDrink']) => Promise<void>
    closeRecipeModal: () => void
}


export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    showModal: false,
    recipe: {} as Recipe,
    fetchCategories: async () => {
        const categories = await getCategories();
        set({
            categories
        })
    },
    searchDrinks: async (dataQuery) => {
        const drinks = await getDrinks(dataQuery)
        set({
            drinks
        })
    },
    showRecipe: async (id) => {
        const result = await getRecipe(id);
        set({
            recipe: result.drinks[0],
            showModal: true
        })
    },
    closeRecipeModal: () => {
        set({
            showModal: false,
            recipe: {} as Recipe
        })
    }
})

