import React, { useState } from 'react';
import { Menu, X, Home, Briefcase, Info, Mail } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="text-2xl font-bold text-blue-600">W-web</div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
              <a href="/" className="flex items-center gap-2 hover:text-blue-600">
                <Home className="text-blue-600" size={18} /> Home
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-blue-600">
                <Info className="text-blue-600" size={18} /> About
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-blue-600">
                <Mail className="text-blue-600" size={18} /> Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white px-4 pb-4 space-y-2">
            <a href="/" className="flex items-center gap-2 py-2 text-gray-700 hover:text-blue-600">
              <Home className="text-blue-600" size={18} /> Home
            </a>
            <a href="#" className="flex items-center gap-2 py-2 text-gray-700 hover:text-blue-600">
              <Briefcase className="text-blue-600" size={18} /> English
            </a>
            <a href="#" className="flex items-center gap-2 py-2 text-gray-700 hover:text-blue-600">
              <Info className="text-blue-600" size={18} /> About
            </a>
            <a href="#" className="flex items-center gap-2 py-2 text-gray-700 hover:text-blue-600">
              <Mail className="text-blue-600" size={18} /> Contact
            </a>
          </div>
        )}
      </nav>
      <div className="mt-20 mb-10" /> 
    </>
  );
};

export default NavBar;
