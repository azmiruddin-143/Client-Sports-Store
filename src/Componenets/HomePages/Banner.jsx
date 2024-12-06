import React from 'react';
import FootballBaner from "../../assets/Football-Baner.png"
import BasketballBanner from "../../assets/Basketball-Banner.png"
import TennisbatBaner from "../../assets/Tennisbat-Baner.png"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const Banner = () => {
    return (
        <div className="w-full relative">
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",

                }}

                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                slidesPerView={1}
                loop={true}
                className="2xl:h-[850px] md:h-[750px] h-[200px]"
            >
                <SwiperSlide>
                    <div style={{
                        backgroundImage: `url(${BasketballBanner})`, backgroundColor: "#3c448384",
                        backgroundBlendMode: "multiply"
                    }} className="bg-cover  bg-no-repeat bg-center w-full h-full ">

                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div style={{
                        backgroundImage: `url(${TennisbatBaner})`, backgroundColor: "#3c448384",
                        backgroundBlendMode: "multiply"
                    }} className="bg-cover bg-no-repeat bg-center w-full h-full ">

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{
                        backgroundImage: `url(${FootballBaner})`, backgroundColor: "#3c448384",
                        backgroundBlendMode: "multiply"
                    }} className="bg-cover bg-no-repeat bg-center w-full h-full ">

                    </div>
                </SwiperSlide>

                


            </Swiper>


            <div className="swiper-button-prev bg-[white] cursor-pointer  rounded-full  px-[22px] md:p-6 flex justify-center items-center">
                <FaArrowLeft />
            </div>

            <div className="swiper-button-next  cursor-pointer bg-[white] rounded-full px-[22px] w-fit  md:p-6 flex justify-center items-center">
                <FaArrowRight />
            </div>

        </div>
    );
};

export default Banner;




