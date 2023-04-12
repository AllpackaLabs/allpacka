import React, { useState } from 'react';
import { useNavigate, Form, Navigate } from 'react-router-dom';
import '../../scss/UserSettingsPage.scss'

const testArray = [
    {date: '1/2/2022', name: 'Rainbow Kitty Adventure'},
    {date: '5/7/2022', name: 'Rainbow Kitty Adventure'},
    {date: '7/22/2022', name: 'Rainbow Kitty Adventure'},
    {date: '3/14/2023', name: 'Rainbow Kitty Adventure'},
]


const UserSettingsPage = () => {

    // const { user, setUser } = useContext(userContext);

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
        <main className='settings-page'>
            <div className='user-settings'>
                <div className="update-trips">
                    <h2>Past Trips</h2>
                    <div className="trip-log">
                        {testArray.map(trip => <button className='trip'>{trip.date} {trip.name}</button>)}
                    </div>
                    {/* <button className='trip-delete'>Delete</button> */}
                </div>
                <div className="update-username">
                    <input type='text' placeholder='new username'/>
                    <button className='user-update' onClick={handleSubmit}>update username</button>
                </div>
                <div className="delete-account">
                    <input type='text' placeholder='enter user to delete'/>
                    <button className='user-update' onClick={handleSubmit}>delete account</button>
                </div>
            </div>
        </main>
    )
}

export default UserSettingsPage;