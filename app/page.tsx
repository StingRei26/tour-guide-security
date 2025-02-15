import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <header className="h-screen flex flex-col justify-center items-center bg-gray-100 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Explore Medellín Safely with Expert Security
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Private security and guided tours to ensure your safety and an unforgettable experience in Medellín.
        </p>
        <Link
          href="/services"
          className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition"
        >
          View Services
        </Link>
      </header>
    </div>
  );
}
