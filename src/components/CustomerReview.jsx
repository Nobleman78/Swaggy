import React from 'react';
import Slider from 'react-slick';
import customerReview from '../assets/CustomerReview/graph.png'
import profile from '../assets/CustomerReview/profile.png'

const CustomerReview = () => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true
    };
    return (
        <div>
            <Slider {...settings}>
                <div className='text-center mt-10 '>
                    <img className='w-20 mx-auto' src={profile} alt="" />
                    <h2 className='text-2xl font-semibold'>Jesmin Chakma</h2>
                    <p className='text-red-700 text-xl'>Business CEO and Founder</p>
                    <p className='text-3xl font-semibold italic'>Thank You For The Last Dinner.Those Items Are Really Tasty Aand Fresh.</p>
                    <img className='w-25 mx-auto ' src={customerReview} alt="" />
                </div>
               
                <div className='text-center mt-10 '>
                    <img className='w-20 mx-auto' src={profile} alt="" />
                    <h2 className='text-2xl font-semibold'>Supen Chakma</h2>
                    <p className='text-red-700 text-xl'>Business CEO and Founder</p>
                    <p className='text-3xl font-semibold italic w-[90%] mx-auto'>The cheeseburger was juicy and well-seasoned, with a perfectly grilled patty that had a nice char on the outside.</p>
                    <img className='w-25 mx-auto ' src={customerReview} alt="" />
                </div>
               
                <div className='text-center mt-10 '>
                    <img className='w-20 mx-auto' src={profile} alt="" />
                    <h2 className='text-2xl font-semibold'>Arkit Chakma</h2>
                    <p className='text-red-700 text-xl'>Business CEO and Founder</p>
                    <p className='text-3xl font-semibold italic'>One of the best pizzas I’ve had—great balance of flavors and textures.</p>
                    <img className='w-25 mx-auto ' src={customerReview} alt="" />
                </div>
               


            </Slider>
        </div>
    );
};

export default CustomerReview;