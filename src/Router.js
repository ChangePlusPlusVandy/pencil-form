
import React from "react";
import { Route, Switch } from "react-router-dom";

// Routes
import Home from "./pages/Home";
import Form from "./pages/Form";
import Submitted from "./pages/Submitted";

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