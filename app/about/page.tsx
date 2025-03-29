"use client";

import Navbar from "@/app/components/Navbar";
import { useLanguage } from "@/app/context/LanguageContext";

export default function About() {
  const { translations } = useLanguage();

  return (
    <div>
      <Navbar />
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-100">
        <h1 className="text-4xl font-bold text-primary">{translations.about.title}</h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl">
          {translations.about.description}
        </p>
      </section>
    </div>
  );
}





