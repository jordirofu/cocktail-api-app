import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'

const FavoritesPage = lazy(() => import('./views/FavoritesPage'))
const IndexPage = lazy(() => import('./views/IndexPage'))
const IARecipesPage = lazy(() => import('./views/IARecipesPage'))


export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    element={<Layout />}
                >
                    <Route
                        path='/'
                        element={
                            <Suspense>
                                <IndexPage />
                            </Suspense>
                        }
                        index 
                    />
                    <Route
                        path='/favorites'
                        element={
                            <Suspense fallback="Loading...">
                                <FavoritesPage />
                            </Suspense>
                        }
                    />
                    <Route
                        path='/recipeIAGenerator'
                        element={
                            <Suspense fallback="Loading...">
                                <IARecipesPage />
                            </Suspense>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter >
    )
}


