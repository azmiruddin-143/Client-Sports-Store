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
        <div className='bg-[#13160b]   '>
            <div className='grid sm:py-16 py-8 lg:grid-cols-4 gap-y-12 mx-8 sm:grid-cols-3 2xl:mx-36  xl:mx-28 lg:mx-10 sm:place-items-center xl:place-items-center my-10 md:my-0'>
                <div className='space-y-4 sm:mt-12 md:mt-9 xl:mt-5 ' >
                    <h1 className='2xl:text-4xl xl:text-3xl text-2xl text-[white] font-bold'>Our Store</h1>
                    <p className='xl:w-10/12 text-base-300 2xl:text-lg xl:text-base'>Shop premium sports gear at unbeatable prices. Enjoy free shipping, exclusive deals, and fast delivery worldwide!"</p>
                    <div className='flex text-white items-center gap-3'>
                        <FaFacebook size={30} />
                        <FaTwitterSquare size={30} />
                        <FaLinkedin size={30} />
                    </div>
                </div>


                <div className=''>
                    <h1 className='text-[white] 2xl:text-3xl mt-4 text-2xl  lg:text-2xl'>Quicklinks</h1>
                    <ul className='xl:text-lg text-base-300 space-y-2 mt-4'>
                        <div><NavLink to="/">Home</NavLink></div>
                        <div><NavLink to="allSportsEquipment">All Sports Equipment</NavLink></div>
                        <div><NavLink to="/addEquipment">Add Equipment</NavLink></div>
                        <div><NavLink to="/myEquipmentList">My Equipment List
                        </NavLink></div>
                    </ul>
                </div>

                <div>
                    <h1 className='text-[white] 2xl:text-3xl text-2xl mt-4 lg:text-2xl'>Support</h1>
                    <ul className='xl:text-lg text-base-300 space-y-2 mt-4'>
                        <div><NavLink to="/helpcenter"> Help Center</NavLink></div>
                        <div><NavLink to="/faq"> FAQ's</NavLink></div>
                        <div><NavLink to="privacypolicy">Privacy Policy</NavLink></div>
                        <div><NavLink to="termscondition">Terms & Condition</NavLink></div>
                    </ul>
                </div>
                <div>
                    <h1 className='text-[white] 2xl:text-3xl text-2xl lg:mt-5 xl:mt-0 lg:text-2xl'>Let’s get in touch</h1>
                    <p className='text-base-300 xl:w-8/12 my-5'>Sign up for our newsletter and receive 10% off your</p>
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
            <div className='sm:flex text-center  justify-between 2xl:mx-36 mx-8 xl:mx-28 items-center'>
                <h1 className='sm:text-base text-sm ba py-6 text-white'>Copyright © 2024 Sports Sphere. All Right Reserved</h1>
                <img src={paymnet} alt="" />
            </div>

        </div>
    );
};

export default Footer;