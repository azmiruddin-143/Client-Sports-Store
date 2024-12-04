import React from 'react';

const SingleProduct = ({ product }) => {
    const { _id, image, name, category, description, price, rating, selectedDate, quantity, note } = product
    return (
        <div>
            <div>
                <img className='rounded-md' src={image} alt="" />
                <h1 className='text-xl font-semibold my-2'>{name}</h1>
                    <h1>Category : {category}</h1>
                    <h1>Price : {price} $</h1>
                <button className='bg-[#14b06c] py-2 my-3 px-4 rounded-md'>View Details</button>
            </div>
        </div>
    );
};

export default SingleProduct;