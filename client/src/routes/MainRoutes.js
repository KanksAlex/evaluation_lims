import MainLayout from '../layout/MainLayout';

//pages
import Home from 'pages/home/Home';
import Info from 'pages/info';
import ArticlePage from 'pages/info/Article';
import UserList from 'pages/userList/UserList';

const MainRoutes ={
    path:'/',
    element:<MainLayout/>,

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
                    path: 'participant',
                    element: <UserList />
                }
            ]
        }
        
    ]

};

export default MainRoutes;
