import React from 'react';

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
              <li><a href="/">Downloads</a></li>
              <li><a href="/">News</a></li>
              <li><a href="/">Notice</a></li>
              <li><a href="/">Career</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-lg">Important Links</h3>
            <ul className="text-lg space-y-4">
              <li><a href="/">Securities Board of Nepal</a></li>
              <li><a href="/">Nepal Stock Exchange</a></li>
              <li><a href="/">CDS and Clearing Ltd.</a></li>
              <li><a href="/">Merchant Banking Association</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-lg">Useful Links</h3>
            <ul className="text-lg space-y-4">
              <li><a href="/">Laxmi Sunrise Bank</a></li>
              <li><a href="/">Nepal Rastra Bank</a></li>
              <li><a href="/">Home Ministry AML/CFT List</a></li>
              <li><a href="/">UN Security Council Consolidated List</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-lg">Contact</h3>
            <ul className="text-lg space-y-4">
              <li><a href="/">New Baneshwor, Kathmandu, Nepal</a></li>
              <li><a href="/">01-5970064 01-4528688</a></li>
              <li><a href="/">info@lscapital.com.np</a></li>
            </ul>
            <div className="flex gap-2 mt-3">
              <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-orange-600">f</span>
              <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-orange-600">i</span>
              <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-orange-600">y</span>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-lg">Information Officer</h3>
            <ul className="text-lg space-y-4">
              <li><a href="/">Archana Shrestha Pradhan</a></li>
              <li><a href="/">01-5970064</a></li>
              <li><a href="/">archana.shrestha@lscapital.com.np</a></li>
            </ul>
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
