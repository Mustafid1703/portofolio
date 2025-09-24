import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto py-20 px-6 fade-in delay-2 bg-gray-900 rounded-2xl shadow-lg 
                 transition duration-700 transform hover:-translate-y-2 
                 hover:shadow-[0_0_35px_5px_rgba(34,211,238,0.6)]"
    >
      {/* Judul */}
      <h2
        className="text-3xl font-bold text-cyan-400 mb-6 inline-block relative 
                   transition duration-500 hover:text-cyan-300 
                   hover:shadow-[0_0_20px_rgba(34,211,238,0.8)] hover:scale-105 group"
      >
        Tentang Saya
        <span
          className="absolute left-0 -bottom-1 w-0 h-1 bg-cyan-400 transition-all duration-500 
                     group-hover:w-full"
        ></span>
      </h2>

      <p
        className="text-gray-300 leading-relaxed text-lg relative z-10 
                   transition duration-500 hover:bg-gradient-to-r hover:from-gray-800/50 
                   hover:to-gray-700/50 hover:px-3 hover:rounded-lg hover:shadow-inner"
      >
        Yo! Gue{" "}
        <span
          className="text-cyan-400 font-semibold relative inline-block 
                     after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-r 
                     after:from-transparent after:via-white/40 after:to-transparent 
                     after:translate-x-[-150%] after:animate-[shine_2s_infinite]"
        >
          Mustafid Ilmi
        </span>
        , bukan sekadar ngoding, tapi ngegubah baris kode jadi karya.  
        Buat gue, coding itu kayak bikin lagu—harus punya vibe, flow, dan bikin orang yang liat
        langsung bilang:{" "}
        <span
          className="italic text-cyan-400 font-semibold relative inline-block 
                     after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-r 
                     after:from-transparent after:via-white/40 after:to-transparent 
                     after:translate-x-[-150%] after:animate-[shine_2s_infinite]"
        >
          "anjay keren!"
        </span>{" "}
        😎
      </p>
    </section>
  );
};

export default About;
