import { useState } from "react";
import { IoMdArrowDropright, } from "react-icons/io";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

import logo from "../../assets/logo_bdesh.svg";
import navAdd from "../../assets/nav-add.png";
import self from "../../assets/self.jpg";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
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
            <div className="mx-10 flex flex-row  justify-between items-center  h-[43px]">
              <div className="w-[80%]">
                <a className="mr-[21px]">Bdjobs</a>
                <a className="mr-[21px]">Jobs</a>
                <a className="mr-[21px]">Job Seeker Account</a>
                <a className="bg-gray-400 h-[43px] inline-block px-[4px]">
                  AccountRecruitment Agency / Foreign Employers
                  <span className="text-[25px]">
                    <IoMdArrowDropright className="inline-block"></IoMdArrowDropright>
                    <IoMdArrowDropright className="inline-block -ml-[19px]"></IoMdArrowDropright>
                  </span>
                </a>
              </div>

              <div className="text-right flex justify-start w-[20%]">
                <div className="flex justify-start">
                  <span className="w-[24px] h-[24px] text-white bg-[#3b5998] rounded-[50%] flex justify-center items-center mr-[10px]">
                    <AiFillFacebook />
                  </span>
                  <span className="w-[24px] h-[24px] flex justify-center items-center text-white bg-[#c4302b] rounded-[50%]">
                    <AiFillYoutube />
                  </span>
                </div>
                <div className="btn-group flex justify-center items-center ml-[10px]">
                  <button className="btn btn-xs bg-blue-700 text-white">
                    Eng
                  </button>
                  <button className="btn btn-xs text-blue-700 bg-white">
                    বাংলা
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white">
              <div className="mx-10 py-[15px] flex justify-between">
                <div className="w-[33.33%]">
                  <img src={logo} className="w-[170px]" />
                </div>

                <div className="w-[33.33%]">
                  <img src={navAdd} />
                </div>

                <div className="flex justify-start w-[33.33%]">
                  <div className="flex items-center">
                    <img
                      src={self}
                      className="w-[22px] h-[22px] rounded-[50%] border-2 border-blue-600 mr-[5px]"
                    />
                    <span>Nahid Hasan Sourav</span>
                  </div>
                  <div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              onClick={toggleMenu}
            >
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
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
