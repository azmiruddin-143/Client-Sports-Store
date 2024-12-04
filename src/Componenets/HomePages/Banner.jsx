import React from 'react';
import bannerFootball from "../../assets/banner.jpg"


const Banner = () => {
    return (
        <div style={{
            backgroundImage: `url(${bannerFootball})`, backgroundColor: "#3c448384",
            backgroundBlendMode: "multiply"
          }} className="bg-cover  bg-no-repeat bg-right w-full h-[800px] justify-end " >
             {/* <div className='space-y-4 w-[50%]'>
                 <h1 className='text-2xl'>Football</h1>
                 <p className='w-8/12 text-5xl leading-tight'>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                 <button className='bg-red-700 py-2 px-5 my-4'>Shop Now</button>
             </div> */}
        
        </div>
    );
};

export default Banner;




