import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import './Login.css';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import loginImg from '../../images/login.png';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useNavigate, useLocation } from "react-router-dom";
import Navigation from '../Shared/Navigation/Navigation';

const Login = () => {
    const { userLogin, setuser, seterror, setisLoading, googleLogin, mongoUpsert } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/';
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const { handleSubmit, register } = useForm();
    const onSubmit = data => {
        userLogin(data.userEmail, data.userPassword)
            .then(res => {
                setuser(res.user);
                navigate(redirect_uri);
            })
            .catch(error => seterror(error.message))
            .finally(() => setisLoading(false))
    }
    const googleLoginHandler = () => {
        googleLogin()
            .then(res => {
                setuser(res.user);
                const { displayName, email, uid } = res.user;
                mongoUpsert(displayName, email, uid);
                navigate(redirect_uri);
            })
            .catch(error => seterror(error.message))
    }
    return (
        <>
            <Navigation />
            <Container>
                <Grid container spacing={3} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <div className="login-form-contents">
                            <div className="login-head">
                                <Typography variant="h3" gutterBottom component="div">
                                    Login
                                </Typography>
                            </div>
                            <div className="login-form-wrapper">
                                <form onSubmit={handleSubmit(onSubmit)} className="login-form">

                                    {/* EMAIL INPUT FIELD */}
                                    <TextField id="standard-basic" {...register('userEmail')} label="Email" type="email" variant="standard" required />

                                    {/* PASSWORD INPUT FIELD */}
                                    <FormControl variant="standard">
                                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                        <Input
                                            id="standard-adornment-password"
                                            type={values.showPassword ? 'text' : 'password'}
                                            {...register('userPassword')}
                                            required
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                    >
                                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                    <Button variant="contained" onClick={() => googleLoginHandler()}>Continue with Google</Button>
                                    <Link to='/register'><Button variant="text">New user? Please register.</Button></Link>
                                    {/* SUBMIT BUTTON */}
                                    <Button type='submit' variant="contained">Login</Button>
                                </form>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="login-img">
                            <img src={loginImg} alt="Loginpageimage" style={{ width: '100%' }} />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Login;