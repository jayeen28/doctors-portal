import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import bannerImg from '../../../images/chair.png';
const Banner = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1, textAlign: 'left' }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <div className="banner-texts" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '100%' }}>
                            <Typography variant="h4" sx={{ fontWeight: 500, fontSize: '45px' }}>
                                Your new smile <br />
                                Starts here
                            </Typography>
                            <Typography variant="p" sx={{ fontSize: '18px', letterSpacing: '.5px', fontWeight: 500, width: '85%' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, expedita iusto voluptas aut at praesentium cum perferendis provident minus a.
                            </Typography>
                            <div className="banner-button" variant="contained">
                                <Button>
                                    Get appointment
                                </Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="banner-image" style={{ width: '500px' }}>
                            <img src={bannerImg} alt="bannerimage" style={{ width: '100%' }} />
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Banner;