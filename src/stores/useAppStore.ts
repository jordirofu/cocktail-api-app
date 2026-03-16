import { create } from 'zustand';
import { createRecipesSlice, type RecipesSliceType } from './recipeSlice';
import { createFavoritesSlice, type FavoritesSliceType } from './favoritesSlice'
import { devtools } from 'zustand/middleware';
import { createNotificationSlice, type NotificationsSliceType } from './notificationSlice';
import { createIASlice, type IASliceType } from './IASlice';


export type AppStoreType = RecipesSliceType & FavoritesSliceType & NotificationsSliceType & IASliceType;

export const useAppStore = create<AppStoreType>()
    (devtools(
        ((...a) => ({
            ...createRecipesSlice(...a),
            ...createFavoritesSlice(...a),
            ...createNotificationSlice(...a),
            ...createIASlice(...a)
        })
        ), {
        name: 'RecipesAppStore',
        enabled: true
    }
    ))

