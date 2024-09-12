import React, { useState, useEffect } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { analyzeTomatoData } from '../utils/priceAnalysis';

const PriceInsightsComponent = ({ selectedItem }) => {
  // const [volatilityData, setVolatilityData] = useState([]);
  const [weatherData, setWeatherData] = useState({});
  // const [dayofweekData, setDayofweekData] = useState({});
  const [finalInsights, setFinalInsights] = useState({});

  // console.log(volatilityData);
  // console.log(dayofweekData);

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
    const bestDay = Object.entries(dayofweek).reduce((min, [day, data]) => 
      data.averagePrice < min.price ? { day, price: data.averagePrice } : min, 
      { day: '', price: Infinity }
    );

    const worstDay = Object.entries(dayofweek).reduce((max, [day, data]) => 
      data.averagePrice > max.price ? { day, price: data.averagePrice } : max, 
      { day: '', price: -Infinity }
    );

    const bestTimeSlot = volatility.reduce((min, curr) => 
      curr[1].avgDirectionalChange < min[1].avgDirectionalChange ? curr : min
    );

    const worstTimeSlot = volatility.reduce((max, curr) => 
      curr[1].avgDirectionalChange > max[1].avgDirectionalChange ? curr : max
    );

    const bestWeather = Object.entries(weather).reduce((min, [condition, data]) => 
      data.averagePrice < min.price && data.count >= 50 ? { condition, ...data } : min, 
      { condition: '', price: Infinity, count: 0 }
    );

    const alternativeWeather = Object.entries(weather).reduce((best, [condition, data]) => 
      data.averagePrice < best.price && data.count >= 50 && condition !== bestWeather.condition ? { condition, ...data } : best, 
      { condition: '', price: Infinity, count: 0 }
    );

    const worstWeather = Object.entries(weather).reduce((max, [condition, data]) => 
      data.averagePrice > max.price && data.count >= 50 ? { condition, ...data } : max, 
      { condition: '', price: -Infinity, count: 0 }
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
      alternativeWeather,
      worstWeather,
      mostCommonWeather,
      overallAveragePrice
    });
  };

  const HighlightedText = ({ children, color = '#4CAF50' }) => (
    <span style={{ fontWeight: 'bold', color: color }}>{children}</span>
  );

  const renderFinalInsights = () => (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-8  text-sm sm:text-base">
      <h3 className="text-xl sm:text-2xl font-bold mb-4 text-green-600 border-b-2 text-start">😊 Best Time to Buy </h3>
      <ul className="space-y-3 sm:space-y-4 mb-12 sm:mb-16 text-start">
        <li >
         
          <span className="text-start">✅ Day: <HighlightedText>{finalInsights.bestDay.day}</HighlightedText> (lowest average price of <HighlightedText>₹{finalInsights.bestDay.price.toFixed(2)}</HighlightedText>)</span>
        </li>
        <li >
          <span className="text-start">✅ Time: Consider buying in the <HighlightedText>{finalInsights.bestTimeSlot[0].split('-')[0] < 12 ? 'morning' : 'evening'}</HighlightedText>, particularly between <HighlightedText>{finalInsights.bestTimeSlot[0]}</HighlightedText>, as prices tend to decrease the most during this time.</span>
        </li>
        <li >
          <span className="text-start">✅ Weather: Look for <HighlightedText>{finalInsights.bestWeather.condition}</HighlightedText> conditions (Avg. price: <HighlightedText>₹{finalInsights.bestWeather.averagePrice.toFixed(2)}</HighlightedText>, {finalInsights.bestWeather.count} occurrences).</span>
        </li>
      </ul>
      
      <h3 className="text-xl sm:text-2xl font-bold mb-4 text-red-600 text-start border-b-2">😠 Worst Time to Buy </h3>
      <ul className="space-y-2 sm:space-y-3 text-start">
        <li >
          <span className="text-start">❌ Day: <HighlightedText color="#c62828">{finalInsights.worstDay.day}</HighlightedText> (highest average price of <HighlightedText color="#c62828">₹{finalInsights.worstDay.price.toFixed(2)}</HighlightedText>)</span>
        </li>
        <li >
          <span className="text-start">❌ Time: Avoid buying between <HighlightedText color="#c62828">{finalInsights.worstTimeSlot[0]}</HighlightedText>, as prices tend to increase during this time.</span>
        </li>
        <li >
          <span className="text-start">❌ Weather: Avoid buying during <HighlightedText color="#c62828">{finalInsights.worstWeather.condition}</HighlightedText> conditions (Avg. price: <HighlightedText color="#c62828">₹{finalInsights.worstWeather.averagePrice.toFixed(2)}</HighlightedText>).</span>
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
    <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-gray-100 rounded-lg shadow-sm text-sm sm:text-base">
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
                <th className="p-1 sm:p-2 text-left">Weather</th>
                <th className="p-1 sm:p-2 text-left">Avg Price</th>
                <th className="p-1 sm:p-2 text-left">Count</th>
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

  // const volatilityChartData = volatilityData.map(([timeRange, stats]) => ({
  //   label: timeRange,
  //   avgAbsChange: stats.avgAbsChange
  // }));

  const weatherChartData = formatDataForChart(weatherData, 'averagePrice');
  // const dayofweekChartData = formatDataForChart(dayofweekData, 'averagePrice');

  return (
    <div className="font-inter mt-16 w-auto sm:w-3/4 mx-2 sm:mx-40">
      
      {Object.keys(finalInsights).length > 0 && renderFinalInsights()}
      
      {renderDetailedAnalysis()}
    </div>
  );
};

export default PriceInsightsComponent;