import React from 'react';
import google from '../../../images/social/google.png';
import fb from '../../../images/social/fb.jpg';
import github from '../../../images/social/github.png';
const SocialMedia = () => {
    return (
        <div>
            <div className='d-flex align-items-center w-50 mx-auto'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>Or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {/* google signin btn  */}
            <button className='btn btn-info w-50 d-block mx-auto my-2'>
                <img style={{ width: '30px' }} src={google} alt="" />
                <span className='px-2'>Sign In with Google</span>
            </button>
            {/* fb signin btn  */}
            <button className='btn btn-primary w-50 d-block mx-auto my-2'>
                <img style={{ width: '30px', marginLeft: '6px' }} src={fb} alt="" />
                <span className='px-2'>Sign In with Facebook</span>
            </button>
            {/* github signin btn  */}
            <button className='btn btn-dark w-50 d-block mx-auto my-2'>
                <img style={{ width: '30px' }} src={github} alt="" />
                <span className='px-2'>Sign In with Github</span>
            </button>
        </div>
    );
};

export default SocialMedia;