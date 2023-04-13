// *****************************    SB edits   *****************************
import React, {useState, useContext} from "react";
import { useNavigate, useLoaderData, useParams } from "react-router-dom";
import MainItemsComponent from "./TripHomeComp/MainItemsComponent.jsx";
import { userContext, tripContext } from '../../context.js';

import './TripHome.scss';


const TripHomePage = () => {
  // trip data from Loader Function
  const tripData = useLoaderData();
  const { trip_id } = useParams();
  const { user } = useContext(userContext);

  // triggers rendering the a new Catagory Componenet 
  const [currTrip, setCurrentTrip] = useState(tripData)
  const [showCatComponent, setShowCatComponent] = useState(false);
  const navigate = useNavigate();
  
  // Stretch Feature
  // copy url for sharing... (for TODO)
  const copyTrip = async () => {
    await navigator.clipboard(URL);
    alert('Trip URL copied!');
  }

  // handlers for header buttons
  const handleAddItemCategory = (e) => {
    setShowCatComponent(true)
    e.preventDefault();
    // add item schema
    // return newItemSchema //component
  }

  // This will make the fetch request!!
  const handleHome = async (e) => {
    e.preventDefault();
  try {
    const res = await fetch(`/api/trip/new_trip`, { //make sure we are getting this user._id
      method: "PUT",
      headers: {
              "Content-Type": "application/json"
      },
      body: JSON.stringify({ trip_id: id, 
                          trip: {tripName: currTrip.tripName, 
                          location: currTrip.location, 
                          date:currTrip.date,
                          items: currTrip.items,
                          categories: currTrip.categories,
                          photos: currTrip.photos,
                          users: currTrip.users}
                          })
      })
      console.log(res)
      navigate(`/${user._id}`)
      } catch(err) {

        navigate(`/${user._id}`)
      }

  }

  // drag and drop info: https://react.dev/reference/react-dom/components/common#dragevent-handler

  return(
    <main className='trip-home-page'> 
    
      <header className='header'>
        <div>
          <div>
            <button className='header-btns' onClick={handleAddItemCategory}>Add Item Category</button>
          </div>
        </div>
        <div className='Trip-details'>
          <h1>{tripData.tripName}</h1>
        </div>
        <div>
          <div>
              <button className='header-btns' onClick={handleHome}>Home</button>
          </div>
        </div>
      </header>
      <div className='main-display'>
        <MainItemsComponent currentTrip={currTrip}
                            setCurrentTrip={setCurrentTrip} 
                            showCat={showCatComponent} 
                            setShowCat={setShowCatComponent}
                            />
      </div>
      <div>
        {/* <div className='share-trip-link'>
          <button onClick={copyTrip}>Share trip with this link</button>
        </div> */}
      </div> 
    </main>
  )
}


export default TripHomePage;