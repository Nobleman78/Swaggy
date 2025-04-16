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
import CustomerReview from '../components/CustomerReview';
import Delivery from '../components/Delivery';
import BannerItems from '../components/BannerItems';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className='bg-gray-50 h-auto'>
            <Helmet>
                <title>Home | Food King</title>
            </Helmet>
            <Banner />
            <FoodItems />
            <FoodMarketing />
            <OurCompany />
            <FoodBanner />
            <PopularFoods />
            <Trending />
            <Marquee />
            <Services />
            <AbouContent />
            <Preview />
            <CustomerReview />
            <Delivery />
            <BannerItems />
        </div>
    );
};

export default Home;