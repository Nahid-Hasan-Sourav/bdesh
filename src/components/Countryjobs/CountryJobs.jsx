import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from '../Countryjobs/slider.module.css'
const CountryJobs = () => {
  const data=[
    {
      vacancy:'৪৫',
      text:'খালি পদ রয়েছে',
      country:'সংযুক্ত আরব আমিরাত'

    },
    {
      vacancy:'৩৫',
      text:'খালি পদ রয়েছে',
      country:'সৌদি আরব'

    },
    {
      vacancy:'২৫',
      text:'খালি পদ রয়েছে',
      country:'জাপান'

    },
    {
      vacancy:'১১',
      text:'খালি পদ রয়েছে',
      country:'দক্ষিনকোরিয়া'

    },
    {
      vacancy:'৬',
      text:'খালি পদ রয়েছে',
      country:'মালয়েশিয়া'

    },
    {
      vacancy:'৬',
      text:'খালি পদ রয়েছে',
      country:'ওমান'

    },
    {
      vacancy:'৪৫',
      text:'খালি পদ রয়েছে',
      country:'সংযুক্ত আরব আমিরাত'

    },
    {
      vacancy:'২৫',
      text:'খালি পদ রয়েছে',
      country:'জাপান'

    },
    {
      vacancy:'১১',
      text:'খালি পদ রয়েছে',
      country:'দক্ষিনকোরিয়া'

    },
    {
      vacancy:'৬',
      text:'খালি পদ রয়েছে',
      country:'মালয়েশিয়া'

    },
    {
      vacancy:'৬',
      text:'খালি পদ রয়েছে',
      country:'ওমান'

    },
    {
      vacancy:'১',
      text:'খালি পদ রয়েছে',
      country:'ডেনমার্ক'

    },
    {
      vacancy:'১',
      text:'খালি পদ রয়েছে',
      country:'জর্ডান'

    },
  ]


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 7,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    
      return (
        <div className={`container mx-auto ${styles.bgImage} px-[40px]`}>
          <h2
            className={`text-center font-bold pt-[65px] text-white text-[24px] flex h-100 items-center justify-center`}
          >
            বিভিন্ন দেশের চাকরি
          </h2>
          <Slider {...settings} className={`${styles.bg} px-[20px]`} style={{}}>
            {data?.map((item, index) => {
              return (
                <div className={` h-[150px]  px-[20px] `}>
                  <div className="bg-white h-[100%] rounded-md relative">
                    <div
                      className={`flex flex-col items-center justify-center h-[100%]         `}
                    >
                      <p
                        className={`text-[#19A094] font-bold text-[20px]  ${
                          index === 0 ? "-mt-[50px]" : ""
                        }`}
                      >
                        {item.vacancy} টি{" "}
                      </p>
                      <p className=" ">{item.text}</p>
                    </div>
                    <div className="bg-[#343541] absolute w-[100%]  bottom-0 rounded-bl-md rounded-br-md p-[10px] text-white font-bold">
                      <p className="text-center">{item.country}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
          <style jsx>
            {`
              .slick-prev,
              .slick-next {
                display: none !important;
              }
             
              button{
                margin-top:40px;
                font-size:20px;
                color:white;
              }
              .slick-dots li button:before{
                font-size:20px;
              }
              .slick-dots li.slick-active button:before{
                color:white;
                opacity:1;
              }
            `}
          </style>
        </div>
      );
};

export default CountryJobs;