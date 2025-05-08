import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LuUser } from "react-icons/lu"
import { MdOutlineShoppingCart } from "react-icons/md"
import { GiBroccoli } from "react-icons/gi"
import { IoSearch } from "react-icons/io5"
import { HiMenu, HiX } from "react-icons/hi"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ]

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className='bg-[#F7F4EB] py-4'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <Link to="/" className='flex items-center'>
            <GiBroccoli className='text-3xl text-[#80B600]' />
            <h1 className='ml-1 text-xl font-bold md:text-2xl'>Broccoli</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:block'>
            <ul className='flex gap-8 font-medium'>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink 
                    to={link.path} 
                    className={({ isActive }) => 
                      isActive 
                        ? 'text-[#80B600] font-bold' 
                        : 'text-gray-700 hover:text-[#80B600] transition-colors'
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Icons */}
          <div className='flex gap-4 items-center'>
            <button className='h-10 w-10 p-2 bg-white shadow-md rounded-md hover:bg-gray-50 transition-colors'>
              <IoSearch className='text-gray-700' />
            </button>
            <button className='h-10 w-10 p-2 bg-white shadow-md rounded-md hover:bg-gray-50 transition-colors'>
              <LuUser className='text-gray-700' />
            </button>
            <button className='h-10 w-10 p-2 bg-white shadow-md rounded-md hover:bg-gray-50 transition-colors relative'>
              <MdOutlineShoppingCart className='text-gray-700' />
              <span className='absolute -top-1 -right-1 bg-[#80B600] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
                0
              </span>
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className='md:hidden h-10 w-10 p-2 bg-white shadow-md rounded-md hover:bg-gray-50 transition-colors'
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <HiX className='text-gray-700' /> : <HiMenu className='text-gray-700' />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className='md:hidden mt-4 bg-white rounded-md shadow-md p-4'>
            <ul className='flex flex-col gap-4 font-medium'>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink 
                    to={link.path} 
                    className={({ isActive }) => 
                      isActive 
                        ? 'text-[#80B600] font-bold block py-2' 
                        : 'text-gray-700 hover:text-[#80B600] transition-colors block py-2'
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
