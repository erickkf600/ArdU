import React from 'react'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import * as routerActions from './routes.actions'
import { Categories } from './routes.mock'
import Sidebar from "./../shared/sidebar/sidebar"
import { Login } from './LazyImport'
const Routing = () => {
    const isLogged = !!localStorage.getItem('token')
    return (
        <BrowserRouter>
           {isLogged ? <Sidebar /> : null} 
        <div className="content">
            <Switch>
                {routerActions.getRoutes(Categories)}
                {!isLogged ? <Route path="/login" component={Login} />: null}
                <Redirect from="/" to="/home" />
                <Redirect from="*" to="/home" />
            </Switch>
        </div>
        </BrowserRouter>

    );
}
export default Routing;

    
