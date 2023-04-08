import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import JobVacancies from '../../components/JobVacancies/JobVacancies';


const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <JobVacancies/>
        </div>
    );
};

export default Home;