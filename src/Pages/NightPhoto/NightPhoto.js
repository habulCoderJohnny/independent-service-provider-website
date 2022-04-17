import React from 'react';
import './NightPhoto.css';
const NightPhoto = ({nightPic}) => {
    const {id,img, price, description, name} = nightPic;

    return (
        <div className='container service'>
        <img src={img} alt="" />
        <p>Name:  {name}</p>
        <h5>Price ${price}</h5>
        <p>{description}</p>
    </div>
    );
};

export default NightPhoto;