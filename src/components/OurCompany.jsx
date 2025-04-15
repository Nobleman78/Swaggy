import React from 'react';
import Slider from 'react-slick';
import companyOne from '../assets/images/01.svg'
import companyTwo from '../assets/images/02.svg'
import companyThree from '../assets/images/03.svg'
import companyFour from '../assets/images/04.svg'
import companySix from '../assets/images/06.svg'

const OurCompany = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024, // for medium screens
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, // for small screens
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
        
    };

    return (
        <div className='mt-10 px-2 sm:max-w-7xl mx-auto  items-center'>
            <h2 className='text-xl font-semibold'>GLOBAL <span className='text-green-600'>5K+ </span>HAPPY SPONSORS WITH US</h2>
            <Slider {...settings} className='py-2 mt-5 px-5'>
                <div>
                    <img src={companyOne} alt="" />
                </div>
                <div>
                    <img src={companyTwo} alt="" />
                </div>
                <div>
                    <img src={companyThree} alt="" />
                </div>
                <div>
                    <img src={companyFour} alt="" />
                </div>
                <div>
                    <img src={companySix} alt="" />
                </div>
                
            </Slider>
        </div>
    );
};

export default OurCompany;