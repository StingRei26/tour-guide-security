"use client";

import Navbar from "@/app/components/Navbar";
import { useLanguage } from "@/app/context/LanguageContext";
import Link from "next/link";

export default function Services() {
  const { translations } = useLanguage();

  return (
    <div>
      <Navbar />
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl font-bold text-gray-900">
          {translations.services.title}
        </h1>
        <p className="text-gray-600 mt-4">{translations.services.description}</p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
  {/* Service 1 */}
  <div className="bg-white p-6 shadow-md rounded-lg text-center max-w-xs mx-auto">
    <h2 className="text-2xl font-bold text-gray-800">
      {translations.services.private_security}
    </h2>
    <p className="text-gray-600 mt-2">
      {translations.services.private_security_desc}
    </p>
    <Link
      href="/contact"
      className="mt-4 block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
    >
      {translations.services.learn_more}
    </Link>
  </div>

  {/* Service 2 */}
  <div className="bg-white p-6 shadow-md rounded-lg text-center max-w-xs mx-auto">
    <h2 className="text-2xl font-bold text-gray-800">
      {translations.services.vip_tours}
    </h2>
    <p className="text-gray-600 mt-2">
      {translations.services.vip_tours_desc}
    </p>
    <Link
      href="/contact"
      className="mt-4 block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
    >
      {translations.services.learn_more}
    </Link>
  </div>

  {/* Service 3 */}
  <div className="bg-white p-6 shadow-md rounded-lg text-center max-w-xs mx-auto">
    <h2 className="text-2xl font-bold text-gray-800">
      {translations.services.nightlife_security}
    </h2>
    <p className="text-gray-600 mt-2">
      {translations.services.nightlife_security_desc}
    </p>
    <Link
      href="/contact"
      className="mt-4 block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
    >
      {translations.services.learn_more}
    </Link>
  </div>
</div>

      </section>
    </div>
  );
}
