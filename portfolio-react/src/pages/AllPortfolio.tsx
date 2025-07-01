import React from "react";
import { projects } from "../data/projects";

const AllPortfolio: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white pt-24 px-6">
      <div className="container mx-auto max-w-6xl py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <a
              href="/"
              className="px-6 py-2 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
            >
              ← Back to Home
            </a>
          </div>
          <h1 className="text-5xl font-bold text-cyan-400 mb-4">All Portfolio</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are all of my projects, showcasing my skills and creativity in web development and design.
          </p>
        </div>

        {/* Portfolio Grid (semua project) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
      </div>
    </section>
  );
};

export default AllPortfolio; 