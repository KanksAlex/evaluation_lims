// project import
import SimpleBar from 'components/simple-bar/SimpleBar';
import Navigation from './Navigation';

//DRAWER CONTENT

const DrawerContent = () => (
    <SimpleBar
        sx={{
            '& .simplebar-content': {
                display: 'flex',
                flexDirection: 'column'
            }
        }}
    >
        <Navigation />
    </SimpleBar>
);

export default DrawerContent;
