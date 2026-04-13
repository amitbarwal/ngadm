"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import LeadPopup from "../ui/LeadPopup";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm px-4 py-3 transition-all duration-300">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/nga_logo.png" alt="NGA Logo" className="h-[50px] w-auto drop-shadow-md hover:scale-105 transition-transform" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-gray-700 hover:text-[#FF7300] font-medium transition-colors relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF7300] transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-[#FF7300] font-medium transition-colors relative group">
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF7300] transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-[#FF7300] font-medium transition-colors relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF7300] transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/courses" className="text-gray-700 hover:text-[#FF7300] font-medium transition-colors relative group">
            Courses
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF7300] transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-[#FF7300] font-medium transition-colors relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF7300] transition-all group-hover:w-full"></span>
          </Link>
          <button
          onClick={() => setOpen(true)} 
          className="bg-gradient-to-r from-[#FF7300] to-orange-500 hover:from-orange-600 hover:to-orange-500 text-white px-6 py-2.5 rounded-full font-semibold shadow-md shadow-orange-500/30 transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
            Book Free Demo
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none text-gray-700 hover:text-[#FF7300] transition-colors"
        >
          {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden flex flex-col items-center px-4 space-y-4 bg-white/95 backdrop-blur-lg absolute w-full left-0 top-full shadow-lg transition-all duration-300 origin-top overflow-hidden ${menuOpen ? 'max-h-96 py-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
        <Link href="/" className="text-gray-700 hover:text-[#FF7300] font-medium">Home</Link>
        <Link href="/about" className="text-gray-700 hover:text-[#FF7300] font-medium">About Us</Link>
        <Link href="/services" className="text-gray-700 hover:text-[#FF7300] font-medium">Services</Link>
        <Link href="/courses" className="text-gray-700 hover:text-[#FF7300] font-medium">Courses</Link>
        <Link href="/contact" className="text-gray-700 hover:text-[#FF7300] font-medium">Contact</Link>
        <button
        onClick={() => setOpen(true)} 
        className="bg-gradient-to-r from-[#FF7300] to-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow-md w-[80%] text-center cursor-pointer">
          Book Free Demo
        </button>
      </div>
    </header>
    <LeadPopup isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;

