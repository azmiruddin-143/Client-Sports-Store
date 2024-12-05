import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import SingleEquipment from './SingleEquipment';
import { Link } from 'react-router-dom';

const MyEquipment = () => {
    const { user } = useContext(authContext)

    const [equipment, setEquipment] = useState([]);
    // const [dilet,setDilet] = useState(equipment)
    // console.log(dilet);


    const userEmail = user.email // Replace with actual logged-in user's email

    useEffect(() => {
        const fetchEquipment = async () => {
            try {
                const response = await fetch(
                    `http://localhost:5000/myequipment?email=${userEmail}`
                );
                const data = await response.json();
                setEquipment(data); // Set the filtered equipment list
            } catch (error) {
                console.error("Error fetching equipment:", error);
            }
        };

        fetchEquipment();
    }, [userEmail]);


    // Handle delete function
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/myequipment/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    // Remove the deleted item from the state
                    const remainingEquipments = equipment.filter(
                        (equipment) => equipment._id !== id
                    );
                    setEquipment(remainingEquipments);
                }
            });
    };

    return (
        <div>

            {
                equipment.length === 0 ?

                    <div className="flex justify-center my-5">
                        <div>
                            <h1 className='text-4xl py-3'>No Data Found ?</h1>                          
                            <Link to={'/addequipment'} > <button className='py-2 my-3 px-6 bg-[#2e9ab5] rounded-md'>Add Equipment</button> </Link>
                        </div>
                    </div>

                    :
                    <div className='grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 place-items-center'>
                        {
                            equipment.map(equipment => <SingleEquipment key={equipment._id} onDelete={handleDelete} equipment={equipment} ></SingleEquipment>)
                        }
                    </div>
            }


        </div>
    );
};

export default MyEquipment;