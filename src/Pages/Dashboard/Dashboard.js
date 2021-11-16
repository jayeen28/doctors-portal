import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import useAuth from '../../Hooks/useAuth';
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserMd } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

const drawerWidth = 240;

function Dashboard(props) {
    const { user, userLogOut, isAdmin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div>
            <Toolbar>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    Dashboard
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                <ListItem >
                    <ListItemIcon sx={{ fontSize: 25 }}>
                        <FontAwesomeIcon icon={faHome} />
                    </ListItemIcon>
                    <ListItemText>
                        <Link to={`/dashboard`}><Button sx={{ color: '#757575' }}>Home</Button></Link>
                    </ListItemText>
                </ListItem>

                {/* // */}

                {
                    isAdmin &&
                    <>
                        <ListItem >
                            <ListItemIcon sx={{ fontSize: 25 }}>
                                <FontAwesomeIcon icon={faUserAlt} />
                            </ListItemIcon>
                            <ListItemText>
                                <Link to={`/dashboard/makeadmin`}><Button sx={{ color: '#757575' }}>Make Admin</Button></Link>
                            </ListItemText>
                        </ListItem>

                        {/* // */}

                        <ListItem >
                            <ListItemIcon sx={{ fontSize: 25 }}>
                                <FontAwesomeIcon icon={faUserMd} />
                            </ListItemIcon>
                            <ListItemText>
                                <Link to={`/dashboard/adddoctor`}><Button sx={{ color: '#757575' }}>Add Doctor</Button></Link>
                            </ListItemText>
                        </ListItem>
                    </>
                }
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to='/' style={{ color: 'white' }}>Doctors Portal</Link>
                    </Typography>
                    <Link to='/appointment'><Button sx={{ color: 'white' }}>Appointment</Button></Link>
                    {
                        user ?
                            <>
                                <Link to='/login'><Button color="inherit" sx={{ color: 'white' }} onClick={() => userLogOut()}>Logout</Button></Link>
                                <Link to='/dashboard'><Button color="inherit" sx={{ color: 'white' }} >Dashboard</Button></Link>
                            </>
                            :
                            <Link to='/login'><Button sx={{ color: 'white' }}>Login</Button></Link>
                    }
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
