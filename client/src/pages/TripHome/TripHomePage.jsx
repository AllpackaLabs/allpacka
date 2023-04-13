// *****************************    SB edits   *****************************
import React, {useState} from "react";
import { useNavigate, BrowserRouter, Router, Link, Route, useLoaderData } from "react-router-dom";
import MainItemsComponent from "./TripHomeComp/MainItemsComponent.jsx";
import './TripHome.scss';
// import 
//QUESTIONS: are className "simpe-sections" labeled that way on purpose? I edited some

const TripHomePage = () => {

  // const tripData = useLoaderData();
  // const tripsData = null;

  // copy url for sharing... (for TODO)
  const copyTrip = async () => {
    await navigator.clipboard(URL);
    alert('Trip URL copied!');
  }


  // handlers for header buttons
  const handleAddItemCategory = (e) => {
    e.preventDefault();
    // add item schema
    // return newItemSchema //component
  }

  const handleEditTrip = (e) => {
    e.preventDefault();
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
              <button className='header-btns' onClick={handleEditTrip}>Edit Trip</button>
          </div>
        </div>
      </header>
      <div className='main-display'>
        <MainItemsComponent trips={tripData}/>
      </div>
      <div>
        {/* <div className='share-trip-link'>
          <button onClick={copyTrip}>Share trip with this link</button>
        </div> */}
      </div> 
    </main>
  )
}

// /// User Data Loader
// const tripLoader = async ({ params }) => {
//   const { id } = params
//   try {
//       const res = await fetch('/trips/' + id)
//       res.json()
//   } catch (err) {
//       alert('something...')
//   }
// }

export default {
  TripHomePage,
  // tripLoader,
};