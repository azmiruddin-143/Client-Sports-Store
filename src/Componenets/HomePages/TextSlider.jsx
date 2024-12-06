import React from 'react';
import Marquee from "react-fast-marquee";
import { FaBolt } from 'react-icons/fa';
const TextSlider = () => {
    return (
        <Marquee>
           <h1 className='flex items-center gap-2 text-2xl bg-[black] text-white py-4'>Flat 25% OFF on All Football Gear! Shop Now! <FaBolt color='#9dc923' />  Free Shipping on Orders Over $3000! Shop Tennis Gear Now! <FaBolt color='#9dc923'/>  Get Game-Ready! Buy 1 Basketball and Get 1 Free! <FaBolt color='#9dc923'/>  Fast Delivery on All Orders – Order Now! <FaBolt color='#9dc923'/>  Slam Dunk Deals! 30% OFF on All Basketball Gear – Shop Now! <FaBolt color='#9dc923'/> Limited Stock on Tennis Balls – Buy More, Save More! </h1>
      </Marquee>
    );
};

export default TextSlider;