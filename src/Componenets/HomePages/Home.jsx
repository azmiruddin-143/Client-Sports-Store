import React from 'react';
import Banner from './Banner';
import Products from './Products';
import TextSlider from './TextSlider';
import SportsCategory from './SportsCategory';
import PerformanceHub from './PerformanceHub';
import TrendingProducts from './TrendingProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TextSlider></TextSlider>
            <SportsCategory></SportsCategory>
            <Products></Products>
            <PerformanceHub></PerformanceHub>
            <TrendingProducts></TrendingProducts>
        </div>
    );
};

export default Home;