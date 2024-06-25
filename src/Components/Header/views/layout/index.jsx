import React from 'react'
import Topnav from '../../topnav'
import Navbar from '../../Navbar'
import Dashboard from './dashboard'
import OurServices from './services/services'
import MutualFundChart from './chart/chart'
import PortfolioService from './portfolio/portfolio'
import AdvisoryService from './portfolio/advisory_service'

const Index = () => {
  return (
    <>
    <Topnav/>
    <Navbar/>
    <Dashboard/>
    <OurServices/>
    <MutualFundChart/>
    <PortfolioService/>
    <AdvisoryService/>

    </>
  )
}

export default Index
