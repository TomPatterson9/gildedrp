import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative text-white py-64 px-8 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/gildedrp/hero-bg.png"
        alt="Hero Background"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Gilded Roleplay</h1>
        <p className="text-lg mb-8 text-gray-200">Immersive RedM RP experience like no other.</p>
        <Link href="/get-started">
          <span className="bg-gold text-black font-semibold px-6 py-3 rounded hover:bg-yellow-500 transition cursor-pointer">
            Get Started
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
