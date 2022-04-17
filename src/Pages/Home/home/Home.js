import React from 'react';
import Banner from '../Banners/Banner';
import Category from '../Category/Category';
import Project from '../Project/Project';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Project></Project>
            <h1>Astronomy-of-the-Day</h1>
        </div>
    );
};

export default Home;