import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';

const SearchDropdown = ({ onFileSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [items, setItems] = useState([]);
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const [selectedFile, setSelectedFile] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('http://127.0.0.1:8080/index.json');
      const data = await response.json();
      setItems(data);
    };
    fetchItems();
  }, []);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filteredItems = items.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filteredItems); // Show all suggestions
    } else {
      setSuggestions([]);
    }
  }, [searchTerm, items]);

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
    setSelectedFile(filename);
    onFileSelect(filename);
    setSuggestions([]);
    setSearchButtonClicked(false);
  };

  const handleSearchButtonClick = () => {
    setSearchButtonClicked(true);
    setSuggestions(items);
  };

  return (
    <div className="w-full max-w-md mx-auto mb-4" ref={containerRef}>
      <div className="relative">
        <input
          type="text"
          placeholder="e.g. onion"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setSuggestions(items)}
          className="w-full p-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button className="absolute right-2 top-2 text-green-500" onClick={handleSearchButtonClick}>
          <Search size={20} />
        </button>
      </div>
      {(suggestions.length > 0 || searchButtonClicked === true) && (
        <div className="mt-2 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto absolute z-10 mx-auto">
          {suggestions.map((item, index) => (
            <div key={index} className="flex items-center p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleItemClick(item.filename)}>
              <img src={item.imageUrl} alt={item.title} className="w-12 h-12 object-cover mr-4" />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;