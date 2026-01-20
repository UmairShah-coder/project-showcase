import "./index.css";
import { FiExternalLink } from "react-icons/fi"; // Live ke liye
import { FaGithub } from "react-icons/fa";       
export default function App() {
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1c] to-black text-white px-6 py-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif;   `}
        </ style>
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <h1 className="text-4xl  uppercase font-bold mb-4">
          Project <span className="text-teal-600">Showcase</span>
        </h1>
        <p className="text-gray-200 capitalize max-w-2xl mb-12">
          A collection of my featured full-stack and frontend projects — crafted
          with clean code, modern UI, and real-world functionality.
        </p>

        {/* Card */}
        <div className="bg-[#111827] rounded-2xl overflow-hidden shadow-xl grid md:grid-cols-2">
          
          {/* Image */}
          <div className="border-r ">
            <img
              src="/time.png"
              alt="project"
              className="w-full h-full hover:scale-105 transition duration-500 object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8 flex  flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-3">Time <span className="text-teal-600">Sphere</span> </h2>

            <p className="text-gray-300 capitalize mb-6">
              Discover our curated collection of luxury watches, crafted with precision and style for every occasion. Elevate your look with a timepiece that defines your personality.
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap capitalize gap-2 mb-6">
              {["React", "Vite", "Typescript", "Tailwind"].map((tech) => (
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
      </div>
    </div>
  );
}
