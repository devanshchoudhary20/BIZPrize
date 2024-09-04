import React from 'react'

const openingBlock = () => {
  return (
    <div className='bg-gradient-to-r from-purple-600 to-purple-800 p-6 shadow-lg'>
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-4xl font-bold'>Welcome to BIZPrize</h1>
            <p className='text-lg'>BIZPrize is a platform that helps you find the best prices for the items you want to buy.</p>
        </div>
    </div>
  )
}

export default openingBlock;