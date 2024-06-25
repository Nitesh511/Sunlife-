import React from 'react'
import dashboard from "../../.././../assets/dashboard.png";

const Dashboard = () => {
  return (
    <div>
     <div className="w-full h-2/5-screen flex justify-center items-center overflow-hidden">
      <img src={dashboard} alt="Dashboard" className="w-full h-full object-cover" />
    </div>
      
    </div>
  )
}

export default Dashboard
