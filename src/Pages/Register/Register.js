import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import './Register.css';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import registerImg from '../../images/login.png';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';

const Register = () => {
    const { userRegistration, isLoading, googleLogin, setuser, seterror, mongoUpsert } = useAuth();
    const [errorStatus, seterrorStatus] = useState(false);
    const navigate = useNavigate();
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
        const { userEmail, userPassword, userConfirmedPass, userName } = data;
        if (userPassword === userConfirmedPass) {
            userRegistration(userEmail, userPassword, userName, navigate);
            seterrorStatus(false);
        }
        else {
            seterrorStatus(true);
        }
    }
    const googleLoginHandler = () => {
        googleLogin()
            .then(res => {
                setuser(res.user);
                const { displayName, email, uid } = res.user;
                mongoUpsert(displayName, email, uid);
                navigate('/');
            })
            .catch(error => seterror(error.message))
    }
    return (
        <>
            <Navigation />
            <Container>
                <Grid container spacing={3} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Grid item xs={12} md={6}>
                        {
                            isLoading ?
                                <CircularProgress />
                                :
                                <div className="register-form-contents">
                                    <div className="register-head">
                                        <Typography variant="h3" gutterBottom component="div">
                                            Register
                                        </Typography>
                                    </div>
                                    <div className="register-form-wrapper">
                                        <form onSubmit={handleSubmit(onSubmit)} className="register-form">

                                            {/* EMAIL INPUT FIELD */}
                                            <TextField {...register('userName')} label="Your name" type="text" variant="standard" required />
                                            <TextField {...register('userEmail')} label="Email" type="email" variant="standard" required />

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

                                            {/* PASSWORD CONFIRMATION */}
                                            <TextField id="confirm-password" error={errorStatus} {...register('userConfirmedPass')} label="Confirm password" type="password" variant="standard" required />
                                            <Button variant="contained" onClick={() => googleLoginHandler()}>Continue with Google</Button>
                                            <Link to='/login'><Button variant="text">Already a user? Please login.</Button></Link>
                                            {/* SUBMIT BUTTON */}
                                            <Button type='submit' variant="contained">Register</Button>
                                        </form>
                                    </div>
                                </div>
                        }
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="register-img">
                            <img src={registerImg} alt="register" style={{ width: '100%' }} />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Register;