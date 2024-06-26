import React from 'react';

const CompanyInfo = () => {
  return (
    <div className="bg-blue-600 text-white p-8">
      <h2 className="text-center text-2xl mb-8">
        We are the subsidiary company of the{' '}
        <span className="border-b-2 border-white ml-1">SunLife Capital</span>.
      </h2>

      <div className="space-y-6 mx-4 md:mx-20">
        <div className="flex flex-col md:flex-row items-start border-b border-white-500 py-4">
          <div className="md:w-1/4 flex items-center mb-4 md:mb-0">
            <svg className="w-8 h-8 mr-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
            <h3 className="text-xl font-semibold">Our Mission</h3>
          </div>
          <p className="md:w-3/4 | border-l-4 border-white-500 pl-4">
            Laxmi Sunrise Capital to deliver need-based financial solutions, fostering lifetime client relationships through service
            excellence and a contented team. Both institutions strive to create lasting value for their clients by understanding their
            unique needs and providing tailored financial solutions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start border-b border-white-500 py-4">
          <div className="md:w-1/4 flex items-center mb-4 md:mb-0">
            <svg className="w-8 h-8 mr-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
            <h3 className="text-xl font-semibold">Our Vision</h3>
          </div>
          <p className="md:w-3/4 | border-l-4 border-white-500 pl-4">
            Laxmi Sunrise Capital aims to establish itself as the preferred Capital Market Service Provider across all segments,
            aspiring to be Nepal's most respected and recommended symbol for wealth creation and assurance.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start py-4">
          <div className="md:w-1/4 flex items-center mb-4 md:mb-0">
            <svg className="w-8 h-8 mr-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L1 8l3 2.5V19h16v-8.5L23 8 12 2zm0 13c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
            </svg>
            <h3 className="text-xl font-semibold">Our Values</h3>
          </div>
          <p className="md:w-3/4 | border-l-4 border-white-500 pl-4">
            Laxmi Sunrise Capital, as pioneering institution in the financial sector, uphold shared values of integrity, transparency,
            and innovation. It is committed to mobilizing internal resources effectively, fortifying the capital market, and enhancing
            investment opportunities in key financial and industrial sectors. Additionally, aims to contribute to the rapid and
            sustainable economic development of Nepal through responsible and impactful financial practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
