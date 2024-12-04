import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { IoIosCloseCircle } from "react-icons/io";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
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
                // toast.success("Logout successful!", { autoClose: 3000 });
                navigate("/");
            })
            .catch((error) => {
                // toast.error(`login failed: ${error.message}`, {
                //     autoClose: 3000,
                // });
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

    return (
        <div
            className={`sticky top-0 w-full z-40 transition-all duration-300 ${isBlurred ? "bg-[#00000092] backdrop-blur-md " : "bg-base-200"
                }`}
        >
            <div className="xl:mx-24 sm:mx-4 ">
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
                                        <IoIosCloseCircle className="absolute text-[#3c4483] right-0 top-0" size={30} />
                                    </button>
                                    <NavLink to="/" onClick={() => setIsDropdownOpen(false)}>Home</NavLink>
                                    <NavLink to="/about" onClick={() => setIsDropdownOpen(false)}>About</NavLink>
                                    <NavLink to="/service" onClick={() => setIsDropdownOpen(false)}>Service</NavLink>
                                    {
                                        user && <NavLink to="/resources" onClick={() => setIsDropdownOpen(false)}>Resources</NavLink>
                                    }
                                    <NavLink to="/myprofile" onClick={() => setIsDropdownOpen(false)}>My Profile</NavLink>
                                </ul>
                            )}
                        </div>
                        <div>
                            <h1 className={`${isBlurred && "text-white"} sm:text-3xl text-base pl-2 lg:pl-0 lg:text-2xl xl:text-4xl text-[#3c4483] font-bold`}>
                            Sports <span className="text-[#e09d15] relative sm:right-2 lg:right-1 xl:right-2 right-1 font-bold"> Equipment Store</span>
                            </h1>
                        </div>
                    </div>

                    <div className="navbar-center ml-14 xl:ml-28 2xl:ml-0 hidden lg:flex">
                        <ul className={`${isBlurred ? "text-lg text-white flex gap-3 sm:gap-8" : "text-lg text-black flex gap-3 sm:gap-8"}`}>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? `${isBlurred ? "text-[#e09d15] border-b border-[#e09d15]" : "text-[#3c4483] border-b border-[#3c4483]"}`
                                        : ""
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/allSportsEquipment"
                                className={({ isActive }) =>
                                    isActive
                                        ? `${isBlurred ? "text-[#e09d15] border-b border-[#e09d15]" : "text-[#3c4483] border-b border-[#3c4483]"}`
                                        : ""
                                }
                            >
                               All Sports Equipment
                            </NavLink>
                            {/* <NavLink
                                to="/addEquipment"
                                className={({ isActive }) =>
                                    isActive
                                        ? `${isBlurred ? "text-[#e09d15] border-b border-[#e09d15]" : "text-[#3c4483] border-b border-[#3c4483]"}`
                                        : ""

                                }
                            >
                               Add Equipment
                                <Helmet>
                                    <title>Service | Page</title>
                                </Helmet>
                            </NavLink> */}
                            {
                                user && <NavLink
                                    to="/addEquipment"
                                    className={({ isActive }) =>
                                        isActive
                                            ? `${isBlurred ? "text-[#e09d15] border-b border-[#e09d15]" : "text-[#3c4483] border-b border-[#3c4483]"}`
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
                                        ? `${isBlurred ? "text-[#e09d15] border-b border-[#e09d15]" : "text-[#3c4483] border-b border-[#3c4483]"}`
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
                            <div className="relative flex justify-center items-center group w-[70px] h-[70px]">
                                {user && (
                                    <div className="avatar mt-1 online">
                                        <div className="sm:max-w-16  rounded-full">
                                            <img  src={user?.photoURL} alt="User Profile" />
                                        </div>
                                    </div>
                                )}
                                <span className={`${isBlurred && "text-white"} absolute inset-0 bg-opacity-70 text-black -top-2 -left-44 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                                    {user?.displayName}
                                </span>
                            </div>
                            {user ? (
                                <button
                                    onClick={userLogoutHandler}
                                    className="bg-[#e09d15] text-white text-base font-semibold py-1 px-2 sm:text-lg sm:py-2 sm:px-6 rounded-lg"
                                >
                                    Logout
                                </button>
                            ) : (
                                <Link to="/login">
                                    <button className="bg-[#e09d15] text-white font-semibold text-base sm:text-lg py-1 px-2 sm:py-2 sm:px-6 rounded-lg">
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
