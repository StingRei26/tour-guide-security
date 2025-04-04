// "use client";

// import Navbar from "@/app/components/Navbar";
// import { useLanguage } from "@/app/context/LanguageContext";
// import { Mail, Phone, MessageCircle } from "lucide-react"; // ✅ Import Icons

// export default function Contact() {
//   const { translations } = useLanguage();

//   return (
//     <div>
//       <Navbar />
//       <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-primary text-white">
//         <h1 className="text-4xl font-bold">
//           {translations.contact.title}
//         </h1>
//         <p className="text-lg mt-4 max-w-2xl">
//           {translations.contact.description}
//         </p>

//         <div className="grid md:grid-cols-3 gap-6 mt-10">
//           {/* WhatsApp */}
//           <div className="bg-white p-6 shadow-md rounded-lg text-center text-primary">
//             <MessageCircle className="mx-auto text-green-500 w-10 h-10" /> 
//             <h2 className="text-2xl font-bold mt-4">
//               {translations.contact.whatsapp}
//             </h2>
//             <p className="text-gray-600 mt-2">{translations.contact.whatsapp_desc}</p>
//           </div>

//           {/* Call */}
//           <div className="bg-white p-6 shadow-md rounded-lg text-center text-primary">
//             <Phone className="mx-auto text-blue-500 w-10 h-10" /> 
//             <h2 className="text-2xl font-bold mt-4">
//               {translations.contact.call}
//             </h2>
//             <p className="text-gray-600 mt-2">{translations.contact.call_desc}</p>
//           </div>

//           {/* Email */}
//           <div className="bg-white p-6 shadow-md rounded-lg text-center text-primary">
//             <Mail className="mx-auto text-red-500 w-10 h-10" /> 
//             <h2 className="text-2xl font-bold mt-4">
//               {translations.contact.email}
//             </h2>
//             <p className="text-gray-600 mt-2">{translations.contact.email_desc}</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



// "use client";

// import Navbar from "@/app/components/Navbar";
// import { useLanguage } from "@/app/context/LanguageContext";
// import { Mail, Phone, MessageCircle } from "lucide-react"; // ✅ Import Icons

// export default function Contact() {
//   const { translations } = useLanguage();

//   return (
//     <div>
//       <Navbar />
//       <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-primary text-white pt-16 md:pt-0">
//         <h1 className="text-4xl font-bold">
//           {translations.contact.title}
//         </h1>
//         <p className="text-lg mt-4 max-w-2xl">
//           {translations.contact.description}
//         </p>

//         <div className="grid md:grid-cols-3 gap-6 mt-10">
//           {/* WhatsApp */}
//           <div className="bg-white p-6 shadow-md rounded-lg text-center text-primary">
//             <MessageCircle className="mx-auto text-green-500 w-10 h-10" /> 
//             <h2 className="text-2xl font-bold mt-4">
//               {translations.contact.whatsapp}
//             </h2>
//             <p className="text-gray-600 mt-2">{translations.contact.whatsapp_desc}</p>
//           </div>

//           {/* Call */}
//           <div className="bg-white p-6 shadow-md rounded-lg text-center text-primary">
//             <Phone className="mx-auto text-blue-500 w-10 h-10" /> 
//             <h2 className="text-2xl font-bold mt-4">
//               {translations.contact.call}
//             </h2>
//             <p className="text-gray-600 mt-2">{translations.contact.call_desc}</p>
//           </div>

//           {/* Email */}
//           <div className="bg-white p-6 shadow-md rounded-lg text-center text-primary">
//             <Mail className="mx-auto text-red-500 w-10 h-10" /> 
//             <h2 className="text-2xl font-bold mt-4">
//               {translations.contact.email}
//             </h2>
//             <p className="text-gray-600 mt-2">{translations.contact.email_desc}</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

import Navbar from "@/app/components/Navbar";
import { useLanguage } from "@/app/context/LanguageContext";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  const { translations } = useLanguage();

  return (
    <div>
      <Navbar />
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-primary to-black text-white pt-16 md:pt-0">
        <h1 className="text-4xl font-bold">
          {translations.contact.title}
        </h1>
        <p className="text-lg mt-4 max-w-2xl">
          {translations.contact.description}
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {/* WhatsApp */}
          <div className="bg-white p-6 shadow-md rounded-lg text-center text-primary">
            <MessageCircle className="mx-auto text-green-500 w-10 h-10" />
            <h2 className="text-2xl font-bold mt-4">
              {translations.contact.whatsapp}
            </h2>
            <p className="text-gray-600 mt-2">
              {translations.contact.whatsapp_desc}
            </p>
          </div>

          {/* Call */}
          <div className="bg-white p-6 shadow-md rounded-lg text-center text-primary">
            <Phone className="mx-auto text-blue-500 w-10 h-10" />
            <h2 className="text-2xl font-bold mt-4">
              {translations.contact.call}
            </h2>
            <p className="text-gray-600 mt-2">
              {translations.contact.call_desc}
            </p>
          </div>

          {/* Email */}
          <div className="bg-white p-6 shadow-md rounded-lg text-center text-primary">
            <Mail className="mx-auto text-red-500 w-10 h-10" />
            <h2 className="text-2xl font-bold mt-4">
              {translations.contact.email}
            </h2>
            <p className="text-gray-600 mt-2">
              {translations.contact.email_desc}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

