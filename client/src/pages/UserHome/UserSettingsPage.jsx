import React, { useState, useContext } from 'react';
import { useNavigate, Form, Navigate } from 'react-router-dom';
import { userContext } from '../../context.js';
import '../../scss/UserSettingsPage.scss'

const testArray = [
    {date: '1/2/2022', name: 'Rainbow Kitty Adventure'},
    {date: '5/7/2022', name: 'Rainbow Kitty Adventure'},
    {date: '7/22/2022', name: 'Rainbow Kitty Adventure'},
    {date: '3/14/2023', name: 'Rainbow Kitty Adventure'},
]


const UserSettingsPage = () => {

    const { user, setUser } = useContext(userContext);
    const navigate = useNavigate();
    const [newUsername, setNewUsername] = useState('');
    const [newTripsArr, setNewTripsArr] = useState(testUser.trips)
    const [body, setBody] = useState({});

    function handleSubmit(e) {
        e.preventDefault()
        console.log('user? ', user)
        fetch('/users/:_id', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {body}
        })
        .then(data => data.json())
        .then(data => {
            navigate(`/user/${user.id}`)
        })
        .catch(err => {
            alert('something...')
        })
    }

    function createBody() {

    }

    function handleDelete() {
        window.confirm('Are you sure you want to delete your account?')
    }
    // Helper function that delete trips from tripsArray

    return (
        <main className='settings-page'>
            <div className='user-settings'>
                <div className="update-username">
                    <h2>Update Username</h2>
                    <input type='text' placeholder='new username' value={newUsername} onChange={(e) => setNewUsername(e.target.value)}/>
                    <button className='user-update' onClick={handleSubmit}>update username</button>
                </div>
                <div className="update-password">
                    <h2>Update Password</h2>
                    <input type='password' placeholder='new password' onChange={(e) => setNewPassword(e.target.value)}/>
                    <button className='user-update' onClick={handleSubmit}>update password</button>
                </div>
                <div className="update-trips">
                    <h2>Past Trips</h2>
                    <div className="trip-log">
                        {testArray.map((trip, i) => <button key={i} className='trip'>{trip.date} {trip.name}</button>)}
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