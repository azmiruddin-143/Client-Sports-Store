import React from 'react';
import logo from '../../assets/sports-logo.png'
import { Link, Links, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img className='w-[60px]' src={logo} alt="" />
                        <a className="text-2xl">Sports Equipment Store</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-lg menu-horizontal px-1">
                       <NavLink to={"/"} ><li><a>Home</a></li></NavLink>
                       <NavLink to={"/allSportsEquipment"} ><li><a>All Sports Equipment</a></li></NavLink>
                       <NavLink to={"/addEquipment"} ><li><a>Add Equipment</a></li></NavLink>
                       <NavLink to={"/myEquipmentList"} ><li><a>My Equipment List</a></li></NavLink>
                       
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={"/login"} ><a className="btn">Login</a></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;