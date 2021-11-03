import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuth } from "./AuthContext";

/**
 * Protects route if teacher is unauthorized.
 * @return {Object} -Logic for protected routes.
 * */
export default function ProtectedRoute({ component: Component, ...rest }) {
  const { teacher } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return teacher ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        );
      }}
    ></Route>
  );
}
