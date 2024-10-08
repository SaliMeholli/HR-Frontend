import React from 'react'

function DashboardSearch() {
  return (
    <div className="items-center px-4 flex justify-center" >
    <div className="relative mr-3">
        {/* */}
        <div className="absolute top-3 left-4 items-center" >
            <svg className="w-5 h-8 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input
            type="text"
            className="block px-4 py-4 pl-10 w-70 text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:pl-3"
            placeholder="Search Here..."
            // onFocus={handleFocus}
            // onBlur={handleBlur}
        />
    </div>
</div>
  )
}

export default DashboardSearch