import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import ServiceBox from './ServiceBox/ServiceBox';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import teathWhite from '../../../images/whitening.png';

const services = [
    {
        name: "Fluoride Treatment",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
        img: fluoride
    },
    {
        name: "Cavity Filling",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
        img: cavity
    },
    {
        name: "Teath Whitening",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
        img: teathWhite
    }
]

const Services = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant="h6" component="div" sx={{ fontWeight: 400, color: 'success.main', my: 2 }}>
                    OUR SERVICES
                </Typography>
                <Typography variant="h4" component="div" sx={{ fontWeight: 600, my: 2 }}>
                    SERVICES WE PROVIDE
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(srvc => <ServiceBox service={srvc} key={srvc.name} />)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;