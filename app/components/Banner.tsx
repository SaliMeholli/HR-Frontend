import React from 'react'

export const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-center bg-gradient-to-r from-blue-500 to-blue-700 text-white">
      <h2 className="text-5xl font-extrabold mb-4">Welcome to HR Management Company</h2>
      <p className="text-xl mb-8">We help you manage your most important asset: your people.</p>
      <a href="#" className="inline-block bg-white text-blue-700 px-8 py-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-100">
        Get Started
      </a>
    </section>
  )
}
