import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';

const MyEquipment = () => {
    const {user} = useContext(authContext)
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
        <h1>My Equipment 10 List</h1>
        <ul>
          {equipment.map((item) => (
            <li key={item._id}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default MyEquipment;