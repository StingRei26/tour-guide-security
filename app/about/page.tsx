"use client"; // ✅ This ensures it's treated as a client component

import Navbar from "@/app/components/Navbar";
import { useLanguage } from "@/app/context/LanguageContext";

export default function About() {
  const { translations } = useLanguage(); // ✅ Now it will work

  return (
    <div>
      <Navbar />
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl font-bold text-gray-900">{translations.about.title}</h1>
        <p className="text-lg text-gray-600 mt-4">
          {translations.about.description}
        </p>
      </section>
    </div>
  );
}


