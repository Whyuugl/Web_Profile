import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-gray-900/90 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <motion.div 
          className="font-bold text-2xl text-cyan-400 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => scrollToSection("home")}
        >
          Wahyu Galang
        </motion.div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {[
            { name: "Beranda", id: "home" },
            { name: "About Me", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Services", id: "services" },
            { name: "Portofolio", id: "portfolio" }
          ].map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button 
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </motion.li>
          ))}
        </ul>
        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden flex flex-col gap-1 z-50"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          <span className="w-7 h-1 bg-cyan-400 rounded"></span>
          <span className="w-7 h-1 bg-cyan-400 rounded"></span>
          <span className="w-7 h-1 bg-cyan-400 rounded"></span>
        </button>
        {/* Sidebar Overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden" onClick={() => setSidebarOpen(false)}></div>
        )}
        {/* Sidebar */}
        <aside className={`fixed top-0 left-0 h-full w-64 bg-gray-900 z-50 shadow-lg transform transition-transform duration-300 md:hidden ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
              <span className="font-bold text-xl text-cyan-400">Wahyu Galang</span>
              <button onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <ul className="flex flex-col gap-4 px-6 py-8">
              {[
                { name: "Beranda", id: "home" },
                { name: "About Me", id: "about" },
                { name: "Skills", id: "skills" },
                { name: "Services", id: "services" },
                { name: "Portofolio", id: "portfolio" }
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      scrollToSection(item.id);
                      setSidebarOpen(false);
                    }}
                    className="w-full text-left text-white text-lg py-2 px-2 rounded hover:bg-cyan-400 hover:text-gray-900 transition-all duration-200"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </nav>
    </motion.header>
  );
};

export default Navbar; 