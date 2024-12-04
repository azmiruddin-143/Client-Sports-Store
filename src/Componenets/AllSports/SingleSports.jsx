import React from 'react';
import { Link } from 'react-router-dom';

const SingleSports = ({ sports, index }) => {
    const { _id, image, name, category, description, price, rating, selectedDate, quantity, note } = sports
    return (
        
            <tbody>
                <tr>
                    <th>{index + 1}</th>
                    <td>{name}</td>
                    <td>{category} </td>
                    <td>{price}</td>
                    <td>{selectedDate}</td>
                    <td className=''>
                        <Link to={`/details/${_id}`} ><button  className='bg-[#c81d1d] py-2 px-5 rounded-md text-white'>View Details</button> </Link>
                    </td>
                </tr>
            </tbody>
      
    );
};

export default SingleSports;