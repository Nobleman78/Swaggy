import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='sm:max-w-7xl mx-auto px-2 '>
            <h2>Menu</h2>
            <ul>
                <Link to='salad'><li>Salad</li></Link>
                <Link to='noodles'><li>Noodles</li></Link>
                <Link to='fish-finger'><li>FishFinger</li></Link>
                <Outlet/>
            </ul>
        
            
        </div>
    );
};

export default Menu;