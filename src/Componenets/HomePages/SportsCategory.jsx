import React, { useEffect, useState } from 'react';


const SportsCategory = () => {
    const [category, setCategory] = useState([])
    console.log(category);
    useEffect(() => {
        fetch('http://localhost:5000/sportsall')
        .then(res => res.json())
        .then(data => {
            const uniqueCategories = [...new Map(data.map(item => [item.category, item])).values()];
            setCategory(uniqueCategories);
        })
    }, [])
    return (
        <div className='mt-32'>
       
            <div className='flex items-center  justify-center gap-5' >
            {
                category.map(cat => 
                    <div >
                         <button className='text-xl border border-black p-2'>{cat.category}</button>
                     </div>
                )
            }
            </div>
        </div>
    );
};

export default SportsCategory;