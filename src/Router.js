
import React from "react";
import { Route, Switch } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Form from "./pages/Form";
import Submitted from "./pages/Submitted";


/**
 * Router for forms.
 * 
 * @returns {Object} - Switch router for all three paths.
 * */
const Router = () => {
  return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/submitted" component={Submitted} />
    </Switch>
  );
};

export default Router;