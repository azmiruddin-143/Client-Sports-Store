import React from 'react';
import Banner from './Banner';
import Products from './Products';
import TextSlider from './TextSlider';
import SportsCategory from './SportsCategory';
import PerformanceHub from './PerformanceHub';
import TrendingProducts from './TrendingProducts';
import AthleticIntro from './AthleticIntro';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TextSlider></TextSlider>
            <SportsCategory></SportsCategory>
            <Products></Products>
            <PerformanceHub></PerformanceHub>
            <TrendingProducts></TrendingProducts>
            <AthleticIntro></AthleticIntro>
        </div>
    );
};

export default Home;