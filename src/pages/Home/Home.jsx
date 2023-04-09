import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import JobVacancies from '../../components/JobVacancies/JobVacancies';
import Category from '../../components/Category/Category';
import Sliders from '../../components/Category/Slider/Slider';
import VideoOrganization from '../../components/Videoorganization/VideoOrganization';
import Footer from '../../components/Footer/Footer';



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
           <Sliders/>
           <VideoOrganization/>
           <Footer/>
        </div>
    );
};

export default Home;