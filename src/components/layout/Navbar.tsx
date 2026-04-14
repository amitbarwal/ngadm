"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight, Phone } from "lucide-react";
import Link from "next/link";
import LeadPopup from "../ui/LeadPopup";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Courses", href: "/courses" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <div className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-5'}`}>
        <header className={`mx-auto max-w-7xl px-4 transition-all duration-500`}>
          <div className={`flex justify-between items-center transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full px-6 py-2 border border-white/50' : 'bg-transparent px-2 py-0'}`}>

            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <img src="/nga_logo.png" alt="NGA Logo" className={`w-auto transition-all duration-500 ${scrolled ? 'h-[60px]' : 'h-[85px] drop-shadow-md'} hover:scale-105`} />
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex space-x-1 items-center bg-white/50 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/60 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-5 py-2 rounded-full font-semibold transition-all duration-300 text-sm tracking-wide ${isActive ? 'text-white shadow-md' : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'}`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 bg-gradient-to-r from-[#FF7300] to-orange-500 rounded-full -z-10 animate-fade-in-up"></span>
                    )}
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Area */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-800 font-semibold bg-orange-50 px-4 py-2 rounded-full border border-orange-100">
                <Phone className="w-4 h-4 text-[#FF7300]" />
                <span className="text-sm">+91 7027500702</span>
              </div>

              <button
                onClick={() => setOpen(true)}
                className="group relative bg-gray-900 text-white px-6 py-2.5 rounded-full font-bold shadow-[0_4px_15px_rgb(0,0,0,0.2)] hover:shadow-[0_4px_20px_rgb(255,115,0,0.3)] transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer overflow-hidden flex items-center gap-2 text-sm"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#FF7300] to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Free Demo</span>
                <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden focus:outline-none p-2 rounded-full transition-colors ${scrolled ? 'bg-gray-100 text-gray-800' : 'bg-white/80 backdrop-blur text-gray-800'}`}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </header>

        {/* Mobile Nav Overlay */}
        <div className={`lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setMenuOpen(false)}></div>

        {/* Mobile Nav Drawer */}
        <div className={`lg:hidden fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-400 ease-in-out flex flex-col ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

          <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-[#FAFAFA]">
            <img src="/nga_logo.png" alt="NGA Logo" className="h-[60px] w-auto" />
            <button onClick={() => setMenuOpen(false)} className="p-2 bg-white border border-gray-200 rounded-full text-gray-600 hover:text-orange-500 shadow-sm">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-6 space-y-2 bg-white">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-4 rounded-2xl font-semibold text-lg transition-colors ${pathname === link.href ? 'bg-orange-50 text-[#FF7300]' : 'text-gray-800 hover:bg-gray-50'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="p-6 border-t border-gray-100 space-y-4 bg-[#FAFAFA]">
            <div className="flex items-center justify-center gap-2 text-gray-800 font-semibold bg-white px-4 py-3 rounded-xl border border-gray-200 w-full shadow-sm">
              <Phone className="w-5 h-5 text-[#FF7300]" />
              <span>+91 7027500702</span>
            </div>
            <button
              onClick={() => { setOpen(true); setMenuOpen(false); }}
              className="w-full bg-gradient-to-r from-[#FF7300] to-orange-500 text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-orange-500/30 text-center flex items-center justify-center gap-2">
              Book Free Demo
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
      <LeadPopup isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;

