import React from 'react';

// List of sample Nepal company names
const nepalCompanyNames = [
  "Birat Shoe Co. (Pref)",
  "Nepal Share Markets Ltd.",
  "Srijana Finance Ltd. (Bittiya Sanstha)",
  "Birat Shoe Co. (Ord)",
  "Lalitpur Finance Co. Ltd.",
  "Paschimanchal Dev. Bank Ltd.",
  "Sahayogi Bikas Bank Ltd. (Bittiya Sanstha)",
  "Nerude Laghubitta Bikas Bank Ltd.",
  "Yeti Finance Ltd. (Bittiya Sanstha)",
  "Bhrikuti Dev. Bank Ltd. (Bittiya Sanstha)",
  "NIDC Capital Markets Ltd."
];

// Generate random data for the table
const generateRandomData = (count) => {
  const data = [];
  for (let i = 1; i <= count; i++) {
    const randomCompanyName = nepalCompanyNames[Math.floor(Math.random() * nepalCompanyNames.length)];
    const issueTypes = ['Public Issue', 'Rights Issue', 'Debentures'];
    const randomIssueType = issueTypes[Math.floor(Math.random() * issueTypes.length)];
    const shares = Math.floor(Math.random() * 100000) + 10000; // Random shares between 10,000 and 110,000
    data.push({ sn: i, name: randomCompanyName, issueType: randomIssueType, shares: shares });
  }
  return data;
};

const TableData = generateRandomData(100);

const CompanyTable = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="w-full whitespace-nowrap bg-white shadow-md border-collapse sm:rounded-lg">
          <thead>
            <tr className="bg-blue-600 text-white sticky top-0">
              <th className="border border-gray-300 px-4 py-2">SN.</th>
              <th className="border border-gray-300 px-4 py-2">Name of Companies</th>
              <th className="border border-gray-300 px-4 py-2 sm:table-cell">Issue Type</th>
              <th className="border border-gray-300 px-4 py-2 sm:table-cell">No. of Shares/ Debenture Issued</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {TableData.map((row) => (
              <tr key={row.sn} className="bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center">{row.sn}</td>
                <td className="border border-gray-300 px-4 py-2">{row.name}</td>
                <td className="border border-gray-300 px-4 py-2 text-center sm:table-cell">{row.issueType}</td>
                <td className="border border-gray-300 px-4 py-2 text-right sm:table-cell">{row.shares.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyTable;
