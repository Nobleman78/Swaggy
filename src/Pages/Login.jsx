import React from 'react';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    return (
        <div className='sm:max-w-7xl mx-auto px-2 mt-10'>
            <Helmet>
                <title>Login | Food King</title>
            </Helmet>
            <h2>Welcome to Login</h2>
        </div>
    );
};

export default Login;