import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import JobVacancies from '../../components/JobVacancies/JobVacancies';
import Category from '../../components/Category/Category';

import VideoOrganization from '../../components/Videoorganization/VideoOrganization';
import Footer from '../../components/Footer/Footer';

import CountryJobs from '../../components/Countryjobs/CountryJobs';



const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
           <div className='hidden md:block'>
           <JobVacancies />
           </div>
           <Category/>
           
           <CountryJobs/>
           <VideoOrganization/>
           <Footer/>
        </div>
    );
};

export default Home;