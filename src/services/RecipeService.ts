import axios from "axios";
import { CategoriesAPIResponseSchema, DrinksListResponseSchema, RecipesListSchema } from "../utils/recipes-schema";
import type { Drink, QueryDataType } from "../types";

export async function getCategories() {

    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
    const {data} = await axios(url);
    const result = CategoriesAPIResponseSchema.safeParse(data)
    if (result.success){
        return result.data;
    }
    else{
        throw new Error ("Falló la llamada a la API de bebidas")
    }
}

export async function getDrinks(queryData: QueryDataType) {

    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${queryData.category}&i=${queryData.ingredient}`;
    const {data} = await axios(url);
    const result = DrinksListResponseSchema.safeParse(data)
    if (result.success){
        return result.data;
    }
    else{
        throw new Error ("Falló la llamada a la API de bebidas")
    }
}

export async function getRecipe(id: Drink['idDrink']) {

    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    const  { data } = await axios(url);
    const result = RecipesListSchema.safeParse(data);
      if (result.success){
        return result.data;
    }
    else{
        throw new Error ("Falló la llamada a la API de bebidas")
    }
}