import React from 'react';
import serviceBg from '../assets/ProvideService/trend.jpg'
import cooking from '../assets/ProvideService/cooking.png'
import delivery from '../assets/ProvideService/delivery-bike.png'
import healtyFood from '../assets/ProvideService/healthy-food.png'
import fastFood from '../assets/ProvideService/fast-food.png'

const Services = () => {
    return (
        <div className='sm:max-w-7xl px-10 mx-auto mt-10 relative '>
            <img className='w-full rounded-2xl opacity-100 h-100' src={serviceBg} alt="" />
            <div className='flex absolute top-20 text-white px-20 gap-2 '>
                <div className='w-1/4 flex flex-col gap-2 '>
                    <img className='w-20'src={fastFood} alt="" />
                    <h2 className='font-semibold text-xl'>SUPER QUALITY FOOD</h2>
                    <p className='font-semibold  leading-relaxed'>Indulge in the finest flavors crafted with passion, precision, and premium ingredients. </p>

                </div>
                <div className='w-1/4 flex flex-col gap-2'>
                    <img className='w-20' src={cooking} alt="" />
                    <h2 className='font-semibold text-xl '>ORIGINAL RECIPES</h2>
                    <p className='font-semibold  leading-relaxed'>A team of dreamers and doers building unique interactive music and art</p>

                </div>
                <div className='w-1/4 flex flex-col gap-2'>
                    <img className='w-20' src={delivery} alt="" />
                    <h2 className='font-semibold text-xl'>QUICK FAST DELIVERY</h2>
                    <p className='font-semibold  leading-relaxed'>A team of dreamers and doers building unique interactive music and art</p>
                </div>
                <div className='w-1/4 flex flex-col gap-2'>
                    <img className='w-20' src={healtyFood} alt="" />
                    <h2 className='font-semibold text-xl'>100% FRESH FOODS</h2>
                    <p className='font-semibold  leading-relaxed'>A team of dreamers and doers building unique interactive music and art</p>

                </div>

            </div>
        </div>
    );
};

export default Services;