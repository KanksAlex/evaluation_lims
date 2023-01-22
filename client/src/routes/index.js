import {useRoutes} from 'react-router-dom';

//project imports
import MainRoutes from './MainRoutes';

//Routing Render

export default function ThemeRoutes(){
    return useRoutes([MainRoutes]);
};