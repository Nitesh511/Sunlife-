import React from 'react';

const funds = [
  { name: 'Sunrise First Mutual Fund', type: 'primary' },
  { name: 'Sunrise Blue Chip Fund', type: 'secondary' },
  { name: 'Shubha Laxmi Kosh', type: 'secondary' },
  { name: 'Laxmi Equity Fund', type: 'secondary' },
  { name: 'Laxmi Unnati Kosh', type: 'secondary' },
  { name: 'Laxmi Value Fund II', type: 'secondary' },
  { name: 'Sunrise Focused Equity Fund', type: 'secondary' },
];

const ArrowIcon = ({ color }) => (
  <svg className={`w-4 h-4 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const FundList = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-8 max-w-6xl mx-auto">
      {funds.map((fund, index) => (
        <button
          key={index}
          className={`relative flex justify-between items-center w-full p-4 rounded text-left overflow-hidden group ${
            fund.type === 'primary'
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-700 hover:text-white'
          }`}
        >
          <span className="z-10">{fund.name}</span>
          <ArrowIcon color={fund.type === 'primary' ? 'text-white' : 'text-red-500 group-hover:text-white'} />
          <div className="absolute inset-y-0 left-0 w-0 bg-blue-500 transition-all duration-300 ease-out group-hover:w-full -z-0"></div>
        </button>
      ))}
    </div>
  );
};

export default FundList;
