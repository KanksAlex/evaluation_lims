import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import { ProtectLoginRoute } from './ProtectLoginRoute';

// render - login
const Login = Loadable(lazy(() => import('pages/login/Login')));

// AUTH ROUTING

const LoginRoute = {
    path: 'login',
    element: <ProtectLoginRoute><Login/></ProtectLoginRoute>
};

export default LoginRoute;
