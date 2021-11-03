import React from 'react';

const AvailableAppointment = ({ date }) => {
    return (
        <div>
            Available appointment{date.toDateString()}
        </div>
    );
};

export default AvailableAppointment;