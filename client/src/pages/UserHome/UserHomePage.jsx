import React, { useContext, useState } from 'react';
import { useNavigate, Form, useParams, useLoaderData } from 'react-router-dom';
import { tripContext, userContext } from '../../context';
import './UserHomePage.scss';
// Child Components
import UserTripsDisplay from './UserTripsDisplay';

const svg = <svg fill="#000000" height="22px" width="25px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 480.3 480.3" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M254.15,234.1V13.5c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v220.6c-31.3,6.3-55,34-55,67.2s23.7,60.9,55,67.2v98.2 c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-98.2c31.3-6.3,55-34,55-67.2C309.15,268.2,285.55,240.4,254.15,234.1z M240.65,342.8 c-22.9,0-41.5-18.6-41.5-41.5s18.6-41.5,41.5-41.5s41.5,18.6,41.5,41.5S263.55,342.8,240.65,342.8z"></path> <path d="M88.85,120.9V13.5c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v107.4c-31.3,6.3-55,34-55,67.2s23.7,60.9,55,67.2v211.4 c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5V255.2c31.3-6.3,55-34,55-67.2S120.15,127.2,88.85,120.9z M75.35,229.6 c-22.9,0-41.5-18.6-41.5-41.5s18.6-41.5,41.5-41.5s41.5,18.6,41.5,41.5S98.15,229.6,75.35,229.6z"></path> <path d="M418.45,120.9V13.5c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v107.4c-31.3,6.3-55,34-55,67.2s23.7,60.9,55,67.2v211.5 c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5V255.2c31.3-6.3,55-34,55-67.2S449.85,127.2,418.45,120.9z M404.95,229.6 c-22.9,0-41.5-18.6-41.5-41.5s18.6-41.5,41.5-41.5s41.5,18.6,41.5,41.5S427.85,229.6,404.95,229.6z"></path> </g> </g> </g></svg>

const UserHomePage = () => {
    // data from use loader data
    const user = useLoaderData()

    // const [joinTripCode, setJoinTripCode] = useState('');
    // const [tripsArray, setTripsArray] = useState(null)
    const navigate = useNavigate();
    // const { user, setUser } = useContext(userContext);

    // where do I input the userId from rootLayout and update the setCurrentTrips
    const handleCreateTrip = (e) => {
        e.preventDefault();
        return navigate('/new_trip');
    }

    const handleSettings = (e) => {
        e.preventDefault();
        return navigate('/user_settings');
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
            <div className='settings'>
                <button onClick={handleSettings} className='settings-btn'>{svg}</button>
            </div>
            <div className="user-display">
                <div className='join-trip'>
                    <div className='create-trip'>
                        <button onClick={handleCreateTrip}>Create New Trip</button>
                    </div>
                </div>
                <div className='trips'>
                    <h2>Trips</h2>
                    <UserTripsDisplay userobj={ user } />
                </div>
            </div>
        </div>
    )
}



export default UserHomePage;