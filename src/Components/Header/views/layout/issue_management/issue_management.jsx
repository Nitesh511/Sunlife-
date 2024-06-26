import React from "react";
import Company from "../../../../../assets/company.jpg";
import CompanyTable from "./company_table";
import MoreInfoForm from "./contact_merchant";

const Issue_management = () => {
  return (
    <div>
      {/* Main content */}
      <div className="relative h-96 bg-gray-300 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm"
          style={{
            backgroundImage: `url(${Company})`, // Corrected syntax to use template literals and url()
            transform: "scale(1.1)",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-32 text-white">
          {/* Title */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <h1 className="text-4xl font-bold">Issue Management</h1>
        </div>
      </div>

      {/* Text content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-4">Issue Management</h1>
        <p className="text-lg">
          Sunlife Capital, born from the merger of Laxmi Capital and Sunrise
          Capital, stands as a beacon in the realm of issue management. Our
          legacy is adorned with numerous successful ventures, where we have
          pioneered the introduction of various companies to the public through
          initial public offerings. Our expertise spans a broad spectrum of
          securities, encompassing public issues, rights share issues, and
          debentures. With unwavering commitment, we guide enterprises across
          diverse sectors including banking, financial institutions, insurance,
          manufacturing, hydropower, services, and tourism. Sunlife Capital has
          successfully managed 184 issues to date, consistently navigating the
          complexities of issue management with precision and foresight.
        </p>
      </div>

      {/* Company Table */}
      <CompanyTable />

      {/* More Info Form */}
      <div className="lg:relative lg:mt-56">
        <MoreInfoForm/>
      </div>
    </div>
  );
};

export default Issue_management;
