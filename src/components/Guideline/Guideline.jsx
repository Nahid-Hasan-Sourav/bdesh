import React from 'react';
import { IoMdArrowDropright } from 'react-icons/io';

import lifebuoy from '../../assets/lifebuoy.png'

const Guideline = () => {
    const guideline=[
        {
            title:"বিদেশ জবস্-নির্দেশিকা"
        },
        {
            title:" বিদেশে যাওয়ার গাইডলাইন"
        },
        {
            title:" বিদেশে চাকরির পূর্ব প্রস্তুতি"
        },
        {
            title:"বিদেশে যাওয়ার প্রাসঙ্গিক কাজ"
        },
        {
            title:"বিদেশের যাত্রাপথে করনীয়"
        },
        {
            title:" বিদেশে জীবনযাত্রা"
        },
    ]
    return (
      <div>
        <div className="card rounded-md w-[95%] bg-base-100 shadow-md mt-[40px]">
          <div className="card-body">
            <h2 className="card-title text-[16px] font-bold">বিদেশ জবস্ এর গাইডলাইন</h2>
            {
                guideline.map((item)=>{
                    return (
                      <div className="flex items-center text-[#757575] cursor-pointer mb-[4px]">
                        <IoMdArrowDropright />
                        <p className="ml-[3px] text-[12px] font-bold">
                         {item.title}
                        </p>
                      </div>
                    );
                })
            }

           <div className='flex justify-end -mt-[50px]'>
           <img src={lifebuoy} className='w-[50px] '/>
           </div>
           
            
          </div>
        </div>
      </div>
    );
};

export default Guideline;