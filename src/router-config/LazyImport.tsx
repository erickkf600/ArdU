import React, { Suspense, lazy } from 'react'

function LazyImport(Component: any) {
    const ComponentLoadable = lazy(Component)
    return (props: any) => (
        <Suspense fallback={<div>Loading...</div>}>
            <ComponentLoadable {...props} />
        </Suspense>
    );
}

export default LazyImport
//LAZY LOAD MODULES
export const Home = LazyImport(() => import('../pages/Home'/* webpackChunkName: 'home' */))
export const Profile = LazyImport(() => import('../pages/Profile'/* webpackChunkName: 'Profile' */))
export const Login = LazyImport(() => import('../pages/Login'/* webpackChunkName: 'Login' */))
