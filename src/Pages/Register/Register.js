import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword,useUpdateProfile} from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Share/Loading/Loading';
import SocialMedia from '../Share/SocialMedia/SocialMedia';
import './Register.css'
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    if (user) {
        console.log('user', user);  
       }

     // error showing (conditional render)
   let errorBtnElements;
   if (error) {
       errorBtnElements = <p className='text-danger text-center'>Error: {error?.message}</p>
       console.log(error);
   }


//    if (error) {
//     return (
//       <div>
//         <p>Error: {error.message}</p>
//       </div>
//     );
//   }
   
   
   if(loading ||updating){
    return <Loading></Loading>
}

    const registerFormSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        // console.log('Updated profile');
        // alert('Be patient! Updating profile...it was making under Jr. developer ');
        navigate('/home');
    }

    return (
        <div className='w-75 mx-auto col-sm-12'>
            <h2 className='text-center mt-4 text-primary'>CREATE ACCOUNT</h2>
            <form onSubmit={registerFormSubmit} className='register-form'>
                <input type="text" name="name" id="1" placeholder='Your Name' required />

                <input type="email" name="email" id="2" placeholder='Your valid email' required />

                <input type="password" name="password" id="3" placeholder='Your secure password' required />
                {/* Checkbox */}
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'ps-2': 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms and Conditions</label>
                <input
                    disabled={!agree}
                    className='w-50 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Register" />
                   {/* Toggle */}
                   <p className='mt-2'>Already a customer? <Link className='text-primary pe-auto text-decoration-none' to='/login'>Login</Link></p>
               
            </form>
            {{errorBtnElements}}
            <SocialMedia></SocialMedia>
             {/* <ToastContainer/> */}

        </div>
    );
};

export default Register;