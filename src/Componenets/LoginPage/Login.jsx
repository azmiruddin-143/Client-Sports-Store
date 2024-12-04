import React, { useContext, useState } from 'react';
import google from "../../assets/google-icon.png"
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const { loginUser, googleRegister, setuser } = useContext(authContext)
    const [show, setHide] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const eyeIconHandler = () => {
        setHide(!show)
    }


    const loginForm = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        const trams = event.target.trams.checked
        // register setup ///


        loginUser(email, password)
            .then((result) => {
                const user = result.user
                setuser(user)
                setuser({ ...result.user,  photoURL: photourl })
                navigate(location?.state ? location.state : "/")
                console.log(user);
            })

            .catch((error) => {
                console.log(error.message);
            })
    }



    const googleLoginHandler = () => {
        googleRegister()
            .then((result) => {
                const user = result.user
                setuser(user)
                navigate(location?.state ? location.state : "/")
                console.log(user);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <div className="sm:my-10 my-5 ">
                <div className="hero-content flex-col mx-auto lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                        <form onSubmit={loginForm} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter your name email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={`${show ? "text" : "password"}`} name='password' placeholder=" Enter your name password" className="input input-bordered" required />
                                <label className="label">

                                </label>

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
                                <button className="btn bg-[#3c4483] hover:bg-[#3c4483] text-white">Login</button>
                            </div>

                            <div className="divider">OR</div>
                            <div onClick={googleLoginHandler} className='mx-auto'>
                                <img className='w-[30px]' src={google} alt="" />
                            </div>
                            <h1 className='text-lg text-center'>Need an account ? <Link to="/register" className='text-[#e09d15]'>Register</Link></h1>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;