"use client";

import { MessageCircle, Instagram } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Footer() {
  const { translations } = useLanguage();

  return (
    <footer className="bg-white text-black py-4 border-t border-gray-200">
      <div className="container mx-auto text-center flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Contact Info */}
        <div className="flex space-x-8 items-center mb-4 md:mb-0">
          <a
            href="https://wa.me/573001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:underline"
          >
            <MessageCircle className="w-5 h-5 text-green-600" />
            <span>WhatsApp</span>
          </a>

          <a
            href="https://www.instagram.com/securexperience_medellin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:underline"
          >
            <Instagram className="w-5 h-5 text-pink-500" />
            <span>Instagram</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm mt-4 md:mt-0">
          © {new Date().getFullYear()} SecureXperience. {translations.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
