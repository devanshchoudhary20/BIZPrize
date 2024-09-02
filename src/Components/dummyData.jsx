import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const generateDummyData = () => {
  const data = [];
  const startDate = new Date('2023-01-01');
  for (let i = 0; i < 365; i++) {
    const date = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
    data.push({
      date: date.toISOString(),
      value: Math.floor(Math.random() * 100) + 1
    });
  }
  return data;
};

const TimeFilterGraph = () => {
  const [timeFilter, setTimeFilter] = useState('day');
  const rawData = useMemo(() => generateDummyData(), []);

  const aggregateData = (data, filter) => {
    const aggregated = {};
    data.forEach(item => {
      const date = new Date(item.date);
      let key;
      switch (filter) {
        case 'hour':
          key = date.toISOString().slice(0, 13);
          break;
        case 'day':
          key = date.toISOString().slice(0, 10);
          break;
        case 'week':
          const weekStart = new Date(date);
          weekStart.setDate(date.getDate() - date.getDay());
          key = weekStart.toISOString().slice(0, 10);
          break;
        case 'month':
          key = date.toISOString().slice(0, 7);
          break;
        default:
          key = date.toISOString().slice(0, 10);
      }
      if (!aggregated[key]) {
        aggregated[key] = { date: key, value: 0, count: 0 };
      }
      aggregated[key].value += item.value;
      aggregated[key].count += 1;
    });
    return Object.values(aggregated).map(item => ({
      date: item.date,
      value: item.value / item.count
    }));
  };

  const filteredData = useMemo(() => aggregateData(rawData, timeFilter), [rawData, timeFilter]);

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <select
        value={timeFilter}
        onChange={(e) => setTimeFilter(e.target.value)}
        style={{ marginBottom: '1rem', padding: '0.5rem', border: '1px solid #e2e8f0', borderRadius: '0.25rem' }}
      >
        <option value="hour">Hourly</option>
        <option value="day">Daily</option>
        <option value="week">Weekly</option>
        <option value="month">Monthly</option>
      </select>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TimeFilterGraph;