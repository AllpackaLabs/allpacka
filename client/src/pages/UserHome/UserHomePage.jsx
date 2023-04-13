import React, { useContext, useState } from 'react';
import { useNavigate, Form } from 'react-router-dom';
import { tripContext, userContext } from '../../context';
import '../../scss/UserHomePage.scss';
// Child Components
import UserTripsDisplay from './UserTripsDisplay';

const svg = <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="25px" viewBox="0 0 387.73 387.729" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M295.248,201.425c24.703,0,47.96-9.644,65.445-27.13c27.214-27.217,34.727-69.064,18.682-104.18 c-2.307-4.975-6.899-8.53-12.382-9.527c-0.961-0.153-1.922-0.24-2.889-0.24c-4.468,0-8.695,1.729-11.871,4.903l-27.22,27.25 l-12.707-0.97l-0.984-12.719l27.22-27.226c3.886-3.855,5.633-9.416,4.666-14.88c-0.985-5.404-4.552-9.992-9.548-12.262 c-12.033-5.509-25.418-8.419-38.671-8.419c-24.722,0-47.973,9.632-65.47,27.106c-24.38,24.391-33.117,59.324-23.275,92.005 l-12.22,12.214L67.551,20.873c-5.404-5.404-14.988-5.404-20.393,0L4.225,63.815c-5.632,5.633-5.632,14.76,0,20.393l126.467,126.458 l-87.004,87.01c-14.897,14.903-15.024,39.019-0.282,53.791l8.941,8.917c7.092,7.098,16.555,11.013,26.643,11.013 c10.226,0,19.858-3.993,27.148-11.266l111.797-111.797l128.749,119.135c2.816,2.811,6.503,4.234,10.196,4.234 c3.681,0,7.38-1.418,10.196-4.234c5.632-5.632,5.632-14.754,0-20.386L238.322,227.96l30.384-30.384 C277.292,200.109,286.186,201.425,295.248,201.425z"></path> </g> </g></svg>

const UserHomePage = () => {
    const [joinTripCode, setJoinTripCode] = useState('');
    const [tripsArray, setTripsArray] = useState(null)
    const navigate = useNavigate();
    const { user, setUser } = useContext(userContext);
     

    // where do I input the userId from rootLayout and update the setCurrentTrips
    const handleCreateTrip = (e) => {
        e.preventDefault();
        return navigate('/new_trip');
    }

    const handleSettings = (e) => {
        e.preventDefault();
        // return navigate('/UserSettings');
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
                    {/* <input  type="text" 
                            value={joinTripCode} 
                            onChange={(e) => setJoinTripCode(e.target.value)}
                            placeholder='Add trip code here...'
                            />
                    <button onClick={handleJoinTrip}>Add Trip</button> */}
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