import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const detailsLoader = useLoaderData()
    const { _id, image, name, category, description, price, rating, selectedDate, quantity, note } = detailsLoader

    return (
        <div className='mx-auto flex justify-center '>
            <div className='max-w-lg'>
                <img className='rounded-md' src={image} alt="" />
                <h1 className='text-xl font-semibold my-2'>{name}</h1>
                <p className=''> <span className='font-semibold'>Description</span> : {description}</p>
                {/* <div className="divider ">OR</div> */}

                <div className='space-y-3 my-3'>
                    <h1> <span className='font-semibold'>Category</span> : {category}</h1>
                    <h1><span className='font-semibold'>Price</span> : {price} $</h1>
                    <h1><span className='font-semibold'>Rating</span> : {rating}</h1>
                    <h1><span className='font-semibold'>Date</span>: {selectedDate} </h1>
                    <h1><span className='font-semibold'>Quantity</span> : {quantity}</h1>
                </div>

            </div>
        </div>
    );
};

export default Details;