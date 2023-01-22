import PropTypes from 'prop-types';
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Avatar, Chip, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project import
import { activeItem } from 'store/reducers/menu';
import NavItem from './NavItem';

//NAVIGATION - COLLAPSE LIST ITEM

const CollapseNavItem = ({ item, level }) => {
    const [open, setOpen] = React.useState(false);

    const toggleCollapseButton = () => {
        setOpen(!open);
    };
    const openCollapseButton = () => {
        setOpen(true);
    }
    const closeCollapseButton = () => {
        setOpen(false);
    }

    const theme = useTheme();
    const dispatch = useDispatch();
    const menu = useSelector((state) => state.menu);
    const { drawerOpen, openItem } = menu;

    const Icon = item.icon;
    const itemIcon = item.icon ? <Icon style={{ fontSize: drawerOpen ? '1rem' : '1.25rem' }} /> : false;

    const isSelected = openItem.findIndex((id) => id === item.id) > -1;

    // active menu item on page load
    useEffect(() => {
        const currentIndex = document.location.pathname
            .toString()
            .split('/')
            .findIndex((id) => id === item.id);
        if (currentIndex > -1) {
            dispatch(activeItem({ openItem: [item.id] }));
        }
        // eslint-disable-next-line
    }, []);

    const textColor = 'text.primary';
    const iconSelectedColor = 'primary.main';

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

    const matchDownLG = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <List onMouseOver={ !matchDownLG ? openCollapseButton : () => {}} 
            onMouseLeave={ !matchDownLG ? closeCollapseButton : () => {}}
        >
            <ListItemButton
                onClick={ matchDownLG ? toggleCollapseButton : () => {}}
                disabled={item.disabled}
                selected={isSelected}
                sx={{
                    zIndex: 1201,
                    pl: drawerOpen ? `${level * 28}px` : 1.5,
                    py: !drawerOpen && level === 1 ? 1.0 : 0.5,
                    ...(drawerOpen && {
                        '&:hover': {
                            bgcolor: 'primary.lighter'
                        },
                        '&.Mui-selected': {
                            bgcolor: 'primary.lighter',
                            borderRight: `2px solid ${theme.palette.primary.main}`,
                            color: iconSelectedColor,
                            '&:hover': {
                                color: iconSelectedColor,
                                bgcolor: 'primary.lighter'
                            }
                        }
                    }),
                    ...(!drawerOpen && {
                        '&:hover': {
                            bgcolor: 'transparent'
                        },
                        '&.Mui-selected': {
                            '&:hover': {
                                bgcolor: 'transparent'
                            },
                            bgcolor: 'transparent'
                        }
                    })
                }}
            >
                {itemIcon && (
                <ListItemIcon
                    sx={{
                        minWidth: 28,
                        color: isSelected ? iconSelectedColor : textColor,
                        ...(!drawerOpen && {
                            borderRadius: 1.5,
                            width: 36,
                            height: 36,
                            alignItems: 'center',
                            justifyContent: 'center',
                            '&:hover': {
                                bgcolor: 'secondary.lighter'
                            }
                        }),
                        ...(!drawerOpen &&
                            isSelected && {
                                bgcolor: 'primary.lighter',
                                '&:hover': {
                                    bgcolor: 'primary.lighter'
                                }
                            })
                    }}
                >
                    {itemIcon}
                </ListItemIcon>
                )}
                {(drawerOpen || (!drawerOpen && level !== 1)) && (
                    <ListItemText
                        primary={
                            <Typography variant="h6" sx={{ color: isSelected ? iconSelectedColor : textColor }}>
                                {item.title}
                            </Typography>
                        }
                    />
                )}
                {open ? <ExpandLess /> : <ExpandMore />}
                {(drawerOpen || (!drawerOpen && level !== 1)) && item.chip && (
                    <Chip
                        color={item.chip.color}
                        variant={item.chip.variant}
                        size={item.chip.size}
                        label={item.chip.label}
                        avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
                    />
                )}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List
                    sx={{ mb: drawerOpen ? 1.0 : 0, py: 0, zIndex: 0 }}
                >
                    {navCollapse}
                </List>
            </Collapse>
        </List>
    );
}

CollapseNavItem.propTypes = {
    item: PropTypes.object
};


export default CollapseNavItem;