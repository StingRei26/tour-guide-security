"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react"; // Icon library (auto-installs with shadcn UI)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <Link href="/">
          <span className="text-2xl font-bold text-gray-800">SafeMedellín</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="hover:text-blue-500">About</Link>
          <Link href="/services" className="hover:text-blue-500">Services</Link>
          <Link href="/contact" className="hover:text-blue-500">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-16 right-0 w-48 shadow-lg rounded-lg">
          <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">About</Link>
          <Link href="/services" className="block px-4 py-2 hover:bg-gray-100">Services</Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
