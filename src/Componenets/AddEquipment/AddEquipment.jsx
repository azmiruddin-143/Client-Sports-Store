import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2'
const AddEquipment = () => {
    const [rating, setRating] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const handleDateChange = (date) => {
        if (date) {
            const formattedDate = date.toLocaleDateString("en-US", {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
            });
            setSelectedDate(formattedDate); // Update state with formatted date
        }
    };

    const handleRatingChange = (e) => {
        setRating(e.target.value);
    };

    const addEquipmentForm = (e) => {
        e.preventDefault()
        const from = e.target
        const image = from.image.value
        const name = from.name.value
        const category = from.category.value
        const description = from.description.value
        const price = from.price.value
        const quantity = from.quantity.value
        const note = from.note.value
        const equipmentObject = { image, name, category, description, price, rating,selectedDate, quantity, note, }
        console.log(equipmentObject);

       
        fetch("http://localhost:5000/sports",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(equipmentObject),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId ) {
                Swal.fire({
                    title: "Post SuccessFull",
                    text: "Apnar Post Kora Complete oice",
                    icon: "success"
                  });

                  from.reset()

                
            }
        })

    }



    return (

        <div className='my-10 mx-10 '>
            <form onSubmit={addEquipmentForm} className='max-w-4xl mx-auto' action="">
                <div className=' sm:flex gap-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name='image' placeholder="Enter your image url" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>

                        <input type="text" name='name' placeholder="Enter your item name" className="input input-bordered" required />
                    </div>
                </div>
                <div className='sm:flex gap-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name='category' placeholder="Enter your Category name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name='description' placeholder="Enter your description" className="input input-bordered" required />
                    </div>
                </div>
                <div className='sm:flex gap-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="Enter your product price" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        {/* <input type="text" name='rating' placeholder="Enter your rating" className="input input-bordered" required /> */}
                        <select
                            onChange={handleRatingChange}
                            required
                            value={rating}
                            style={{
                                padding: "11px 11px",
                                fontSize: "16px",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                            }}
                        >
                            <option value="">Select Rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                <div className='sm:flex gap-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Delivery</span>
                        </label>
                        {/* <input type="text" name='delivery' placeholder="Enter your delivery time" className="input input-bordered" required /> */}
                        <DatePicker
                            selected={selectedDate}
                            required
                            onChange={handleDateChange}
                            dateFormat="MM/dd/yy" // Show date in this format in UI
                            placeholderText="Select Date"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="number" name='quantity' placeholder="Enter your product quantity" className="input input-bordered" required />
                    </div>
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Customization Note</span>
                    </label>
                    <textarea
                        placeholder="Write something here..."
                        required
                        name='note'
                        rows="5"
                        className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>

                <div className='w-full'>
                    <button className='bg-[#1d7fb4] text-white font-bold w-full py-2 px-3 my-5 rounded-lg'>Add Equipment</button>
                </div>
            </form>
        </div>

    );
};

export default AddEquipment;