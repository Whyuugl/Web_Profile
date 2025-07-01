import React from "react";
import { motion } from "framer-motion";
import { aboutSections } from "../data/about";

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-24 px-6">
      <div className="container mx-auto max-w-6xl py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-cyan-400 mb-6">About Me</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hi, I'm Wahyu Galang Ramadhan Rumampuk — a passionate and creative web developer with a love for crafting engaging and functional digital experiences. From designing sleek user interfaces to building responsive and dynamic websites, I'm driven by the desire to turn ideas into reality.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700 hover:border-cyan-400 transition-colors duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h2 className="text-2xl font-bold text-cyan-400">{aboutSections.education.title}</h2>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-cyan-400 pl-4">
                <h3 className="font-semibold text-white mb-2">Politeknik Negeri Banyuwangi</h3>
                <p className="text-gray-300 text-sm mb-1">Informatics Engineering, Software Engineering Technology</p>
                <p className="text-gray-400 text-sm">Currently pursuing my degree, diving deep into software development, system design, and innovative tech solutions</p>
              </div>
              <div className="border-l-4 border-cyan-400 pl-4">
                <h3 className="font-semibold text-white mb-2">SMA Negeri 1 Glagah</h3>
                <p className="text-gray-300 text-sm mb-1">Science Major</p>
                <p className="text-gray-400 text-sm">Graduated with a strong foundation in analytical thinking and problem-solving</p>
              </div>
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700 hover:border-cyan-400 transition-colors duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">💼</span>
              </div>
              <h2 className="text-2xl font-bold text-cyan-400">{aboutSections.experience.title}</h2>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-cyan-400 pl-4">
                <h3 className="font-semibold text-white mb-1">Fullstack Developer</h3>
                <p className="text-cyan-400 text-sm mb-2">2 years</p>
                <p className="text-gray-300 text-sm">Developed end-to-end web applications, focusing on both front-end and back-end development</p>
              </div>
              <div className="border-l-4 border-cyan-400 pl-4">
                <h3 className="font-semibold text-white mb-1">Front-End Developer</h3>
                <p className="text-cyan-400 text-sm mb-2">1 year</p>
                <p className="text-gray-300 text-sm">Specialized in creating interactive, responsive, and visually appealing user interfaces</p>
              </div>
              <div className="border-l-4 border-cyan-400 pl-4">
                <h3 className="font-semibold text-white mb-1">Web Design</h3>
                <p className="text-cyan-400 text-sm mb-2">3 years</p>
                <p className="text-gray-300 text-sm">Experienced in creating website layouts and designs that focus on user experience</p>
              </div>
            </div>
          </motion.div>

          {/* Achievements Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700 hover:border-cyan-400 transition-colors duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h2 className="text-2xl font-bold text-cyan-400">{aboutSections.achievements.title}</h2>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-cyan-400 pl-4">
                <h3 className="font-semibold text-white mb-2">Junior Web Developer Certification</h3>
                <p className="text-cyan-400 text-sm mb-2">Kominfo</p>
                <p className="text-gray-300 text-sm">Completed a comprehensive certification program in web development, gaining skills in both front-end and back-end development</p>
              </div>
              <div className="border-l-4 border-cyan-400 pl-4">
                <h3 className="font-semibold text-white mb-2">Project Leader</h3>
                <p className="text-cyan-400 text-sm mb-2">Final Semester Project</p>
                <p className="text-gray-300 text-sm">Led a team of developers to successfully complete the final semester project</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;