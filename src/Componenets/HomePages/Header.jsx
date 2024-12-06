import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { IoIosCloseCircle } from "react-icons/io";
import sitelogo from '../../assets/site-logo.png'
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Helmet } from 'react-helmet-async';
import { authContext } from '../AuthProvider/AuthProvider';

const Header = () => {

    const { user, userLogout } = useContext(authContext);
    const [isBlurred, setIsBlurred] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    // Logout Handler
    const userLogoutHandler = () => {
        userLogout()
            .then(() => {
                toast.success("Logout successful!", { autoClose: 3000 });
                navigate("/");
            })
            .catch((error) => {
                toast.error(`login failed: ${error.message}`, {
                    autoClose: 3000,
                });
                console.log(error.message);
            });

    };

    // Scroll Listener for Blur Effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsBlurred(true);
            } else {
                setIsBlurred(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    // bg-[#00000092]

    return (
        <div
            className={`sticky top-0 w-full z-40 transition-all duration-300 ${isBlurred ? "bg-[#9dc92395] backdrop-blur-md " : "bg-base-200"
                }`}
        >
            <div className="2xl:mx-36 xl:mx-24 sm:mx-4 ">
                <div className="navbar p-1">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn p-0 btn-ghost lg:hidden"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`${isBlurred && "text-white"} sm:h-8 sm:w-8 h-6 w-6`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>
                            {isDropdownOpen && (
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content gap-4 bg-base-100 rounded-box z-[1] mt-3 w-44 sm:w-52 py-6 px-2 shadow"
                                >
                                    <button onClick={() => setIsDropdownOpen(false)}>
                                        <IoIosCloseCircle className="absolute text-[#9dc923] right-0 top-0" size={30} />
                                    </button>
                                    <NavLink to="/" onClick={() => setIsDropdownOpen(false)}>Home</NavLink>
                                    <NavLink to="/allSportsEquipment" onClick={() => setIsDropdownOpen(false)}>All Sports Equipment</NavLink>
                                    {
                                        user &&  <NavLink to="/addEquipment" onClick={() => setIsDropdownOpen(false)}>Add Equipment</NavLink>
                                    }
                                    {
                                        user && <NavLink to="/myEquipmentList" onClick={() => setIsDropdownOpen(false)}>My Equipment List</NavLink>
                                    }
                                    
                                </ul>
                            )}
                        </div>
                        <div className='flex items-center gap-0 sm:gap-3'>
                            <img className='sm:w-[60px] w-[40px] ' src={sitelogo} alt="" />
                            <h1 className={`${isBlurred && "text-white font-bold"} sm:text-3xl text-base pl-2 lg:pl-0 lg:text-xl xl:text-3xl text-[#3c4483] font-bold`}> Sports
                                <span className={`${isBlurred && "text-black"} text-[#9dc923] relative sm:right-2 lg:right-1 xl:right-2 right-1 font-bold`}> Sphere</span>
                            </h1>
                        </div>
                    </div>

                    <div className="navbar-center  xl:ml-10 2xl:ml-0 hidden lg:flex">
                        <ul className={`${isBlurred ? "xl:text-lg text-md text-black flex gap-3 sm:gap-8" : "xl:text-lg text-md text-black flex gap-3 sm:gap-8"}`}>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? `${isBlurred ? "text-[white] font-bold border-b border-[white]" : "text-[#73921d] border-b border-[#73921d]"}`
                                        : ""
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/allSportsEquipment"
                                className={({ isActive }) =>
                                    isActive
                                        ? `${isBlurred ? "text-[white] font-bold border-b border-[white]" : "text-[#73921d] border-b border-[#73921d]"}`
                                        : ""
                                }
                            >
                                All Sports Equipment
                            </NavLink>
                           
                            {
                                user && <NavLink
                                    to="/addEquipment"
                                    className={({ isActive }) =>
                                        isActive
                                           ? `${isBlurred ? "text-[white] font-bold border-b border-[white]" : "text-[#73921d] border-b border-[#73921d]"}`
                                        : ""
                                    }
                                >
                                    Add Equipment
                                </NavLink>
                            }

                            {
                                user && <NavLink
                                    to="/myEquipmentList"
                                    className={({ isActive }) =>
                                        isActive
                                            ? `${isBlurred ? "text-[white] font-bold border-b border-[white]" : "text-[#73921d] border-b border-[#73921d]"}`
                                        : ""
                                    }
                                >
                                    My Equipment List
                                </NavLink>
                            }
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="flex gap-0 sm:gap-4 items-center">
                            {/* trogole dark and ligth */}

                            <label className="swap swap-rotate">
                                {/* this hidden checkbox controls the state */}
                                <input type="checkbox" className="theme-controller" value="dark" />

                                {/* sun icon */}
                                <svg
                                    className="swap-off h-10 w-10 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                </svg>

                                {/* moon icon */}
                                <svg
                                    className="swap-on h-10 w-10 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                </svg>
                            </label>
                           
                            <div className="relative flex justify-center items-center group w-[70px] h-[70px]">
                                {user && (
                                    <div style={{ textAlign: "center", marginTop: "0px" }}>
                                        <div className="avatar mt-1 online">
                                            <div className="sm:max-w-16 max-w-12 rounded-full">
                                                <img src={user?.photoURL} alt="User Profile"
                                                    data-tooltip-id="image-tooltip"
                                                    data-tooltip-content="azmirkhan"
                                                    style={{ cursor: "pointer" }}
                                                />
                                            </div>
                                        </div>
                                        <Tooltip id="image-tooltip" place="top" style={{ backgroundColor: "#333" }} />
                                    </div>

                                )}

                            </div>
                            {user ? (
                                <button
                                    onClick={userLogoutHandler}
                                    className={`${isBlurred && 'bg-[white] text-black text-base font-semibold py-1 px-2 sm:text-lg sm:py-2 sm:px-6 rounded-lg'
                                       
                                    } bg-[#baf120] text-black text-base font-semibold py-1 px-2 sm:text-lg sm:py-2 sm:px-6 rounded-lg`}
                                >
                                    Logout
                                </button>
                            ) : (
                                <Link to="/login">
                                    <button className="bg-[#baf120] text-black font-semibold text-base sm:text-lg py-1 px-2 sm:py-2 sm:px-6 rounded-lg">
                                        Login
                                    </button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
