import React from "react";



const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 fade-in delay-2">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-cyan-400 mb-12">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Project 1 */}
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-cyan-500/50 fade-in delay-1">
            <img
              src="/data manager.png"
              alt="Project 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Project Pertama</h3>
              <p className="text-gray-400 mb-4">
                Website portofolio modern dengan TailwindCSS dan animasi
                interaktif.
              </p>
              <a
                href="project1.html"
                className="inline-block px-4 py-2 bg-cyan-500 rounded-lg font-medium hover:bg-cyan-600 transition"
              >
                Lihat Detail
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-cyan-500/50 fade-in delay-2">
            <img
              src="/must travel.png"
              alt="Project 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Project Kedua</h3>
              <p className="text-gray-400 mb-4">
                Aplikasi to-do list simpel dengan JavaScript murni dan local
                storage.
              </p>
              <a
                href="project2.html"
                className="inline-block px-4 py-2 bg-cyan-500 rounded-lg font-medium hover:bg-cyan-600 transition"
              >
                Lihat Detail
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-cyan-500/50 fade-in delay-3">
            <img
              src="/project3.png"
              alt="Project 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Project Ketiga</h3>
              <p className="text-gray-400 mb-4">
                Game sederhana dibuat dengan Scratch untuk belajar logika
                pemrograman.
              </p>
              <a
                href="project3.html"
                className="inline-block px-4 py-2 bg-cyan-500 rounded-lg font-medium hover:bg-cyan-600 transition"
              >
                Lihat Detail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
