import React from "react";
import fotoProfil from "../assets/komok-fdl.png";

const Hero = () => {
  return (
    // Hero Section
    <section className="relative py-40 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 relative z-10">
        
        {/* Teks */}
        <div className="flex-1 text-center md:text-left fade-in delay-2">
          <h2 className="text-5xl font-extrabold mb-4 leading-tight">
            Halo, Saya{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 
                             transition-all duration-500 hover:from-pink-500 hover:to-purple-500 
                             hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">
              Mustafid Ilmi
            </span>
          </h2>
          <p className="text-lg text-gray-400 mb-6 transition duration-300 hover:text-gray-200">
            Nge-code itu seni, dan tiap baris kode gue tujuannya bikin pengalaman yang lebih asik.  
            Mau lihat hasilnya? Scroll aja ke bawah 👇
          </p>

          {/* Sosial Media */}
          <div className="flex justify-center md:justify-start gap-6 mb-8">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/muh_afidd/"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-gray-800 rounded-full transition-all duration-500 
                         hover:bg-gradient-to-tr hover:from-pink-500 hover:to-yellow-400 
                         transform hover:scale-125 shadow hover:shadow-pink-500/50 hover:rotate-12"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9.75 1.75a1 1 0 1 1 0 2.001 1 1 0 0 1 0-2Zm-5.25 2.25a5.5 5.5 0 1 1 0 11.001 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7.001 3.5 3.5 0 0 0 0-7Z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/muhammad-mustafid-ilmi-b8a627377/"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-gray-800 rounded-full transition-all duration-500 
                         hover:bg-gradient-to-tr hover:from-blue-600 hover:to-cyan-400 
                         transform hover:scale-125 shadow hover:shadow-blue-500/50 hover:-rotate-12"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M4.98 3.5c0 1.38-1.12 2.5-2.49 2.5A2.5 2.5 0 0 1 0 3.5C0 2.12 1.12 1 2.49 1 3.86 1 4.98 2.12 4.98 3.5ZM.5 8h4V24h-4V8Zm7.5 0h3.8v2.16h.05c.53-1 1.82-2.16 3.75-2.16 4 0 4.75 2.63 4.75 6.05V24h-4v-7.7c0-1.84-.03-4.21-2.56-4.21-2.57 0-2.96 2-2.96 4.07V24h-4V8Z"/>
              </svg>
            </a>
          </div>

          {/* Button */}
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg 
                       transition-all duration-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(6,182,212,0.8)] 
                       hover:from-pink-500 hover:to-purple-500"
          >
            🚀 Lihat Projects
          </a>
        </div>

        {/* Foto */}
        <div className="flex-1 flex justify-center fade-in delay-3">
          <img
            src={fotoProfil}
            alt="Foto Mustafid Ilmi"
            className="w-64 h-64 object-cover rounded-full border-4 border-cyan-400 shadow-lg 
                       transition duration-500 transform
                       hover:scale-125 hover:rotate-6 
                       hover:shadow-[0_0_30px_8px_rgba(34,211,238,0.9)]
                       hover:border-transparent hover:animate-pulse"
          />
        </div>
      </div>

      {/* Background dekorasi */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/10 animate-pulse"></div>
    </section>
  );
};

export default Hero;
