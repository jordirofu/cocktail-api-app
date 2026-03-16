import type { StateCreator } from "zustand";
import type { Recipe } from "../types";
import type { AppStoreType } from "./useAppStore";
//import type { AppStoreType } from "./useAppStore"


export type FavoritesSliceType = {
    favorites: Recipe[]
    toggleFavorites: (recipe: Recipe) => void
    loadFromStorage: () => void
}

export const createFavoritesSlice: StateCreator<AppStoreType, [], [], FavoritesSliceType> = (set, get/*, api*/) => ({
    favorites: [],
    toggleFavorites: (recipe: Recipe) => {
        const forAdding = get().favorites.every(f => f.idDrink !== recipe.idDrink)

        set((state) => ({
            favorites: forAdding ? [...state.favorites, recipe] : state.favorites.filter(f => f.idDrink != recipe.idDrink)
        })
        )
        get().showNotification({
            text: forAdding ? "Favorite added" : "Favorite removed",
            error: !forAdding
        })
        localStorage.setItem('drinks-favorites', JSON.stringify(get().favorites))
    },
    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem('drinks-favorites');
        if (storedFavorites) {
            set({
                favorites: JSON.parse(storedFavorites)
            })

        }

    }
})