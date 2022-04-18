import React from 'react';
import google from '../../../images/social/google.png';
import fb from '../../../images/social/fb.jpg';
import github from '../../../images/social/github.png';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
const SocialMedia = () => {
    // GOOGLE SignIn Implement
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // Facebook SignIn  Implement
    const [signInWithFacebook, userFb, loadingFb, errorFb] = useSignInWithFacebook(auth);
    // Github SignIn Implement
    const [signInWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);

      // signin to navigate
    const navigate = useNavigate();

     // social btn blink issue 
     let errorBtnElement;
     //error showing
     // return: errorBtnElement=

     if (error || errorFb || errorGit) {
        errorBtnElement = <p className='text-danger text-center'>Error: {error?.message} {errorFb?.message} {errorGit?.message}</p>
    }

    if (loading) {
        return <Loading></Loading>
    }

    // user signin to navigate
    if (user || userFb || userGit) {
    // 1st-d
    navigate ('/home');
      
    }
    
      

    return (
        <div>
            <div className='d-flex align-items-center w-50 mx-auto'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>Or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorBtnElement} 
            {/* google signin btn  */}
            <button  onClick={()=>signInWithGoogle()}  className='btn btn-info w-50 d-block mx-auto my-2'>
                <img style={{ width: '30px' }} src={google} alt="" />
                <span className='px-2'>Sign In with Google</span>
            </button>
            {/* fb signin btn  */}
            <button  onClick={()=>signInWithFacebook()} className='btn btn-primary w-50 d-block mx-auto my-2'>
                <img style={{ width: '30px', marginLeft: '6px' }} src={fb} alt="" />
                <span className='px-2'>Sign In with Facebook</span>
            </button>
            {/* github signin btn  */}
            <button onClick={()=>signInWithGithub()}  className='btn btn-dark w-50 d-block mx-auto my-2'>
                <img style={{ width: '30px' }} src={github} alt="" />
                <span className='px-2'>Sign In with Github</span>
            </button>
        </div>
    );
};

export default SocialMedia;