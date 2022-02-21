import React from "react";
import {Switch, Route} from 'react-router-dom';

import Dashboard from "../components/Dashboard";
import Repository from "../components/Repository";

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path='/' component={Dashboard}/> 
            <Route path='/repository' component={Repository}/>
        </Switch>
    )
};

export default Routes;

