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
            <footer className="">Footer</footer>
        </>
    )
}

export default Layout