import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import DrawerContent from './DrawerContent';
import MiniDrawerStyled from './MiniDrawerStyled';

const MainDrawer =({ open, handleDrawerToggle, window }) => {
    const theme = useTheme();
    const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

    // responsive drawer container
    const container = window !== undefined ? () => window().document.body : undefined;

   const drawerContent =useMemo(() => <DrawerContent/> ,[]);

   return(
    <Box component="nav" sx={{ flexShrink: { md: 0 }, zIndex: 1300 }} aria-label="mailbox folders">
        {!matchDownMD ? (
                <MiniDrawerStyled variant="permanent" open={open}>
                    {drawerContent}
                </MiniDrawerStyled>
            ) : (
                <Drawer
                    container={container}
                    variant="temporary"
                    open={open}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: 'block', lg: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            borderRight: `1px solid ${theme.palette.divider}`,
                            backgroundImage: 'none',
                            boxShadow: 'inherit'
                        }
                    }}
                >
                    {open && drawerContent}
                </Drawer>
            )}
    </Box>
   );
}; 
export default MainDrawer;