import "./index.css";
import { FiExternalLink } from "react-icons/fi"; // Live ke liye
import { FaGithub } from "react-icons/fa";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1c] to-black text-white px-6 py-10">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl uppercase font-bold mb-4">
          Project <span className="text-teal-600">Showcase</span>
        </h1>
        <p className="text-gray-200 capitalize max-w-2xl mb-12">
          A collection of my featured full-stack and frontend projects — crafted with clean code, modern UI, and real-world functionality.
        </p>

        {/* Card 1: Time Sphere */}
        <div className="bg-[#111827] rounded-2xl overflow-hidden shadow-2xl grid md:grid-cols-2  mb-10">
          {/* Image */}
          <div className="border-r border-gray-700">
            <img
              src="/time.png"
              alt="Time Sphere"
              className="w-full h-full transition-transform hover:scale-105 duration-500 object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-3">
              Time <span className="text-teal-600">Sphere</span>
            </h2>

            <p className="text-gray-300 capitalize mb-6">
              Discover our curated collection of luxury watches, crafted with precision and style for every occasion. Elevate your look with a timepiece that defines your personality.
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap capitalize gap-2 mb-6">
              {["React", "Vite", "TypeScript", "Tailwind CSS"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-teal-500/10 text-teal-500 border border-teal-400/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href="https://watches-app-eta.vercel.app/"
                target="_blank"
                className="bg-teal-500 text-black px-5 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-teal-600 transition"
              >
                Live <FiExternalLink color="black" />
              </a>
              <a
                href="https://github.com/UmairShah-coder/watches-app.git"
                target="_blank"
                className="bg-gray-800 px-5 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-700 transition"
              >
                Code <FaGithub color="white" />
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: Stripe King (Gents Shoes) */}
        <div className="bg-[#111827] rounded-2xl overflow-hidden shadow-2xl grid md:grid-cols-2 ">
          {/* Image */}
          <div className="border-r border-gray-700">
            <img
              src="/aaa.png"
              alt="Stripe King"
              className="w-full h-full transition-transform hover:scale-105 duration-500 object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col justify-center">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-3xl font-semibold">
                Stripe <span className="text-teal-500">King</span>
              </h2>
              <span className="px-3 py-1 text-sm rounded-full bg-red-500/20 text-red-500 font-medium border border-red-400/30">
                In Progress
              </span>
            </div>

            <p className="text-gray-300 capitalize mb-6">
              Discover the perfect blend of style, comfort, and durability with our premium Gents Shoes collection. Our website showcases a wide range of formal, casual, and sports shoes designed for modern men who value both fashion and functionality.
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap capitalize gap-2 mb-6">
              {["MongoDB", "Express", "React", "Node.js", "TypeScript","JWt","Tailwind CSS"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-teal-500/10 text-teal-500 border border-teal-400/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href="https://stripe-king.vercel.app/"
                target="_blank"
                className="bg-teal-500 text-black px-5 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-teal-600 transition"
              >
                Live <FiExternalLink color="black" />
              </a>
              <a
                href="https://github.com/UmairShah-coder/stripeKing.git"
                target="_blank"
                className="bg-gray-800 px-5 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-700 transition"
              >
                Code <FaGithub color="white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
