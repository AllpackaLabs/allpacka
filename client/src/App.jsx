import React, { useState, useContext } from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Routes } from "react-router-dom";
import { tripContext, userContext } from './context.js';

// Pages to render
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import NewTripPage from './pages/TripHome/NewTripPage.jsx';
import TripHomePage from './pages/TripHome/TripHomePage.jsx';
import UserHomePage from './pages/UserHome/UserHomePage.jsx';
import RootLayout from './layouts/rootLayout';

// import "./scss/index.js"



// ROUTE PROVIDER Component to 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<LoginPage key='login'/>} />
      <Route
        path='/signup'
        element={<SignupPage key='SignupPage' />}
        // loader={puzzleTestLoader}
      />
      <Route
        path='/user/' //possibly :_id
        element={<UserHomePage key='UserHomePage' />}
        // loader={puzzleLoader}
      />
      <Route
        path='/new_trip'
        element={<NewTripPage key='NewTripPage' />}
        // loader={puzzleLoader}
      />
      <Route
        path='/trip_home' //possibly :_id
        element={<TripHomePage key='TripHomePage' />}
        // loader={puzzleLoader}
      />
    </Route>
  )
)

const App = () => {

  const [ user, setUser ] = useState('null');
  const [ currentTrip, setCurrentTrip ] = useState(null);
  const userValue = { user, setUser }
  const currentTripValue = {currentTrip, setCurrentTrip}
  // const tripContext = createContext({ currentTrip: null, setCurrentTrip: () => { } });
  // const userContext = createContext({ user: null, setUser: () => { } });

  return (
    <userContext.Provider value={userValue}>
      <tripContext.Provider value={currentTripValue}>
        <RouterProvider router={router} />
      </tripContext.Provider>
    </userContext.Provider>
  )
}

export default App;