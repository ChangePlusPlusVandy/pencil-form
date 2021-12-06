import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from './AuthContext';

/**
 * Protects route if teacher is unauthorized.
 * @return {Object} -Logic for protected routes.
 * */
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { teacher } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        teacher ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default ProtectedRoute;
