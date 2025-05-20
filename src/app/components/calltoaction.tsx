import React from 'react'
import Link from 'next/link'

const CallToAction = () => {
  return (
    <section className="bg-gold text-black py-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Ready to Begin Your Journey?</h2>
      <p className="mb-6 text-sm">Join the community and start your characters story today.</p>
      <div className="flex justify-center gap-4">
        <Link href="/get-started">
          <span className="bg-black text-gold px-5 py-2 rounded hover:bg-gray-900 transition">Get Started</span>
        </Link>
        <Link href="/discord">
          <span className="border border-black px-5 py-2 rounded hover:bg-black hover:text-gold transition">Join Discord</span>
        </Link>
      </div>
    </section>
  )
}

export default CallToAction
