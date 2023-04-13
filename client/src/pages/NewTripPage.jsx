import React, { useState, useContext } from "react";
import { useNavigate, Form } from "react-router-dom";
import { tripContext } from "../context";
import { userContext } from '../context';
import '../scss/NewTripPage.scss';

//Will have access to userId
const newTripPage = () => {
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    // const [tripType, setTripType] = useState('');
    const [tripName, setTripName] = useState('');
    const { currentTrip, setCurrentTrip } = useContext(tripContext);
    const navigate = useNavigate();
    const { user, setUser } = useContext(userContext);
    const { _id, trips, username } = user;
    const user_id = _id; //rename for middleware usage
		// console.log('userhomepage id, trips, username', _id, trips, username);

    // handler function for the input fields
    const handleLocation = (e) => {
        setLocation(e.target.value);
    }
    // const handleTripType = (e) => {
    //     setTripType(e.target.value);}
    const handleDate = (e) => {
        setDate(e.target.value);
    }
    const handleTripName = (e) => {
        setTripName(e.target.value);
    }
		
    async function handleSubmit(e) {
        try {
					e.preventDefault();
					// console.log('userhomepage id, trips, username', user_id, trips, username);
					// post request to server
					const response = await fetch(`/api/trip/new_trip`, { //make sure we are getting this user._id
							method: "POST",
							headers: {
									"Content-Type": "application/json"
							},
							body: JSON.stringify({location, date, tripName, user_id})
					})
					//this is the new trip that was created
					const res = await response.json();
					console.log('THIS IS THE RES.BODY', res.trip);
					
					if (res) {
						setCurrentTrip(res);
						console.log('This is trip from the useContext tripContext', currentTrip)
						//BELOW IS MAYBE NOT IT?
						// res.locals.id = res.trip._id;
						return navigate(`/trip/${res.trip._id}`);
					} else {
						alert ('Failed To Create Trip');
					}
				} catch(err) {
                    console.log(err);
                    alert('Failed To Create Trip big error');
        }; 
  	};

// <Form method={} action={} onSubmit={handleSubmit}> 
    return (
        // *** QUESTION: is the action leading to the correct page?
        <main className='new-trip-page'>
            <p className='title'>Start Planning Your Dream Trip!</p>
            <div className='container'>
                <Form onSubmit={handleSubmit}>
                    <label>
                        <span className='question'>Where are you going?</span>
                        <input className='new-trip-text' type="text" value={location} name="location" onChange={handleLocation} placeholder='destination'/>
                    </label>
                    <label>
                        <span className='question'>When are you going?</span>
                        <input className='new-trip-text' type="text" value={date} name="date" onChange={handleDate} placeholder='date'/>
                    </label>
                    {/* <label>
                        <span className='question'>What are you planning for?</span>
                        <input className='new-trip-text' type="text" value={tripType} name="tripType" onChange={handleTripType} placeholder='tell us about it!'/>
                    </label> */}
                    <label>
                        <span className='question'>What will you call this Epic Adventure?</span>
                        <input className='new-trip-text' type="text" value={tripName} name="tripName" onChange={handleTripName} placeholder='get creative!'/>
                    </label>
                    <div className="trip-button">
                        <button type="submit">Create Trip!</button>
                    </div>
                </Form>
            </div>

        </main>
    );
};

export default newTripPage;




/*
					// this responses should have the _id of the new trips' database
					// id --> _id
					// reset the state of the page to force re-render
					setLocation('');
					setDate('');
					// setTripType('');
					setTripName('');
*/