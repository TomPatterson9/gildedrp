'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const leftLinks = [
    { name: 'Home', href: '/' },
    { name: 'Rules', href: '/rules' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Get Started', href: '/get-started' },
  ]

  const rightLinks = [
    { name: 'Tebex', href: 'https://gilded-rp.tebex.io/', external: true },
    { name: 'Suggestions', href: '/suggestions' },
  ]

  const dropdownLinks = [
    { name: 'Staff Directory', href: '/staff' },
    { name: 'Lore', href: '/lore' },
    { name: 'Changelog', href: '/changelog' },
  ]

  return (
    <nav className="w-full py-4">
      <div className="max-w-7xl mx-auto px-4 m-5   sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative">
          {/* Mobile Menu Button */}
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
                className="text-amber-100 hover:text-yellow-400 font-medium text-sm tracking-wide"
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/">
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

          {/* Right Links + Click Dropdown */}
          <div className="hidden md:flex items-center space-x-6 relative">
            {rightLinks.map(({ name, href, external }) =>
              external ? (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-100 hover:text-yellow-400 font-medium text-sm tracking-wide"
                >
                  {name}
                </a>
              ) : (
                <Link
                  key={name}
                  href={href}
                  className="text-amber-100 hover:text-yellow-400 font-medium text-sm tracking-wide"
                >
                  {name}
                </Link>
              )
            )}

            {/* More Button with Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center text-amber-100 hover:text-yellow-400 font-medium text-sm tracking-wide focus:outline-none"
              >
                More <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-amber-900 rounded-lg shadow-lg z-50">
                  {dropdownLinks.map(({ name, href }) => (
                    <Link
                      key={name}
                      href={href}
                      className="block px-4 py-2 text-sm text-amber-100 hover:bg-amber-800 hover:text-yellow-400"
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-amber-900 rounded-lg p-4 space-y-3 mt-2">
            {[...leftLinks, ...rightLinks, ...dropdownLinks].map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="block text-center text-amber-100 hover:text-yellow-400 text-base"
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
