import React from 'react'

const OpeningBlock = () => {
  return (
    <div className="bg-white px-4 sm:px-6 md:px-8 lg:px-20 shadow-lg relative">
      <div className="flex flex-col md:flex-row justify-between items-center md:py-16">  
        <div className="flex flex-col justify-center text-center md:text-start space-y-2 md:space-y-3 w-full md:w-1/2 mb-4 md:mb-0 z-10">
          <h3 className="text-purple-600 font-bold text-xs sm:text-sm md:text-base font-inter">From clicks to insights</h3>
          <h2 className="font-extrabold text-xl sm:text-2xl md:text-3xl font-inter leading-tight">Unpack the best time to buy on Zepto</h2>
          <div className="text-xs sm:text-sm md:text-base font-medium text-gray-600 font-inter max-w-md mx-auto md:mx-0">
            As a consumer, gain useful insights regarding the changes of prices 
            and schedule your purchase when the prices are low
          </div>
        </div>
        <div className="w-full md:w-1/2 md:absolute md:right-0 md:bottom-0 md:top-0 flex items-end justify-center md:justify-end">
          <img src='./images/lady.png' alt='lady' className="w-full h-auto max-w-sm md:max-w-full md:max-h-full md:object-contain md:object-bottom"/>
        </div>
      </div>
    </div>
  )
}

export default OpeningBlock;