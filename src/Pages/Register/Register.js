import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className='w-75 mx-auto'>
            <h2 className='text-center mt-4 text-primary'>CREATE ACCOUNT</h2>
            <form  className='register-form'>
                <input type="text" name="name" id="1" placeholder='Your Name' required />

                <input type="email" name="email" id="2" placeholder='Your valid email' required />

                <input type="password" name="password" id="3" placeholder='Your secure password' required />
                {/* Checkbox */}
                <input type="checkbox" name="terms" id="terms" />
                <label className='ps-2' htmlFor="terms">Accept Terms & Condition</label>
                {/* Toggle */}
                <p className='mt-2'>Already a customer? <Link className='text-primary pe-auto text-decoration-none' to='/login'>Plz Login</Link></p>
                <input className='btn btn-primary w-25 mx-auto btn-rounded' type="submit" value="Register..." />
            </form>
        </div>
    );
};

export default Register;