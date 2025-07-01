import React from "react";
import { projects } from "../data/projects";

const Portfolio: React.FC = () => {
  // Tampilkan hanya 4 project pertama
  const displayedProjects = projects.slice(0, 4);

  return (
    <section id="portfolio" className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white pt-24 px-6">
      <div className="container mx-auto max-w-6xl py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-cyan-400 mb-4">My Portfolio</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity.
          </p>
        </div>

        {/* Portfolio Grid (4 project saja) */}
        <div className="grid md:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-400 transition-colors duration-300 shadow-xl group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-cyan-400 text-gray-900 text-sm font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Lihat Semua Portfolio */}
        <div className="flex justify-center mt-12">
          <a
            href="/portfolio"
            className="px-8 py-3 bg-cyan-400 text-gray-900 font-semibold rounded-lg hover:bg-cyan-300 transition-colors duration-300 shadow-lg"
          >
            Lihat Semua Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
