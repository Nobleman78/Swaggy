import React from 'react';
import Banner from '../components/Banner';
import FoodItems from '../components/FoodItems';
import FoodMarketing from '../components/FoodMarketing';
import OurCompany from '../components/OurCompany';
import FoodBanner from '../components/FoodBanner';

const Home = () => {
    return (
        <div className=''> 
            <Banner/>
            <FoodItems/>
            <FoodMarketing/>
            <OurCompany/>
            <FoodBanner/>
        </div>
    );
};

export default Home;