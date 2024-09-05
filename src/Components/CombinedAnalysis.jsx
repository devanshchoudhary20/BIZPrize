import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CombinedAnalysis = ({ data }) => {
  const { volatilityByRange, averagePriceByWeather, averagePriceByDay } = data;

  const sortedVolatilityData = Object.entries(volatilityByRange).sort((a, b) => b[1] - a[1]);
  const mostVolatile = sortedVolatilityData[0];
  const leastVolatile = sortedVolatilityData[sortedVolatilityData.length - 1];

  const weatherChartData = Object.entries(averagePriceByWeather).map(([weather, stats]) => ({
    name: weather,
    avgPrice: stats.averagePrice,
    count: stats.count
  }));

  const dayChartData = Object.entries(averagePriceByDay).map(([day, stats]) => ({
    name: day,
    avgPrice: stats.averagePrice,
    count: stats.count
  }));

  return (
    <div className="p-4 space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Price Volatility Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Most Volatile Time</h3>
            <p>{mostVolatile[0]}: {mostVolatile[1].toFixed(2)}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Least Volatile Time</h3>
            <p>{leastVolatile[0]}: {leastVolatile[1].toFixed(2)}</p>
          </div>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={sortedVolatilityData.map(([timeRange, value]) => ({ timeRange, value }))}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="timeRange" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Weather Analysis</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weatherChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Bar yAxisId="left" dataKey="avgPrice" fill="#8884d8" name="Avg Price" />
              <Bar yAxisId="right" dataKey="count" fill="#82ca9d" name="Count" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Day of Week Analysis</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dayChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Bar yAxisId="left" dataKey="avgPrice" fill="#8884d8" name="Avg Price" />
              <Bar yAxisId="right" dataKey="count" fill="#82ca9d" name="Count" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
};

export default CombinedAnalysis;