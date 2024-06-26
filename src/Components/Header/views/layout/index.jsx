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



    </Routes>
     
    <Footer/>
   </BrowserRouter>

  );
};

export default Index;
