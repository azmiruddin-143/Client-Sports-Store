import React from 'react';
import Header from '../HomePages/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../HomePages/Footer';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;