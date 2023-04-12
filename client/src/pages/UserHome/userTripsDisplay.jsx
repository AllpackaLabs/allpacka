import React, { useState } from 'react';

const UserTripsDisplay = ({ userobj }) => {


    const trips = userObj.trips.map(trip => {
    return (
    <div className='userTrips'>
        {trip.tripName} ${trip.date}
    </div>
        )
    })

return(

    {trips}
    )
}

export default UserTripsDisplay;