import { Card } from 'flowbite-react';
import React from 'react';

const Skilled = ({data}) => {
    return (
      <div className='mt-[10px]'>
        <div className='grid grid-cols-3 gap-4'>
            {
                data.map((item)=>{
                    return (
                      <div className="card bg-base-100 shadow-md rounded-md">
                        <div className="card-body p-[10px] flex-row">
                         <img src={item.img} className="w-[28px] h-[28px]"/>
                         <p className='text-[16px] font-bold'>{item.name}</p>
                        </div>
                      </div>
                    );
                })
            }
        </div>

       
      </div>
    );
};

export default Skilled;