import React from 'react'

export const Careers = () => {
    return (
        <section className="container mx-auto px-8 py-16 text-center bg-white rounded-lg shadow-lg">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Join Our Team</h2>
            <p className="text-lg text-gray-600 mb-8">Are you passionate about making an impact? Explore our career opportunities and become a part of our innovative and growing team.</p>
            <a href="/careers" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-full shadow-lg hover:from-blue-500 hover:to-blue-700 transition-transform transform hover:scale-105">
                View Careers
            </a>
        </section>
    )
}
