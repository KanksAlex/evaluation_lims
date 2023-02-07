import MainLayout from '../layout/MainLayout';

//pages
import Home from 'pages/home/Home';
import Info from 'pages/info';
import ArticlePage from 'pages/info/Article';
import UserList from 'pages/userList/UserList';
import { ProtectedRoute } from './ProtectedRoute';
import Matrix from 'pages/matrix/Matrix';
import Cv003 from 'pages/cv003/Cv003';
import Cv009 from 'pages/cv009/Cv009';
import Cv010 from 'pages/cv010/Cv010';
const MainRoutes ={
    path:'/',
    element:<ProtectedRoute><MainLayout/></ProtectedRoute>,

    children:[
        {
            path: '/',
            children: [
                {
                    path: '/',
                    element: <Home/>
                }
            ]
        },
        {
            path: '/',
            children: [
                {
                    path: 'info',
                    element: <Info />
                },
                {
                    path: 'info/:articleId',
                    element: <ArticlePage />
                }
            ]
        },
        {
            path: '/',
            children: [
                {
                    path: 'matrix',
                    element: <Matrix />
                }
            ]
        },

        {
            path: '/',
            children: [
                {
                    path: 'Cv003',
                    element: <Cv003 />
                },

                {
                    path: 'Cv009',
                    element: <Cv009 />
                
                }

                ,

                {
                    path: 'Cv010',
                    element: <Cv010 />
                }
            ]
        }
        
    ]

};

export default MainRoutes;
