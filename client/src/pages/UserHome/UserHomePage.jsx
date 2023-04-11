import React, { useContext, useState } from 'react';
import { useNavigate, Form } from 'react-router-dom';
import { tripContext, userContext } from '../../context';
import '../../scss/UserHomePage.scss';
// Child Components
import UserTripsDisplay from './userTripsDisplay';

const UserHomePage = () => {
    const [joinTripCode, setJoinTripCode] = useState('');
    const [tripsArray, setTripsArray] = useState(null)
    const navigate = useNavigate();
    const { user, setUser } = useContext(userContext);
     

    // where do I input the userId from rootLayout and update the setCurrentTrips
    const handleCreateTrip = (e) => {
        e.preventDefault();
        return navigate('/NewTripPage');
    }

    // NOT built yet
    const handleJoinTrip = (e) => {
        e.preventDefault();
        console.log('not built out yet');
        // patch
        // TODO make functionality in backend lol
        // const URL = '/trips/' + res.trip_id;
        // return redirect(URL);
    }

    return (
        <div className="user-home-page">
            <div className="user-display">
                <div className='join-trip'>
                    <input  type="text" 
                            value={joinTripCode} 
                            onChange={(e) => setJoinTripCode(e.target.value)}
                            placeholder='Add trip code here...'
                            />
                    <button onClick={handleJoinTrip}>Add Trip</button>
                    <div className='create-trip'>
                        <button onClick={handleCreateTrip}>Create New Trip</button>
                    </div>
                </div>
                <div className='trips'>
                    <h2>Currently Planning</h2>
                    {/* {JSON.stringify(user.trips)} */}
                </div>
                <div className='trips'>
                    <h2>Past Trips</h2>
                    {/* <UserTripsDisplay userobj={ user } /> */}
                </div>
            </div>
        </div>
    )
}


export default UserHomePage;