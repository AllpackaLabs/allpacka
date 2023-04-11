import React, { useState } from 'react';

const UserTripsDisplay = ({ userobj }) => {

  const tripsArray = userobj.trips
   console.log('tripsarray',tripsArray)

    const trips = tripsArray.map(trip => {
       return <div className='userTrip'>
            <span>`${trip.tripName} ${trip.date}`</span>
        </div>
    })

return(
    <tripsArray/ >
    )
}

export default UserTripsDisplay