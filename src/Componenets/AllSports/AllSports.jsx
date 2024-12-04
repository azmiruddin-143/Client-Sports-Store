import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleSports from './SingleSports';

const AllSports = () => {
    const allproductLoader = useLoaderData()
    return (
        <div>
            <h1>All Sports {allproductLoader.length}</h1>

            <div className="overflow-x-auto max-w-6xl mx-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Action</th>
               
                        </tr>
                    </thead>
                    {
                        allproductLoader.map((sports,index) => 
                           <SingleSports sports ={sports} index={index}></SingleSports>
                        )
                    }
                </table>
            </div>

        </div>
    );
};

export default AllSports;