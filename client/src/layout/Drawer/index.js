import {useMemo} from 'react';
import DrawerContent from './DrawerContent';
import {Box, Drawer,} from '@mui/material';

const MainDrawer =() => {
   const drawerContent =useMemo(() => <DrawerContent/> ,[]);

   return(
    <Box component="nav"  sx={{ flexShrink: {md:0}, zIndex: 1300}} aria-label="mailbox folders">
        
    </Box>
   );
}; 
export default MainDrawer;