import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
// import { analyzeItemPrices } from '../utils/priceAnalysis';

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
  const [showCategories, setShowCategories] = useState(false);

    console.log(activeCategory);
    // console.log(suggestions);
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
    console.log(filteredItems);
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
    // debugger;
    setSearchButtonClicked(true);
    const filteredItems = items.filter(item => activeCategory === 'All' || item.itemCategory === activeCategory);
    setSuggestions(filteredItems);
    // const analyzed = analyzeItemPrices(filteredItems, activeCategory);
    // setAnalyzedPrices(analyzed);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    // setSearchTerm('');
    const filteredItems = items.filter(item => category === 'All' || item.itemCategory === category);
    setSuggestions(filteredItems);
    // setShowCategories(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl" ref={containerRef}>
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
          className="w-full p-4 pr-12 text-lg focus:outline-none transition-all duration-300 focus:bg-gray-100"
        />
        <button 
          className="absolute right-4 top-4 bg-red-500 text-white p-2 rounded-full transition-all duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          onClick={handleSearchButtonClick}
        >
          <Search size={24} />
        </button>
      </div>
      
      {showCategories && (
        <div className="flex border-b">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => handleCategoryChange(category.name)}
              className={`flex-1 py-3 px-4 text-center transition-all duration-300 ${activeCategory === category.name ? 'border-b-2 border-red-500 bg-red-100' : 'hover:bg-gray-100'}`}
            >
              <span className="text-2xl mr-2">
                {category.icon}
                </span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      )}
      
      {(suggestions.length > 0 || searchButtonClicked) && (
        <div className="mt-2 bg-white border-t border-gray-200 max-h-60 overflow-y-auto">
          {suggestions.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center p-4 hover:bg-gray-100 cursor-pointer border-b border-gray-200 transition-all duration-300" 
              onClick={() => handleItemClick(item.filename)}
            >
              <img src={item.imageUrl} alt={item.title} className="w-16 h-16 object-cover mr-4 rounded" />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* {searchButtonClicked && (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Top Varying Prices</h2>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {analyzedPrices.topVaryingPrices.map((item, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg transition-all duration-300 hover:shadow-md">
                <h3 className="font-semibold">{item.title}</h3>
                <p>{item.quantity}</p>
              </div>
            ))}
          </div>
          
          <h2 className="text-xl font-bold mb-4">Staple Prices</h2>
          <div className="grid grid-cols-2 gap-4">
            {analyzedPrices.staplePrices.map((item, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg transition-all duration-300 hover:shadow-md">
                <h3 className="font-semibold">{item.title}</h3>
                <p>{item.quantity}</p>
              </div>
            ))}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default SearchDropdown;