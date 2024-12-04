import React, { useState } from 'react';
import { IoEyeOff, IoEye } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Register = () => {

    const [show, setHide] = useState(false)

    const eyeIconHandler = () => {
        setHide(!show)
    }

    const registerForm = (event) => {
        event.preventDefault()
        const trams = event.target.trams.checked
        const name = event.target.name.value
        const photourl = event.target.photourl.value
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(trams,name,photourl,email,password);
    }
    return (
        <div>
            <div className="sm:my-10 my-5 ">
                <div className="hero-content flex-col mx-auto lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                        <form onSubmit={registerForm} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photourl</span>
                                </label>
                                <input type="text" name='photourl' placeholder="Enter your photourl" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={`${show ? "text" : "password"}`} name='password' placeholder=" Enter your name password" className="input input-bordered" required />
                                

                                <div onClick={eyeIconHandler}>
                                    {
                                        !show ? <IoEyeOff className='absolute right-6 top-[50px]' size={20} /> :
                                            <IoEye className='absolute right-6 top-[50px]' size={20} />
                                    }

                                </div>
                                <div className="form-control mt-3">
                                    <label className="cursor-pointer justify-start gap-4 label">
                                        <input type="checkbox" name='trams' className="checkbox checkbox-warning" />
                                        <span className="label-text">Remember me</span>

                                    </label>
                                </div>


                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#3c4483] hover:bg-[#3c4483] text-white">Register</button>
                            </div>

                            <div className="divider">OR</div>
                            <div  className='mx-auto'>
                                <img className='w-[30px]'  alt="" />
                            </div>
                            <h1 className='text-lg text-center'>Already a user ? <Link to="/login" className='text-[#e09d15]'>Login</Link></h1>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;