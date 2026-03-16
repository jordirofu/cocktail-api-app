import { useEffect, useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom'
import { useAppStore } from '../stores/useAppStore';
import type { QueryDataType } from '../types';
import React from 'react';



export default function Header() {

    const { pathname } = useLocation();
    const isHome = useMemo(() => pathname === '/', [pathname])

    const fetchCategories = useAppStore((state) => state.fetchCategories)
    const categories = useAppStore(state => state.categories)
    const searchDrinks = useAppStore(s => s.searchDrinks)
    const showNotification = useAppStore(s => s.showNotification)

    useEffect(() => { fetchCategories() }, [])

    const [queryData, setQueryData] = useState<QueryDataType>({
        ingredient: '',
        category: ''
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setQueryData({ ...queryData, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Object.values(queryData).includes('')) {
            showNotification({
                text: "All fields are required",
                error: true
            })
            return;
        }
        searchDrinks(queryData);
    }




    return (
        <header className={isHome ? 'bg-(image:--image-header) bg-center bg-cover' : 'bg-slate-800'}>
            <div className='mx-auto containeer px-5 py-16'>
                <div className="flex justify-between items-center">
                    <div>
                        <img className="w-32 " src="/logo.svg" alt="logotipo" />
                    </div>
                    <nav className='flex gap-4'>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'}
                            to="/">Home</NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'}
                            to="/favorites">Favorites</NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'}
                            to="/recipeIAGenerator">IA Generator</NavLink>
                    </nav>
                </div>
                {isHome && (
                    <form
                        className='md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-4 '
                        onSubmit={handleSubmit}
                    >
                        <div className='space-y-4'>
                            <label
                                htmlFor="ingredient"
                                className='block text-white uppercase'>
                                Name or ingredients
                            </label>
                            <input
                                className='bg-white p-3 w-full rounded-lg focus:outline-none'
                                type="text"
                                name="ingredient"
                                id="ingredient"
                                placeholder='Name or ingredient. Egg. Vodka, Tequila, Coffee'
                                onChange={handleChange}
                                value={queryData.ingredient}
                            />
                        </div>
                        <div className='space-y-4'>
                            <label

                                htmlFor="category"
                                className='block text-white uppercase'>
                                Category
                            </label>
                            <select
                                className='bg-white p-3 w-full rounded-lg focus:outline-none'
                                name="category"
                                id="category"
                                onChange={handleChange}
                                value={queryData.category}
                            >
                                <option value="">--Select--</option>
                                {
                                    categories.drinks.map(drink => (
                                        <option
                                            key={drink.strCategory}
                                            value={drink.strCategory}
                                        >{drink.strCategory}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <input
                            type="submit"
                            value="Search for recipes"
                            className='cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase'
                        />
                    </form>
                )}
            </div>
        </header>
    )
}
