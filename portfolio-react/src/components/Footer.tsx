import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        <div className="mb-2 md:mb-0">
          <span className="font-semibold block md:inline">Contact Me:</span> 
          <span className="block md:inline">wahyugalang777@gmail.com</span>
          <span className="hidden md:inline"> | </span>
          <span className="block md:inline">+62 823-3405-2858</span>
        </div>
        <div className="text-sm text-gray-400">&copy; 2025 Wahyu Galang. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer; 