import React from 'react';
import Banner from '../components/Banner';
import FoodItems from '../components/FoodCategory';
import FoodMarketing from '../components/FoodMarketing';
import OurCompany from '../components/OurCompany';
import FoodBanner from '../components/FoodBanner';
import PopularFoods from '../components/PopularFoods';
import Trending from '../components/Trending';
import Marquee from '../components/Marquee';
import Services from '../components/Services';
import AbouContent from '../components/AbouContent';
import Preview from '../components/Preview';

const Home = () => {
    return (
        <div className='bg-gray-50 h-auto'> 
            <Banner/>
            <FoodItems/>
            <FoodMarketing/>
            <OurCompany/>
            <FoodBanner/>
            <PopularFoods/>
            <Trending/>
            <Marquee/>
            <Services/>
            <AbouContent/>
            <Preview/>
        </div>
    );
};

export default Home;