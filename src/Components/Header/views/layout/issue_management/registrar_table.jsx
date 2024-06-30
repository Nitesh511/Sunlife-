import React from "react";
import MoreInfoForm from "./contact_merchant";

// List of sample Nepal company names
const nepalCompanyNames = [
  "10% Laxmi Bank Debenture-2086",
  "10.25% SRBL Debenture 2083 (SRBLDS3)",
  "8.5% Laxmi Bank Debenture-2088",
  "Dhaulagiri Laghubitta Bittiya Sanstha Ltd. (DLBS)",
  "Fleur Himalayan Limited",
  "Green Ventures Limited",
  "Infinity Laghubitta Bittiya Sanstha Ltd. (ILBS)",
  "Janaki Finance Company Ltd. (JFL)",
  "Laxmi Sunrise Bank Limited",
  "Shubha Laxmi Kosh",
  "Laxmi Unnati Kosh",
  "Laxmi Laghubitta Bittiya Sanstha Limited",
  "Laxmi Value Fund II (LVF-IT)",
  "Mahuli Laghubitta Bittiya Sanstha Ltd. (MSLB)",
  "Molung Hydropower Company Ltd. (MHCL)",
  "Panchankya Mai Hydropower Ltd. (PMHPL)",
  "Progressive Finance Ltd. (PROFL)",
  "Reliance Finance Ltd (RLFL)",
  "Samudayik Laghubitta Bittiya Sanstha Limited",
  "Sana Kishan Bikash Laghubitta Bittiya Sansthan Ltd. (SKBBL)",
  "Sanjen Jalavidyut Company Pvt Ltd. (SCL)",
  "Shree Raghupati Jute Mills Company Ltd.",
  "Shrijanshil Laghubitta Bittiya Sanstha Ltd. (SHLB)",
  "Sunrise Blue Chip Fund (SBCF)",
  "Sunrise First Mutual Fund (SFMF)",
  "Sunrise Focused Equity Fund (SFEF)",
];

const RegistrarTable = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="container mx-auto p-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="border border-gray-300 px-4 py-2">SN.</th>
                <th className="border border-gray-300 px-4 py-2  text-lg text-center">
                  Name of Companies
                </th>
              </tr>
            </thead>
            <tbody>
              {nepalCompanyNames.map((name, index) => (
                <tr key={index} className="bg-white">
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2  text-lg text-center">{name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="relative mt-10 lg:mt-60">
        <MoreInfoForm />
      </div>
    </div>
  );
};

export default RegistrarTable;
