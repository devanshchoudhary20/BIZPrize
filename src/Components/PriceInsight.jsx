import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PriceInsightsComponent = ({ data }) => {

  const sortedData = data && ([...data].sort((a, b) => b[1].avgAbsChange - a[1].avgAbsChange));

  // Find most and least volatile time ranges
  const mostVolatile = sortedData[0];
  const leastVolatile = sortedData[sortedData.length - 1];

  // Find time ranges with highest and lowest directional changes
  const highestDirectional = data && data.reduce((max, current) => 
    current[1].avgDirectionalChange > max[1].avgDirectionalChange ? current : max
  );
  const lowestDirectional = data && data.reduce((min, current) => 
    current[1].avgDirectionalChange < min[1].avgDirectionalChange ? current : min
  );

  // Find time ranges with highest and lowest percentage of increases
  const highestPercentIncrease = data && data.reduce((max, current) => 
    current[1].percentIncrease > max[1].percentIncrease ? current : max
  );
  const lowestPercentIncrease = data && data.reduce((min, current) => 
    current[1].percentIncrease < min[1].percentIncrease ? current : min
  );

  // Find time ranges with highest and lowest standard deviation
  const highestStdDev = data && data.reduce((max, current) => 
    current[1].stdDev > max[1].stdDev ? current : max
  );
  const lowestStdDev = data && data.reduce((min, current) => 
    current[1].stdDev < min[1].stdDev ? current : min
  );

  const insights = [
    { title: "Most Volatile", value: mostVolatile[0], subvalue: mostVolatile[1].avgAbsChange.toFixed(2) },
    { title: "Least Volatile", value: leastVolatile[0], subvalue: leastVolatile[1].avgAbsChange.toFixed(2) },
    { title: "Highest Price Increase Tendency", value: highestDirectional[0], subvalue: highestDirectional[1].avgDirectionalChange.toFixed(2) },
    { title: "Highest Price Decrease Tendency", value: lowestDirectional[0], subvalue: lowestDirectional[1].avgDirectionalChange.toFixed(2) },
    { title: "Most Frequent Increases", value: highestPercentIncrease[0], subvalue: `${highestPercentIncrease[1].percentIncrease.toFixed(2)}%` },
    { title: "Least Frequent Increases", value: lowestPercentIncrease[0], subvalue: `${lowestPercentIncrease[1].percentIncrease.toFixed(2)}%` },
    { title: "Most Unpredictable", value: highestStdDev[0], subvalue: highestStdDev[1].stdDev.toFixed(2) },
    { title: "Most Consistent", value: lowestStdDev[0], subvalue: lowestStdDev[1].stdDev.toFixed(2) },
  ];

  const chartData = data && data.map(([timeRange, stats]) => ({
    timeRange,
    avgAbsChange: stats.avgAbsChange,
    avgDirectionalChange: stats.avgDirectionalChange,
  }));

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Price Volatility Insights</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        {insights.map((insight, index) => (
          <div key={index} style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '15px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{insight.title}</h3>
            <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '5px' }}>{insight.value}</p>
            <p style={{ fontSize: '14px', color: '#666' }}>{insight.subvalue}</p>
          </div>
        ))}
      </div>
      <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px' }}>Price Change by Time Range</h3>
        <div style={{ height: '400px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="timeRange" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="avgAbsChange" fill="#8884d8" name="Avg. Absolute Change" />
              <Bar dataKey="avgDirectionalChange" fill="#82ca9d" name="Avg. Directional Change" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PriceInsightsComponent;