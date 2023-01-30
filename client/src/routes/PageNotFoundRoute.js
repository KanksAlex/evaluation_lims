import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';

// render - 404 not found
const PageNotFoundPage = Loadable(lazy(() => import('pages/404')));

// Page not found

const PageNotFoundRoute = {
    path: '*',
    element: <PageNotFoundPage />
};

export default PageNotFoundRoute;
