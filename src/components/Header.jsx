import React from 'react'
import { Link, useLocation } from 'react-router'

const Header = () => {

  const location = useLocation().pathname

  const navLinks = [
    { href: '/', title: 'Home' },
    { href: '/about', title: 'About' },
    { href: '/properties', title: 'Properties' },
    { href: '/blog', title: 'Blog' }
  ]

  return (
    <header className='w-full bg-header text-white'>
      <div className="container mx-auto px-3 py-3 flex items-center justify-between">
        <div className="text-3xl font-medium">Bric<span className='text-main'>kn</span>est</div>
        <div className="flex gap-x-16">
          {navLinks.map(link => {
            const isActive = location === link.href
            return <Link to={link.href} className={`relative hover:text-main transition-all ${isActive ? 'text-main after:w-full after:h-1 after:bg-main after:-top-1 after:left-0 after:absolute' : ''}`}>{link.title}</Link>
          })}
        </div>
      </div>
    </header>
  )
}

export default Header