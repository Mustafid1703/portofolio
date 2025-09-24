import React from "react";

const Contact = () => {
  return (
   
  <section id="contact" class="py-24 bg-gradient-to-br from-gray-900 to-gray-800 fade-in delay-2">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-4xl font-extrabold text-cyan-400 mb-16 text-center tracking-wide">
        Let’s Connect ✨
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-14">
        
       
        <form action="#" class="bg-gray-900/80 backdrop-blur p-10 rounded-2xl shadow-2xl space-y-8 border border-gray-700 hover:border-cyan-400 transition">
        
          <div class="relative">
            <input type="text" id="name" placeholder=" " 
              class="peer w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 text-white"/>
            <label for="name" 
              class="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-cyan-400">
              Nama
            </label>
          </div>

         
          <div class="relative">
            <input type="email" id="email" placeholder=" " 
              class="peer w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 text-white"/>
            <label for="email" 
              class="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-cyan-400">
              Email
            </label>
          </div>

          <div class="relative">
            <textarea id="message" rows="5" placeholder=" " 
              class="peer w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 text-white"></textarea>
            <label for="message" 
              class="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-cyan-400">
              Pesan
            </label>
          </div>

          <button type="submit"
            class="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition font-bold rounded-lg shadow-lg hover:shadow-cyan-500/50">
            🚀 Kirim Pesan
          </button>
        </form>

        <div class="flex flex-col justify-center space-y-8">
          <div class="flex items-center gap-5 p-5 rounded-xl bg-gray-900/70 border border-gray-700 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition">
            <div class="p-3 bg-cyan-500/20 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <p class="text-lg text-gray-300">mustafid1703@student.abudzar.sch.id</p>
          </div>

          <div class="flex items-center gap-5 p-5 rounded-xl bg-gray-900/70 border border-gray-700 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition">
            <div class="p-3 bg-cyan-500/20 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 12.414a2 2 0 010-2.828l4.243-4.243M15 12h.01M21 12c0 4.418-3.582 8-8 8H9a8 8 0 010-16h4c4.418 0 8 3.582 8 8z" />
              </svg>
            </div>
            <p class="text-lg text-gray-300">www.linkedin.com/in/Muhammad Mustafid Ilmi</p>
          </div>

          <div class="flex items-center gap-5 p-5 rounded-xl bg-gray-900/70 border border-gray-700 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition">
            <div class="p-3 bg-cyan-500/20 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13V5a2 2 0 00-2-2H5a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2z" />
              </svg>
            </div>
            <p class="text-lg text-gray-300">+62 812-3456-7890</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Contact;
