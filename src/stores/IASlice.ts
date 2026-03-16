import type { StateCreator } from "zustand";
import IAService from "../services/IAService";


export type IASliceType = {
    recipe: string
    generateRecipe: (prompt: string) => Promise<void>
    queryOn: boolean
}

export const createIASlice : StateCreator<IASliceType> = (set) => ({
    recipe: '',
    queryOn: false,
    generateRecipe: async (prompt) => {
        set({
            recipe:'',
            queryOn: true
        })
        const data = await IAService.generateRecipe(prompt);

        for await (const textPart of data){
            set ((state) => ({
                recipe: state.recipe + textPart
            }))
        }
        set({
            queryOn: false
        })
        
    }


})