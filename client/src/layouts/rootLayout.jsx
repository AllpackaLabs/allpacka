import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  // const [username, setUsername] = useState(null);

  // pass in trip obj
  // const [currentTrip, setCurrentTrip] = useState(null);

  return (
    <div className="root-layout">
      <header>
        {/* <h1>Root Layout</h1> */}
        <nav id='main-nav'>
          {/* <h1>I'm for testing page navigation</h1> */}
          <NavLink to='/' className='nav-link'> Login Page </NavLink>
          <NavLink to='/SignUpPage'className='nav-link'> Sign-up Page </NavLink>
          <NavLink to='/UserHomePage'className='nav-link'> User Home Page </NavLink>
          <NavLink to='/NewTripPage'className='nav-link'> New TripPage </NavLink>
          <NavLink to='/TripHomePage'className='nav-link'> Trip Home Page </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
};

export default RootLayout;