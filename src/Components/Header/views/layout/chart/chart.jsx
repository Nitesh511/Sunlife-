import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Function to generate random date within a range
const randomDate = (start, end) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

// Function to generate random number with two decimal places
const randomValue = () => {
  return parseFloat((Math.random() * (15 - 8) + 8).toFixed(2)); // Generates random number between 8 and 15
};

// Generate 100 data points for years 2019-2024 with random values
const generateData = (start, end, interval) => {
  const data = [];
  let currentDate = new Date(start);

  while (currentDate <= end) {
    let formattedDate;
    if (interval === "yearly") {
      formattedDate = `${currentDate.getFullYear()}`;
      currentDate.setFullYear(currentDate.getFullYear() + 1);
    } else if (interval === "monthly") {
      formattedDate = `${currentDate.getDate()} ${currentDate.toLocaleString(
        "default",
        { month: "short" }
      )} ${currentDate.getFullYear()}`;
      currentDate.setMonth(currentDate.getMonth() + 1);
    } else if (interval === "daily") {
      formattedDate = `${currentDate.getDate()} ${currentDate.toLocaleString(
        "default",
        { month: "short" }
      )} ${currentDate.getFullYear()}`;
      currentDate.setDate(currentDate.getDate() + 1);
    }

    data.push({
      date: formattedDate,
      SFMF: randomValue(),
      SBCF: randomValue(),
      SFEF: randomValue(),
      LEMF: randomValue(),
      LVFII: randomValue(),
    });
  }

  return data;
};

const MutualFundChart = () => {
  const [selectedFund, setSelectedFund] = useState("SFMF");
  const [chartData, setChartData] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2019-2024");
  const [selectedInterval, setSelectedInterval] = useState("yearly");

  // Handle changes in selected date range
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  // Handle changes in selected interval (yearly, monthly, daily)
  const handleIntervalChange = (event) => {
    setSelectedInterval(event.target.value);
  };

  // Generate data based on selected year and interval
  useEffect(() => {
    let start, end;
    if (selectedYear === "2019-2024") {
      start = new Date("2019-01-01");
      end = new Date("2024-12-31");
    } else {
      start = new Date(`${selectedYear}-01-01`);
      end = new Date(`${selectedYear}-12-31`);
    }
    setChartData(generateData(start, end, selectedInterval));
  }, [selectedYear, selectedInterval]);

  return (
    <div className="bg-blue-600 p-10">
    <div className="bg-blue-100">
        <div className="bg-blue p-6 text-black">
          <div className="flex justify-center mb-6">
            <div className="bg-white text-black px-4 py-2 rounded-lg border">
              <button
                onClick={() => setSelectedFund("SFMF")}
                className={`px-4 py-2 rounded-lg mr-2 ${
                  selectedFund === "SFMF"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                SFMF
              </button>
              <button
                onClick={() => setSelectedFund("SBCF")}
                className={`px-4 py-2 rounded-lg mr-2 ${
                  selectedFund === "SBCF"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                SBCF
              </button>
              <button
                onClick={() => setSelectedFund("SFEF")}
                className={`px-4 py-2 rounded-lg mr-2 ${
                  selectedFund === "SFEF"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                SFEF
              </button>
              <button
                onClick={() => setSelectedFund("LEMF")}
                className={`px-4 py-2 rounded-lg mr-2 ${
                  selectedFund === "LEMF"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                LEMF
              </button>
              <button
                onClick={() => setSelectedFund("LVFII")}
                className={`px-4 py-2 rounded-lg ${
                  selectedFund === "LVFII"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                LVFII
              </button>
            </div>
          </div>
          <div className="flex justify-center mb-6">
            <select
              className="bg-white text-black px-4 py-2 rounded-lg mr-2 border"
              value={selectedYear}
              onChange={handleYearChange}
            >
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
            <select
              className="bg-white text-black px-4 py-2 rounded-lg border"
              value={selectedInterval}
              onChange={handleIntervalChange}
            >
              <option value="yearly">Yearly</option>
              <option value="monthly">Monthly</option>
              <option value="daily">Daily</option>
            </select>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="w-full lg:w-2/5 lg:mb-0 mb-6">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey={selectedFund}
                    stroke="#8884d8"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-blue-600 text-white p-9 rounded-lg lg:ml-10 w-full lg:w-96 flex flex-col items-center justify-center text-center">
              <h2 className="text-xl font-bold mb-2">Mutual Fund</h2>
              <p className="px-4">
                A mutual fund is created out of amounts deposited by
                participants in a collective investment scheme by a contract as
                has been taken in its custody by a scheme...
              </p>
              <button className="bg-white text-black px-4 py-2 rounded-lg mt-4">
                Read more
              </button>
            </div>
          </div>
        </div>
        </div>
        
    </div>
    
  );
};

export default MutualFundChart;
