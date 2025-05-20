'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)
  
  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'RULES', href: '/rules' },
    { name: 'FAQ', href: '/faq' },
    { name: 'GET STARTED', href: '/get-started' },
    { name: 'TEBEX', href: 'https://yourstore.tebex.io', external: true },
    { name: 'DISCORD', href: 'https://discord.gg/yourserver', external: true },
    { name: 'MORE', href: '/more' },
  ]
  
  return (
    <nav className="bg-amber-950 rounded-b-lg mx-auto max-w-7xl shadow-lg">
      <div className="flex items-center">
        {/* Logo on left with rounded corner */}
        <div className="flex-shrink-0">
          <Link href="/" className="block">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Gilded Roleplay Logo"
                width={120}
                height={120}
                className="h-24 w-auto"
                priority
              />
            </div>
          </Link>
        </div>
        
        {/* Desktop Links - centered in remaining space */}
        <div className="hidden md:flex flex-grow items-center justify-end space-x-8 px-6">
          {navItems.map(({ name, href, external }) =>
            external ? (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-200 hover:text-amber-100 font-medium text-sm tracking-wide transition-colors duration-200"
              >
                {name}
              </a>
            ) : (
              <Link 
                key={name} 
                href={href} 
                className="text-amber-200 hover:text-amber-100 font-medium text-sm tracking-wide transition-colors duration-200"
              >
                {name}
              </Link>
            )
          )}
        </div>
        
        {/* Mobile Menu Icon */}
        <div className="md:hidden ml-auto pr-4">
          <button 
            onClick={toggleMenu} 
            aria-label="Toggle Menu"
            className="p-2 text-amber-200 hover:text-amber-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-amber-900 rounded-b-lg">
          <div className="px-4 py-3 space-y-1">
            {navItems.map(({ name, href, external }) =>
              external ? (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 text-center text-amber-200 hover:text-amber-100 transition-colors duration-200"
                >
                  {name}
                </a>
              ) : (
                <Link
                  key={name}
                  href={href}
                  className="block px-3 py-2 text-center text-amber-200 hover:text-amber-100 transition-colors duration-200"
                >
                  {name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar