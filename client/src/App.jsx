import { useState, useContext } from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import { tripContext, userContext } from './context.js';

// Pages to render
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import NewTripPage from './pages/NewTripPage.jsx';
import TripHomePage from './pages/TripHome/TripHomePage.jsx';
import UserHomePage from './pages/UserHome/UserHomePage.jsx';
import UserSettingsPage from './pages/UserHome/UserSettingsPage.jsx';
import RootLayout from './layouts/rootLayout';

// Loader functions
import { userLoader, tripLoader } from './loaders.js';

// ROUTE PROVIDER Component to 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} loader={userLoader}>
      <Route index element={<LoginPage key='login'/>} />
      <Route
        path='/signup'
        element={<SignUpPage key='signup' />}
      />
      <Route
        path=':id'
        loader={userLoader}
        element={<UserHomePage key='user' />}
      />
      <Route
        path='/user_settings/'
        element={<UserSettingsPage key='user_settings' />}
      />
      <Route
        path='/new_trip'
        element={<NewTripPage key='new_trip' />}
      />
      <Route
        path='/trip/:trip_id'
        element={<TripHomePage key='trip_home' />}
        loader={tripLoader}
      />
    </Route>
  )
)

const App = () => {

  const [ user, setUser ] = useState('null');
  const [ currentTrip, setCurrentTrip ] = useState(null);

  const userValue = { user, setUser }
  const currentTripValue = {currentTrip, setCurrentTrip}

  return (
    <userContext.Provider value={userValue}>
      <tripContext.Provider value={currentTripValue}>
        <RouterProvider router={router} />
      </tripContext.Provider>
    </userContext.Provider>
  )
}

export default App;
