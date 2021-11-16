import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({ children }) => {
    const location = useLocation();
    const { isAdmin, adminLoading } = useAuth();
    if (adminLoading) { return <CircularProgress /> }
    if (isAdmin) { return children };
    return <Navigate to='/' state={{ from: location }} />
};

export default AdminRoute;