import React, { useState } from 'react';
import person1 from "../../.././../../assets/bijaya.png";
import { Card, Typography } from "@material-tailwind/react";
import CloseIcon from '@mui/icons-material/Close';
import defaultimg from "../../../../../assets/default.jpg"

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
      <Card className="bg-white p-4 m-2 overflow-hidden flex flex-col justify-center items-center cursor-pointer">
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

const Management_team = () => (
  <div className="flex justify-center items-center lg:ml-32">
    <div className="container mx-auto p-4">
      {/* Desktop view */}
      <div className="hidden md:block"> {/* Hide on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div className="flex justify-center">
            <ProfileCard 
              name="Hari" 
              title="Chairman" 
              imageSrc={defaultimg} 
              age={50} 
              description="Hari is the chairman of the company, with over 20 years of experience in the industry."
            />
          </div>
          <div className="grid grid-cols-4 justify-items-center">
            <ProfileCard 
              name="Mr. X" 
              title="Director" 
              imageSrc={defaultimg} 
              age={45} 
              description="X is a director who has been a part of the board for 10 years."
            />
            <ProfileCard 
              name="MR. Acharya" 
              title="Director" 
              imageSrc={defaultimg} 
              age={48} 
              description="Acharya brings a wealth of knowledge and expertise to the board."
            />
            <ProfileCard 
              name="Ms. Sita" 
              title="Director" 
              imageSrc={defaultimg} 
              age={40} 
              description="Sita is known for her strategic vision and leadership."
            />
              <ProfileCard 
              name="Dr. Ram" 
              title="Director" 
              imageSrc={defaultimg} 
              age={55} 
              description="Dr. Ram Prakash Pokhrel is a distinguished director with a background in finance."
            />  
          </div>
       
        </div>
      </div>
      {/* Mobile view */}
      <div className="md:hidden grid grid-cols-1 gap-4">
        <ProfileCard 
          name="Hari" 
          title="Chairman" 
          imageSrc={defaultimg} 
          age={50} 
          description="Hari is the chairman of the company, with over 20 years of experience in the industry."
        />
        <ProfileCard 
          name="Mr. x" 
          title="Director" 
          imageSrc={defaultimg} 
          age={45} 
          description="x is a director who has been a part of the board for 10 years."
        />
        <ProfileCard 
          name="Mr. Acharya" 
          title="Director" 
          imageSrc={defaultimg} 
          age={48} 
          description="Acharya brings a wealth of knowledge and expertise to the board."
        />
        <ProfileCard 
          name="Ms. Sita" 
          title="Director" 
          imageSrc={defaultimg} 
          age={40} 
          description="Sita is known for her strategic vision and leadership."
        />
        <ProfileCard 
          name="Dr. Ram " 
          title="Director" 
          imageSrc={defaultimg} 
          age={55} 
          description="Dr. Ram is a distinguished director with a background in finance."
        />
        <ProfileCard 
          name="Mr. NK" 
          title="Director" 
          imageSrc={defaultimg} 
          age={52} 
          description="NK has been instrumental in driving the company's growth."
        />
      </div>
    </div>
  </div>
);

export default Management_team;
