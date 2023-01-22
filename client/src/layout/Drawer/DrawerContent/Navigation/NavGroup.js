import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// material-ui
import { Box, List, Typography } from '@mui/material';

// project import
import CollapseNavItem from './CollapseNavItem';
import NavItem from './NavItem';

//NAVIGATION - LIST GROUP

const NavGroup = ({ item }) => {
    const menu = useSelector((state) => state.menu);
    const { drawerOpen } = menu;

    const navCollapse = item.children?.map((menuItem) => {
        switch (menuItem.type) {
            case 'collapse':
                return <CollapseNavItem  key={menuItem.id} item={menuItem} level={menuItem.level} />;
            case 'item':
                return <NavItem key={menuItem.id} item={menuItem} level={menuItem.level} />;
            default:
                return (
                    <Typography key={menuItem.id} variant="h6" color="error" align="center">
                        (Error) Fix - Group Collapse or Items
                    </Typography>
                );
        }
    });

    return (
        <List
            subheader={
                item.title &&
                drawerOpen && (
                    <Box sx={{ pl: 3, mb: 1.0 }}>
                        <Typography variant="subtitle2" color="textSecondary">
                            {item.title}
                        </Typography>
                    </Box>
                )
            }
            sx={{ mb: drawerOpen ? 0.5 : 0, py: 0, zIndex: 0 }}
        >
            {navCollapse}
        </List>
    );
};

NavGroup.propTypes = {
    item: PropTypes.object
};

export default NavGroup;
