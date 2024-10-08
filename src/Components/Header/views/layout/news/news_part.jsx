import React from 'react'
import Company from "../../../../../assets/company.jpg"

const News_part = () => {
  return (
    <div>
        <div className="relative h-96 bg-gray-300 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm"
          style={{
            backgroundImage: `url(${Company})`,
            transform: "scale(1.1)",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-32 text-white">
          {/* Title */}
          <div className="absolute inset-0 flex items-center justify-center py-20">
          <div className="text-center text-white p-8 mt-24  ">
            <h1 className="text-4xl font-bold">News</h1>
          </div>
        </div>
        </div>
      </div>
      <h1 className='relative text-5xl text-center'>Latest News&Updates</h1>

      
    </div>
  )
}

export default News_part
