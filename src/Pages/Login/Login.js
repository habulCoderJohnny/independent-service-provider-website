import {useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate} from 'react-router-dom';
import auth from '../../firebase.init';
import SocialMedia from '../Share/SocialMedia/SocialMedia';
import './Login.css';
import Loading from '../Share/Loading/Loading';
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [signInWithEmailAndPassword,user,loading,error] = useSignInWithEmailAndPassword(auth);
    // for redirect func
    const navigate = useNavigate();





    const logInSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        //Validation if(){}

        signInWithEmailAndPassword(email, password) 

    }
    if (user) {
        navigate('/home');
    }

    if (loading) {
        return <Loading></Loading>
    }

   // error showing (conditional render)
   let errorBtnElement;
   if (error) {
       errorBtnElement = <p className='text-danger text-center'>Error: {error?.message}</p>
   }





    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center font-weight-light mt-2'>
            CUSTOMER LOGIN</h2>
            <Form onSubmit={logInSubmit} className='text-white login-container p-5'>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef}  className=' transparent-input' type="email" placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} className=' transparent-input' type="password" placeholder="Password" required/>
                </Form.Group>
                <Button variant="btn btn-info btn-rounded d-block  p-0 w-25 my-4" type="submit">
                    Login
                </Button>
                {/*2nd Toggle */}
            <p>New Clint? <Link className='bg-warning rounded pe-auto text-decoration-none font-weight-bold' to='/register'>Register</Link></p>
                {/* Reset password  */}
                <p>Forget Password? <button className='btn btn-dark pe-auto p-0 text-decoration-none'>Reset Password</button></p>
            </Form>
            {errorBtnElement}
            <SocialMedia></SocialMedia>
        </div>
    );
};

export default Login;