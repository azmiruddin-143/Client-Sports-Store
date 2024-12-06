import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from './SingleProduct';
// import Marquee from "react-fast-marquee";
const Products = () => {
    const productLoader = useLoaderData()
    console.log(productLoader);
    return (
        <div>
            {/* <Marquee className='bg-[black] text-white py-5'>
               <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dicta iste blanditiis porro, asperiores fugit non rerum quibusdam dolores, a veritatis ab eum doloribus odit. Eius odit esse quasi totam, fuga magnam in deserunt iure? Doloribus fuga ab sunt tempora iure quod nihil sapiente eaque. Harum quia cumque dolores nemo!</p>
            
            </Marquee> */}
            <h1>{productLoader.length}</h1>
            <div className='grid grid-cols-4 place-items-center gap-y-12 mx-32'>
                {
                    productLoader.map(product => <SingleProduct key={product._id} product={product} ></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default Products;