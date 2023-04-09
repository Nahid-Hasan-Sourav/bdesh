import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import JobVacancies from '../../components/JobVacancies/JobVacancies';
import Category from '../../components/Category/Category';



const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
           <div className='hidden md:block'>
           <JobVacancies />
           </div>
           <Category/>
           {/* <Example/> */}
        </div>
    );
};

export default Home;