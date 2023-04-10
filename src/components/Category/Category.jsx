import React from 'react';
import category from '../../assets/category.png'
import { Tab } from '@headlessui/react'
import ButtonGroup from 'flowbite-react/lib/esm/components/Button/ButtonGroup';
import { Button } from 'flowbite-react';

import specialSkilled from '../../assets/data/specialSkilled.json'
import generalSkilled from '../../assets/data/generalSkilled.json'
import Skilled from '../Skilled/Skilled';
import MakeBiodata from '../MakeBiodata/MakeBiodata';
import Guideline from '../Guideline/Guideline';
import ImportantLink from '../ImportantLink/ImportantLink';


const Category = () => { 
    return (
      <div className="container mx-auto p-[35px] bg-[#ECEFF1]">
        <div className="flex md:flex-row flex-col">
          <div className=" md:w-[70%] w-[100%] ">
            <div>
              <Tab.Group>

                <div className="flex justify-between items-center h-[100%]">
                  
                    <div className="flex items-center h-full">
                      <span>
                        <img src={category} className="w-[30px] h-[30px]" />
                      </span>
                      <h2 className="text-[20px] ms-[4px]">Category</h2>
                    </div>
                  
                  <div className='-mt-[10px]'>
                    <Tab.List>
                      <buttton className="btn-group">
                        <Tab>
                          {({ selected }) => (
                            /* Use the `selected` state to conditionally style the selected tab. */
                            <button
                              className={
                                `
                                btn btn-sm rounded-r-none mt-0
                                ${selected ? "bg-blue-500 text-white "
                                  : "bg-white text-blue-500 border-blue-500"}
                                `
                              }
                            >
                              Special skilled
                            </button>
                          )}
                        </Tab>

                        <Tab>
                          {({ selected }) => (
                            /* Use the `selected` state to conditionally style the selected tab. */
                            <button
                            className={
                                `
                                btn btn-sm rounded-l-none mt-0
                                ${selected ? "bg-blue-500 text-white "
                                  : "bg-white text-blue-500 border-blue-500"}
                                `
                              }
                            >
                              General
                            </button>
                          )}
                        </Tab>
                      </buttton>
                    </Tab.List>
                  </div>
                </div>

                <div>
                  <Tab.Panels>
                    <Tab.Panel className="">
                      <Skilled data={specialSkilled} />
                    </Tab.Panel>
                    <Tab.Panel>
                      <Skilled data={generalSkilled} />
                    </Tab.Panel>
                  </Tab.Panels>
                </div>
              </Tab.Group>
            </div>

            <div className='md:hidden block mt-[0px]'>
               <button className="btn btn-primary w-[100%] btn-warning">আরো দেখুন</button>
            </div>
           <div>
            <MakeBiodata/>
           </div>

          </div>

          <div className=" md:w-[30%] w-[100%] lg:px-[20px] md:px-[10px]">
            <Guideline/>
            <ImportantLink/>
          </div>
        </div>
      </div>
    );
};

export default Category;