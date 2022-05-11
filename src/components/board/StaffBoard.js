import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import AuthService from '../auth/service/AuthService';

const StaffBoard = () => {
    if (!AuthService.isAuthenticated()) return <Navigate to="/signin" replace />;
    const role = AuthService.getRole();
    if (!(role == "staff" || role == "admin")) return <Navigate to="/" replace />;
    const user = AuthService.getUser();
    console.log(user);
    return (
        <h1>Staff</h1>
    );
}

export default StaffBoard;