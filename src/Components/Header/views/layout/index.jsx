import React from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Topnav from "../../topnav";
import Navbar from "../../Navbar";
import Dashboard from "./dashboard";
import Footer from "./footer/footer";
import CompanyProfileHeader from "./aboutus/about_us";
import Board_directors from "./board_of_directors/board_directors";
import ManagementTeam from "./management_Team/management";
import Issue_management from "./issue_management/issue_management";
import Merchant from "./issue_management/merchant";
import Registrar from "./issue_management/resistrar";
import AdvisoryService from "./portfolio/advisory_service";
import Advisory_Issue from "./issue_management/advisory_service/advisory_service";
import Underwriting_shares from "./issue_management/underwriting_Shares/underwriting_shares";
import Mutual_fund_Service from "./MutalFund/mutalfund";
import Sunlife_first_mutal from "./MutalFund/sunlife_first_mutual/sunlife_first_mutal";
import Portfollio_Service from "./portfolio_management/portfollio_Service";
import Depository_part from "./depository_participations/depository_part";
import Specalized_investment from "./specalized_investment/specalized_investment";
import Corporate_advisory from "./corporate_advisory/corporate_advisory";
import OurServices from "./services/services";
import Download_part from "./downloads/download_part";


function Index (){
  return (
   <BrowserRouter>
    <Topnav/>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Dashboard/>}></Route>
    <Route path="/company_profile" element={<CompanyProfileHeader/>}></Route>
    <Route path="/board_directors" element={<Board_directors/>}></Route>
    <Route path="/management_team" element={<ManagementTeam/>}></Route>
    <Route path="/services/merchant_banking" element={<Merchant/>}></Route>
    <Route path="/services/issue_management" element={<Issue_management/>}></Route>
    <Route path="/services/registrar" element={<Registrar/>}></Route>
    <Route path="/services/advisory_service" element={<Advisory_Issue/>}></Route>
    <Route path="/services/underwriting_service" element={<Underwriting_shares/>}></Route>
    <Route path="/services/mutual_fund_service" element={<Mutual_fund_Service/>}></Route>
    <Route path="/services/mutual_fund_service/sunlife_first_mutal" element={<Sunlife_first_mutal/>}></Route>
    <Route path="/services/portfolio_management" element={<Portfollio_Service/>}></Route>
    <Route path="/services/depository_service" element={<Depository_part/>}></Route>
    <Route path="/services/specalized_investment" element={<Specalized_investment/>}></Route>
    <Route path="/services/cooperate_advisory" element={<Corporate_advisory/>}></Route>
    <Route path="/services/our_services" element={<OurServices/>}></Route>
    <Route path="/downloads" element={<Download_part/>}></Route>




    </Routes>
     
    <Footer/>
   </BrowserRouter>

  );
};

export default Index;
