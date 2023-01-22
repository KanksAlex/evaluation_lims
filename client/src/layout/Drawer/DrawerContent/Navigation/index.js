// material-ui
import { Box, Typography } from '@mui/material';

// project import
import menuItems from 'menu-items/index';
import NavGroup from './NavGroup';

//DRAWER CONTENT - NAVIGATION

const Navigation = () => {
    const navGroups = menuItems.items.map((item) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item} />;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Cannot render menu element
                    </Typography>
                );
        }
    });

    return <Box sx={{ pt: 2 }}>{navGroups}</Box>;
};

export default Navigation;
