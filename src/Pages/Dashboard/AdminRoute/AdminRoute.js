import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { isAdmin, adminLoading } = useAuth();
    if (adminLoading) { return <CircularProgress /> }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAdmin ? (children)
                    :
                    (
                        <Redirect to={{
                            pathname: '/',
                            state: { from: location }
                        }} />
                    )
            }
        />
    );
};

export default AdminRoute;