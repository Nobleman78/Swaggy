import React from 'react';
import { Helmet } from 'react-helmet-async';
const Cart = () => {
    return (
        <div  className='sm:max-w-7xl mx-auto px-2 '>
            <Helmet>
                <title>Cart | Food King</title>
            </Helmet>
            <h2>Cart</h2>
        </div>
    );
};

export default Cart;