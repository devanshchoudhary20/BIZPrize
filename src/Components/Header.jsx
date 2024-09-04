import React, { useState } from 'react';
import { IoLogoGithub } from "react-icons/io";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [hoverButton, setHoverButton] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const buttons = [
    { name: 'Project Details', href: '#' },
    { name: 'Hire Me', href: '#' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-purple-600 to-purple-800 p-4 sm:p-6 shadow-lg mb-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-xl sm:text-2xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
              BIZPrize
            </span>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="sm:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden sm:flex items-center space-x-6">
            {buttons.map((button) => (
              <a
                key={button.name}
                href={button.href}
                className="relative group"
                onMouseEnter={() => setHoverButton(button.name)}
                onMouseLeave={() => setHoverButton('')}
              >
                <span className="text-white text-base sm:text-lg font-semibold transition-colors duration-300 group-hover:text-yellow-300">
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
              <IoLogoGithub size={24} className="transform transition-transform duration-300 hover:scale-110" />
            </a>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="sm:hidden mt-4 space-y-4">
            {buttons.map((button) => (
              <a
                key={button.name}
                href={button.href}
                className="block text-white text-base font-semibold hover:text-yellow-300 transition-colors duration-300"
              >
                {button.name}
              </a>
            ))}
            <a
              href="https://github.com/devanshchoudhary20/BIZPrize"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white hover:text-yellow-300 transition-colors duration-300"
            >
              <IoLogoGithub size={24} className="inline-block mr-2" />
              GitHub
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;