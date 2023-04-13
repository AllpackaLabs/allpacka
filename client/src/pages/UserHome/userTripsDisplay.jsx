import React, { useState } from 'react';

const UserTripsDisplay = ({ userobj }) => {


    const trips = userobj && userobj.trips? userobj.trips.map(trip => {
    return (
    <div className='userTrips'>
        {trip.tripName} ${trip.date}
    </div>
        )
    }) : null;

    return(
		<div>
			{ trips }
		</div>
    )
}

export default UserTripsDisplay;