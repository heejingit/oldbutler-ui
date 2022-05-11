import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from './service/AuthService';

const Logout = () => {
    AuthService.logout();
    return <Navigate to="/signin" replace />
}

export default Logout;