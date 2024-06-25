import React from 'react';

const ServiceCard = ({ icon, title, description }) => (
  <div className="relative bg-white p-6 rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl group">
    <div className="relative z-10">
      <div className="text-yellow-500 text-4xl mb-4 group-hover:text-white">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-white">{title}</h3>
      <p className="text-gray-600 mb-4 group-hover:text-white">{description}</p>
      <button className="text-yellow-500 font-semibold group-hover:text-white">READ MORE →</button>
    </div>
    <div className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
  </div>
);

export default ServiceCard;
