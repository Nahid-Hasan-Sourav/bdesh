import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Sliders = () => {
  const [settings, setSettings] = useState({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  useEffect(() => {
    // Add event listener to update slider settings on window resize
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSettings((prevSettings) => ({
          ...prevSettings,
          slidesToShow: 4,
          slidesToScroll: 4
        }));
      } else if (window.innerWidth >= 600) {
        setSettings((prevSettings) => ({
          ...prevSettings,
          slidesToShow: 2,
          slidesToScroll: 2
        }));
      } else {
        setSettings((prevSettings) => ({
          ...prevSettings,
          slidesToShow: 1,
          slidesToScroll: 1
        }));
      }
    };

    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
//   style={{backgroundImage:"url('https://i.ibb.co/1QQStBK/countrys-job-bg.png')"}}
  return (
   


    <div className='relative bg-no-repeat bg-cover bg-center h-[400px] '
     style={{backgroundImage:"url('https://i.ibb.co/1QQStBK/countrys-job-bg.png')",opacity: 0.5}}>
  <div className="absolute inset-0 bg-gradient-to-r from-[#19A094] to-[#19A094] mix-blend-multiply "></div>
  <div className="container mx-auto">
    
    <div>
        Hhhhhhhhhhhhhhhhhhhhhhhh
    </div>


    <Slider {...settings} className=''> 
    
        <div className='h-[400px] text-white'>
           <h3>1</h3>
         </div>
         <div className='h-[400px]'>
           <h3>1</h3>
         </div>
         <div className='h-[400px]'>
           <h3>1</h3>
         </div>
         <div className='h-[400px]'>
           <h3>1</h3>
         </div>
         <div className='h-[400px]'>
           <h3>1</h3>
         </div>
         <div className='h-[400px]'>
           <h3>1</h3>
         </div>
         <div className='h-[400px]'>
           <h3>1</h3>
         </div>
         <div className='h-[400px]'>
           <h3>1</h3>
         </div>
         <div className='h-[400px]'>
           <h3>1</h3>
         </div>

       </Slider>
  </div>
</div>

  );
};

export default Sliders;
