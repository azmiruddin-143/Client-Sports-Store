import React, { useEffect, useState } from 'react';
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
// import FootballBaner from "../../assets/single-cricket-personjpg.jpg"
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from 'react-router-dom';
const TrendingProducts = () => {
    const [category, setCategory] = useState([])
    console.log(category);
    useEffect(() => {
        fetch('http://localhost:5000/sportsall')
        .then(res => res.json())
        .then(data => {
            setCategory(data)
        })
    }, [])
    return (
        <div className='my-28 bg-gray-100'>
            <h1 className='text-center text-4xl relative -top-7 text-white bg-[#9dc923] py-2 px-5 w-fit mx-auto'>Top Trending</h1>

            <div className="py-20  mx-36 ">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{
            delay: 3000, 
            disableOnInteraction: false, 
          }}
        spaceBetween={20}
        slidesPerView={5}
       
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {category.map((product) => (
          <SwiperSlide key={product.id}>
            <div className=" h-[500px] bg-white rounded-lg shadow-lg p-4 text-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{product.productName}</h3>
              <p className="text-[#9dc923] font-bold">${product.price}</p>
              <Link to={`/details/${product._id}`} ><button className='text-white bg-[#9dc923] my-3 py-2 px-5'>View Details</button></Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
        </div>
    );
};

export default TrendingProducts;