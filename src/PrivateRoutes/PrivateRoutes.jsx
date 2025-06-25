import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';
import privateLoading from '../assets/lotties/private.json'
import Lottie from 'lottie-react';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) return <div className='flex items-center justify-center h-[90vh]'>
        <Lottie style={{ width: '200px' }} animationData={privateLoading} loop={true}></Lottie>
    </div>

    if (!user) return <Navigate to='/login' state={location.pathname}></Navigate>


    return children;
};

export default PrivateRoutes;