import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate, Form, Navigate } from 'react-router-dom';
import { userContext } from '../../context.js';
import '../../scss/UserSettingsPage.scss'

const testArray = [
    {date: '1/2/2022', name: 'Yellowstone'},
    {date: '5/7/2022', name: 'Grand Canyons'},
    {date: '7/22/2022', name: 'Yosemite'},
    {date: '3/14/2023', name: 'Smokey Mountains'},
]


const UserSettingsPage = () => {

    /////////////////////////////////////////////////////////////
                    // HARD CODED USER
    const testUser = {
        username: 'luke',
        password: 'password',
        trips: testArray
    }

    ////////////////////////////////////////////////////////////

    // console.log('-- TEST USER --', testUser)

    // const { user, setUser } = useContext(userContext);
    const [user, setUser] = useState(testUser)
    const [newUserName, setNewUsername] = useState(testUser.username);
    const [newPassword, setNewPassword] = useState(testUser.password);
    const [newTripsArr, setNewTripsArr] = useState(testUser.trips)

    // function to handle updates to the usernam or password
    function handleSubmit(e) {
        e.preventDefault()
        // update the user state with the new information
        setUser({ username: newUserName, password: newPassword, trips: newTripsArr})
        // send a request to the server with the updates user profile
        fetch('/users/:_id', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: { user }
        })
            // parse the incoming data
            .then(data => data.json()) 
            // use the data
            .then(response => {
                console.log(response)
            })
            // catch any errors
            .catch(error => console.log('Error has occured', error))
    }
    
    // function to delete a trip from a users trip
    function deleteTrip(e) {
        // filter the array to remove the element that was clicked on
        const updatedTrips = newTripsArr.filter(trip => trip.name !== e.target.value)
        // update the trips array state
        setNewTripsArr([...updatedTrips])
        // update the user state with the new information
        setUser({...user, trips: [...updatedTrips]})
        fetch('/users/:_id', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: { user }
        })
            // parse the data
            .then(data => data.json()) 
            // use the data
            .then(response => {
                console.log(response)
            })
            // catch any errors
            .catch(error => console.log('Error has occured', error))
    }

    // function to delete users account
    function handleDelete() {
        window.confirm('Are you sure you want to delete your account?')
    }

    // function to log the current state, used for testing
    // function logState() {
    //     console.log('test user', user)
    // }

    return (
        <main className='settings-page'>
            <div className='user-settings'>
                <div className="update-username">
                    {/* button used to check state when testing buttons */}
                    {/* <button onClick={logState}>Log State</button> */}
                    <h2>Update Username</h2>
                    <input type='text' placeholder='new username' onChange={(e) => setNewUsername(e.target.value)}/>
                    <button className='username-update' onClick={handleSubmit}>update username</button>
                </div>
                <div className="update-password">
                    <h2>Update Password</h2>
                    <input type='text' placeholder='new password' onChange={(e) => setNewPassword(e.target.value)}/>
                    <button className='password-update' onClick={handleSubmit}>update password</button>
                </div>
                <div className="update-trips">
                    <h2>Past Trips</h2>
                    <div className="trip-log">
                        {newTripsArr.map((trip, i) => <button key={i} id={i} value={trip.name} className='trip' onClick={deleteTrip}>{trip.date} - {trip.name}</button>)}
                    </div>
                </div>
                <div className="delete-account">
                    <h3>Delete Account</h3>
                    <button className='user-update' onClick={handleDelete}>delete account</button>
                </div>
            </div>
        </main>
    )
}

export default UserSettingsPage;