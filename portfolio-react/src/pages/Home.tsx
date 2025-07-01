import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ["Web Developer", "Web Designer", "UI/UX Designer", "Frontend Developer"];
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTextToType = texts[currentIndex];
    
    if (!isDeleting) {
      if (currentText.length < currentTextToType.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentTextToType.slice(0, currentText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1500);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white pt-0 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image - tampil di atas pada mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-cyan-400">
              <img 
                src="/asset/img/quality_restoration_20241021131901095.jpg" 
                alt="Wahyu Galang" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text Content - tampil di bawah pada mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 order-2 lg:order-1 text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-cyan-400">Wahyu Galang</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-cyan-400 font-semibold">
              <span className="text-white">I'm a </span>
              <span className="border-r-2 border-cyan-400 animate-pulse">
                {currentText}
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Passionate about building beautiful, functional, and user-friendly digital experiences. Let's create something amazing together!
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="#about" className="px-8 py-3 bg-cyan-400 text-gray-900 font-semibold rounded-lg border-2 border-transparent hover:bg-transparent hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300 shadow-lg">About Me</a>
              <a href="#portfolio" className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300">Portfolio</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home; 