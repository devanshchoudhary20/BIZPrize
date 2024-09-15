import React, { useState } from 'react';
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
const Header = () => {
  const [hoverButton, setHoverButton] = useState('');


  return (
    <header className="bg-my-purple p-2 sm:p-4 shadow-lg mb-4">
      <div className="container flex justify-end">
        <div className="flex items-center space-x-4 sm:space-x-6">
            <div 
            className="relative group cursor-pointer"
            onMouseEnter={() => setHoverButton('Project Details')}
            onMouseLeave={() => setHoverButton('')}
            onClick={() => document.getElementById('Project Details').scrollIntoView({
              behavior: 'smooth'
            })}
            >
              <span className="text-white text-sm sm:text-lg font-semibold transition-colors duration-300 group-hover:text-yellow-300">
                Project Details
              </span>
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 ${hoverButton === 'Project Details' ? 'w-full' : ''}`}></span>
            </div>       
            <a
            href="https://www.linkedin.com/in/devansh-choudhary-2381041b1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300 transition-colors duration-300"
          >
              <FaLinkedin size={20} className="sm:w-6 sm:h-6 transform transition-transform duration-300 hover:scale-110" />
            </a>
          <a
            href="https://github.com/devanshchoudhary20/BIZPrize"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300 transition-colors duration-300"
          >
            <IoLogoGithub size={20} className="sm:w-6 sm:h-6 transform transition-transform duration-300 hover:scale-110" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;