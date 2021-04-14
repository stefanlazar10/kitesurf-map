import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import Login from "./Login";
import Dashboard from "./Dashboard";
import { DataTable } from 'react-data-components';
import Data from './Data';
import Datatable from './Datatable'

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
