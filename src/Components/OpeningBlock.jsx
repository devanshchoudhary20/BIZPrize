import React from 'react'

const OpeningBlock = () => {
  return (
    <div className="bg-white px-40 shadow-lg  flex flex-col sm:flex-row justify-between items-center ">  
      <div className="flex flex-col justify-center text-start space-y-2 sm:space-y-4 w-full sm:w-1/2 mb-4 sm:mb-0">
        <h3 className="text-[#7509FF] font-bold text-base sm:text-lg font-inter">From clicks to insights</h3>
        <h2 className="font-extrabold text-2xl sm:text-3xl font-inter">Unpack the best time to buy Zepto</h2>
        <div className="text-sm sm:text-base font-inter">As a consumer, gain useful insights regarding the changes of prices 
        and schedule your purchase when the prices are low</div>
      </div>
      <div className="w-full sm:w-auto">
        <img src='./images/lady.png' alt='lady' className="w-full h-full"/>
      </div>
    </div>
  )
}

export default OpeningBlock;