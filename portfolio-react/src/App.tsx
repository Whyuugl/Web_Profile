import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import AllPortfolio from "./pages/AllPortfolio";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-20 min-h-screen bg-gray-950">
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Skills />
              <Services />
              <Portfolio />
            </>
          } />
          <Route path="/portfolio" element={<AllPortfolio />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
