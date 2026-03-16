import type { SubmitEvent } from "react";
import { useAppStore } from "../stores/useAppStore";

export default function IARecipesPage() {

  const showNotification = useAppStore(s => s.showNotification);
  const generateRecipe = useAppStore(s => s.generateRecipe);
  const recipe = useAppStore(s => s.recipe);
  const queryOn = useAppStore(s => s.queryOn);


  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();


    const form = new FormData(e.currentTarget);
    const prompt = form.get('prompt') as string;
    if (prompt.trim() === '') {
      showNotification({
        text: 'La búsqueda no puede ir vacía',
        error: true
      })

      return;
    }

    generateRecipe(prompt)
  }


  return (
    <>
      <h1 className="text-6xl font-extrabold">Recipes IA Generator</h1>

      <div className="mt-10 max-w-3/5 mx-auto">
        <form
          onSubmit={handleSubmit}
          className='flex flex-col space-y-3 py-10'
        >
          <div className="relative">
            <input
              name="prompt"
              id="prompt"
              className="border bg-white p-4 rounded-lg w-full border-slate-800"
              placeholder="Generete a recipe with ingredients. Egg. Drink with tequila and strawberry"
            />
            <button
              type="submit"
              aria-label="Enviar"
              disabled={queryOn}
              className={`${queryOn ? 'cursor-not-allowed' : 'cursor-pointer'} absolute right-3 transform -translate-x-1/2 translate-y-2`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                stroke="currentColor" className={`${queryOn && 'opacity-10'} w-10 h-10`}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </div>
        </form>

        <div className="py-10 whitespace-pre-wrap">
          {queryOn && (<p className="text-center animate-blink">Generating...</p>)}
          {recipe}
        </div>
      </div>
    </>
  )
}
