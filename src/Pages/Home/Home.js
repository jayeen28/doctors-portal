import React from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Navigation from '../Shared/Navigation/Navigation';
const Home = () => {
    return (
        <main>
            <Navigation />
            <Banner></Banner>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
        </main>
    );
};

export default Home;