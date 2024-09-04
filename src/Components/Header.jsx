import React, { useState } from 'react';
import { IoLogoGithub } from "react-icons/io";

const Header = () => {
  const [hoverButton, setHoverButton] = useState('');

  const buttons = [
    { name: 'Project Details', href: '#' },
    { name: 'Hire Me', href: '#' },
  ];

  return (
    <header className="bg-gradient-to-r from-purple-600 to-purple-800 p-6 shadow-lg">
      <div className="container w-full">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
                BIZPrize
                </span>
          </div>
          <div className="flex items-center space-x-6">
                {buttons.map((button) => (
                <a
                    key={button.name}
                    href={button.href}
                    className="relative group"
                    onMouseEnter={() => setHoverButton(button.name)}
                    onMouseLeave={() => setHoverButton('')}
                >
                    <span className="text-white text-lg font-semibold transition-colors duration-300 group-hover:text-yellow-300">
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
                <IoLogoGithub size={28} className="transform transition-transform duration-300 hover:scale-110" />
                </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;