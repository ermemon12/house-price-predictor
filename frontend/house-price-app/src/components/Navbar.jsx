import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0a0a0a] shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-semibold text-[#ffd700]">HousePriceAI</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-[#f5f5f5] hover:text-[#ffd700] transition">Home</Link>
          <Link to="/predict" className="text-[#f5f5f5] hover:text-[#ffd700] transition">Predict</Link>
          <Link to="/about" className="text-[#f5f5f5] hover:text-[#ffd700] transition">About Us</Link>
          <Link to="/result" className="text-[#f5f5f5] hover:text-[#ffd700] transition">Result</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#f5f5f5] focus:outline-none"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] px-4 pt-2 pb-4 space-y-2">
          <Link to="/" className="block text-[#f5f5f5] hover:text-[#ffd700] transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/predict" className="block text-[#f5f5f5] hover:text-[#ffd700] transition" onClick={() => setIsOpen(false)}>Predict</Link>
          <Link to="/about" className="block text-[#f5f5f5] hover:text-[#ffd700] transition" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/result" className="block text-[#f5f5f5] hover:text-[#ffd700] transition" onClick={() => setIsOpen(false)}>Result</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
