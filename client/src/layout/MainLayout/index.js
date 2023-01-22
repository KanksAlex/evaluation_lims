import { Box } from "@material-ui/core";
import { Outlet } from "react-router-dom";
import Topbar from "../../components/topbar/Topbar";
import Drawer from './Drawer';



const Mainlayout =() => {
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