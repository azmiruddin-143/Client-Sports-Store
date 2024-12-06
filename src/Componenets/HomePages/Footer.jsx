import React from 'react';
import { FaArrowRight, FaFacebook } from "react-icons/fa6";
import { FaTwitterSquare, FaGlobe } from "react-icons/fa";
import paymnet from "../../assets/payment-gatway.png"
import { FaLinkedin } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='bg-[#13160b] '>
            <div className='grid lg:grid-cols-4 gap-y-12 mx-8 sm:grid-cols-3  xl:mx-36 lg:mx-8 sm:place-items-center  xl:place-items-center my-10 md:my-24'>
                <div className='space-y-4 sm:mt-12 md:mt-5 xl:mt-0 ' >
                    <h1 className='2xl:text-4xl xl:text-3xl text-2xl text-[white] font-bold'>Our Store</h1>
                    <p className='xl:w-10/12 text-base-300 2xl:text-lg xl:text-base'>Natsy is health and wellness destination for looking well, feeling well, and performing well. Our role is to help motivate everyone to get moving and help them achieve their wellness goals.</p>
                    <div className='flex text-white items-center gap-3'>
                        <FaFacebook size={30} />
                        <FaTwitterSquare size={30} />
                        <FaLinkedin size={30} />
                    </div>
                </div>


                <div className=''>
                    <h1 className='text-[white] 2xl:text-3xl lg:text-2xl'>Quicklinks</h1>
                    <ul className='xl:text-lg text-base-300 space-y-2 mt-4'>
                        <div><NavLink to="/service">Service</NavLink></div>
                        <div><NavLink to="myprofile">MyProfile</NavLink></div>
                        <div><NavLink to="about">About</NavLink></div>
                        <div><NavLink to="/">Home</NavLink></div>
                    </ul>
                </div>

                <div>
                    <h1 className='text-[white] 2xl:text-3xl lg:text-2xl'>Support</h1>
                    <ul className='xl:text-lg text-base-300 space-y-2 mt-4'>
                        <div><NavLink to="/helpcenter"> Help Center</NavLink></div>
                        <div><NavLink to="/faq"> FAQ's</NavLink></div>
                        <div><NavLink to="privacypolicy">Privacy Policy</NavLink></div>
                        <div><NavLink to="termscondition">Terms & Condition</NavLink></div>
                    </ul>
                </div>
                <div>
                    <h1 className='text-[white] 2xl:text-3xl lg:text-2xl'>Let’s get in touch</h1>
                    <p className='text-base-300 w-8/12 my-5'>Sign up for our newsletter and receive 10% off your</p>
                    <ul className='xl:text-lg space-y-2 mt-4'>
                        <div className='flex gap-5 items-center'>
                            <input type="email" placeholder="Your E-mail" name='email' className="input input-bordered w-[100%]" required />
                            <div >
                                <button className='bg-[#e09d15] flex justify-center px-3 py-3 rounded-full'> <FaArrowRight size={20} /></button>
                            </div>
                        </div>

                    </ul>
                </div>

            </div>
            <hr />
            <div className='flex justify-between mx-36 items-center'>
                <h1 className='sm:text-base text-sm ba py-6 text-white'>Copyright © 2024 Career Counseling. All Right Reserved</h1>
                <img src={paymnet} alt="" />
            </div>

        </div>
    );
};

export default Footer;