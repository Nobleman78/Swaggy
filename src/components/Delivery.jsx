import React from 'react';
import hotChiliBg from '../assets/Delivery/HotChili.avif'
import delivertMan from '../assets/Delivery/delivery-man-1.png'
import frameOne from '../assets/Delivery/frame-1.png'

const Delivery = () => {
    return (
        <div className='px-20 w-full relative'>
            <img className='w-full h-140 rounded-2xl' src={hotChiliBg} alt="" />
            <img className='absolute top-10 left-[40%]' src={frameOne} alt="" />
            <div className='absolute top-40 text-white px-20 flex flex-col gap-2'>
                <p className='text-amber-400 text-xl'>Crispy, Every Bite Taste</p>
                <p className='text-5xl'>30 Minutes Fast</p>
                <p className='text-5xl'>Delivery <span className='text-amber-400'>Challenge</span></p>
            </div>
            <img className='absolute bottom-10 right-20 animate-fadeX' src={delivertMan} alt="" />
            <button className='absolute px-20 py-5 text-lg rounded-full cursor-pointer bg-white bottom-40 left-40'>Order Now</button>

        </div>
    );
};

export default Delivery;