
"use client";

import Navbar from "@/app/components/Navbar";
import { useLanguage } from "@/app/context/LanguageContext";
import Link from "next/link";


export default function Home() {
  const { translations } = useLanguage();

  return (
    <div>
      <Navbar />
      <header className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-background via-background to-primary text-white px-4 text-center pt-32">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {translations.home.title}
        </h1>
  
        {/* Logo */}
        <img
          src="/images/logo2.png"
          alt="SecureXperience Logo"
          className="w-64 md:w-80 h-auto mb-8"
        />
  
        {/* Button */}
        <Link
  href="/services"
  className="mt-6 bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition"
>
  {translations.home.cta}
</Link>
      </header>
    </div>
  );
}
