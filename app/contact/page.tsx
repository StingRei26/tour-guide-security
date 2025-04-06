"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "@/app/components/Navbar";
import { useLanguage } from "@/app/context/LanguageContext";
import { Instagram, MessageCircle, XCircle } from "lucide-react";

export default function Contact() {
  const { translations } = useLanguage();
  const [showSuccess, setShowSuccess] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_jmfl12m",
        "template_t3lmvef", // <-- Replace with your actual template ID
        form.current!,
        "RWlFEdRic_IO4yKSI"     // <-- Replace with your actual public key
      );

      form.current?.reset();
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-background via-background to-primary text-white pt-32 pb-20">
        <h1 className="text-4xl font-bold">{translations.contact.title}</h1>
        <p className="text-lg mt-4 max-w-2xl">{translations.contact.description}</p>

        {/* Email Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full max-w-xl mt-10 space-y-4 text-left bg-white text-black rounded-lg shadow-lg p-8"
        >
          <input
            type="text"
            name="name"
            placeholder={translations.contact.form.name_placeholder}
            required
            className="w-full px-4 py-3 rounded border border-gray-300"
          />
          <input
            type="email"
            name="email"
            placeholder={translations.contact.form.email_placeholder}
            required
            className="w-full px-4 py-3 rounded border border-gray-300"
          />
          <textarea
            name="message"
            placeholder={translations.contact.form.message_placeholder}
            required
            className="w-full px-4 py-3 rounded border border-gray-300"
            rows={5}
          />
          <input type="hidden" name="title" value="SecureXperience Contact" />
          <button
            type="submit"
            className="w-full bg-primary text-white font-bold px-6 py-3 rounded hover:bg-black transition"
          >
            {translations.contact.form.submit_button}
          </button>
        </form>

        {/* Success Alert */}
        {showSuccess && (
          <div className="mt-6 bg-green-600 text-white px-6 py-4 rounded-lg shadow-md flex items-center justify-between max-w-xl w-full">
            <span className="text-sm">
              {translations.contact.form.success_message}
            </span>
            <button onClick={() => setShowSuccess(false)} className="ml-4">
              <XCircle className="w-5 h-5 text-white hover:text-gray-200" />
            </button>
          </div>
        )}

        {/* QR Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="text-center">
            <Instagram className="w-8 h-8 text-pink-500 mx-auto mb-2" />
            <img src="/images/instagram-qr.png" alt="Instagram QR" className="mx-auto w-52" />
          </div>
          <div className="text-center">
            <MessageCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <img src="/images/whatsapp-qr.png" alt="WhatsApp QR" className="mx-auto w-52" />
          </div>
        </div>
      </section>
    </div>
  );
}
