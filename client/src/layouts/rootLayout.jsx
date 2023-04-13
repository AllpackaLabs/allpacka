// import React from "react";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";

const RootLayout = () => {
  // const userData = useLoaderData()

  // const user = useContext(userContext)
  // const { setUser } = user

  // setUser(userData)
  
  // pass in trip obj
  // const [currentTrip, setCurrentTrip] = useState(null);
	// const user = useLoaderData();
	// // const id = user._id;
	// console.log('user: ', user)

  return (
    <div className="root-layout">
      <header>
        {/* <h1>Root Layout</h1> */}
        <nav id='main-nav'>
          {/* <h1>I'm for testing page navigation</h1> */}
          <NavLink to='/' className='nav-link'> Login </NavLink>
          <NavLink to='/signup'className='nav-link'> Sign-up </NavLink>
          {/* <NavLink to='/home_page/' className='nav-link'> Home </NavLink> */}
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