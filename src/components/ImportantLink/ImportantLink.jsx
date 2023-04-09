import React from 'react';
import coin from '../../assets/govr-coin.png'
import { FiArrowRightCircle } from 'react-icons/fi';
const ImportantLink = () => {
    const links=[
        {
            title:"ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর",
        },
        {
            title:"বাংলাদেশ কারিগরি শিক্ষা বোর্ড",
        },
        {
            title:"জনশক্তি কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো",
        },
        {
            title:"প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়",
        }
       
    ]
    return (
        <div>
        <div className="card rounded-md bg-base-100 shadow-md mt-[10px]">
          <div className="card-body lg:p-8 p-2">
            <h2 className="card-title text-[16px] font-bold">সরকারি গুরুত্বপূর্ণ লিংক সমূহ</h2>
            {
                links.map((item)=>{
                    return (
                      <div className="flex items-center text-[#757575] cursor-pointer mb-[4px]">
                        <FiArrowRightCircle />
                        <p className="ml-[3px] text-[12px] font-bold">
                         {item.title}
                        </p>
                      </div>
                    );
                })
            }

           <div className='flex justify-end -mt-[50px]'>
           <img src={coin} className='w-[80px] '/>
           </div>
           
            
          </div>
        </div>
      </div>
    );
};

export default ImportantLink;