import { useRoutes } from 'react-router-dom';

//project imports
import LoginRoute from './LoginRoute';
import MainRoutes from './MainRoutes';
import PageNotFoundRoute from './PageNotFoundRoute';

//Routing Render

export default function ThemeRoutes(){
    return useRoutes([LoginRoute,MainRoutes, PageNotFoundRoute]);
};