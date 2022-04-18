import React from 'react';
import Galleries from '../../Galleries/Galleries';
import Footer from '../../Share/Footer/Footer';
import Banner from '../Banners/Banner';
import Project from '../Project/Project';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Galleries></Galleries>
            <Project></Project>
            <Footer></Footer>

        </div>
    );
};

export default Home;