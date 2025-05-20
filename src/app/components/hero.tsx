import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="bg-[url('/images/hero-bg.jpg')] bg-cover bg-center text-white py-32 px-4 relative">
      <div className="bg-black/60 absolute inset-0" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Gilded Roleplay</h1>
        <p className="text-lg mb-8 text-gray-200">Immersive RedM RP experience like no other.</p>
        <Link href="/get-started">
          <span className="bg-gold text-black font-semibold px-6 py-3 rounded hover:bg-yellow-500 transition">
            Get Started
          </span>
        </Link>
      </div>
      
    </section>
  )
}

export default Hero
