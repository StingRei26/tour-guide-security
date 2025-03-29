"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, setLocale, translations } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
   
        <Link href="/">
  <span className="text-2xl font-bold text-black">SecureXperience</span>
</Link>



        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="hover:text-primary">
            {translations.navbar.about}
          </Link>
          <Link href="/services" className="hover:text-primary">
            {translations.navbar.services}
          </Link>
          <Link href="/contact" className="hover:text-primary">
            {translations.navbar.contact}
          </Link>

          {/* Language Selector */}
          <select
            value={locale}
            onChange={(e) => setLocale(e.target.value as "en" | "es")}
            className=""
          >
            <option value="en">🇺🇸 English</option>
            <option value="es">🇪🇸 Español</option>
          </select>
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
          <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
            {translations.navbar.about}
          </Link>
          <Link href="/services" className="block px-4 py-2 hover:bg-gray-100">
            {translations.navbar.services}
          </Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100">
            {translations.navbar.contact}
          </Link>
          {/* Mobile Language Selector */}
          <select
            value={locale}
            onChange={(e) => setLocale(e.target.value as "en" | "es")}
            className="block w-full px-4 py-2 border-t border-gray-200"
          >
            <option value="en">🇺🇸 English</option>
            <option value="es">🇪🇸 Español</option>
          </select>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
