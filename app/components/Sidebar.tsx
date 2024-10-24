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
    </div>
  );
};

export default Sidebar;
