import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 border-t border-gray-800 fade-in delay-2">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 
                         hover:from-pink-500 hover:to-purple-500 transition-all duration-700 cursor-pointer">
            Mustafid Ilmi 🚀
          </h2>
          <p className="text-gray-400 mt-2 text-sm">Coding bukan cuma logika, tapi juga seni ✨</p>
        </div>

        {/* Sosial Media */}
        <div className="flex gap-6">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/muh_afidd/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 transition-all duration-500 
                       hover:bg-gradient-to-tr hover:from-pink-500 hover:to-yellow-400 
                       hover:scale-125 hover:shadow-[0_0_20px_5px_rgba(236,72,153,0.6)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9.75 1.75a1 1 0 1 1 0 2.001 1 1 0 0 1 0-2Zm-5.25 2.25a5.5 5.5 0 1 1 0 11.001 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7.001 3.5 3.5 0 0 0 0-7Z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/muhammad-mustafid-ilmi-b8a627377/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 transition-all duration-500 
                       hover:bg-gradient-to-tr hover:from-blue-600 hover:to-cyan-400 
                       hover:scale-125 hover:shadow-[0_0_20px_5px_rgba(59,130,246,0.6)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M4.98 3.5c0 1.38-1.12 2.5-2.49 2.5A2.5 2.5 0 0 1 0 3.5C0 2.12 1.12 1 2.49 1 3.86 1 4.98 2.12 4.98 3.5ZM.5 8h4V24h-4V8Zm7.5 0h3.8v2.16h.05c.53-1 1.82-2.16 3.75-2.16 4 0 4.75 2.63 4.75 6.05V24h-4v-7.7c0-1.84-.03-4.21-2.56-4.21-2.57 0-2.96 2-2.96 4.07V24h-4V8Z"/>
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 transition-all duration-500 
                       hover:bg-gradient-to-tr hover:from-gray-600 hover:to-black 
                       hover:scale-125 hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.3)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1 1 .1.9.6 2.8.6 1.7-.3 2.3-.8 2.3-1.4 0-1.7-.9-2.2-2.1-2.4 0 0-.6-.1-1.1-.6-.2-.3-.5-.9-.1-1.8 0 0 .8-.3 2.5 1 1-.3 2.1-.4 3.1-.4s2.1.1 3.1.4c1.7-1.3 2.5-1 2.5-1 .4.9.1 1.5-.1 1.8-.5.5-1.1.6-1.1.6-1.2.2-2.1.7-2.1 2.4 0 .6.6 1.1 2.3 1.4 1.9 0 1.8-.5 2.8-.6 0 0 .5-1 1.6-1.1 0 0 1.1 0 .1.7 0 0-.8.3-1.2 1.4 0 0-.7 2.2-3.9 1.5v2.2c0 .3.2.7.8.6 4.6-1.5 7.9-5.9 7.9-10.9C23.5 5.65 18.35.5 12 .5Z"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © 2025 <span className="text-cyan-400 font-semibold">Muhammad Mustafid Ilmi</span> · All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
