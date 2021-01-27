import React from 'react'
import { Route } from "react-router-dom";
import { Routes } from '../interfaces/routes';
import PrivateRoute from './PrivateRoute'

export function getRoutes(routes: Routes[]) {
    return routes.map((prop, key) =>{
        return(
            <PrivateRoute path={prop.path} component={prop.component} key={key}/>
        )
    })
};
