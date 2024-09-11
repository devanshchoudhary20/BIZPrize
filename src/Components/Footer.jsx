import React from 'react'

const footer = () => {
  return (
    <div>
        <footer className="flex justify-between items-end bg-gray-800 text-white p-6 w-full">
    <div>
      <a href="#" className="mr-4 hover:text-gray-300">LinkedIn</a>
      <a href="#" className="hover:text-gray-300">Github</a>
    </div>
    <img src="/path-to-colorful-splash.png" alt="Colorful splash" className="w-32 h-32" />
  </footer>
  </div>
  )
}

export default footer