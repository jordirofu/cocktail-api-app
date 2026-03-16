import { Fragment, useMemo, type JSX } from "react";
import { useAppStore } from "../stores/useAppStore";
import type { Recipe } from "../types";
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";



export default function RecipeModal() {

  const showModal = useAppStore(s => s.showModal);
  const recipe = useAppStore(s => s.recipe);
  const closeRecipeModal = useAppStore(s => s.closeRecipeModal);

  const favorites = useAppStore(s => s.favorites);
  const toggleFavorites = useAppStore(s => s.toggleFavorites);

  const isFavorite = useMemo(() => favorites.some(f => f.idDrink === recipe.idDrink), [favorites, recipe]);

  const handleClose = () => {
    closeRecipeModal()
  }

  const handleClickFavorites = () => {
    toggleFavorites(recipe);
    closeRecipeModal();
  }

  const renderIngredients = () => {
    const ingredients: JSX.Element[] = [];

    for (let i = 1; i <= 6; i++) {
      const ingredient = recipe[`strIngredient${i}` as keyof Recipe];
      const measure = recipe[`strMeasure${i}` as keyof Recipe];

      if (ingredient && measure) {
        ingredients.push(
          <li key={i} className="list-disc list-inside pl-4">{measure}{' '}{ingredient}</li>
        )
      }
    }

    return ingredients
  }



  return (
    <>
      <Transition appear show={showModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleClose}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                  <DialogTitle as="h3" className="text-gray-900 text-4xl font-extrabold my-5 text-center">
                    {recipe.strDrink}
                  </DialogTitle>
                  <img className="mx-auto w-96" src={recipe.strDrinkThumb} alt="Miniatura de foto bebida" />

                  <DialogTitle as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                  Ingredients and quantities
                  </DialogTitle>
                  {renderIngredients()}
                  <DialogTitle as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                    Instrucciones
                  </DialogTitle>
                  <p className="text-lg">{recipe.strInstructions}</p>
                  <div className="flex justify-between space-x-4 mt-6">
                    <button
                      type="button"
                      className="w-full rounded bg-gray-600 p-3 font-bold uppercase text-white shadow hover:bg-gray-500"
                      onClick={handleClose}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="w-full rounded bg-orange-400 p-3 font-bold uppercase text-white shadow hover:bg-gray-500"
                      onClick={handleClickFavorites}
                    >
                      {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
