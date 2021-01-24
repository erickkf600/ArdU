import React from 'react'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import * as routerActions from './routes.actions'
import { Categories } from './routes.mock'
import Sidebar from "./../shared/sidebar/sidebar"
const Routing = () => {
    return (
        <BrowserRouter>
            <Sidebar />
        <div className="content">
            <Switch>
                {routerActions.getRoutes(Categories)}
                <Redirect from="/" to="/home" />
                <Redirect from="*" to="/home" />
            </Switch>
        </div>
        </BrowserRouter>

    );
}
export default Routing;

    
