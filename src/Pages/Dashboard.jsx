import React from 'react';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
    return (

        <div className='sm:max-w-7xl mx-auto px-2 '>
            <Helmet>
                <title>Dashboard | Food King</title>
            </Helmet>
            <h2>This is Dashboard</h2>
        </div>
    );
};

export default Dashboard;