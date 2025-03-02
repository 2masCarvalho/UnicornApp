import Counter from "@/component/Counter";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">My Website</h1>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="container mx-auto text-center p-8">
          <h2 className="text-4xl font-bold mb-4">Welcome to My Website</h2>
          <p className="text-xl mb-8">This is a simple homepage built with Tailwind CSS.</p>
          <button className="btn btn-circle bg-blue-500 text-white px-4 py-2 rounded-full">Get Started</button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 My Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
