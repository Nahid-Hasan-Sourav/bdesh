import React from 'react';
import cv from '../../assets/thousand_cv.png';
import bio from '../../assets/make-bio.png'

const MakeBiodata = () => {
    const data=[
        {
            title:"",
            details:"হাজারো চাকরির মাঝে আপনার পছন্দের চাকরি খুঁজে আবেদন করতে জয়েন করুন আমাদের সাইটে।",
            img:"https://i.ibb.co/QJBxN72/thousand-cv-resize.png"
        },
        {
            title:"বায়োডাটা তৈরি করতে চান?",
            details:"সহজ কয়েকটি ধাপে এখনই স্বল্প সময়েই তৈরি করুন আপনার সিভি",
            img:"https://i.ibb.co/Kz843vN/make-bio.png"
        }
    ]
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-[18px]'>

            {data.map((item,index)=>{
                const cardBgColor = index === 0 ? "bg-blue-500" : index === 1 ? "bg-violet-500" : "bg-base-100";

                return (
                  <div className={`card flex-row bg-base-100 shadow-xl py-[0px] ${cardBgColor}`}>
                    <figure>
                      <img src={item.img} alt="Movie" 
                      className='w-[150px]'
                      />
                    </figure>
                    <div className="card-body">
                    <h2 className="card-title text-white text-[18px]">{item.title ? item.title : ''}</h2>
                      <p className='text-white'>{item.details}</p>
                      <div className="card-actions ">
                        <button className="btn bg-[#FFDC79]">
                          একাউণ্ট খুলুন
                        </button>
                      </div>
                    </div>
                  </div>
                );
            })}


      </div>
    );
};

export default MakeBiodata;