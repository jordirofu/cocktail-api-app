import { useAppStore } from "../stores/useAppStore"
import type { Drink } from "../types"

type DrinkCardProps = {
    drink: Drink
}

export default function DrinkCard({ drink }: DrinkCardProps) {

    const showRecipe = useAppStore(s => s.showRecipe);

    const handleClick = () => {
        showRecipe(drink.idDrink);
    }



    return (
        <div className="shadow-lg overflow-hidden">
            <div>
                <img
                    className="hover:scale-110 transition-transform hover:rotate-2"
                    src={drink.strDrinkThumb}
                    alt={`Imagen de ${drink.strDrink}`} />
            </div>
            <div className="p-5">
                <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
                <button
                    type="button"
                    className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg"
                    onClick={handleClick}
                >See recipe
                </button>
            </div>
        </div>
    )
}
