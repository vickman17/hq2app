import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUser } from './UserContext'; // Update the path accordingly

interface ProtectedRouteProps {
    component: React.FC<any>;
    path: string;
    exact?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component, ...rest }) => {
    const { userInfo } = useUser();

    return (
        <Route
            {...rest}
            render={props =>
                userInfo ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default ProtectedRoute;
