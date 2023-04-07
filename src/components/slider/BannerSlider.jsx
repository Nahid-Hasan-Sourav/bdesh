import { Carousel } from "flowbite-react";
import React from "react";


const images = [
    { img: "https://i.ibb.co/kQb1qgG/slide-00.jpg" },
    { img: "https://i.ibb.co/TcY7RXr/slide-01.jpg" },
    { img: "https://i.ibb.co/pJpz0Rn/slide-02.jpg" },
    { img: "https://i.ibb.co/5M2WHgN/slide-03.jpg" },
    { img: "https://i.ibb.co/2yvQt2q/slide-04.jpg" },
    { img: "https://i.ibb.co/hcQHjLf/slide-05.jpg" },
  ];

const BannerSlider = () => {
  return (
        <>
            <Carousel indicators={false} className="h-100">
                {
                    images?.map((item)=>{
                        return(
                            <img
                            src={item.img}
                            alt="..."
                          />
                        )
                    })
                }
   
    
  
  </Carousel>
  <style jsx>
  {`
   
  
      .rounded-lg{
        border-radius: 0px !important;
    }
    .rounded-full{
        border-radius: 0px !important;
       }
  `}
</style>
        </>
  );
};

export default BannerSlider;
