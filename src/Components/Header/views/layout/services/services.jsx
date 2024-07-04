import React from "react";
import Slider from "react-slick";
import ServiceCard from "./serviceCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../layout.css"

const OurServices = () => {
  const services = [
    {
      icon: "📄",
      title: "Merchant Banking",
      description:
        "LS Capital as a Merchant Banker helps in channeling the financial surplus of the general public into productive investment avenues...",
    },
    {
      icon: "📊",
      title: "Registrar to Shares",
      description:
        "LS Capital specializes in both pre-issue and post-issue management of shares. In addition to these services, the company serves as th...",
    },
    {
      icon: "💳",
      title: "Mutual Fund",
      description:
        "A mutual fund is created out of amounts deposited by participants in a collective investment scheme by a contract as has bee...",
    },
    {
      icon: "💳",
      title: "Portfolio Management Service",
      description:
        "Portfolio Management Service (PMS) refers to the customized investment management service on behalf of the clients which offers ...",
    },
    {
      icon: "💳",
      title: "Depository Participants",
      description:
        "As a Depository Participant (DP), LS Capital Limited acts as an intermediary between the depository system (CDS and clearing Ltd.) an...",
    },
    {
      icon: "💳",
      title: "Corporate Advisory Services",
      description:
        "Advisory services focus on developing corporate growth and success strategies...",
    },
    {
      icon: "💳",
      title: "Sunlife Specialized Investments ",
      description:
        "LS Capital has received the license from SEBON to operate Private Equity and Venture Capital (PE/VC) funds as Fund Manager under Specialized Investment Fu.",
    },
  ];

  const settings = {
    dots: true,
    infinite: false, // Set to false to disable infinite loop
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-2">Our Services</h2>
      <div className="w-16 h-1 bg-yellow-500 mx-auto mb-8"></div>
      <p className="text-center text-gray-600 mb-12">
        Presenting Banking Plan & Services That are Right For You
      </p>
      <Slider {...settings}>
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </Slider>
    </div>
  );
};

export default OurServices;
