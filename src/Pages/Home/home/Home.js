import React from 'react';
import Galleries from '../../Galleries/Galleries';
import Banner from '../Banners/Banner';
import Project from '../Project/Project';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Galleries></Galleries>
            <Project></Project>

        </div>
    );
};

export default Home;