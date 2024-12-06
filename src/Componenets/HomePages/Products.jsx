import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from './SingleProduct';
const Products = () => {
    const productLoader = useLoaderData()
    console.log(productLoader);
    return (
        <div>
           
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