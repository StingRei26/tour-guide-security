"use client"; // ✅ Add this to ensure it's a client component

import Navbar from "@/app/components/Navbar";
import { useLanguage } from "@/app/context/LanguageContext";
import Link from "next/link";

export default function Home() {
  const { translations } = useLanguage(); // ✅ Now it will work without server errors

  return (
    <div>
      <Navbar />
      <header className="h-screen flex flex-col justify-center items-center bg-gray-100 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          {translations.home.title}
        </h1>
        <Link
          href="/services"
          className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition"
        >
          {translations.home.cta}
        </Link>
      </header>
    </div>
  );
}


