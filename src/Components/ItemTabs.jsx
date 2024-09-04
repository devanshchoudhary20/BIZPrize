import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ItemSelector = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState("");
  const [items, setItems] = useState([]);

  const handleClick = (filename) => {
    setSelectedFile(filename);
    onFileSelect(filename);
  };

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('https://storage.googleapis.com/clone-206ad.appspot.com/items/index_new.json');
      const data = await response.json();
      setItems(data);
    };
    fetchItems();
  }, []);

  return (
    <div className="flex flex-wrap gap-2 mb-4 max-w-3xl">
      {items.slice(0, 10).map((item, index) => (
        <motion.button
          key={index}
          onClick={() => handleClick(item.filename)}
          className={`flex items-center space-x-2 p-2 rounded-full shadow-md transition-colors duration-300 ${
            selectedFile === item.filename
              ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white"
              : "bg-white hover:bg-gray-100"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3}}
        >
          <img src={item.imageUrl} alt={item.title} className="w-8 h-8 rounded-full" />
          <span className="text-sm font-medium">{item.title}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default ItemSelector;
