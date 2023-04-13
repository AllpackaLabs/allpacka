import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate, Form, Navigate } from 'react-router-dom';
import { userContext } from '../../context.js';
import './UserSettingsPage.scss'

const testArray = [
    {date: '1/2/2022', name: 'Yellowstone'},
    {date: '5/7/2022', name: 'Grand Canyons'},
    {date: '7/22/2022', name: 'Yosemite'},
    {date: '9/14/2022', name: 'Smokey Mountains'},
    {date: '1/3/2023', name: 'Glacier'},
    {date: '2/20/2023', name: 'Teton'},
    {date: '3/17/2023', name: 'Acadia'},
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

    const { user } = useContext(userContext);
    const [updateUser, setUpdateUser] = useState(user)
    // const [user, setUser] = useState(testUser)
    const [newUserName, setNewUsername] = useState(updateUser.username);
    const [newPassword, setNewPassword] = useState(updateUser.password);
    const [newTripsArr, setNewTripsArr] = useState(updateUser.trips)

    const navigate = useNavigate();

    // function to handle updates to the usernam or password
    function handleSubmit(e) {
        e.preventDefault()
        window.alert('Account information has been updated. Please save changes to continue.')
        // update the user state with the new information
        setUpdateUser({ username: newUserName, password: newPassword, trips: newTripsArr})
    }
    
    // function to delete a trip from a users trip
    function deleteTrip(e) {
        if (window.confirm('Are you sure you want to delete this trip?')) {
            // filter the array to remove the element that was clicked on
            const updatedTrips = newTripsArr.filter(trip => trip.name !== e.target.value)
            // update the trips array state
            setNewTripsArr([...updatedTrips])
            // update the user state with the new information
            setUpdateUser({...user, trips: [...updatedTrips]})
        } else {
            return
        }
    }

    // function to delete users account
    function handleDelete() {
        if (window.confirm('Are you sure you want to delete your account?')) {
            // DELETE FETCH REQUEST WITH USER INFORMATION
            // fetch('/:_id', {  // OR `/users/${_id}`
            //     method: 'DELETE'
            // })
            return navigate('/signup')
        } else {
            return 
        }
    }

    function handleSave() {
        window.alert('Changes have been saved.')
        console.log('updated account info to be sent back', updateUser)
        // fetch('/users/:_id', {
        //     method: 'POST', // possibly PUT?
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        //     body: { updateUser }
        // })
        // .then(data => data.json())
        // .then(response => {
        //     console.log(response);
        //     return navigate(`/${response.user._id}`)
        // })
        // .catch(error => console.log('Error, ', error))
        return navigate(`/${updateUser._id}`)
    }

    // function to log the current state, used for testing
    // function logState() {
    //     console.log('test user', updateUser)
    // }

    return (
        <main className='settings-page'>
            <div className='user-settings'>
                <div className="update-username">
                    {/* button to check state... used for testing */}
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
                <h2 className='trip-title'>Past Trips</h2>
                <div className="update-trips">
                    {/* <h2>Past Trips</h2> */}
                    <div className="trip-log">
                        {newTripsArr.map((trip, i) => <button key={i} id={i} value={trip.name} className='trip' onClick={deleteTrip}>{trip.date} - {trip.name}</button>)}
                    </div>
                </div>
                <div className="save-account">
                    <button className='save-changes' onClick={handleSave}>Save Changes</button>
                </div>
                <div className="delete-account">
                    <h2>Delete Account</h2>
                    <button className='user-update' onClick={handleDelete}>delete account</button>
                </div>
            </div>
        </main>
    )
}

export default UserSettingsPage;