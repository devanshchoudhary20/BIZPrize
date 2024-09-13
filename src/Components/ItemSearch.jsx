import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Search } from 'lucide-react';

const categories = [
  { name: 'All', displayName: 'All', icon: '🍽️' },
  { name: 'Fruits', displayName: 'Fruits', icon: '🍌' },
  { name: 'veggies', displayName: 'Veggies', icon: '🥕' },
  { name: 'Non-veg', displayName: 'Meat', icon: '🍗' },
  { name: 'Dairy and Eggs', displayName: 'Dairy/Eggs', icon: '🥚' },
  { name: 'Others', displayName: 'Others', icon: '📦' },
];

const specificItems = [
  "Baby Orange",
  "Tomato Local",
  "Ice Apple",
  "Cauliflower",
  "Banana Raw"
];

const ItemSearch = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState("");
  const [items, setItems] = useState([]);
  const [tabItems, setTabItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [placeholder, setPlaceholder] = useState('Tomato Local');
  const [suggestions, setSuggestions] = useState([]);
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [showCategories, setShowCategories] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('https://storage.googleapis.com/clone-206ad.appspot.com/items/index_new.json');
      const data = await response.json();
      setItems(data);
      const filteredTabItems = data.filter(item => specificItems.includes(item.title));
      setTabItems(filteredTabItems);
    };
    fetchItems();
  }, []);

  useEffect(() => {
    const filteredItems = items.filter(item =>
      (activeCategory === 'All' || item.itemCategory === activeCategory) &&
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSuggestions(filteredItems);
  }, [searchTerm, items, activeCategory]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowDropdown(false);
        setSearchButtonClicked(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleItemClick = (item) => {
    setSelectedFile(item.filename);
    setPlaceholder(item.title);
    setSearchTerm('');
    onFileSelect(item.filename);
    setShowDropdown(false);
    setSearchButtonClicked(false);
  };

  const handleSearchButtonClick = () => {
    setSearchButtonClicked(true);
    const filteredItems = items.filter(item => activeCategory === 'All' || item.itemCategory === activeCategory);
    setSuggestions(filteredItems);
    setShowDropdown(true);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    const filteredItems = items.filter(item => category === 'All' || item.itemCategory === category);
    setSuggestions(filteredItems);
    setShowDropdown(true);
  };

  return (
    <div className="mb-4 flex flex-col flex-wrap gap-2 p-4 items-center">
      <div className="flex flex-wrap gap-4 mb-4 max-w-full sm:max-w-5xl lg:p-4 rounded-lg">
        {tabItems.map((item, index) => (
          <motion.button
            key={index}
            onClick={() => handleItemClick(item)}
            className={`flex items-center space-x-1 sm:space-x-2 p-1 sm:p-2 rounded-full border border-[rgba(255,255,254,0.3)] shadow-md transition-colors duration-300 ${
              selectedFile === item.filename
                ? "bg-white text-[#FF071F]"
                : "bg-transparent text-white hover:bg-white hover:text-[#FF071F]"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3}}
          >
            <img src={item.imageUrl} alt={item.title} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full" />
            <div className="text-xs sm:text-sm font-medium">{item.title}</div>
          </motion.button>
        ))}
      </div>
      <div className="w-full max-w-4xl relative shadow-lg" ref={containerRef}>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-All duration-300 hover:shadow-xl">
          <div className="relative">
            <input
              type="text"
              placeholder={placeholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => {
                setShowCategories(true);
                setShowDropdown(true);
                const filteredItems = items.filter(item => activeCategory === 'All' || item.itemCategory === activeCategory);
                setSuggestions(filteredItems);
              }}
              className="w-full border-b p-2 md:p-3 pr-10 md:pr-12 text-sm md:text-base focus:outline-none transition-All duration-300 focus:bg-gray-100"
            />
            <button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 text-white p-1 md:p-2 rounded-full transition-All duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              onClick={handleSearchButtonClick}
            >
              <Search size={16} className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
          
          {showCategories && (
            <div className="flex flex-wrap ">
              {categories.map((category) => (
                <button
                  key={category.displayName}
                  onClick={() => handleCategoryChange(category.name)}
                  className={`flex-1 py-1 md:py-2 px-1 md:px-2 text-center transition-All duration-300 ${activeCategory === category.name ? 'border-b-2 border-red-500 bg-red-100' : 'hover:bg-gray-100'}`}
                >
                  <span className="text-base md:text-xl mr-1">
                    {category.icon}
                  </span>
                  <span className="text-xs md:text-sm">{category.displayName}</span>
                </button>
              ))}
            </div>
          )}
          
          {showDropdown && (suggestions.length > 0 || searchButtonClicked) && (
            <div className="absolute left-0 right-0 mt-1 md:mt-2 bg-white border border-gray-200 rounded-b-lg shadow-lg max-h-48 md:max-h-60 overflow-y-auto z-10">
              {suggestions.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center p-2 md:p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200 transition-All duration-300" 
                  onClick={() => handleItemClick(item)}
                >
                  <img src={item.imageUrl} alt={item.title} className="w-8 h-8 md:w-12 md:h-12 object-cover mr-2 md:mr-3 rounded" />
                  <div className='flex flex-col md:flex-row md:space-x-4'>
                    <h3 className="font-semibold text-xs md:text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-600">{item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemSearch;


