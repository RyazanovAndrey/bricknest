import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'

const Layout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <main>
                <Outlet />
            </main>
            <footer className="w-full bg-gray-500 mt-auto">
                <div className="container mx-auto px-3 py-2">2025</div>
            </footer>
        </div>
    )
}

export default Layout