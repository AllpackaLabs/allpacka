// *****************************    SB edits   *****************************
import React, {useState, useContext, useReducer} from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import MainItemsComponent from "./TripHomeComp/MainItemsComponent.jsx";
import { userContext, tripContext } from '../../context.js';

import './TripHome.scss';


const TripHomePage = () => {
  // trip data from Loader Function
  const tripData = useLoaderData();

  // getting currentTrip and setCurrentTrip context to render for trip data
  const { currentTrip, setCurrentTrip } = useContext(tripContext);
  setCurrentTrip(tripData)

  const { user } = useContext(userContext);

  //State

  // triggers rendering the a new Catagory Componenet 
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
    //  const res = fetch('/api/trips/')

    console.log(user._id)
    navigate(`/${user._id}`)

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
          <h1>DISPLAY TRIP NAME</h1>
        </div>
        <div>
          <div>
              <button className='header-btns' onClick={handleHome}>Home</button>
          </div>
        </div>
      </header>
      <div className='main-display'>
        <MainItemsComponent currtTrip={currentTrip}
                            setCurrentTrip={setCurrentTrip} 
                            showCat={showCatComponent} 
                            setShowCat={setShowCatComponent}/>
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