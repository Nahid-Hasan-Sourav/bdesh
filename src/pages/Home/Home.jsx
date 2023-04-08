import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import JobVacancies from '../../components/JobVacancies/JobVacancies';


const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
           <div className='hidden md:block'>
           <JobVacancies />
           </div>
        </div>
    );
};

export default Home;