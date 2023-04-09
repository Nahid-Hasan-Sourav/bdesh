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
                <div className="flex justify-between">
                  <div>
                    <div className="flex">
                      <span>
                        <img src={category} className="w-[30px] h-[30px]" />
                      </span>
                      <h2 className="text-[20px] ms-[4px]">Category</h2>
                    </div>
                  </div>
                  <div>
                    <Tab.List>
                      <ButtonGroup className="">
                        <Tab>
                          {({ selected }) => (
                            /* Use the `selected` state to conditionally style the selected tab. */
                            <button
                              className={
                                `
                                btn btn-sm rounded-r-none
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
                                btn btn-sm rounded-l-none
                                ${selected ? "bg-blue-500 text-white "
                                  : "bg-white text-blue-500 border-blue-500"}
                                `
                              }
                            >
                              General
                            </button>
                          )}
                        </Tab>
                      </ButtonGroup>
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

            <div className='md:hidden block mt-[15px]'>
               <button className="btn btn-primary w-[100%]">Button</button>
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