import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import Login from "./Login";
import Dashboard from "./Dashboard";
import Data from "./Data";

const ReactRouterSetup = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login}>
            <Login />
          </Route>
          <Route path="/dashboard" component={Dashboard}>
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default ReactRouterSetup;
