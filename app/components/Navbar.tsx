// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu } from "lucide-react";
// import { useLanguage } from "@/app/context/LanguageContext";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [mounted, setMounted] = useState(false);
//   const { locale, setLocale, translations } = useLanguage();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo / Brand */}
//         <Link href="/" className="flex items-center space-x-2">
//           <Image
//             src="/images/logo2.png"
//             alt="Logo"
//             width={32}
//             height={32}
//             className="object-contain"
//           />
//           <span className="text-2xl font-bold text-black">SecureXperience</span>
//         </Link>

//         {/* Desktop Menu */}
//         {mounted && translations?.navbar && (
//           <div className="hidden md:flex space-x-6 items-center">
//             <Link href="/about" className="hover:text-primary">
//               {translations.navbar.about}
//             </Link>
//             <Link href="/services" className="hover:text-primary">
//               {translations.navbar.services}
//             </Link>
//             <Link href="/contact" className="hover:text-primary">
//               {translations.navbar.contact}
//             </Link>

//             {/* Language Selector */}
//             <select
//               value={locale}
//               onChange={(e) => setLocale(e.target.value as "en" | "es")}
//               className="bg-white text-black border border-gray-300 rounded px-2 py-1"
//             >
//               <option value="en">🇺🇸 English</option>
//               <option value="es">🇪🇸 Español</option>
//             </select>
//           </div>
//         )}

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden focus:outline-none"
//         >
//           <Menu className="w-6 h-6 text-black" />
//         </button>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isOpen && mounted && translations?.navbar && (
//         <div className="md:hidden absolute top-16 right-4 w-48 bg-white text-black shadow-lg rounded-lg z-50">
//           <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
//             {translations.navbar.about}
//           </Link>
//           <Link href="/services" className="block px-4 py-2 hover:bg-gray-100">
//             {translations.navbar.services}
//           </Link>
//           <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100">
//             {translations.navbar.contact}
//           </Link>

//           {/* Mobile Language Selector */}
//           <select
//             value={locale}
//             onChange={(e) => setLocale(e.target.value as "en" | "es")}
//             className="block w-full px-4 py-2 border-t border-gray-200 bg-white text-black"
//           >
//             <option value="en">🇺🇸 English</option>
//             <option value="es">🇪🇸 Español</option>
//           </select>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { locale, setLocale, translations } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo2.png"
            alt="Logo"
            width={32}
            height={32}
            className="object-contain"
          />
          <span className="text-2xl font-bold text-black">SecureXperience</span>
        </Link>

        {/* Desktop Menu */}
        {mounted && translations?.navbar && (
          <div className="hidden md:flex space-x-6 items-center">
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
              className="bg-white text-black border border-gray-300 rounded px-2 py-1"
            >
              <option value="en">🇺🇸 English</option>
              <option value="es">🇪🇸 Español</option>
            </select>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <Menu className="w-6 h-6 text-black" />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && mounted && translations?.navbar && (
        <div className="md:hidden absolute top-16 right-4 w-48 bg-white text-black shadow-lg rounded-lg z-50">
          <Link
            href="/about"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            {translations.navbar.about}
          </Link>
          <Link
            href="/services"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            {translations.navbar.services}
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            {translations.navbar.contact}
          </Link>

          {/* Mobile Language Selector */}
          <select
            value={locale}
            onChange={(e) => {
              setLocale(e.target.value as "en" | "es");
              setIsOpen(false); // close menu after selecting language
            }}
            className="block w-full px-4 py-2 border-t border-gray-200 bg-white text-black"
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
