import React from 'react';
import Banner from '../components/Banner';
import FoodItems from '../components/FoodItems';

const Home = () => {
    return (
        <div className='px-1'> 
            <Banner/>
            <FoodItems/>
        </div>
    );
};

export default Home;