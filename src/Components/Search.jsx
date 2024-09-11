import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { analyzeTomatoData } from '../utils/priceAnalysis';
const categories = [
  { name: 'All', icon: '🍽️' },
  { name: 'Fruits', icon: '🍌' },
  { name: 'veggies', icon: '🥕' },
  { name: 'Non-veg', icon: '🍗' },
  { name: 'Dairy and Eggs', icon: '🥚' },
  { name: 'Others', icon: '📦' },
];

const SearchDropdown = ({ onFileSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [items, setItems] = useState([]);
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  // const [analyzedPrices, setAnalyzedPrices] = useState({ topVaryingPrices: [], staplePrices: [] });
  const containerRef = useRef(null);
  const [showCategories, setShowCategories] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('https://storage.googleapis.com/clone-206ad.appspot.com/items/index_new.json');
      const data = await response.json();
      setItems(data);
    };
    fetchItems();
  }, []);
  // debugger;
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
        setSuggestions([]);
        setSearchButtonClicked(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleItemClick = (filename) => {
    onFileSelect(filename);
    setSuggestions([]);
    setSearchButtonClicked(false);
  };

  const handleSearchButtonClick = () => {
    setSearchButtonClicked(true);
    const filteredItems = items.filter(item => activeCategory === 'All' || item.itemCategory === activeCategory);
    setSuggestions(filteredItems);

  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    const filteredItems = items.filter(item => category === 'All' || item.itemCategory === category);
    setSuggestions(filteredItems);
  };

  return (
    <div className="w-full max-w-4xl relative" ref={containerRef}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => {
              setShowCategories(true);
              const filteredItems = items.filter(item => activeCategory === 'All' || item.itemCategory === activeCategory);
              setSuggestions(filteredItems);
            }}
            className="w-full p-2 sm:p-3 pr-10 sm:pr-12 text-sm sm:text-base focus:outline-none transition-all duration-300 focus:bg-gray-100"
          />
          <button 
            className="absolute right-2 top-2 bg-red-500 text-white p-1 sm:p-2 rounded-full transition-all duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            onClick={handleSearchButtonClick}
          >
            <Search size={16} className="sm:w-5 sm:h-5" />
          </button>
        </div>
        
        {showCategories && (
          <div className="flex flex-wrap border-b">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => handleCategoryChange(category.name)}
                className={`flex-1 py-1 sm:py-2 px-1 sm:px-2 text-center transition-all duration-300 ${activeCategory === category.name ? 'border-b-2 border-red-500 bg-red-100' : 'hover:bg-gray-100'}`}
              >
                <span className="text-lg sm:text-xl mr-1">
                  {category.icon}
                </span>
                <span className="text-xs">{category.name}</span>
              </button>
            ))}
          </div>
        )}
        
        {(suggestions.length > 0 || searchButtonClicked) && (
          <div className="absolute left-0 right-0 mt-1 sm:mt-2 bg-white border border-gray-200 rounded-b-lg shadow-lg max-h-48 sm:max-h-60 overflow-y-auto z-10">
            {suggestions.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center p-2 sm:p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200 transition-all duration-300" 
                onClick={() => handleItemClick(item.filename)}
              >
                <img src={item.imageUrl} alt={item.title} className="w-8 h-8 sm:w-12 sm:h-12 object-cover mr-2 sm:mr-3 rounded" />
                <div>
                  <h3 className="font-semibold text-xs sm:text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {analyzeTomatoData}
      </div>
    </div>
  );
};

export default SearchDropdown;