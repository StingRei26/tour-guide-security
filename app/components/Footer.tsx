"use client";

import { MessageCircle, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-4 shadow-[0_-2px_6px_rgba(0,0,0,0.3)]">

      <div className="container mx-auto text-center flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Contact Info */}
        <div className="flex space-x-8 items-center mb-4 md:mb-0">
          {/* WhatsApp */}
          <a
            href="https://wa.me/573001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:underline"
          >
            <MessageCircle className="w-5 h-5 text-green-400" />
            <span>WhatsApp</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/securexperience_medellin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:underline"
          >
            <Instagram className="w-5 h-5 text-pink-400" />
            <span>Instagram</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400 mt-4 md:mt-0">
          © {new Date().getFullYear()} SecureXperience. All rights reserved.
        </div>
      </div>
    </footer>
  );
}




