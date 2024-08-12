import React from 'react'

export const Menu = () => {
  return (
    <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">HR Management Company</h1>
            <nav className="mt-4 md:mt-0">
              <a href="#" className="text-gray-800 hover:text-blue-600 mx-2 md:mx-4">Home</a>
              <a href="#" className="text-gray-800 hover:text-blue-600 mx-2 md:mx-4">Careers</a>
              <a href="#" className="text-gray-800 hover:text-blue-600 mx-2 md:mx-4">Login</a>
            
            </nav>
          </div>
)
}
