import React from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Navigation from '../Shared/Navigation/Navigation';
import HomeDoctors from './HomeDoctors/HomeDoctors';
const Home = () => {
    return (
        <main>
            <Navigation />
            <Banner />
            <Services />
            <AppointmentBanner />
            <HomeDoctors />
        </main>
    );
};

export default Home;