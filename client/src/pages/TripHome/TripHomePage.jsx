// *****************************    SB edits   *****************************
import React, {useState} from "react";
import { redirect, BrowserRouter, Router, Link, Route } from "react-router-dom";
import MainItemsComponent from "./TripHomeComp/MainItemsComponent.jsx";
import CategoryComponent from "./TripHomeComp/categoryComponent.jsx";
import './TripHome.scss';
// import 
//QUESTIONS: are className "simpe-sections" labeled that way on purpose? I edited some

const TripHomePage = ({ currentTrips }) => {

  // const tripData = useBroswerLoader();


  // const tripLoader = () => {
  //   //fetch trip data from trip collection
  //   //retrun data.json
  // }


  // copy to clipboard
  const copyTrip = async () => {
    await navigator.clipboard(URL);
    alert('Trip URL copied!');
  }


// buttons--------------------------------------------------------------------------------------------
  const handleAddItemCategory = (e) => {
    e.preventDefault();
    // add item schema
    return newItemSchema //component
  }

  const handleShowUserCards = (e) => {
    e.preventDefault();
    // return users and what they are bringing // unmounting 
        return 
  }
  const handleAllItemsChecked = (e) => {
    e.preventDefault();
    // list of checked items
  }
  const handleEditTrip = (e) => {
    e.preventDefault();
  }

  // return function-------------------------------------------------------------------------------------------
  // drag and drop info: https://react.dev/reference/react-dom/components/common#dragevent-handler

  return(
    // * one main div containing with 3 major branched divs
    // * div branch 1 = upper display of trip info + 4 buttons for 
    //     (add category, show user cards, all items checked, and edit trip) 
    // * div branch 2 = major box of items list/assignments with small divs inside
    //      will include multiple components, 
    // * div branch 3 = small button for "share trip with friends with this link"

    // main div
    <main className='trip-home-page'> 
      <header className='header'>
        <div className='left-btns'>
          <div>
            <button onClick={handleAddItemCategory}>Add Item Category</button>
          </div>
          <div>
            <button onClick={handleShowUserCards}>Show User Cards</button>
          </div>
        </div>
        <div className='Trip-details'>
          <h1>DISPLAY TRIP NAME</h1>
        </div>
        <div className='right-btns'>
          <div>
              <button onClick={handleAllItemsChecked}>All Items Checked</button>
          </div>
          <div>
              <button onClick={handleEditTrip}>Edit Trip</button>
          </div>
        </div>
      </header>
      <div className='main-display'>
        <MainItemsComponent/>
      </div>
      <div>
        <div className='share-trip-link'>
            <button onClick={copyTrip}>Share trip with this link</button>
        </div>
      </div> 
    </main>
  
  )
}

export default TripHomePage;