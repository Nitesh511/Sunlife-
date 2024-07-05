import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-600 to-red-500 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Investment Journey Section */}
        <div className="flex flex-wrap items-center justify-between mb-8 pb-8 border-b border-white/30">
          <div className="w-full md:w-auto mb-4 md:mb-0 md:text-right">
            <h2 className="text-3xl font-bold mb-2">Start Your Investment Journey</h2>
            <p className="text-sm">Leave your contact details, We will contact you soon.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center w-full md:w-auto md:justify-end">
            <input type="email" placeholder="Email" className="p-2 rounded text-black w-full md:w-auto md:w-40" />
            <input type="tel" placeholder="Phone No." className="p-2 rounded text-black w-full md:w-auto md:w-40" />
            <button type="submit" className="bg-white text-orange-600 px-6 py-2 rounded font-semibold">SUBMIT</button>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-2">Quick Links</h3>
            <ul className="text-lg space-y-4">
              <li><Link to={"/downloads"} href="">Downloads</Link></li>
              <li><Link  to={"/downloads/news"}>News</Link></li>
              <li><Link to={"/downloads/notice_updates"}>Notice</Link></li>
              <li><a href="/">Career</a></li>
              <li><Link to={"/contact_form"}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-lg">Important Links</h3>
            <ul className="text-lg space-y-4">
              <li><a href="https://www.sebon.gov.np/about-sebon">Securities Board of Nepal</a></li>
              <li><a href="https://merolagani.com/LatestMarket.aspx">Nepal Stock Exchange</a></li>
              <li><a href="https://cdsc.com.np/">CDS and Clearing Ltd.</a></li>
              <li><a href="https://mban.com.np/">Merchant Banking Association</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-lg">Quick Links</h3>
            <ul className="text-lg space-y-4">
              <li><a href="/">FAQ</a></li>
              <li><a href="/">PMS</a></li>
 
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-lg">Contact</h3>
            <ul className="text-lg space-y-4">
              <li><a href="/">5th Floor Simkhadaplaza,Putalisadak</a></li>
              <li><a href="/">01-4536129</a></li>
              <li><a href="/">info@sunlifecapital.com.np</a></li>
            </ul>
            <div className="flex gap-2 mt-3">
              <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-orange-600"><FacebookIcon/></span>
              <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-orange-600"><InstagramIcon/></span>
              <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-orange-600"><XIcon/></span>
            </div>
          </div>
     
        </div>

        {/* Copyright */}
        <div className="text-center text-2xl border-t border-white/30 pt-4">
          <p>&copy; 2024 Copyright Sunlife Capital</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
