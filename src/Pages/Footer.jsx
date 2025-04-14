import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import logo from '../assets/images/foodking-logo.svg'

const Footer = () => {
    return (
        <div className='sm:max-w-7xl mx-auto px-2 '>
            <div className='flex flex-col scroll-smooth md:flex-row mt-20  lg:gap-10 justify-start md:justify-between'>
                <div className='lg:w-1/3 flex flex-col gap-4 text-gray-600'>
                    <img className='w-30' src={logo} alt="" />
                    <p>Call Us</p>
                    <p>++8801587093456</p>
                    <p>1002, Kazipara, Dhaka </p>
                    <p> support@jobfinder.com </p>

                </div>
                <div className='w-2/3 flex flex-col md:flex-row gap-3 lg:gap-5 justify-start lg:justify-between  '>
                    <div>
                        <h2 className='font-semibold lg:text-xl'>Quick Links</h2>
                        <ul className='text-gray-600 flex flex-col  cursor-pointer gap-4 mt-5'>
                            <li className='transition hover:translate-x-4 duration-600 '>Services</li>
                            <li className='transition hover:translate-x-4 duration-600'>About Company</li>
                            <li className='transition hover:translate-x-4 duration-600'>Latest News</li>
                            <li className='transition hover:translate-x-4 duration-600'>Testimonials</li>

                        </ul>

                    </div>
                    <div>
                        <h2 className='font-semibold lg:text-xl'>My Accounts</h2>
                        <ul className='text-gray-600 cursor-pointer flex flex-col gap-4 mt-5'>
                            <li className='transition hover:translate-x-4 duration-600 ' >My Profile</li>
                            <li className='transition hover:translate-x-4 duration-600 '>My Order History</li>
                            <li className='transition hover:translate-x-4 duration-600 '>My Wishlist</li>
                            <li className='transition hover:translate-x-4 duration-600 '>Order Tracking</li>
                            <li className='transition hover:translate-x-4 duration-600 '>Shopping Cart</li>
                        </ul>

                    </div>
                    <div>
                        <h2 className='font-semibold  lg:text-xl'>About Us</h2>
                        <ul className='text-gray-600 cursor-pointer flex flex-col gap-4 mt-5'>
                            <li className='transition hover:translate-x-4 duration-600 '>About Us</li>
                            <li className='transition hover:translate-x-4 duration-600 '>Blog</li>
                            <li className='transition hover:translate-x-4 duration-600 '>Contact</li>
                            <li className='transition hover:translate-x-4 duration-600 '>Terms Page</li>

                        </ul>

                    </div>
                    <div>
                        <h2 className='font-semibold lg:text-xl'>Helpful Resources</h2>
                        <ul className='text-gray-600 cursor-pointer flex flex-col gap-4 mt-5'>
                            <li className='transition hover:translate-x-4 duration-600 '>Site Map</li>
                            <li className='transition hover:translate-x-4 duration-600 '>Tearms of Use</li>
                            <li className='transition hover:translate-x-4 duration-600 '>Privacy Center</li>
                            <li className='transition hover:translate-x-4 duration-600 '>SecuritY Center</li>
                            <li className='transition hover:translate-x-4 duration-600 '>Accessibility Center</li>
                        </ul>

                    </div>

                </div>
            </div>
            <hr className='mt-15 text-gray-400 ' />
            <div className='flex flex-col-reverse mb-5 lg:flex-row items-center gap-3 mt-10 justify-between'>
                <p className='text-gray-600'>2025 - Template By Jesmin Chakma. All Rights Reserved</p>
                <div className='flex gap-10'>
                    <a href='https://www.facebook.com/'><FaFacebook /></a>
                    <a href='https://www.instagram.com/?hl=en'><FaInstagram /></a>
                    <a href='https://x.com/'><FaTwitter /></a>
                    <a href='https://www.linkedin.com/'><FaLinkedin /></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;