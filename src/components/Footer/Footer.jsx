import React from 'react';
import playstore from '../../assets/google-play-badge.svg'
import question from '../../assets/question-icon.png'
const Footer = () => {
    return (
      <div className='container mx-auto'>
        <footer className="footer p-10 bg-white text-black md:justify-normal justify-center">
          <div className='md:block  hidden'>
            <span className="footer-title">About Us</span>
           <p className="link link-hover my-[5px]">About Us</p>
           <p className="link link-hover my-[5px]">Terms & Conditions</p>
           <p className="link link-hover my-[5px]">Feedback</p>
     
          </div>
          <div  className='md:block  hidden'>
            <span className="footer-title">Job Seekers</span>
           <p className="link link-hover my-[5px]">Create Account</p>
           <p className="link link-hover my-[5px]">Career Counseling</p>
           <p className="link link-hover my-[5px]">FAQ</p>
            
          </div>
          <div  className='md:block  hidden'>
            <span className="footer-title">Employers</span>
           <p className="link link-hover my-5px]">Create Account</p>
           <p className="link link-hover my-[5px]">Products/Service</p>
           <p className="link link-hover my-[5px]">Post a Job</p>
           <p className="link link-hover my-[5px]">FAQ</p>
          </div>
          <div>
            <span className="footer-title">Tools & Social Media</span>
           <p className="link link-hover ">Download Mobile App</p>
            <img src={playstore} className='my-[5px]'/>
          </div>
          <div>
            <span className="footer-title">Contact Us</span>
           <p className="link link-hover">Have any job query? </p>
            <div className='flex'>
                <img src={question}/>
                <div className='ms-[8px] my-[5px] md:text-left text-center'>
                    <p className='font-bold'>Call</p>
                    <p className='font-bold text-[#F50057] text-[24px]'>16479</p>
                </div>
            </div>
          </div>
        </footer>
      </div>
    );
};

export default Footer;