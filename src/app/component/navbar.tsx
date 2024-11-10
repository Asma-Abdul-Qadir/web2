"use client"
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="flex justify-between items-center p-5 bg-gray-900 text-white">
      <div className="text-2xl font-bold">My Portfolio</div>
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        <li className="hover:text-gray-400"><Link href="/">Home</Link></li>
        <li className="hover:text-gray-400"><Link href="/about">About</Link></li>
        <li className="hover:text-gray-400"><Link href="/projects">Projects</Link></li>
        <li className="hover:text-gray-400"><Link href="/contact">Contact</Link></li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-3xl">
          {isMenuOpen ? '×' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-16 left-0 w-full bg-gray-900 text-white p-5 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="space-y-4 text-center">
          <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link href="/projects" onClick={toggleMenu}>Projects</Link></li>
          <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
