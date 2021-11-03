import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuth } from "./AuthContext";

export default function PrivateRoute({ component: Component, ...rest }) {
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
