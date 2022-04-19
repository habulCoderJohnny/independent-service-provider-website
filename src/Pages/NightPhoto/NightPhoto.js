import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NightPhoto.css';


const NightPhoto = ({nightPic}) => {
    const {id,img, price, description, name} = nightPic;
    //url-3rd declore useNavigate
    const navigate = useNavigate();
    //url-2nd declore event handler
    const navigateToServiceDetail = (id)=>{
        //url-4th
        navigate(`/night-photography/${id}`);
    }

    return (
        <div className='container cart'>
        <img src={img} alt="" />
        <p>Name:  {name}</p>
        <h5>Price ${price}</h5>
        <p>{description}</p>
        <button onClick={()=>navigateToServiceDetail(id)} className="btn btn-primary mb-2">View: {name}</button>
    </div>
    );
};

export default NightPhoto;