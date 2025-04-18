import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Menu = () => {

    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenu(data))
    })
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10 py-10' >
            <Helmet>
                <title>Our Menu | Food King</title>
            </Helmet>
            {
                menu.map(item => {
                    return (
                        <div className='shadow-xl px-8 py-5 cursor-pointer rounded-2xl flex flex-col gap-4' >
                            <img className='w-100 h-50 rounded-xl' src={item.image} alt="" />
                            <p>Name : {item.name}</p>
                            <h2>Price : $ {item.price} </h2>
                            <p>Category : {item.category}</p> 
                            <button className='bg-green-400 px-5 text-white rounded-full cursor-pointer py-2'>Add To Cart</button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Menu;