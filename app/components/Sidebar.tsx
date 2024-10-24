import Link from 'next/link';
import { FaHome, FaUserPlus, FaBuilding, FaCalendarAlt, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Button for Mobile View */}
      <div className="md:hidden p-4">
        <button 
          onClick={toggleSidebar} 
          className="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition duration-200"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

<<<<<<< HEAD


<div className="flex flex-col items-center w-64 h-full overflow-hidden text-gray-400 bg-gray-900 rounded">
    <a className="flex items-center w-full px-3 mt-3" href="#">
        <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
        </svg>
        <span className="ml-2 text-sm font-bold"></span>
    </a>
    <div className="w-full px-2">
        <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
            <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="ml-2 text-sm font-medium">Dasboard</span>
            </a>
            <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="ml-2 text-sm font-medium">Search</span>
            </a>
            <a className="flex items-center w-full h-12 px-3 mt-2 text-gray-200 bg-gray-700 rounded" href="#">
                <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="ml-2 text-sm font-medium">Insights</span>
            </a>
            <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
                <span className="ml-2 text-sm font-medium">Docs</span>
            </a>
        </div>
        <div className="flex flex-col items-center w-full mt-2 border-t border-gray-700">
            <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="ml-2 text-sm font-medium">Products</span>
            </a>
            <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                <svg className="w-6 h-6 stroke-current"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                <span className="ml-2 text-sm font-medium">Settings</span>
            </a>
            <a className="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <span className="ml-2 text-sm font-medium">Messages</span>
                <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
            </a>
        </div>
=======
      {/* Sidebar */}
      <div 
        className={`h-screen w-64 bg-gray-800 text-white fixed inset-y-0 left-0 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 shadow-lg`}
      >
        <div className="p-5 text-center font-bold text-lg">HR Company</div>
        <nav className="mt-10">
          <ul className="space-y-4">
            <li>
              <Link href="/dashboard" className="flex items-center space-x-2 hover:bg-blue-600 px-4 py-2 rounded transition-colors duration-200">
                <FaHome />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="../AddEmployee" className="flex items-center space-x-2 hover:bg-blue-600 px-4 py-2 rounded transition-colors duration-200">
                <FaUserPlus />
                <span>Employee</span>
              </Link>
            </li>
            <li>
              <Link href="../departments" className="flex items-center space-x-2 hover:bg-blue-600 px-4 py-2 rounded transition-colors duration-200">
                <FaBuilding />
                <span>Departments</span>
              </Link>
            </li>
            <li>
              <Link href="../leave" className="flex items-center space-x-2 hover:bg-blue-600 px-4 py-2 rounded transition-colors duration-200">
                <FaCalendarAlt />
                <span>Leave</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay to close sidebar when clicking outside on mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-10" 
          onClick={toggleSidebar}
        />
      )}
>>>>>>> dfbfc6ecbd1fc7eb0ba90cf16812f499b5155bc1
    </div>
  );
};

export default Sidebar;
