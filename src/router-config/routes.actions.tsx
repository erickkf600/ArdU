import React from 'react'
import { Route } from "react-router-dom";
import { Routes } from '../interfaces/routes';

export function getRoutes(routes: Routes[]) {
    return routes.map((prop, key) =>{
        return(
            <Route path={prop.path} component={prop.component} key={key}/>
        )
    })
};

