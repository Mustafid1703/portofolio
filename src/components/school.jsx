import React from "react";
import gambar from "../assets/abudzar.jpg";

const School = () => {
  return (
    <section id="school" className="py-24 bg-gray-800 fade-in delay-2">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          className="text-4xl font-bold text-cyan-400 mb-12 
                     transition duration-500 transform hover:scale-110 
                     hover:text-cyan-300 hover:shadow-[0_0_25px_5px_rgba(34,211,238,0.7)]"
        >
          My School 🏫
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Foto Sekolah */}
          <div
            className="group bg-gray-900 rounded-xl overflow-hidden shadow-lg 
                       transform transition duration-500 hover:-translate-y-2 
                       hover:shadow-[0_0_35px_5px_rgba(34,211,238,0.6)] fade-in delay-1"
          >
            <div className="relative overflow-hidden">
              <img
                src={gambar}
                alt="Foto Sekolah"
                className="w-full h-72 object-cover transition duration-700 transform group-hover:scale-110"
              />
              {/* Overlay gradasi muncul saat hover */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 
                           group-hover:opacity-100 transition duration-500"
              ></div>
            </div>
            <div className="p-6">
              <h3
                className="text-2xl font-bold mb-3 transition duration-500 
                           group-hover:text-cyan-400 group-hover:scale-105"
              >
                Abudzar Islamic School
              </h3>
              <p className="text-gray-400">
                Sekolah yang selalu jadi tempat belajar, berproses, dan
                berkembang buat gue.  
                Di sini bukan cuma dapet ilmu, tapi juga pengalaman hidup yang
                berharga. ✨
              </p>
            </div>
          </div>

          {/* Maps */}
          <div
            className="rounded-xl overflow-hidden shadow-lg transform transition duration-500 
                       hover:scale-105 hover:shadow-[0_0_35px_5px_rgba(34,211,238,0.6)] fade-in delay-2"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9461335685876!2d110.40661251533462!3d-7.801373979302073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a578e3e2e1d65%3A0x6d4be3b4d2fdfb9!2sSekolah%20Abudzar!5e0!3m2!1sid!2sid!4v1695023456789!5m2!1sid!2sid"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="transition duration-700 transform hover:scale-105 hover:brightness-110"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default School;
