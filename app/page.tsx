// "use client";

// import Navbar from "@/app/components/Navbar";
// import { useLanguage } from "@/app/context/LanguageContext";
// import Link from "next/link";

// export default function Home() {
//   const { translations } = useLanguage();

//   return (
//     <div>
//       <Navbar />
//       <header className="h-screen flex flex-col justify-center items-center bg-primary text-white px-4 text-center">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">
//           {translations.home.title}
//         </h1>
//         <Link
//           href="/services"
//           className="mt-6 bg-white text-primary px-6 py-3 rounded-lg text-lg hover:bg-gray-100 transition"
//         >
//           {translations.home.cta}
//         </Link>
//       </header>
//     </div>
//   );
// }


// "use client";

// import Navbar from "@/app/components/Navbar";
// import { useLanguage } from "@/app/context/LanguageContext";
// import Link from "next/link";
// import Image from "next/image";

// export default function Home() {
//   const { translations } = useLanguage();

//   return (
//     <div>
//       <Navbar />
//       <header className="h-screen flex flex-col justify-center items-center bg-primary text-white px-4 text-center">
        

//         {/* Title */}
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">
//           {translations.home.title}
//         </h1>

//         {/* CTA */}
//         <Link
//           href="/services"
//           className="mt-6 bg-white text-primary px-6 py-3 rounded-lg text-lg hover:bg-gray-100 transition"
//         >
//           {translations.home.cta}
//         </Link>

//         {/* <div className="mb-6">
//           <Image
//             src="/images/logo.png"
//             alt="SecureXperience Logo"
//             width={200}
//             height={200}
//             priority
//           />
//         </div> */}
//       </header>
//     </div>
//   );
// }


"use client";

import Navbar from "@/app/components/Navbar";
import { useLanguage } from "@/app/context/LanguageContext";
import Link from "next/link";


export default function Home() {
  const { translations } = useLanguage();

  return (
    <div>
      <Navbar />
      <header className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-primary to-black text-white px-4 text-center">
  

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {translations.home.title}
        </h1>

        {/* Button */}
        <Link
          href="/services"
          className="mt-6 bg-white text-primary px-6 py-3 rounded-lg text-lg hover:bg-gray-100 transition"
        >
          {translations.home.cta}
        </Link>
      </header>
    </div>
  );
}
