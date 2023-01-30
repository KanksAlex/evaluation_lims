// material-ui
import { LanguageOutlined } from '@mui/icons-material';
import { Box, IconButton, Link, useMediaQuery } from '@mui/material';

// project import
import MobileSection from './MobileSection';
import Notification from './Notification';
import Profile from './Profile';

//HEADER - CONTENT

const TopBarContent = () => {
    const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', ml: { xs: 0, md: 1 }, mr: 2 }}>
            </Box>
            {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}

            <IconButton
                component={Link}
                href="https://www.google.com/"
                target="_blank"
                disableRipple
                color="secondary"
                title="LIMS Website"
                sx={{ color: 'text.primary', bgcolor: 'grey.100' }}
            >
                <LanguageOutlined />
            </IconButton>

            <Notification />
            {!matchesXs && <Profile />}
            {matchesXs && <MobileSection />}
        </>
    );
};

export default TopBarContent;
