import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="flex justify-between  bg-gray-800 text-white pt-6 px-6 w-full">
    <div className='flex flex-col justify-start items-start space-y-2'>
      <a href="https://www.linkedin.com/in/devansh-choudhary-2381041b1/" className="mr-4 hover:text-gray-300" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com/devanshchoudhary20/BIZPrize" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">Github</a>
    </div>
    <img src="./images/splash.png" alt="Colorful splash" className="h-60 w-auto"  />
  </footer>
  </div>
  )
}

export default Footer
