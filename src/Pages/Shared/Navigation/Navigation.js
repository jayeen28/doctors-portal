import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const { user, userLogOut } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }} id="default-app-bar">
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to='/'>Doctors Portal</Link>
                    </Typography>
                    <Link to='/appointment'><Button color="inherit" >Appointment</Button></Link>
                    {
                        user ?
                            <>
                                <Link to='/login'><Button color="inherit" onClick={() => userLogOut()}>Logout</Button></Link>
                                <Link to='/dashboard'><Button color="inherit">Dashboard</Button></Link>
                            </>
                            :
                            <Link to='/login'><Button color="inherit">Login</Button></Link>
                    }


                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;