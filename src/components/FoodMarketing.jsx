import React from 'react';
import discount from '../assets/images/50percent-off.png'
import burgerText from '../assets/images/burger-text.png'
import mainFood from '../assets/images/main-food.png'
import pizza from '../assets/images/pizza-2 (1).png'
import pizzaText from '../assets/images/pizza-text-2.png'
import pizzaTextTwo from '../assets/images/pizza-text.png'
import 'animate.css';

const FoodMarketing = () => {
    return (
        <div className='max-auto  px-20 mt-20 flex gap-4'>
            <div className='bg-gradient-to-b group from-neutral-900 via-black to-white text-white p-6 rounded-2xl w-2/4 relative h-100'>
                <div className='mt-10 z-10 relative'>
                    <p className='text-white text-xl'>Cripsy, Every Bite Taste</p>
                    <h1 className='text-5xl w-20 font-semibold text-shadow-2xs'>SUPER DELICIOUS</h1>
                </div>
                <img className='absolute bottom-5 left-0 zoom-pulse' src={discount} alt="" />
                <img className='absolute right-0 bottom-1 opacity-80 z-0 transform transition duration-300 group-hover:scale-110' src={mainFood} alt="" />
                <img className='absolute right-0 top-0  animate-sway' src={burgerText} alt="" />

            </div>
            <div className="relative group w-3/4 bg-gradient-to-b from-red-700 via-red-700 to-yellow-100 p-6 rounded-2xl text-white h-100">
                <img className="absolute right-0  transform transition duration-300 group-hover:scale-110" src={pizza} alt="" />
                <img className="absolute left-20  animate-sway" src={pizzaText} alt="" />
                <img className="absolute bottom-5 zoom-pulse" src={pizzaTextTwo} alt="" />
            </div>
        </div>
    );
};

export default FoodMarketing;