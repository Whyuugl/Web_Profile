import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { skills } from "../data/skills";

const Skills: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide highlight skill
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white pt-24 px-6">
      <div className="container mx-auto max-w-4xl py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-cyan-400 mb-6">My Skills</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of the programming languages and tools I am proficient in. I am continuously learning and expanding my skill set to build better projects and solutions.
          </p>
        </motion.div>

        {/* Skills List & Skill Level */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Skills List */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 mb-8 lg:mb-0">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer select-none
                  ${index === activeIndex ? "border-cyan-400 bg-cyan-400/10 shadow-lg" : "border-gray-700 hover:border-gray-600 bg-gray-800/50"}`}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-10 h-10 rounded object-contain"
                />
                <div>
                  <div className={`font-semibold text-lg ${index === activeIndex ? "text-cyan-400" : "text-white"}`}>{skill.name}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill Level */}
          <div className="w-full lg:w-1/2 bg-gray-800/50 rounded-xl border border-gray-700 p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Skill Level</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex justify-between text-base">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className={`font-semibold ${index === activeIndex ? "text-cyan-400" : "text-gray-400"}`}>
                      {index === activeIndex ? "Advanced" : "Proficient"}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        index === activeIndex ? "bg-cyan-400 w-4/5" : "bg-gray-600 w-3/4"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 