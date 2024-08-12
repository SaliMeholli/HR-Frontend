import React from 'react'

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-4">
              <a href="#" className="text-gray-400 hover:text-white mx-2 md:mx-4">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white mx-2 md:mx-4">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white mx-2 md:mx-4">Contact</a>
            </div>
            <div>
              &copy; 2024 HR Management Company. All rights reserved.
            </div>
          </div>
        </footer>
)
}
