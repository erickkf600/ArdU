import  React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute: any = (props: any) =>{
    const isLogged = !!localStorage.getItem('token')

    return isLogged ? <Route {...props} /> : <Redirect to="/login" />
}

export default PrivateRoute