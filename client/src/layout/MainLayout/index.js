import { Box } from "@material-ui/core";
import { Outlet } from "react-router-dom";
import Topbar from "../../components/topbar/Topbar";
import Drawer from './Drawer';

import { openDrawer } from "store/reducers/menu";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const Mainlayout =() => {
    const dispatch = useDispatch();

    const { drawerOpen } = useSelector((state) => state.menu);

    // drawe toggler
    const [open, setOpen] = useState(drawerOpen);
    const handleDrawerToggle = () => {
        setOpen(!open);
        dispatch(openDrawer({ drawerOpen: !open }));
    }

    

    return(
        <Box  sx={{display:'flex',width:'100%'}}>
            <Topbar/>
            <Drawer open={open} />
                <Box component="main" sx={{width:'100%',flexGrow:1}} >
                    <h1>Home</h1>
                    <Outlet/>
                </Box>

        </Box>
    );
};

export default Mainlayout;