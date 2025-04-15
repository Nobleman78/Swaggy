// Banner.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/images/home/01.jpg';
import img2 from '../assets/images/home/02.jpg';
import img3 from '../assets/images/home/03.png';
import img4 from '../assets/images/home/04.jpg';
import img5 from '../assets/images/home/05.png';
import img6 from '../assets/images/home/06.png';

const Banner = () => {
    const sliderArray = [img1, img2, img3, img4, img5, img6];
    return (
        <div>
            <Carousel
                autoPlay
                interval={1000}
                infiniteLoop
                showThumbs={false}
                thumbWidth={100}
                renderThumbs={() =>
                    sliderArray.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt='Thumbnail'
                            className='object-cover'
                        />

                    ))

                }
            >
                {sliderArray.map((src, index) => (
                    <div key={index}>
                        <img src={src} alt='Slider-Image' className='lg:h-150' />

                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Banner;
