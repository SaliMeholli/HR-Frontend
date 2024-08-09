import React from 'react'

export const Faq = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">FAQ</h2>
      <div className="text-left max-w-3xl mx-auto space-y-4">
        <details className="group bg-white p-6 rounded-lg shadow-lg">
          <summary className="flex justify-between items-center cursor-pointer font-semibold text-blue-600">
            <span>What services do you offer?</span>
            <span className="group-open:rotate-180 transition-transform duration-200">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </summary>
          <p className="pl-4 mt-2 text-gray-600">We offer recruitment, training & development, and employee relations services to help you manage your workforce efficiently.</p>
        </details>
        <details className="group bg-white p-6 rounded-lg shadow-lg">
          <summary className="flex justify-between items-center cursor-pointer font-semibold text-blue-600">
            <span>How can I contact you?</span>
            <span className="group-open:rotate-180 transition-transform duration-200">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </summary>
          <p className="pl-4 mt-2 text-gray-600">You can contact us via the contact form on our website or email us at info@hrmanagement.com.</p>
        </details>
        <details className="group bg-white p-6 rounded-lg shadow-lg">
          <summary className="flex justify-between items-center cursor-pointer font-semibold text-blue-600">
            <span>Do you offer customized HR solutions?</span>
            <span className="group-open:rotate-180 transition-transform duration-200">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </summary>
          <p className="pl-4 mt-2 text-gray-600">Yes, we tailor our HR solutions to meet the specific needs of your business.</p>
        </details>
        <details className="group bg-white p-6 rounded-lg shadow-lg">
          <summary className="flex justify-between items-center cursor-pointer font-semibold text-blue-600">
            <span>What industries do you serve?</span>
            <span className="group-open:rotate-180 transition-transform duration-200">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </summary>
          <p className="pl-4 mt-2 text-gray-600">We serve a wide range of industries including technology, healthcare, finance, and more.</p>
        </details>
      </div>
    </section>
  )
}
