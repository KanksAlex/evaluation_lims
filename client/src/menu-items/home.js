// assets
import { Home } from '@mui/icons-material';

// icons
const icons = {
    Home
};

const home = {
    id: 'group-home',
    title: 'Home',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/',
            icon: icons.Home,
            breadcrumbs: false,
            level: 1,
        }
    ]
};

export default home;
