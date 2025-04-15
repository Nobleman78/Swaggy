import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import menu1 from '../assets/images/beef-ruti.png'
import menu2 from '../assets/images/burger-2.png'
import menu3 from '../assets/images/grilled-2.png'
import menu4 from '../assets/images/pizza-2.png'
import menu5 from '../assets/images/pasta-2.png'
import menu6 from '../assets/images/french-fry.png'


const FoodItems = () => {
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
        <div className='mt-10 sm:max-w-7xl mx-auto px-2 '>
            <h3 className='text-xl text-green-700 font-semibold'>Cripsy, Every Bite Test</h3>
            <h1 className='text-5xl font-semibold'>Popular Food Category</h1>

            <div className="max-w-7xl mx-auto cursor-pointer  mt-10">
                <Slider {...settings}>
                    <div className="flex items-center gap-4 p-4 hover:bg-green-600 hover:text-white rounded-2xl">
                        <img src={menu1} alt="" className="" />
                        <h2 className=" mt-2 text-3xl font-semibold text-center">Beef</h2>
                        <p className='w-10 mt-2 bg-white border mx-auto'></p>
                        <h2 className='text-center mt-2 text-lg text-semibold'>10 Products</h2>
                    </div>

                    <div className="flex items-center gap-4 p-4 hover:bg-green-600 hover:text-white rounded-2xl">
                        <img src={menu2} alt="" />
                        <p className="text-3xl font-semibold text-center">Burger</p>
                        <p className='w-10 mt-2 bg-white border mx-auto'></p>
                        <h2 className='text-center text-lg mt-2 text-semibold'>10 Products</h2>
                    </div>
                    <div className="flex items-center gap-4 p-4 hover:bg-green-600 hover:text-white rounded-2xl">
                        <img src={menu3} alt="" />
                        <p className="text-3xl mt-2 font-semibold text-center">Chicken</p>
                        <p className='w-10 mt-2 bg-white border mx-auto'></p>
                        <h2 className='text-center text-lg mt-2 text-semibold '>10 Products</h2>
                    </div>
                    <div className="flex items-center gap-4 p-4 hover:bg-green-600 hover:text-white rounded-2xl">
                        <img src={menu4} alt="" />
                        <p className="text-3xl font-semibold text-center">Pizza</p>
                        <p className='w-10 mt-2 bg-white border mx-auto'></p>
                        <h2 className='text-center text-lg mt-2 text-semibold '>10 Products</h2>
                    </div>
                    <div className="flex items-center gap-4 p-4 hover:bg-green-600 hover:text-white rounded-2xl">
                        <img src={menu5} alt="" />
                        <p className="text-3xl mt-3 font-semibold text-center">Pasta</p>
                        <p className='w-10 mt-2 bg-white border mx-auto'></p>
                        <h2 className='text-center text-lg mt-2 text-semibold '>10 Products</h2>
                    </div>
                    <div className="flex items-center gap-4 p-4 hover:bg-green-600 hover:text-white rounded-2xl">
                        <img className='w-50 lg:h-50' src={menu6} alt="" />
                        <p className="lg:text-3xl mt-5 font-semibold text-center" >French Fry</p>
                        <p className='w-10 mt-2  bg-white border mx-auto'></p>
                        <p className='text-center text-lg mt-2  text-semibold '>10 Products</p>
                    </div>
                </Slider>
            </div>

        </div>
    );
};


export default FoodItems;