import React, { useState } from 'react';

const PopularFoods = () => {
    const [menu, setMenu] = useState([])
    fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularMenu = data.filter(item => item.category === 'popular')
            setMenu(popularMenu)
        })

    return (
        <div className='sm:max-w-7xl mx-auto px-2 mt-10'>
            <div className='flex flex-col font-semibold gap-2'>
                <p className='text-xl text-green-600'>Enjoy Your Every Bite</p>
                <h2 className='text-5xl '>Popular Foods Items</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5  '>
                {
                    menu.map((item, index) => {
                        return (
                            <div key={index} className='shadow-md px-8 py-5 cursor-pointer rounded-2xl flex flex-col gap-4' >
                                <img className='rounded-xl' src={item.image} alt="" />
                                <h2 className='text-2xl'>{item.name}</h2>
                                <p className='font-bold text-xl'>${item.price}</p>
                                <button className='bg-green-400 text-white px-4 py-2 rounded-full hover:bg-green-700 cursor-pointer '>Add to Cart</button>

                            </div>
                        )
                    })
                }

            </div>
            <div className="flex justify-center mt-10"> 
                <button className='bg-green-600 px-30 py-4 text-white cursor-pointer rounded-full hover:bg-green-700 transition-colors'>
                    Show All Items
                </button>
            </div>


        </div>
    );
};

export default PopularFoods;