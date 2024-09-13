import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="flex justify-between  bg-gray-800 text-white pt-6 w-full sm:px-20 md:px-30 lg:px-40 px-4">
        <div className='flex flex-col justify-start items-start space-y-2'>
          <a href="https://www.linkedin.com/in/devansh-choudhary-2381041b1/" className="mr-4 hover:text-gray-300" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/devanshchoudhary20/BIZPrize" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
        <div className='flex justify-end items-end w-1/2 sm:w-1/3'>
        <img src="./images/splash.png" alt="Colorful splash" className="h-auto w-auto"  />
        </div>
      </footer>
    </div>
  )
}

export default Footer