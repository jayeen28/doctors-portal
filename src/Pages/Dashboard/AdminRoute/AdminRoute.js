import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { isAdmin } = useAuth();
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