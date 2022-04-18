import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PhotoDetail = () => {
    //url-4
    const { photoDetail } = useParams();

    return (
        <div className='text-center container'>
            <h2>Photo order Id: {photoDetail}</h2>
            <h5>Includes our standard license.
                Add an extended license.
                Credit:MStudioImages
                Largest size:
                6048 x 4024 px (20.16 x 13.41 in.) - 300 dpi - RGB
                Stock photo ID:1305615921
                Upload date:March 08, 2021
                Categories:Stock Photos | Credit Card</h5>
            <Link to="/checkout"><button className='btn btn-primary'>Continue to Purchase</button></Link>
        </div>
    );
};

export default PhotoDetail;