import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-[#0a0a0a] shadow-md z-50">
    <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <div className="text-2xl font-semibold text-[#ffd700]">HousePriceAI</div>
      <div className="space-x-6">
        <Link to="/" className="text-[#f5f5f5] hover:text-[#ffd700] transition">Home</Link>
        <Link to="/predict" className="text-[#f5f5f5] hover:text-[#ffd700] transition">Predict</Link>
        <Link to="/about" className="text-[#f5f5f5] hover:text-[#ffd700] transition">About Us</Link>
        <Link to="/result" className="text-[#f5f5f5] hover:text-[#ffd700] transition">Result</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
