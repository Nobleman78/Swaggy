import React from 'react';
import bg from '../assets/images/full-hd-2.avif'
import grilled from '../assets/images/grilled.png'
import discount from '../assets/images/50percent-off.png'


const FoodBanner = () => {
    return (
        <div className='mt-20 relative '>
           
            <p className='absolute flex flex-col gap-5 text-white font-bold top-50 left-20 text-'><span className='text-4xl'>Save 20%</span>
                <span className='text-5xl text-shadow-2xs' >Today's <span className='text-yellow-500'>Astackin</span> Day
                </span>
                <span className='text-5xl text-shadow-2xs '> Grilled <span className='text-yellow-500'>Chiken $50</span></span>
            </p>
            <img src={discount} className='absolute top-[50%] left-[35%] animate-fadey' alt="" />
            <img src={bg} alt="" className='w-full' />
            <img src={grilled} className='absolute top-35 right-0 w-[50%] ' alt="" />
            <button className='absolute top-100 text-white left-20 bg-green-400 hover:transition hover:bg-green-700 transition-colors duration-500 text-xl px-15 py-5 rounded-lg mt-10 cursor-pointer'>Order Now</button>
        </div>
    );
};

export default FoodBanner;