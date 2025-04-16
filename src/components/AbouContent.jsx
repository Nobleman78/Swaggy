import React from 'react';
import burger from '../assets/AboutContent/burger-4.png'
import fastFood from '../assets/ProvideService/fast-food.png'
import reputation from '../assets/AboutContent/reputation.png'

const AbouContent = () => {
    return (
        <div className='mt-20 flex mx-20 justify-center '>
            <div className='w-1/2'>
                <img src={burger} alt="" />
            </div>

            <div className='w-1/2'>
                <h1 className='text-green-600 text-xl font-semibold'>About Our Food</h1>
                <p className='text-6xl font-semibold '>Where Quality Meet Excellent <span className='text-green-600'>Service</span>.</p>
                <p className='mt-8 text-gray-600'>Its the perfect dining experience where every dish is crafted with fresh, high-quality Experience quick and efficient service that ensures your food is servead fresh Its the dining experience where every dish is crafted with fresh, high-quality ingredients</p>
                <div className='flex mt-5 gap-4'>
                    <div className='flex gap-2'>
                        <img className='w-20 h-12' src={fastFood} alt="" />
                        <p className='text-lg'>A team of dreamers and doers building unique interactive music and art</p>
                    </div>
                    <div className='flex gap-2'>
                        <img className='w-20 h-12' src={reputation} alt="" />
                        <p className='text-lg'>A team of dreamers and doers building unique interactive music and art</p>
                    </div>
                </div>
                <button className='px-15 py-6 text-lg cursor-pointer hover:bg-green-700 text-white rounded-full bg-green-500 mb-10 mt-5'>More About Us</button>
            </div>

        </div>
    );
};

export default AbouContent;