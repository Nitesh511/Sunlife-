import React from 'react';
import person1 from "../../.././../../assets/suresh_kumar.png";

const ProfileCard = ({ name, title, imageSrc }) => (
  <div className="relative group bg-white p-4 m-2 overflow-hidden flex flex-col justify-center items-center">
    <img
      src={imageSrc}
      alt={name}
      className="w-full h-auto rounded-lg transform transition-transform duration-300 group-hover:scale-110 max-w-full"
    />
    <div className="absolute bottom-4 left-0 right-0 bg-blue-900 bg-opacity-100 text-white py-2 px-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm">{title}</p>
    </div>
  </div>
);

const OrgChart = () => (
  <div className="flex justify-center items-center lg:ml-80">
    <div className="container mx-auto p-4">
      {/* Desktop view */}
      <div className="hidden md:block"> {/* Hide on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 grid grid-cols-3 gap-4 md:relative md:left-8 lg:left-96">
            <ProfileCard name="Rajiv Swarupchand" title="Chairman" imageSrc={person1} />
          </div>
          <div className="md:col-span-2 grid grid-cols-3 gap-4 md:relative md:left-8 lg:left-20">
            <ProfileCard name="Mr. Dipesh Anupam" title="Director" imageSrc={person1} />
            <ProfileCard name="Mr. Hari Acharya" title="Director" imageSrc={person1} />
            <ProfileCard name="Ms. Sandhya Atti" title="Director" imageSrc={person1} />
          </div>
          <div className="md:col-span-2 grid grid-cols-3 gap-4 md:relative md:left-8 lg:left-60">
            <ProfileCard name="Dr. Ram Prakash Pokhrel" title="Director" imageSrc={person1} />
            <ProfileCard name="Mr. Sushil Kumar Arun" title="Director" imageSrc={person1} />
          </div>
        </div>
      </div>
      {/* Mobile view */}
      <div className="md:hidden">
        <ProfileCard name="Rajiv Swarupchand" title="Chairman" imageSrc={person1} />
        <ProfileCard name="Mr. Dipesh Anupam" title="Director" imageSrc={person1} />
        <ProfileCard name="Mr. Hari Acharya" title="Director" imageSrc={person1} />
        <ProfileCard name="Ms. Sandhya Atti" title="Director" imageSrc={person1} />
        <ProfileCard name="Dr. Ram Prakash Pokhrel" title="Director" imageSrc={person1} />
        <ProfileCard name="Mr. Sushil Kumar Arun" title="Director" imageSrc={person1} />
      </div>
    </div>
  </div>
);

export default OrgChart;
