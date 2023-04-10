import React from "react";
import ReactPlayer from 'react-player';
import bdjobs from '../../assets/Bdjobs-logo.png';
import iom from '../../assets/IOM.png';

const VideoOrganization = () => {
  return (
    <div className="md:container mx-auto bg-[#EAEDEF] pb-[40px]">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 lg:px-[35px] pt-[35px] pb-[50px] px-[10px]">
        <div>
          <h2 className="font-bold text-xl my-[15px]">
            Bdesh Jobs, in trust and reliance
          </h2>
          <div className="player-wrapper h-[220px] rounded-md">
            <ReactPlayer
              className="react-player rounded-md"
              url="https://youtu.be/e3wpqRBmWGU"
              width="100%"
              height="100%"
              controls={true}
            />
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl my-[15px]">Jointly Organized</h2>

          <div className="">
          <div className="grid grid-cols-2 ">
            <div className="card bg-base-100 shadow-xl ">
              <div className="card-body">
                <img src={bdjobs} className="md:w-[129px] w-[100%] h-[30px]"/>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl ml-[13px]">
              <div className="card-body w-[100%]">
                <img src={iom} className="md:w-[129px] w-[100%] h-[30px]"/>
              </div>
            </div>
          </div>
          </div>

          

        </div>
      </div>
    </div>
  );
};

export default VideoOrganization;
