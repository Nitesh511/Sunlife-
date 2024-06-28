import React from 'react';
import dashboard from "../.././../../../assets/dashboard.png";

const GalleryItem = ({ image, title, pictureCount, date }) => (
  <div className="mb-4 hover:scale-110 transition duration-500 cursor-pointer">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg " />
    <div className="bg-white p-3 rounded-b-lg shadow">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-600">
        {pictureCount} Pictures — {date}
      </p>
    </div>
  </div>
);

const GalleryItems = () => {
  const items = [
    {
      image: dashboard,
      title: 'Sunlife Capital 12th AGM',
      pictureCount: 4,
      date: 'Dec 13, 2022'
    },
    {
      image: dashboard,
      title: 'Sunlife Focused Equity Fund IPO allotment',
      pictureCount: 2,
      date: 'Feb 10, 2023'
    },
    {
      image: dashboard,
      title: 'Compliance Training and Half yearly Budget meet 2023',
      pictureCount: 10,
      date: 'Mar 12, 2023'
    },
    {
      image: dashboard,
      title: 'Global Money Week 2023',
      pictureCount: 8,
      date: 'Mar 23, 2023'
    },
    {
      image: dashboard,
      title: 'SFEF listed on NEPSE',
      pictureCount: 1,
      date: 'Apr 07, 2023'
    },
    {
      image: dashboard,
      title: '13th AGM',
      pictureCount: 3,
      date: 'Oct 01, 2023'
    }
  ];

  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <GalleryItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default GalleryItems;
