'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  const leftLinks = [
    { name: 'Home', href: '/' },
    { name: 'Rules', href: '/rules' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Get Started', href: '/get-started' },
  ]

  const rightLinks = [
    { name: 'Whitelist Application', href: '/whitelist' },
    { name: 'Suggestions', href: '/suggestions' },
    { name: 'More', href: '/more' },
  ]

  return (
    <nav className="bg-amber-950 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Mobile Menu Icon */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-amber-100 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Left Links */}
          <div className="hidden md:flex items-center space-x-6">
            {leftLinks.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="text-amber-100 hover:text-white font-medium text-sm tracking-wide"
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src="/gildedrp/gildedlogo.png"
                alt="Gilded Roleplay"
                width={110}
                height={60}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Right Links */}
          <div className="hidden md:flex items-center space-x-6">
            {rightLinks.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="text-amber-100 hover:text-white font-medium text-sm tracking-wide"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-amber-900 rounded-lg p-4 space-y-3">
            {[...leftLinks, ...rightLinks].map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="block text-center text-amber-100 hover:text-white text-base"
              >
                {name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
