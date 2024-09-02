import React from 'react';
import { LineChart, Line, BarChart, Bar, ScatterChart, Scatter, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Assuming demoData is imported from the previous artifact
import demoData from './RawData';

const PriceTrendChart = () => (
  
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={demoData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="createdAt" tickFormatter={(unixTime) => new Date(unixTime).toLocaleDateString()} />
          <YAxis />
          <Tooltip labelFormatter={(unixTime) => new Date(unixTime).toLocaleDateString()} />
          <Legend />
          <Line type="monotone" dataKey="sellingPrice" name="Selling Price" stroke="#8884d8" />
          <Line type="monotone" dataKey="discountedPrice" name="Discounted Price" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>

);

const TemperaturePriceScatterPlot = () => (
  
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart>
          <CartesianGrid />
          <XAxis type="number" dataKey="temperature" name="Temperature" unit="°C" />
          <YAxis type="number" dataKey="sellingPrice" name="Price" unit="₹" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="Products" data={demoData} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>

);

const DiscountBarChart = () => (

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={demoData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="title" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="discountPercentage" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

);

const WeatherConditionPieChart = () => {
  const weatherData = demoData.reduce((acc, item) => {
    acc[item.condition] = (acc[item.condition] || 0) + 1;
    return acc;
  }, {});

  const pieData = Object.entries(weatherData).map(([name, value]) => ({ name, value }));

  return (

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie dataKey="value" data={pieData} fill="#8884d8" label />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

  );
};

const Dashboard = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Produce Analytics Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <PriceTrendChart />
      <TemperaturePriceScatterPlot />
      <DiscountBarChart />
      <WeatherConditionPieChart />
    </div>
  </div>
);

export default Dashboard;