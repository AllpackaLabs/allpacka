import React, { useState, useContext } from 'react';
import { useNavigate, Form, redirect } from 'react-router-dom';
import { userContext } from '../context';
import '../scss/LoginPage.scss';
import alpaca from '../assets/alpaca_cool.jpg';
import yosemite from '../assets/yosemite.jpg';

const LoginPage = () => {

	const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser } = useContext(userContext)
 	const navigate = useNavigate();

  
	////////////////////////////////////////////
	async function handleSubmit(e) {
	// make the fetch to the backend to authenticate the credentials
	try {
        e.preventDefault();
        // will this be a post request?
		const response = await fetch('/api/user/login', {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username, password })
    });

    console.log(response.status)
    if(response.status === 200){

    const res = await response.json();
    console.log(res.verified)
    
      if (res.verified) {
        console.log('Authentication successful!');
            
        // Send the username and password to the server for authentication 
        setUsername(''); // does this  match with the userSchema (the word User)
        setPassword('');
        setUser(res.user);
        console.log(res.user)
        // return redirect(`/UserHomePage/${res.user_id}`); //!!! either user_id or username
        return navigate(`/user_home/${res.user._id}`);
      } else {
        console.log(res.verified)
        alert('Invalid Credentials');
        return <Navigate to='/' replace={true} />
      }
    } else {
      alert('Server fail')
    }
    
		} catch (error) {
		console.error(error);
		}
	}
	/////////////////////////////////////////////////

    //do we need fetch for this as well?
    const redirectToSignupPage = () => {
	    return navigate(`/signup`);
	}


	return (
		<main className='login-page'>
			<div className='login-div'>
        <img
          src={alpaca}
          alt={'alpaca'}
          className="alpaca-image"
        />
        <p id='name-label' className='username-subhead'>
          Welcome
        </p>
        <div className='form-div'>
          <Form onSubmit ={handleSubmit}>
            <div className='username-section'>
              <input 
                type='text'
                placeholder='username'
                // placeholder="What's a good nickname?..." 
                value = {username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='password-section'>
              <input 
                type='text'
                placeholder="password" 
                value = {password}     
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') return handleSubmit();
                }}
              />
            </div>
            <div className='outer-btn-div'>
              <div className='button-div'>
                <button type='submit'>Login!</button>
              </div>
              {/* redirect to sign up page with the this button */}
              <div className='button-div'>
                <button onClick={redirectToSignupPage}>Sign-Up!</button>
              </div>
            </div>
          </Form>
        </div>
      </div>
		</main>
	);
};

export default LoginPage;