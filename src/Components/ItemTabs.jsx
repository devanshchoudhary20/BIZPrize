import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ItemSelector = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState("");
  const [items, setItems] = useState([]);

  const handleClick = (filename) => {
    setSelectedFile(filename);
    onFileSelect(filename);
  };

  const specificItems = [
    "Baby Orange",
    "Tomato Local",
    "Ice Apple",
    "Cauliflower",
    "Banana Raw"
  ];

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('https://storage.googleapis.com/clone-206ad.appspot.com/items/index_new.json');
      const data = await response.json();
      const filteredItems = data.filter(item => specificItems.includes(item.title));
      setItems(filteredItems);
    };
    fetchItems();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 mb-4 max-w-full sm:max-w-3xl p-4 rounded-lg">
      {items.slice(0, 5).map((item, index) => (
        <motion.button
          key={index}
          onClick={() => handleClick(item.filename)}
          className={`flex items-center space-x-1 sm:space-x-2 p-1 sm:p-2 rounded-full shadow-md transition-colors duration-300 ${
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
  );
};

export default ItemSelector;
