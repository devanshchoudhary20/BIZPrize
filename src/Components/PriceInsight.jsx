import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { analyzeTomatoData } from '../utils/priceAnalysis';

const PriceInsightsComponent = ({ selectedItem }) => {
  const [volatilityData, setVolatilityData] = useState([]);
  const [weatherData, setWeatherData] = useState({});
  const [dayofweekData, setDayofweekData] = useState({});
  const [finalInsights, setFinalInsights] = useState({});
  const [showDetailedAnalysis, setShowDetailedAnalysis] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const analyzed = await analyzeTomatoData(selectedItem);
        setVolatilityData(analyzed.volatilityByRange || []);
        setWeatherData(analyzed.averagePriceByWeather || {});
        setDayofweekData(analyzed.averagePriceByDay || {});
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
    <div style={{ marginBottom: '30px', padding: '20px', backgroundColor: '#f0f8ff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px', color: '#2e7d32' }}>Best time to buy {selectedItem}:</h3>
      <ul style={{ paddingLeft: '20px', fontSize: '16px', lineHeight: '1.8' }}>
        <li>Day: <HighlightedText>{finalInsights.bestDay.day}</HighlightedText> (lowest average price of <HighlightedText>₹{finalInsights.bestDay.price.toFixed(2)}</HighlightedText>)</li>
        <li>Time: Consider buying in the <HighlightedText>{finalInsights.bestTimeSlot[0].split('-')[0] < 12 ? 'morning' : 'evening'}</HighlightedText>, particularly between <HighlightedText>{finalInsights.bestTimeSlot[0]}</HighlightedText>, as prices tend to decrease the most during this time.</li>
        <li>Weather: Look for <HighlightedText>{finalInsights.bestWeather.condition}</HighlightedText> conditions (Avg. price: <HighlightedText>₹{finalInsights.bestWeather.averagePrice.toFixed(2)}</HighlightedText>, {finalInsights.bestWeather.count} occurrences).</li>
        <li>Alternative weather: <HighlightedText>{finalInsights.alternativeWeather.condition}</HighlightedText> (Avg. price: <HighlightedText>₹{finalInsights.alternativeWeather.averagePrice.toFixed(2)}</HighlightedText>, {finalInsights.alternativeWeather.count} occurrences).</li>
      </ul>
      <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '20px', marginBottom: '15px', color: '#c62828' }}>Worst time to buy {selectedItem}:</h3>
      <ul style={{ paddingLeft: '20px', fontSize: '16px', lineHeight: '1.8' }}>
        <li>Day: <HighlightedText color="#c62828">{finalInsights.worstDay.day}</HighlightedText> (highest average price of <HighlightedText color="#c62828">₹{finalInsights.worstDay.price.toFixed(2)}</HighlightedText>)</li>
        <li>Time: Avoid buying between <HighlightedText color="#c62828">{finalInsights.worstTimeSlot[0]}</HighlightedText>, as prices tend to increase during this time.</li>
        <li>Weather: Avoid buying during <HighlightedText color="#c62828">{finalInsights.worstWeather.condition}</HighlightedText> conditions (Avg. price: <HighlightedText color="#c62828">₹{finalInsights.worstWeather.averagePrice.toFixed(2)}</HighlightedText>).</li>
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
    <div style={{ marginTop: '30px' }}>
      {renderAnalysisSection("Price Volatility Analysis", volatilityChartData, "avgAbsChange", "bar")}
      {renderAnalysisSection("Weather Impact Analysis", weatherChartData, "averagePrice", "line")}
      {renderAnalysisSection("Day of Week Analysis", dayofweekChartData, "averagePrice", "line")}
    </div>
  );

  const renderAnalysisSection = (title, chartData, dataKey, chartType) => (
    <div style={{ marginBottom: '30px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>{title}</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ height: '300px' }}>
          <ResponsiveContainer width="100%" height="100%">
            {chartType === "bar" ? (
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip />
                <Bar dataKey={dataKey} fill="#8884d8" />
              </BarChart>
            ) : (
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
              </LineChart>
            )}
          </ResponsiveContainer>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}>Label</th>
                <th style={tableHeaderStyle}>{dataKey}</th>
                {chartType !== "bar" && <th style={tableHeaderStyle}>Count</th>}
              </tr>
            </thead>
            <tbody>
              {chartData.map((item, index) => (
                <tr key={index}>
                  <td style={tableCellStyle}>{item.label}</td>
                  <td style={tableCellStyle}>{item[dataKey].toFixed(2)}</td>
                  {chartType !== "bar" && <td style={tableCellStyle}>{item.count}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const tableHeaderStyle = {
    backgroundColor: '#f2f2f2',
    padding: '10px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd'
  };

  const tableCellStyle = {
    padding: '10px',
    borderBottom: '1px solid #ddd'
  };

  const volatilityChartData = volatilityData.map(([timeRange, stats]) => ({
    label: timeRange,
    avgAbsChange: stats.avgAbsChange
  }));

  const weatherChartData = formatDataForChart(weatherData, 'averagePrice');
  const dayofweekChartData = formatDataForChart(dayofweekData, 'averagePrice');

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '100%', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center', color: '#333' }}>Price Insights for {selectedItem}</h2>
      
      {Object.keys(finalInsights).length > 0 && renderFinalInsights()}
      
      <button
        onClick={() => setShowDetailedAnalysis(!showDetailedAnalysis)}
        style={{
          display: 'block',
          margin: '20px auto',
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#fff',
          backgroundColor: '#4CAF50',
          border: 'none',
          borderRadius: '25px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}
      >
        {showDetailedAnalysis ? 'Hide Detailed Analysis' : 'Show Detailed Analysis'}
      </button>

      {showDetailedAnalysis && renderDetailedAnalysis()}
    </div>
  );
};

export default PriceInsightsComponent;