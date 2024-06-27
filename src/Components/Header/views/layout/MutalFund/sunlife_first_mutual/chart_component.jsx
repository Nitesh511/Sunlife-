import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ChartComponent = () => {
  // Fake data for demonstration
  const [data, setData] = useState([
    { date: '06 Jan 2023', value: 12.3 },
    { date: '20 Jan 2023', value: 12.5 },
    { date: '22 Dec 2023', value: 11.3 },
  ]);

  // Handler for dropdown changes
  const handleYearChange = (e) => {
    const year = parseInt(e.target.value);
    // Generate fake data based on the selected year
    const newData = Array.from({ length: 12 }, (_, index) => ({
      date: `${index + 1} Jan ${year}`,
      value: 10 + Math.random() * 3, // Random value between 10 and 13
    }));
    setData(newData);
  };

  // Handler for interval (daily, monthly, yearly) changes
  const handleIntervalChange = (e) => {
    const interval = e.target.value;
    // Logic to adjust data based on interval (not implemented in this example)
    console.log('Interval selected:', interval);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">SunLife First Mutual Fund</h1>
      </div>
      <div className="flex gap-4 mb-6">
        <select className="border rounded px-2 py-1 text-blue-900" onChange={handleYearChange}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2022">2022</option>
          <option value="2023" selected>2023</option>
          <option value="2024">2024</option>
        </select>
        <select className="border rounded px-2 py-1 text-blue-900" onChange={handleIntervalChange}>
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[10.5, 13.5]} />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#f97316" 
              fill="#f97316" 
              strokeWidth={2} 
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
    
    </div>
  );
};

export default ChartComponent;
