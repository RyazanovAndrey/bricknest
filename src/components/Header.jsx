import { Menu, Phone, User } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import Modal from './Modal'
import BtnCustom from './BtnCustom'
import { MobileMenu } from './MobileMenu'

const Header = () => {

  const location = useLocation().pathname
  const [isOpen, setIsOpen] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const toogleMobile = () => {
    setMobileMenu(!mobileMenu)
  }

  const navLinks = [
    { href: '/', title: 'Home' },
    { href: '/about', title: 'About' },
    { href: '/properties', title: 'Properties' },
    { href: '/blog', title: 'Blog' }
  ]

  return (
    <header className='relative w-full bg-header text-white'>
      <div className="container mx-auto px-3 py-3 flex items-center justify-between">
        <Menu onClick={() => setMobileMenu(!mobileMenu)} className='md:hidden' size={48} />
        <div className="text-3xl font-medium">Bric<span className='text-main'>kn</span>est</div>
        <div className="hidden md:flex gap-x-16 items-center">
          {navLinks.map(link => {
            const isActive = location === link.href
            return <Link to={link.href} className={`relative hover:text-main transition-all ${isActive ? 'text-main after:w-full after:h-1 after:bg-main after:-top-1 after:left-0 after:absolute' : ''}`}>{link.title}</Link>
          })}
        </div>
        <div className="flex items-center gap-x-6">
          <div className="hidden md:flex items-center gap-x-2">
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
      {mobileMenu && <MobileMenu list={navLinks} toogleMobile={toogleMobile} />}
    </header>
  )
}

export default Header