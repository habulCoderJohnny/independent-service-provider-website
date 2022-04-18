import React from 'react';
import { useCreateUserWithEmailAndPassword,useUpdateProfile} from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Share/Loading/Loading';
import SocialMedia from '../Share/SocialMedia/SocialMedia';
import './Register.css'

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();


    if(loading || updating){
        return <Loading></Loading>
    }

    if (user) {
     toast('sent mail verify')
      
    }
    

    const registerFormSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;


        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }
    
    return (
        <div className='w-75 mx-auto'>
            <h2 className='text-center mt-4 text-primary'>CREATE ACCOUNT</h2>
            <ToastContainer/>
            <form onSubmit={registerFormSubmit} className='register-form'>
                <input type="text" name="name" id="1" placeholder='Your Name' required />

                <input type="email" name="email" id="2" placeholder='Your valid email' required />

                <input type="password" name="password" id="3" placeholder='Your secure password' required />
                {/* Checkbox */}
                <input type="checkbox" name="terms" id="terms" />
                <label className='ps-2' htmlFor="terms">Accept Terms & Condition</label>
                {/* Toggle */}
                <p className='mt-2'>Already a customer? <Link className='text-primary pe-auto text-decoration-none' to='/login'>Login</Link></p>
                <input className='btn btn-primary w-25 mx-auto btn-rounded' type="submit" value="Register..." />
            </form>
            <SocialMedia></SocialMedia>
        </div>
    );
};

export default Register;