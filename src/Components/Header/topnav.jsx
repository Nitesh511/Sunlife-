import React from 'react'

const Topnav = () => {
  return (
    <div>
    <nav className="bg-white w-full px-4 py-2 flex justify-between items-center">
      <div className="flex items-center space-x-10 border-solid ">
      <button className="bg-orange-500 text-white font-bold py-1 px-5 rounded-sm text-xl">
      Highlights
    </button>
            
            <span className="text-orange-700">Hello jdkjfsdfsdahlfkjsancis</span>
      </div>
      
      <div className="flex items-center space-x-4">
        <span className="text-white">
          SFMF : 11.29 <span className="text-green-300">▲</span> as on 2024-06-14
        </span>
        <button className="bg-orange-400 text-white px-3 py-1 rounded">
          Sunrise First Mutual Fund
        </button>
        <select className="bg-transparent text-orange border-none">
          <option value="EN">EN</option>
          <option value="EN">NEP</option>
        </select>
      </div>
    </nav>
    
      
    </div>
  )
}

export default Topnav

