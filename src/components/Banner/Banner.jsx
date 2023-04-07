import { Carousel, TextInput,Select,Button ,Card} from "flowbite-react";
import React from "react";
import BannerSlider from "../slider/BannerSlider";
import bideshJatra from'../../assets/bdesh_jatra.svg';
import biodata from'../../assets/submit_biodata.png';

const Banner = () => {
    const vacancies = [
        {
            name:'United Arab Emirates',
            number:'45'
        },
        {
            name:'Saudi Arabia ',
            number:'35'
        },
        {
            name:'Japan ',
            number:'25'
        },
        {
            name:'South Korea',
            number:'11'
        },
        {
            name:'Oman',
            number:'6'
        },
        {
            name:'Malaysia',
            number:'6'
        },
        {
            name:'All Countries',
            number:'0'
        },
    ]
  return (
    <div>
      <div className="container mx-auto ">
        <div className="grid grid-cols-12">
          <div className="col-span-3 border text-left pr-[20px] bg-[#2D79CE]">
            <div className="ml-[35px] pt-[20px] pb-[22px]">
              <h2 className="text-lg text-[22px] font-bold text-white">
                Find your dream job
              </h2>
              <div>
                <h2 className="text-[18px] text-white my-[10px]">
                  Write your occupation
                </h2>
                <TextInput
                  id="password1"
                  type="password"
                  required={true}
                  placeholder="Driver,Electrician etc"
                />
              </div>

              <div>
                <h2 className="text-[18px] text-white my-[10px]">
                  Skilled Category
                </h2>
                <TextInput
                  id="password1"
                  type="password"
                  required={true}
                  placeholder="Driver,Electrician etc"
                />
              </div>

              <div>
                <h2 className="text-[18px] text-white my-[10px]">Country</h2>
                <Select id="countries" required={true}>
                  <option>Select Country </option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
                </Select>
              </div>

              <div className="mt-[15px] mb-[30px]">
                <Button color="warning">Search</Button>
              </div>
            </div>
          </div>

          <div className="h-[400px]   col-span-6 rounded-none mx-0">
            <BannerSlider />
          </div>

          <div className="col-span-3 bg-[#2D79CE] pt-[20px] pb-[22px]">
            <div className="pl-[15px]">
              <h2 className="text-lg text-[22px] font-bold text-white mb-[10px]">
                Find your dream job
              </h2>

              {vacancies?.map((item) => {
                return (
                  <p className="text-white text-16px mb-[8px] text-opacity-75 cursor-pointer hover:text-opacity-100">
                    {item.name}({item.number})
                  </p>
                );
              })}

              <div>      
                <div className="w-[160px] bg-white rounded-md flex p-[10px] bg-[#FFDC79] cursor-pointer hover:bg-[rgb(224,184,74)] mb-[5px]">
                    <img src={biodata} className="w-[30px] h-[40px] mr-[5px]"/>
                    <h2 className="text-[15px] font-bold">Submit Your <br></br>Biodata</h2>
                </div>
                <div className="w-[160px] bg-white rounded-md  p-[10px] ">
                    <img src={bideshJatra} className=" "/>
                    <h2 className="text-[13px] text-[#0C4C9C] cursor-pointer">
                    অভিবাসন বিষয়ক তথ্য
                    </h2>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
