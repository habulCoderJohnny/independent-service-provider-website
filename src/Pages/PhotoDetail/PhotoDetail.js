import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PhotoDetail = () => {
     //url-4
     const {photoDetail} = useParams();

    return (
        <div className='text-center'>
            <h2>{photoDetail}  Details</h2>
            
            <Link to="/checkout"><button className='btn btn-primary'>Proceed to Print</button></Link>
        </div>
    );
};

export default PhotoDetail;