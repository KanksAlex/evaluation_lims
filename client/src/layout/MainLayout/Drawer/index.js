import {useMemo} from 'react';
import DrawerContent from './DrawerContent';
import { Box } from '@mui/material';
import MiniDrawerStyled from './MiniDrawerStyled';

const MainDrawer =({ open, window }) => {
   const drawerContent =useMemo(() => <DrawerContent/> ,[]);

   return(
    <Box component="nav"  sx={{ flexShrink: {md:0}, zIndex: 1300}} aria-label="mailbox folders">
        <h1>How djkksd</h1>
        <MiniDrawerStyled variant="permanent" open={open}>
            {drawerContent}
        </MiniDrawerStyled>
    </Box>
   );
}; 
export default MainDrawer;