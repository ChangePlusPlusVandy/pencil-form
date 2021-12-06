import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Form from './pages/Form';
import Submitted from './pages/Submitted';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';

/**
 * Router for forms.
 *
 * @returns {Object} - Switch router for all three paths.
 * */
const Router = () => (
  <AuthProvider>
    <Switch>
      <Route exact path="/" component={Home} />
      <ProtectedRoute exact path="/form" component={Form} />
      <ProtectedRoute exact path="/submitted" component={Submitted} />
    </Switch>
  </AuthProvider>
);

export default Router;
