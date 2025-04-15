import React from 'react';
import Banner from '../components/Banner';
import FoodItems from '../components/FoodItems';
import FoodMarketing from '../components/FoodMarketing';
import OurCompany from '../components/OurCompany';

const Home = () => {
    return (
        <div className='px-1'> 
            <Banner/>
            <FoodItems/>
            <FoodMarketing/>
            <OurCompany/>
        </div>
    );
};

export default Home;