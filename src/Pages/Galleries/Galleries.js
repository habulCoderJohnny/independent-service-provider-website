import React, { useEffect, useState } from 'react';
import NightPhoto from '../NightPhoto/NightPhoto';
import './Galleries.css';

const Galleries = () => {
    const [nightPics, setNightPics] = useState([]);
    useEffect(()=>{
        fetch('gallery.json')
        .then(res=> res.json())
        .then(data=>setNightPics(data))
    },[]);
    return (
        <div id='go-to-services' className='container'>
            <h1 className='text-primary display-3 text-center my-4'>Night Photogrphy: {nightPics.length}</h1>
            {/* 1st: create <nightPic compo> then sent data in props nightPic name-e */}
            <div className='gallery-container'> 
                {
                    nightPics.map(nightPic => <NightPhoto key={nightPic.id} nightPic={nightPic}></NightPhoto>)
                }
            </div>
        </div>
    );
};

export default Galleries;