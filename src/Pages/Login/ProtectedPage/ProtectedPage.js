import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Share/Loading/Loading';

const ProtectedPage = ({ children }) => {

    // 1st
    const [user, loading, error] = useAuthState(auth);
    // console.log('inside requireAuth:', user);
    // 3rd
    const location = useLocation();


    if (loading) {
        return <Loading></Loading>
    }

     // 2nd, jodi user login na thake tahohe then navigate kore login e pathabo
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    // 4th
    return children;

};

export default ProtectedPage;