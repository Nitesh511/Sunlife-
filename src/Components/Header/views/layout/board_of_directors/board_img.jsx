import React, { useState } from 'react';
import person1 from "../../.././../../assets/suresh_kumar.png";
import { Card, Typography } from "@material-tailwind/react";
import CloseIcon from '@mui/icons-material/Close';
import Chairman from "../../../../../assets/chairman.png";
import Director from "../../../../../assets/Director.png";
import Director1 from "../../../../../assets/DIRECTOR-2.png";
import Director2 from "../../../../../assets/Director-3.png";
import CompanySecretory from "../../../../../assets/CompanySecretory.png";

const ProfileCard = ({ name, title, imageSrc, age, description }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative group">
      <Card className="bg-white p-4 m-2 overflow-hidden flex flex-col justify-center items-center cursor-pointer w-60 h-80 md:w-60 md:h-80">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-auto rounded-lg transform transition-transform duration-300 group-hover:scale-110 max-w-full"
          onClick={openModal}
        />
        <div className="absolute bottom-4 left-0 right-0 bg-blue-900 text-white py-2 px-4">
          <Typography variant="h3" color="white" className="text-lg font-semibold">{name}</Typography>
          <Typography color="white" className="text-sm">{title}</Typography>
        </div>
      </Card>

      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
          <div className="relative bg-white p-4 rounded-lg w-full max-w-md flex flex-col md:flex-row items-center md:items-start">
            <button
              className="absolute top-2 right-2 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
              onClick={closeModal}
            >
              <CloseIcon className="w-5 h-5" />
            </button>
            <img src={imageSrc} alt={name} className="w-40 h-40 rounded-lg mx-auto md:mx-0 md:mr-4" />
            <div className="flex flex-col items-center md:items-start mt-4 md:mt-0">
              <Typography variant="h3" className="text-lg font-semibold">{name}</Typography>
              <Typography className="text-sm">{title}</Typography>
              <Typography className="text-sm">Age: {age}</Typography>
              <Typography className="text-sm mt-2 text-center md:text-left">{description}</Typography>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const OrgChart = () => (
  <div className="flex justify-center items-center">
    <div className="container mx-auto lg:p-80 lg:-mt-64 md:mt-0 md:p-4">
      {/* Desktop view */}
      <div className="hidden md:block"> {/* Hide on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div className="flex justify-center ">
            <ProfileCard 
              name="Suresh Kumar Keyal" 
              title="Chairman" 
              imageSrc={Chairman} 
              age={50} 
              description="Suresh Kumar Keyal is the chairman of the company, with over 20 years of experience in the industry."
            />
          </div>
          <div className="grid grid-cols-3 justify-items-center">
            <ProfileCard 
              name="Mr. Bikash Keyal" 
              title="Director" 
              imageSrc={Director} 
              age={45} 
              description="Dipesh Anupam is a director who has been a part of the board for 10 years."
            />
            <ProfileCard 
              name="Mr. Raj Kumar Aryal" 
              title="Director" 
              imageSrc={Director1} 
              age={48} 
              description="Hari Acharya brings a wealth of knowledge and expertise to the board."
            />
            <ProfileCard 
              name="Ms. Nicky Sanghai " 
              title="Director" 
              imageSrc={Director2} 
              age={40} 
              description="Sandhya Atti is known for her strategic vision and leadership."
            />
          </div>
          <div className="grid grid-cols-1 gap-4 justify-items-center">
            <ProfileCard 
              name="Mr. Bibek Kharel" 
              title="Director" 
              imageSrc={CompanySecretory} 
              age={55} 
              description="Dr. Ram Prakash Pokhrel is a distinguished director with a background in finance."
            />
          </div>
        </div>
      </div>
      {/* Mobile view */}
      <div className="md:hidden grid grid-cols-1 gap-4 relative ml-20">
        <ProfileCard 
          name="Suresh Kumar Keyal" 
          title="Chairman" 
          imageSrc={Chairman} 
          age={50} 
          description="Suresh Kumar Keyal is the chairman of the company, with over 20 years of experience in the industry."
        />
        <ProfileCard 
          name="Mr. Dipesh Anupam" 
          title="Director" 
          imageSrc={Director} 
          age={45} 
          description="Dipesh Anupam is a director who has been a part of the board for 10 years."
        />
        <ProfileCard 
          name="Mr. Hari Acharya" 
          title="Director" 
          imageSrc={Director1} 
          age={48} 
          description="Hari Acharya brings a wealth of knowledge and expertise to the board."
        />
        <ProfileCard 
          name="Ms. Sandhya Atti" 
          title="Director" 
          imageSrc={Director2} 
          age={40} 
          description="Sandhya Atti is known for her strategic vision and leadership."
        />
        <ProfileCard 
          name="Dr. Ram Prakash Pokhrel" 
          title="Director" 
          imageSrc={CompanySecretory} 
          age={55} 
          description="Dr. Ram Prakash Pokhrel is a distinguished director with a background in finance."
        />
      </div>
    </div>
  </div>
);

export default OrgChart;
