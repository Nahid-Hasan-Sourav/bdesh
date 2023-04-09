import { Card } from 'flowbite-react';
import React from 'react';

const Skilled = ({data}) => {
    return (
      <div className='mt-[10px]'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
            {
                data.map((item)=>{
                    return (
                      <div className="card bg-base-100 shadow-md rounded-md">
                        <div className="card-body p-[10px] flex-row items-center">
                         <img src={item.img} className="w-[28px] h-[28px]"/>
                         <p className='text-[13px] font-bold'>{item.name} ({item.number})</p>
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