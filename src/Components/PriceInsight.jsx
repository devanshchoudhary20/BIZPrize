import React, { useState, useEffect } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { analyzeTomatoData } from '../utils/priceAnalysis';

const PriceInsightsComponent = ({ selectedItem }) => {
  const [weatherData, setWeatherData] = useState({});
  const [finalInsights, setFinalInsights] = useState({});

  const hourFormat = (hour) => {
    if(hour === '0-2'){
      return '12 am - 2 am '
    }
    else if(hour === '2-4'){
      return '2 am - 4 am'
    }
    else if(hour === '4-6'){
      return '4 am - 6 am'
    }
    else if(hour === '6-8'){
      return '6 am - 8 am'
    }
    else if(hour === '8-10'){
      return '8 am - 10 am'
    }
    else if(hour === '10-12'){
      return '10 am - 12 am'
    }
    else if(hour === '12-14'){
      return '12 pm - 2 pm'
    }
    else if(hour === '14-16'){
      return '2 pm - 4 pm'
    }
    else if(hour === '16-18'){
      return '4 pm - 6 pm'
    }
    else if(hour === '18-20'){
      return '6 pm - 8 pm'
    }
    else if(hour === '20-22'){
      return '8 pm - 10 pm'
    }
    else if(hour === '22-0'){
      return '10 pm - 12 am'
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const analyzed = await analyzeTomatoData(selectedItem);
        // setVolatilityData(analyzed.volatilityByRange || []);
        setWeatherData(analyzed.averagePriceByWeather || {});
        // setDayofweekData(analyzed.averagePriceByDay || {});
        generateFinalInsights(analyzed.volatilityByRange, analyzed.averagePriceByWeather, analyzed.averagePriceByDay);
      } catch (error) {
        console.error("Error analyzing data:", error);
      }
    };

    fetchData();
  }, [selectedItem]);

  const generateFinalInsights = (volatility, weather, dayofweek) => {
    console.log('weather',weather);
    console.log('dayofweek',dayofweek);
    console.log('volatility',volatility);

    const bestDay = Object.entries(dayofweek).reduce((min, [day, data]) => 
      data.averagePrice < min.price ? { day, price: data.averagePrice } : min, 
      { day: '', price: Infinity }
    );

    const worstDay = Object.entries(dayofweek).reduce((max, [day, data]) => 
      data.averagePrice > max.price ? { day, price: data.averagePrice } : max, 
      { day: '', price: -Infinity }
    );

    const bestTimeSlot = volatility.reduce((min, curr) => 
      curr[1].avgPrice < min[1].avgPrice ? curr : min
    );

    const worstTimeSlot = volatility.reduce((max, curr) => 
      curr[1].avgPrice > max[1].avgPrice ? curr : max
    );

    const worstWeather = Object.entries(weather).reduce((_, [condition, data], index) => 
      index === 0 ? { condition, ...data } : _, 
      { condition: '', averagePrice: 0, count: 0 }
    );

    const bestWeather = Object.entries(weather).reduce((acc, [condition, data], index, array) => 
      index === array.length - 1 ? { condition, ...data } : acc, 
      { condition: '', averagePrice: 0, count: 0 }
    );

    const alternativeBestWeather = Object.entries(weather)
    .filter(([_, data]) => data.count > 10)
    .reduce((min, [condition, data]) => 
      data.averagePrice < min.averagePrice ? { condition, ...data } : min, 
      { condition: '', averagePrice: Infinity, count: 0 }
    );

    const alternativeWorstWeather = Object.entries(weather).reduce((_, [condition, data], index) => 
      index === 1 ? { condition, ...data } : _, 
      { condition: '', averagePrice: 0, count: 0 }
    );

    const mostCommonWeather = Object.entries(weather).reduce((max, [condition, data]) => 
      data.count > max.count ? { condition, ...data } : max, 
      { condition: '', count: 0, averagePrice: 0 }
    );

    const overallAveragePrice = Object.values(weather).reduce((sum, data) => sum + data.averagePrice * data.count, 0) / 
                                Object.values(weather).reduce((sum, data) => sum + data.count, 0);

    setFinalInsights({
      bestDay,
      worstDay,
      bestTimeSlot,
      worstTimeSlot,
      bestWeather,
      alternativeBestWeather,
      alternativeWorstWeather,
      worstWeather,
      mostCommonWeather,
      overallAveragePrice
    });
  };

  

  const HighlightedText = ({ children, color = '#4CAF50' }) => (
    <span style={{ fontWeight: 'bold', color: color }}>{children}</span>
  );

  const renderFinalInsights = () => (
    <div className="bg-white rounded-lg p-4 sm:p-6 mb-8 text-sm sm:text-base shadow-lg">
      <h3 className="text-xl sm:text-2xl font-bold mb-4 text-green-600 border-b-2 text-start">😊 Best Time to Buy </h3>
      <ul className="space-y-3 sm:space-y-4 mb-12 sm:mb-16 text-start">
        <li >
         
          <span className="text-start">✅ <span className='font-bold'>Day</span>: <HighlightedText>{finalInsights.bestDay.day}</HighlightedText> (lowest average price of <HighlightedText>₹{finalInsights.bestDay.price.toFixed(2)}</HighlightedText>)</span>
        </li>
        <li >
          <span className="text-start">✅ <span className='font-bold'>Time</span>: Consider buying in the <HighlightedText>{finalInsights.bestTimeSlot[0].split('-')[0] < 12 ? 'morning' : 'evening'}</HighlightedText>, particularly between <HighlightedText>{hourFormat(finalInsights.bestTimeSlot[0])}</HighlightedText>, as prices tend to decrease the most during this time.</span>
        </li>
        <li >
          <span className="text-start">✅ <span className='font-bold'>Weather</span>: Look for <HighlightedText>{finalInsights.bestWeather.condition}</HighlightedText> conditions (Avg. price: <HighlightedText>₹{finalInsights.bestWeather.averagePrice.toFixed(2)}</HighlightedText>)</span>
        </li>
        {finalInsights.bestWeather.count < 10 && <li><span className="text-start">✅ As the occurance of above weather is very low, second best weather to buy is <HighlightedText>{finalInsights.alternativeBestWeather.condition}</HighlightedText> (Avg. price: <HighlightedText>₹{finalInsights.alternativeBestWeather.averagePrice.toFixed(2)}</HighlightedText>)</span></li>}
      </ul>
      
      <h3 className="text-xl sm:text-2xl font-bold mb-4 text-red-600 text-start border-b-2">😠 Worst Time to Buy </h3>
      <ul className="space-y-2 sm:space-y-3 text-start">
        <li >
          <span className="text-start">❌ <span className='font-bold'>Day</span>: <HighlightedText color="#c62828">{finalInsights.worstDay.day}</HighlightedText> (highest average price of <HighlightedText color="#c62828">₹{finalInsights.worstDay.price.toFixed(2)}</HighlightedText>)</span>
        </li>
        <li >
          <span className="text-start">❌ <span className='font-bold'>Time</span>: Avoid buying in the <HighlightedText color="#c62828">{finalInsights.worstTimeSlot[0].split('-')[0] < 12 ? 'morning' : 'evening'}</HighlightedText> between <HighlightedText color="#c62828">{hourFormat(finalInsights.worstTimeSlot[0])}</HighlightedText>, as prices tend to increase during this time.</span>
        </li>
        <li >
          <span className="text-start">❌ <span className='font-bold'>Weather</span>: Avoid buying during <HighlightedText color="#c62828">{finalInsights.worstWeather.condition}</HighlightedText> conditions (Avg. price: <HighlightedText color="#c62828">₹{finalInsights.worstWeather.averagePrice.toFixed(2)}</HighlightedText>).</span>
        </li>
      </ul>
    </div>
  );

  const formatDataForChart = (data, key) => {
    return Object.entries(data).map(([label, values]) => ({
      label,
      [key]: values[key],
      count: values.count
    }));
  };

  const renderDetailedAnalysis = () => (
    <div className="mt-6 sm:mt-8">
      {renderWeatherAnalysis()}
    </div>
  );

  const renderWeatherAnalysis = () => (
    <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-gray-100 rounded-lg text-sm sm:text-base shadow-lg">
      <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Weather Impact Analysis</h3>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4" >
        <div className="flex-1 h-64 sm:h-80 px-4">
          <ResponsiveContainer width="100%" minWidth={10} minHeight={300} height="100%">
            <LineChart data={weatherChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" tick={{fontSize: 10}} />
              <YAxis tick={{fontSize: 10}} />
              <Tooltip />
              <Line type="monotone" dataKey="averagePrice" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex-1 h-64 sm:h-80 overflow-auto rounded-lg">
          <table className="w-full text-xs sm:text-sm">
            <thead className="sticky top-0 bg-white">
              <tr>
                <th className="p-1 sm:p-2 text-center">Weather</th>
                <th className="p-1 sm:p-2 text-center">Avg Price</th>
                <th className="p-1 sm:p-2 text-center">Count</th>
              </tr>
            </thead>
            <tbody>
              {weatherChartData.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="p-1 sm:p-2">{item.label}</td>
                  <td className="p-1 sm:p-2">₹{item.averagePrice.toFixed(2)}</td>
                  <td className="p-1 sm:p-2">{item.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );



  const weatherChartData = formatDataForChart(weatherData, 'averagePrice');
  return (
    <div className="font-inter mt-16 w-auto sm:w-3/4 mx-2 sm:mx-20 md:mx-30 lg:mx-40 ">
      
      {Object.keys(finalInsights).length > 0 && renderFinalInsights()}
      
      {renderDetailedAnalysis()}
    </div>
  );
};

export default PriceInsightsComponent;