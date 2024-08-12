import React from 'react'

export const Testimonials = () => {
  return (
<section className="container mx-auto px-8 py-16 text-center">
  <h2 className="text-4xl font-extrabold text-gray-900 mb-12">What Our Clients Say</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <p className="text-gray-600 italic mb-4">"HR Management Company has revolutionized our hiring process. Their system is intuitive and efficient!"</p>
      <p className="text-blue-600 font-bold">Jane Doe, CEO</p>
    </div>
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <p className="text-gray-600 italic mb-4">"We've seen a significant improvement in employee engagement thanks to their tools."</p>
      <p className="text-blue-600 font-bold">John Smith, HR Director</p>
    </div>
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <p className="text-gray-600 italic mb-4">"A must-have solution for any growing business!"</p>
      <p className="text-blue-600 font-bold">Anna Johnson, COO</p>
    </div>
  </div>
</section>  )
}
