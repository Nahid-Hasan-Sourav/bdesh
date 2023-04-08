import { FaUserFriends,FaGlobeAfrica } from "react-icons/fa";
import { ImWrench } from "react-icons/im";
// import { FaGlobeAfrica } from "react-icons/fa";

const JobVacancies = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center mt-[15px]">

        <div className="w-[30%] py-[10px]">
          <div className="flex md:flex-row flex-col items-center justify-center ">
            <div className="w-[60px] h-[60px] rounded-[50%] bg-[#F44336] flex items-center justify-center me-[10px]">
              <FaUserFriends className="text-[30px] text-white "></FaUserFriends>
            </div>

            <div>
              <p className="md:text-[18px] text-[12px] font-bold">No. of vacancies</p>
              <p className="md:text-[20px] text-[14px] md:text-left text-center font-bold text-[#F44336] ">130</p>
            </div>
          </div>
        </div>

        <div className="w-[30%] py-[10px]">
          <div className="flex  md:flex-row flex-col items-center justify-center ">
            <div className="w-[60px] h-[60px] rounded-[50%] bg-[#4CAF50] flex items-center justify-center me-[10px]">
              <ImWrench className="text-[30px] text-white "></ImWrench>
            </div>

            <div>
              <p className="md:text-[18px] text-[12px] font-bold">No. of jobs</p>
              <p className="md:text-[20px] text-[14px] md:text-left text-center font-bold text-[#4CAF50]">12</p>
            </div>
          </div>
        </div>
        <div className="w-[30%] py-[10px]">
          <div className="flex md:flex-row flex-col items-center justify-center ">
            <div className="w-[60px] h-[60px] rounded-[50%] bg-[#FF9800] flex items-center justify-center me-[10px]">
              <FaGlobeAfrica className="text-[30px] text-white "></FaGlobeAfrica>
            </div>

            <div>
              <p className="md:text-[18px] text-[12px] font-bold">No. of countries</p>
              <p className="md:text-[20px] text-[14px] md:text-left text-center font-bold text-[#FF9800]">8</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobVacancies;
