import {useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import auth from '../../firebase.init';
import SocialMedia from '../Share/SocialMedia/SocialMedia';
import './Login.css';
import Loading from '../Share/Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [signInWithEmailAndPassword,user,loading,error] = useSignInWithEmailAndPassword(auth);

   //foget password recover
   const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


      // Reset Password function
      const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }

    // for redirect func
    const navigate = useNavigate();

     // 4th-a visitor
     const location = useLocation();
     //4th  visitor's desire page info
     const from = location?.state?.from?.pathname || "/";





    const logInSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        //Validation if(){}

        signInWithEmailAndPassword(email, password) 

    }
    if (user) {
        // navigate('/home');
        navigate(from,{replace:true});
    }

    if (loading || sending) {
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
            </Form>
                  {/*2nd Toggle */}
                  <p>New Clint? <Link className='bg-warning rounded pe-auto text-decoration-none font-weight-bold' to='/register'>Register</Link></p>
                {/* Reset password  */}
                <p>Forget Password? <button onClick={resetPassword} className='btn btn-link pe-auto text-decoration-none bg-warning p-0'>Reset Password</button></p>
            {errorBtnElement}
            <SocialMedia></SocialMedia>
            <ToastContainer/>
        </div>
    );
};

export default Login;