import React from 'react';
import rollerBox from '../assets/Preview/roller-box.png'
import burgerTextOne from '../assets/Preview/pizza-text-2-2.png'
import burgerTextTwo from '../assets/Preview/burger-text-1.png'
import previewBg from '../assets/Preview/trending.jpg'
import bigBurger from '../assets/Preview/big-burger.png'

const Preview = () => {
    return (
        <div className='sm:max-w-7xl mx-auto px-10 flex gap-10'>
            <div className='w-2/3 relative group'>
                <img className='opacity-100 z-0 rounded-2xl' src={previewBg} alt="" />
                <h2 className='absolute top-20 z-20  flex flex-col  font-semibold text-center text-white  w-80 '><span className='text-4xl'>Today </span><br />
                    <span className='text-5xl'>Special</span><br />
                    <span className='text-4xl'>Beef <span className='text-amber-300 '>Burger</span></span></h2>
                <img className='transform transition duration-300 group-hover:scale-110 absolute bottom-5 right-0' src={bigBurger} alt="" />
                <img className='absolute top-5 right-0' src={burgerTextOne} alt="" />
                <img className='absolute top-20 right-60 animate-sway  ' src={burgerTextTwo} alt="" />
                <button className=' px-15 py-4 bg-green-600 absolute bottom-25 rounded-lg cursor-pointer text-white left-15'>Order Now</button>
            </div>
            <div className='w-1/2 bg-gradient-to-b group from-neutral-900 via-black to-white text-white p-6 rounded-2xl relative overflow-hidden'>
                <h2 className='text-red-500 font-semibold mb-3 relative z-10'>Crispy, Every Bite Taste</h2>
                <p className='text-6xl font-semibold relative z-10'>FAST Foods Meal</p>
                <p className='text-lg mt-4 relative z-10 w-40'>The mouth-watering aroma of sizzling burgers</p>
                <img className='absolute bottom-0 right-0 z-0 transform  transition-all duration-300 group-hover:translate-x-20' src={rollerBox} alt="" />
                <button className='px-10 py-4 rounded-xl cursor-pointer bg-green-600 mt-5'>Order Now</button>
            </div>

        </div>
    );
};

export default Preview;