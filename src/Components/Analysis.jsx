import React from 'react'
import { data } from '../output.js';

const Analysis = () => {

const item = data.filter(item => item.title === 'Coriander Leaves' && item.createdAt > 1724783400);

console.log(item);

  return (
    <div>
        <h1>Analysis</h1>
        {
            item.map((item) => {
                return (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.createdAt}</p>
                        <p>{item.sellingPrice}</p>
                        <p>{item.discountedPrice}</p>
                        <p>{item.discountPercentage}</p>
                        <p>{item.condition}</p>
                        <p>{item.quantity}</p>
                        <p>{item.weatherDescription}</p>
                        <p>{item.imageUrl}</p>
                        <p>{item.temperature}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Analysis