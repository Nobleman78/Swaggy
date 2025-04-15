import React from 'react';
import percentage from '../assets/trending/50percent-off-2-1.png'
import bigPizza from '../assets/trending/big-pizza.png'
import burger from '../assets/trending/burger.png'
import chicken from '../assets/trending/chicken.png'
import comBo from '../assets/trending/combo-pizza-text.png'
import pizza from '../assets/trending/pizza.png'
import trending from '../assets/trending/large.avif'

const Trending = () => {
    return (
        <div className='bg-gray-200'>
            <div className='mt-20 flex items-center justify-between h-140'>
                <div className='w-1/2 px-20 py-10 '>
                    <div className='flex flex-col font-semibold gap-2'>
                        <h2 className='text-xl text-green-600'>CRISPY, EVERY BITE TASTE</h2>
                        <p className='text-5xl '>Trending Food combo  <br />Offer  less <span>20%</span></p>
                    </div>
                    <p className='text-gray-600 mt-5'>A team of dreamers and doers building unique interactive music and art festivals.</p>
                    <div className='flex flex-col gap-4 mt-10 cursor-pointer'>
                        <div className='flex bg-green-300 px-4 py-3 items-center gap-4 rounded-lg'>
                            <img src={chicken} alt="" />
                            <p>30% Off 4pcs Hot Cripsy & 8 Pcs Wing</p>

                        </div>
                        <div className='bg-amber-300 px-4 py-3 flex items-center gap-4 rounded-lg'>
                            <img src={pizza} alt="" />
                            <p>20% Off Tasty Pizza With Drink</p>

                        </div>
                        <div className='flex items-center gap-4 bg-blue-300 px-4 py-3 rounded-lg'>
                            <img src={burger} alt="" />
                            <p>2pcs Humberger With Drinks & Souces</p>
                        </div>
                    </div>

                </div>
                <div className='w-1/2 relative'>
                    <img className='h-140 w-full' src={trending} alt="" />
                    <img src={comBo} className='absolute top-20 animate-sway' alt="" />
                    <img src={percentage} className='absolute top-0 right-40 zoom-pulse ' alt="" />
                    <img src={bigPizza} className='absolute bottom-5 left-[-50px]' alt="" />
                </div>

            </div>
            
        </div>
    );
};

export default Trending;