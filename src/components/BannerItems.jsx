import React from 'react';
import bannerItemOne from '../assets/BannerItems/03-1.jpg'
import bannerItemTwo from '../assets/BannerItems/04-1.jpg'
import bannerItemThree from '../assets/BannerItems/05-1.jpg'
import bannerItemFour from '../assets/BannerItems/06-1.jpg'
import bannerItemFive from '../assets/BannerItems/07-1.jpg'

const BannerItems = () => {
    return (
        <div className='flex relative mt-20 mx-8 group  '>
            <img className='w-65  z-0 zoom-pulse' src={bannerItemOne} alt="" />
            <img className='w-65 zoom-pulse' src={bannerItemTwo} alt="" />
            <img className='w-65 zoom-pulse' src={bannerItemThree} alt="" />
            <img className='w-65 zoom-pulse' src={bannerItemFour} alt="" />
            <img className='w-65 zoom-pulse' src={bannerItemFive} alt="" />
        </div>
    );
};

export default BannerItems;