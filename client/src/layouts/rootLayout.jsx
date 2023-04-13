// import React from "react";
import { NavLink, Outlet, useLoaderData, useParams } from "react-router-dom";

const RootLayout = () => {
  
  // pass in trip obj
  // const [currentTrip, setCurrentTrip] = useState(null);

  return (
    <div className="root-layout">
      <header>
        {/* <h1>Root Layout</h1> */}
        <nav id='main-nav'>
          {/* <h1>I'm for testing page navigation</h1> */}
          <NavLink to='/' className='nav-link'> Login </NavLink>
          <NavLink to='/signup'className='nav-link'> Sign-up </NavLink>
          {/* <NavLink to={id} className='nav-link'> Home </NavLink> */}
          <NavLink to='/user_settings'className='nav-link'> User Settings </NavLink>
          <NavLink to='/new_trip'className='nav-link'> New Trip </NavLink>
          <NavLink to='/trip_home'className='nav-link'> Trip Home Page </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
};

export default RootLayout;