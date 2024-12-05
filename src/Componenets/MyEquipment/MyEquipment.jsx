import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import SingleEquipment from './SingleEquipment';

const MyEquipment = () => {
    const { user } = useContext(authContext)
    const [equipment, setEquipment] = useState([]);
    console.log(equipment);
    const userEmail = user.email // Replace with actual logged-in user's email

    useEffect(() => {
        const fetchEquipment = async () => {
            try {
                const response = await fetch(
                    `http://localhost:5000/my-equipment?email=${userEmail}`
                );
                const data = await response.json();
                setEquipment(data); // Set the filtered equipment list
            } catch (error) {
                console.error("Error fetching equipment:", error);
            }
        };

        fetchEquipment();
    }, [userEmail]);

    return (
        <div>
            <h1>{equipment.length}</h1>

            <div className='grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 place-items-center'>
                {
                  equipment.map(equipment => <SingleEquipment key={equipment._id} equipment ={equipment} ></SingleEquipment>)
                }
            </div>
        </div>
    );
};

export default MyEquipment;