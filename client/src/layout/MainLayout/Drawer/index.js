import {useMemo} from 'react';
import DrawerContent from './DrawerContent';
import { Box } from '@mui/material';
import MiniDrawerStyled from './MiniDrawerStyled';

const MainDrawer =({ window }) => {
   const drawerContent =useMemo(() => <DrawerContent/> ,[]);

   return(
    <Box component="nav"  sx={{ flexShrink: {md:0}, zIndex: 1300}} aria-label="mailbox folders">
        <MiniDrawerStyled variant="permanent">
            {drawerContent}
        </MiniDrawerStyled>
    </Box>
   );
}; 
export default MainDrawer;