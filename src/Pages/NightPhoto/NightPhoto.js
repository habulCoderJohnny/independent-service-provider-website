import React from 'react';
import './NightPhoto.css';
const NightPhoto = ({nightPic}) => {
    const {id,img, price, description, name} = nightPic;

    return (
        <div className='service'>
        <img src={img} alt="" />
        <h3>Name:  {name}</h3>
        <h5>Price ${price}</h5>
        <p>{description}</p>
    </div>
    );
};

export default NightPhoto;