import React from "react";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import scratchLogo from "../assets/scratch.png";


const Skills = () => {
  return (
    <section id="skills" className="py-60 bg-gray-800 fade-in delay-2">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-cyan-400 mb-16">My Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
          {/* HTML */}
          <div className="flex flex-col items-center fade-in delay-1">
            <img
              src={htmlLogo}
              alt="HTML"
              className="w-40 h-40 mb-6 transition-transform duration-300 hover:scale-125 hover:shadow-xl hover:shadow-cyan-500/50 rounded-lg"
            />
            <p className="text-xl font-semibold">HTML</p>
          </div>

          {/* CSS */}
          <div className="flex flex-col items-center fade-in delay-2">
            <img
              src={cssLogo} 
              alt="CSS"
              className="w-40 h-40 mb-6 transition-transform duration-300 hover:scale-125 hover:shadow-xl hover:shadow-cyan-500/50 rounded-lg"
            />
            <p className="text-xl font-semibold">CSS</p>
          </div>

          {/* JavaScript */}
          <div className="flex flex-col items-center fade-in delay-3">
            <img
              src={jsLogo} 
              alt="JavaScript"
              className="w-40 h-40 mb-6 transition-transform duration-300 hover:scale-125 hover:shadow-xl hover:shadow-yellow-400/50 rounded-lg"
            />
            <p className="text-xl font-semibold">JavaScript</p>
          </div>

          {/* Scratch */}
          <div className="flex flex-col items-center fade-in delay-3">
            <img
              src={scratchLogo}
              alt="Scratch"
              className="w-40 h-40 mb-6 transition-transform duration-300 hover:scale-125 hover:shadow-xl hover:shadow-orange-400/50 rounded-lg"
            />
            <p className="text-xl font-semibold">Scratch</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
