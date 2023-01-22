import { Box } from "@material-ui/core";
import { Outlet } from "react-router-dom";
import Topbar from "../../components/topbar/Topbar";
import Drawer from './Drawer';

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openDrawer } from "store/reducers/menu";

const Mainlayout = () => {
    const dispatch = useDispatch();

    const { drawerOpen } = useSelector((state) => state.menu);

    // drawe toggler
    const [open, setOpen] = useState(drawerOpen);
    const handleDrawerToggle = () => {
        setOpen(!open);
        dispatch(openDrawer({ drawerOpen: !open }));
    }

    // set media wise responsive drawer
    useEffect(() => {
        setOpen(!matchDownLG);//sets thats Drawer should be open above lg screen size
        dispatch(openDrawer({ drawerOpen: !matchDownLG }));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [matchDownLG]);

    useEffect(() => {
        if (open !== drawerOpen) setOpen(drawerOpen);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [drawerOpen]);

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Topbar />
            <Drawer open={open} handleDrawerToggle={handleDrawerToggle} />
            <Box component="main" sx={{ width: '100%', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                <h1>Home</h1>
                <Outlet />
            </Box>

        </Box>
    );
};

export default Mainlayout;