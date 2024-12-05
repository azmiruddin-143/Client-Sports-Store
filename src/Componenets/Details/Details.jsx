import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReactStars from 'react-stars';
const Details = () => {
    const detailsLoader = useLoaderData()
    const { _id, image, productName, category, description, price, rating, selectedDate, quantity, note } = detailsLoader

    return (
        <div className='my-10'>
            <div class="max-w-xl mx-auto my-5 p-4 bg-white border rounded-lg shadow-md flex flex-col md:flex-row gap-0">
                {/* <!-- Left Side (Image) --> */}
                <div class="w-full md:w-2/3 relative -left-10">
                    <img
                        src={image}
                        alt="Product Image"
                        class="rounded-md w-full h-full object-cover"
                    />
                </div>
                {/* <!-- Right Side (Details) --> */}
                <div class="w-full md:w-2/3 flex flex-col justify-between">
                    {/* <!-- Product Name --> */}
                    <h2 class="sm:text-2xl text-lg font-bold text-gray-800">{productName}</h2>
                    {/* <!-- Description --> */}
                    <p class="text-lg font-semibold my-2 text-gray-800">
                        ${price}
                    </p>
                    {/* <!-- Price and Rating --> */}

                    <p class="text-sm text-gray-600 ">{description}</p>
                    <span class="text-sm my-2 text-gray-600">
                        {
                            rating && <ReactStars
                                count={5}
                                value={rating || 5}
                                size={24}
                                activeColor="#ffd700"
                                edit={false}
                                color2="#e09d15"
                                color1='gray'
                            />

                        }
                    </span>


                    <div className='space-y-1 my-1'>
                        <h1 className='text-sm sm:text-md'> Date: {selectedDate}</h1>
                        <h1 className='text-sm sm:text-md'> Category: {category}</h1>
                        <h1 className='text-sm sm:text-md'> Quantity: {quantity}</h1>
                    </div>

                    {/* <!-- Add to Cart Button --> */}
                    <button
                        class="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>

             <h1 className=' w-4/12 mx-auto pl-2'> Customer Note: {note}</h1>
        </div>

    );
};

export default Details;