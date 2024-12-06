import React from 'react';
import { FaShippingFast, FaBox, FaCreditCard, FaHeadset } from "react-icons/fa";
const CustomerBenefits = () => {
    return (
        <div className="bg-black my-20 py-12">
            <div className="mx-32 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Row 1 */}
                <div className="flex items-center gap-3 text-white ">
                    <div className="bg-lime-500 p-4 rounded-full">
                        <FaShippingFast size={30} />
                    </div>
                    <div> 
                        <h3 className="font-bold text-2xl">Ship to Home</h3>
                        <p className="text-md w-9/12">Order online and have products shipped to you.</p>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="flex items-center gap-3 text-white ">
                    <div className="bg-lime-500 p-4 rounded-full">
                    <FaBox size={30} />
                    </div>
                    <div> 
                        <h3 className="font-bold text-2xl">Ship to Home</h3>
                        <p className="text-md w-9/12">Order online and have products shipped to you.</p>
                    </div>
                </div>
             
               

                {/* Row 3 */}
                <div className="flex items-center gap-3 text-white ">
                    <div className="bg-lime-500 p-4 rounded-full">
                    <FaCreditCard size={30} />
                    </div>
                    <div> 
                        <h3 className="font-bold text-2xl">Ship to Home</h3>
                        <p className="text-md w-9/12">Order online and have products shipped to you.</p>
                    </div>
                </div>
                
              
               

                {/* Row 4 */}
                <div className="flex items-center gap-3 text-white ">
                    <div className="bg-lime-500 p-4 rounded-full">
                    <FaHeadset size={30} />
                    </div>
                    <div> 
                        <h3 className="font-bold text-2xl">Ship to Home</h3>
                        <p className="text-md w-9/12">Order online and have products shipped to you.</p>
                    </div>
                </div>
            
                
            </div>
        </div>
    );
};

export default CustomerBenefits;