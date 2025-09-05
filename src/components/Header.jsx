import { Phone, User } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import Modal from './Modal'
import BtnCustom from './BtnCustom'

const Header = () => {

  const location = useLocation().pathname
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

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
        <div className="flex gap-x-16 items-center">
          {navLinks.map(link => {
            const isActive = location === link.href
            return <Link to={link.href} className={`relative hover:text-main transition-all ${isActive ? 'text-main after:w-full after:h-1 after:bg-main after:-top-1 after:left-0 after:absolute' : ''}`}>{link.title}</Link>
          })}
        </div>
        <div className="flex items-center gap-x-6">
          <div className="flex items-center gap-x-2">
            <Phone />
            800-500-44-44
          </div>
          <button onClick={() => setIsOpen(true)} className='cursor-pointer hover:text-main transition-all'>
            <User />
          </button>
          <BtnCustom>Add listing</BtnCustom>
        </div>
      </div>
      {isOpen && <Modal toggleModal={toggleModal} />}
    </header>
  )
}

export default Header