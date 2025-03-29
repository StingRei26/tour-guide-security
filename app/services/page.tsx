// "use client";

// import Navbar from "@/app/components/Navbar";
// import { useLanguage } from "@/app/context/LanguageContext";
// import Link from "next/link";

// export default function Services() {
//   const { translations } = useLanguage();

//   const pricingOptions = [
//     { title: translations.services.options.armed_security_guard, price: "150 USD", image: "/images/armed-guard.png" },
//     { title: translations.services.options.motorcycle_escort, price: "170 USD", image: "/images/motorcycle-escort.png" },
//     { title: translations.services.options.standard_car_escort, price: "200 USD", image: "/images/standard-car.png" },
//     { title: translations.services.options.luxury_car_escort, price: "230 USD", image: "/images/luxury-car.png" },
//     { title: translations.services.options.suv_escort, price: "250 USD", image: "/images/suv.png" },
//     { title: translations.services.options.premium_suv_escort, price: "270 USD", image: "/images/premium-suv.png" },
//     { title: translations.services.options.high_end_vehicle_escort, price: "350 USD", image: "/images/high-end-vehicle.png" },
//   ];

//   return (
//     <div>
//       <Navbar />
//       <section className="min-h-screen bg-gray-100 text-center py-12 px-4 pt-36">
//         <h1 className="text-4xl font-bold text-primary">
//           {translations.services.title}
//         </h1>
//         <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg">
//           {translations.services.description}
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
//           {pricingOptions.map((option) => (
//             <div
//               key={option.title}
//               className="bg-white p-6 shadow-md rounded-lg flex flex-col justify-between transform hover:scale-105 transition-transform duration-300 hover:shadow-xl"
//             >
//               <img
//                 src={option.image}
//                 alt={option.title}
//                 className="w-auto object-contain mx-auto mb-4"
//                 onError={(e) => e.currentTarget.src = "/images/placeholder.png"}
//               />
//               <h2 className="text-2xl font-bold text-primary">{option.title}</h2>
//               <p className="text-xl font-semibold mt-2">{option.price}</p>
//               <Link
//                 href="/contact"
//                 className="mt-4 bg-primary text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition"
//               >
//                 {translations.services.learn_more}
//               </Link>
//             </div>
//           ))}
//         </div>

//         <p className="mt-10 text-sm text-gray-600 max-w-2xl mx-auto">
//         {translations.services.pricing_note}
//         </p>
//       </section>
//     </div>
//   );
// }


"use client";

import Navbar from "@/app/components/Navbar";
import { useLanguage } from "@/app/context/LanguageContext";
import Link from "next/link";

export default function Services() {
  const { translations } = useLanguage();

  const pricingOptions = [
    { title: translations.services.options.armed_security_guard, price: "150 USD", image: "/images/armed-guard.png" },
    { title: translations.services.options.motorcycle_escort, price: "170 USD", image: "/images/motorcycle-escort.png" },
    { title: translations.services.options.standard_car_escort, price: "200 USD", image: "/images/standard-car.png" },
    { title: translations.services.options.luxury_car_escort, price: "230 USD", image: "/images/luxury-car.png" },
    { title: translations.services.options.suv_escort, price: "250 USD", image: "/images/suv.png" },
    { title: translations.services.options.premium_suv_escort, price: "270 USD", image: "/images/premium-suv.png" },
    { title: translations.services.options.high_end_vehicle_escort, price: "350 USD", image: "/images/high-end-vehicle.png" },
  ];

  return (
    <div>
      <Navbar />
      <section className="min-h-screen bg-gradient-to-b from-primary to-black text-center py-12 px-4 pt-36">
        <h1 className="text-4xl font-bold text-white">
          {translations.services.title}
        </h1>
        <p className="text-white mt-4 max-w-2xl mx-auto text-lg">
          {translations.services.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {pricingOptions.map((option) => (
            <div
              key={option.title}
              className="bg-white p-6 shadow-md rounded-lg flex flex-col justify-between transform hover:scale-105 transition-transform duration-300 hover:shadow-xl"
            >
              <img
                src={option.image}
                alt={option.title}
                className="w-auto object-contain mx-auto mb-4"
                onError={(e) => e.currentTarget.src = "/images/placeholder.png"}
              />
              <h2 className="text-2xl font-bold text-black">{option.title}</h2>
              <p className="text-xl font-semibold mt-2 text-black">{option.price}</p>
              <Link
                href="/contact"
                className="mt-4 bg-primary text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition"
              >
                {translations.services.learn_more}
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-white max-w-2xl mx-auto">
          {translations.services.pricing_note}
        </p>
      </section>
    </div>
  );
}
