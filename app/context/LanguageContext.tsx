// "use client"; // ✅ Ensure this is at the top

// import { createContext, useContext, useState, ReactNode } from "react";
// import en from "@/app/locales/en.json";
// import es from "@/app/locales/es.json";

// // ✅ Define the shape of our context
// interface LanguageContextType {
//   locale: string;
//   setLocale: (locale: string) => void;
//   translations: Record<string, any>;
// }

// // ✅ Create context with a default empty value
// const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// // ✅ Language Provider Component
// export function LanguageProvider({ children }: { children: ReactNode }) {
//   const [locale, setLocale] = useState("en");
//   const translations = locale === "en" ? en : es;

//   return (
//     <LanguageContext.Provider value={{ locale, setLocale, translations }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// }

// // ✅ Custom hook to use the language context
// export function useLanguage() {
//   const context = useContext(LanguageContext);
//   if (!context) {
//     throw new Error("useLanguage must be used within a LanguageProvider");
//   }
//   return context;
// }


// "use client"; // ✅ Ensure this is at the top

// import { createContext, useContext, useState, ReactNode } from "react";
// import en from "@/app/locales/en.json";
// import es from "@/app/locales/es.json";

// // ✅ Define the shape of our context with proper types
// interface LanguageContextType {
//   locale: string;
//   setLocale: (locale: string) => void;
//   translations: Record<string, any>;
// }

// // ✅ Provide a default value for createContext
// const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// // ✅ Language Provider Component
// export function LanguageProvider({ children }: { children: ReactNode }) {
//   const [locale, setLocale] = useState<string>("en");
//   const translations = locale === "en" ? en : es;

//   return (
//     <LanguageContext.Provider value={{ locale, setLocale, translations }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// }

// // ✅ Custom hook to use the language context
// export function useLanguage() {
//   const context = useContext(LanguageContext);
//   if (!context) {
//     throw new Error("useLanguage must be used within a LanguageProvider");
//   }
//   return context;
// }


"use client"; // ✅ Ensure this is at the top

import { createContext, useContext, useState, ReactNode } from "react";
import en from "@/app/locales/en.json";
import es from "@/app/locales/es.json";

// ✅ Define the type for translations to avoid "any"
type TranslationsType = typeof en | typeof es;

// ✅ Define the shape of our context
interface LanguageContextType {
  locale: string;
  setLocale: React.Dispatch<React.SetStateAction<"en" | "es">>;
  translations: TranslationsType;
}

// ✅ Create context with a default empty value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// ✅ Language Provider Component
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<"en" | "es">("en"); // ✅ Ensure only "en" or "es"
  const translations = locale === "en" ? en : es;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

// ✅ Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
