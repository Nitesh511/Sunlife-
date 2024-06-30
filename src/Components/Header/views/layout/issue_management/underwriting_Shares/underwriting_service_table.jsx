import React from "react";
import MoreInfoForm from "../contact_merchant";

// List of updated company names
const nepalCompanyNames = [
  "Asian Lite Insurance Co. Ltd.",
  "CEDB Hydro Fund Ltd.",
  "Century Commercial Bank Limited",
  "Chilime Hydro Power Co. Ltd.",
  "Civil Bank Limited",
  "Country Development Bank Ltd.",
  "Himalaya Finance Ltd.",
  "International Development Bank Ltd.",
  "Jebils Finance Limited",
  "Kabeli Bikas Bank Ltd.",
  "Kamana Bikas Bank Ltd.",
  "Kastamandap Development Bank Ltd.",
  "Mahuli Samudayik Laghubitta Bittiya Sanstha Ltd.",
  "Manakamana Development Bank Ltd.",
  "Manjushree Financial Institution Ltd.",
  "Mercantile Finance Ltd.",
  "Metro Development Bank Ltd.",
  "Multipurpose Finance Ltd.",
  "Nerude Laghu bitta Bikas Bank Ltd.",
  "Nilgiri Bikas Bank Ltd.",
  "NMB Bank (Common Stock) Ltd.",
  "Prime Life Insurance Co. Ltd.",
  "Public Development Bank Ltd.",
  "Rajdhani Investment Fund Ltd.",
  "Reliance Finance Limited",
  "Sanima Mai Hydropower Limited",
  "Tinau Bikas Bank Ltd.",
  "Tourism Development Bank Ltd.",
  "Unique Financial Institution Ltd.",
  "Udhyam Bikas Bank Ltd.",
  "Valley Finance Ltd.",
  "Western Development Bank Ltd.",
  "Zenith Finance Ltd.",
  "CEDBL Hydro Fund Limited",
  "Butwal Power Company Limited",
  "Nepal Bank Limited",
  "Himal Dolakha Hydropower Company Limited",
  "Union Hydropower Limited",
  "Ganapati Microfinance Bittiya Sanstha Limited",
  "Mountain Energy Nepal Limited",
  "Jyoti Life Insurance Company Limited",
  "Rapti Hydro & General Construction Limited",
  "Bindyabasini Hydropower Development Company Limited",
  "Makar Jitumaya Suri Hydropower Limited",
  "Swet Ganga Hydropower & Construction Limited",
  "Molung Hydropower Company Limited",
  "Moonlight Hydropower Company Limited",
  "Nepal Republic Media Limited",
  "Himstar Urja Company Limited",
  "Laughing Budha Power Nepal Limited",
  "Solu Hydropower Limited",
  "Jagdamba Steel Limited",
  "Accord Pharmaceuticals Limited"
];

const UnderwritingServiceTable = () => {
  return (
    <div>
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="container mx-auto p-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="border border-gray-300 px-4 py-2">SN.</th>
              <th className="border border-gray-300 px-4 py-2 text-lg text-center"> {/* Added text-center class */}
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
                <td className="border border-gray-300 px-4 py-2 text-lg text-center">{name}</td> {/* Added text-center class */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     
    </div>
    <div className="relative mt-0 lg:mt-60">
        <MoreInfoForm/>
      </div>
    </div>
  );
};

export default UnderwritingServiceTable;
