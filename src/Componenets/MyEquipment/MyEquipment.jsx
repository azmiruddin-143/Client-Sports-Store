import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import SingleEquipment from './SingleEquipment';

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
            <h1>{equipment.length}</h1>

            <div className='grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 place-items-center'>
                {
                  equipment.map(equipment => <SingleEquipment key={equipment._id} onDelete ={handleDelete} equipment ={equipment} ></SingleEquipment>)
                }
            </div>
        </div>
    );
};

export default MyEquipment;