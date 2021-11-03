import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ServiceBox = ({ service }) => {
    const { name, description, img } = service;
    return (
        <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                    image={img}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ letterSpacing: .5, fontSize: '16px', fontWeight: 500 }}>
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ServiceBox;