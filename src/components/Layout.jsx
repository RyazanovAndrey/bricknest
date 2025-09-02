import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <footer className="w-full bg-gray-500">
                <div className="container mx-auto px-3 py-2">2025</div>
            </footer>
        </>
    )
}

export default Layout