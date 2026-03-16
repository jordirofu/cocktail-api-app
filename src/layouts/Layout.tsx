
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import RecipeModal from '../components/RecipeModal'
import Notification from '../components/Notification'


export default function Layout() {
    
    return (
        <>
            <Header />
            <main className='container mx-auto py-16 relative'>
                <Outlet />
            </main>
            <RecipeModal />
            <Notification />
        </>
    )
}
