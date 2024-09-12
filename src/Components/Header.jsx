import React, { useState } from 'react';
import { IoLogoGithub } from "react-icons/io";

const Header = () => {
  const [hoverButton, setHoverButton] = useState('');

  const buttons = [
    { name: 'Project Details', href: '#' },
    { name: 'Hire Me', href: '#' },
  ];

  return (
    <header className="bg-[#4B00A9] p-2 sm:p-4 shadow-lg mb-4">
      <div className="container flex justify-end">
        <div className="flex items-center space-x-4 sm:space-x-6">
          {buttons.map((button) => (
            <a
              key={button.name}
              href={button.href}
              className="relative group"
              onMouseEnter={() => setHoverButton(button.name)}
              onMouseLeave={() => setHoverButton('')}
            >
              <span className="text-white text-sm sm:text-lg font-semibold transition-colors duration-300 group-hover:text-yellow-300">
                {button.name}
              </span>
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 ${hoverButton === button.name ? 'w-full' : ''}`}></span>
            </a>
          ))}
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