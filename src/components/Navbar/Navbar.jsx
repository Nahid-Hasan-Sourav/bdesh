import { useState } from 'react';
import { IoMdArrowDropright } from 'react-icons/io';


const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#ECEFF1]">
      <div className="">
        <div className="">
          
            
            <div className="hidden md:block">
              <div className="mx-10 flex flex-row  justify-between items-center  h-16">
                <div>
                    <a className='mr-[21px]'>Bdjobs</a>
                    <a className='mr-[21px]'>Jobs</a>
                    <a className='mr-[21px]'>Job Seeker Account</a>
                    <a className=''>AccountRecruitment Agency / Foreign Employers
                    <span className='text-[25px]'><IoMdArrowDropright className='inline-block'></IoMdArrowDropright> 
                    <IoMdArrowDropright className='inline-block -ml-[19px]'></IoMdArrowDropright></span>
                    </a>
                </div>
               
                <div className='text-right'>
                    <a>Bdjobs</a>
                    <a>Jobs</a>
                    <a>Job Seeker Account</a>
                </div>
                

              </div>
            </div>
         
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              onClick={toggleMenu}
            >
              <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigation.map((item) => (
            <a
              key={item.name}
              
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
