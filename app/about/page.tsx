// "use client";

// import Navbar from "@/app/components/Navbar";
// import { useLanguage } from "@/app/context/LanguageContext";

// export default function About() {
//   const { translations } = useLanguage();

//   return (
//     <div className="relative min-h-screen">
//       <Navbar />

//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: "url('/images/medellin-bg-4.jpg')" }}
//       />

//       {/* Content */}
//       <section className="relative z-10 text-white text-center py-28 px-6 flex flex-col items-center">
//         <div className="max-w-4xl w-full space-y-12 p-10">

//           {/* Title */}
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white">
//   {translations.about.title}
// </h1>

//           {/* Description */}
//           <div className="bg-black/70 p-6 rounded-lg shadow-md max-w-3xl mx-auto mb-10">
//             <p className="text-lg text-white leading-relaxed">
//               {translations.about.description}
//             </p>
//           </div>

//           {/* Content Details */}
//           <div className="space-y-4 text-left text-lg text-white max-w-3xl mx-auto">
//             <div className="bg-black/70 p-6 rounded-lg shadow-md">
//               <p>{translations.about.detail_1}</p>
//             </div>
//             <div className="bg-black/70 p-6 rounded-lg shadow-md">
//               <p>{translations.about.detail_2}</p>
//             </div>
//             <div className="bg-black/70 p-6 rounded-lg shadow-md">
//               <p>{translations.about.detail_3}</p>
//             </div>
//           </div>

//           {/* Meet the Team */}
//           <div className="mt-10">
//             <h2 className="text-4xl font-bold mb-6 text-white">
//               {translations.about.meet_the_team}
//             </h2>
//             <div className="bg-black/70 p-8 rounded-xl shadow-lg border border-gray-500 max-w-lg mx-auto text-white text-center space-y-2">
//               <p className="text-xl font-semibold">{translations.about.team_description}</p>
//               <p className="text-lg">{translations.about.team_stats}</p>
//             </div>
//           </div>

//         </div>
//       </section>
//     </div>
//   );
// }


"use client";

import Navbar from "@/app/components/Navbar";
import { useLanguage } from "@/app/context/LanguageContext";

export default function About() {
  const { translations } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary">
      <Navbar />

      <section className="text-white text-center px-6 flex flex-col items-center pt-32 pb-20">
  <div className="max-w-4xl w-full space-y-12 p-10">
    <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
      {translations.about.title}
    </h1>

          <p className="text-lg text-center max-w-2xl mx-auto mb-12">
            {translations.about.description}
          </p>

          <div className="space-y-6 max-w-3xl mx-auto text-left">
            <div className="flex items-start gap-4 p-4 bg-black/40 rounded-lg shadow-md">
              <span className="text-green-400 text-xl">✔</span>
              <p>{translations.about.detail_1}</p>
            </div>
            <div className="flex items-start gap-4 p-4 bg-black/40 rounded-lg shadow-md">
              <span className="text-green-400 text-xl">✔</span>
              <p>{translations.about.detail_2}</p>
            </div>
            <div className="flex items-start gap-4 p-4 bg-black/40 rounded-lg shadow-md">
              <span className="text-green-400 text-xl">✔</span>
              <p>{translations.about.detail_3}</p>
            </div>
          </div>

          {/* Meet the Team */}
          <div className="mt-10">
            <h2 className="text-4xl font-bold mb-6">
              {translations.about.meet_the_team}
            </h2>
            <div className="p-8 border border-gray-500 rounded-xl shadow-lg max-w-lg mx-auto text-center space-y-2">
              <p className="text-xl font-semibold">{translations.about.team_description}</p>
              <p className="text-lg">{translations.about.team_stats}</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
