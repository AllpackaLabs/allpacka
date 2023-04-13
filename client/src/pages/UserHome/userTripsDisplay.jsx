import React, { useState } from 'react';

const UserTripsDisplay = ({ userobj }) => {


    const trips = userobj && userobj.trips? userobj.trips.map((trip, i) => {
    return (
    <div className='userTrips' key={i}>
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