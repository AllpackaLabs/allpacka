import React, { useState } from 'react';
import { useNavigate, Form, Navigate } from 'react-router-dom';




const UserSettingsPage = () => {

    // Only for sending to server
    const handleSubmit = () => {
        fetch('/users/:_id', {
            Method:'POST',
            Body: { /**complicated mess of state... */}
        })
        .then(data => data.json)
        .then(data => {

        })
    // POST request for updating user info
    }


    // Helper function that delete trips from tripsArray

    return (
        <main className=''>
        <div className=''>
            <div className=''>
                <div className=''>
                    <span>{/** text */}</span>
                    <input 
                        type='text'
                        placeholder='username'
                        value = {username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div id='update-btn' className='button-div'>
                    <button onClick={handleSubmit}>{/** text */}</button>
                </div>
            </div>
            <div className='past-trips'>
                <h2>Past Trips</h2>
          {/* <UserTripsDisplay userobj={ user } /> */}
            </div>
        </div>
    </main>
    )
}

export default UserSettingsPage;