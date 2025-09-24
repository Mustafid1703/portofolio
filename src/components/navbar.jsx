import React from "react";

const Navbar = () => {
  return (
    <header className="bg-gray-800 shadow-md sticky top-0 z-50 fade-in delay-1">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-5">
        <h1 className="text-2xl font-bold text-cyan-400">Portofolio</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-cyan-400">
            About Me
          </a>
          <a href="#skills" className="hover:text-cyan-400">
            Skill
          </a>
          <a href="#projects" className="hover:text-cyan-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-cyan-400">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
