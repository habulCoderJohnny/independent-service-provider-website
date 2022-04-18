
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';
const Login = () => {
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center font-weight-light mt-2'>
            CUSTOMER LOGIN</h2>
            <Form className='text-white login-container p-5'>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className=' transparent-input' type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className=' transparent-input' type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="btn btn-info btn-rounded d-block  p-0 w-25 my-4" type="submit">
                    Login
                </Button>
                {/*2nd Toggle */}
            <p>New Clint? <Link className='text-primary pe-auto text-decoration-none font-weight-bold' to='/register'>Register</Link></p>
                {/* Reset password  */}
                <p>Forget Password? <button className='btn btn-dark pe-auto p-0 text-decoration-none'>Reset Password</button></p>
            </Form>
        </div>
    );
};

export default Login;