import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleSports from './SingleSports';

const AllSports = () => {
    const allproductLoader = useLoaderData()
    const [sortedProducts, setSortedProducts] = useState(allproductLoader);
    const [isSorted, setIsSorted] = useState(false);

    // Sort Button Handler
    const handleSort = () => {
        const sorted = [...sortedProducts].sort((a, b) => a.price - b.price); // Sort by price (Ascending)
        setSortedProducts(sorted); // Update state with sorted data
        setIsSorted(true);
    };
    const handleDefault = () => {
        setSortedProducts(allproductLoader); // Reset to default data
        setIsSorted(false); // Mark as default
    };
    return (
        <div className='my-10'>

            {
                !isSorted ? <div className='flex mx-auto my-4 justify-center'>
                    <button onClick={handleSort} className='bg-[#baf120] py-2 px-6 rounded-md'>Sort all price</button>
                </div> :
                    <div className='flex mx-auto my-4 justify-center'>
                        <button onClick={handleDefault} className='bg-[#baf120] py-2 px-6 rounded-md'>Default Price</button>
                    </div>

            }


            <div className="overflow-x-auto max-w-6xl mx-auto">
                <table className="table">
                    <thead>
                        <tr className='text-lg text-black'>
                            <th></th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    {
                        sortedProducts.map((sports, index) =>
                            <SingleSports sports={sports} index={index}></SingleSports>
                        )
                    }
                </table>
            </div>

        </div>
    );
};

export default AllSports;