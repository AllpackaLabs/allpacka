import React, { useState } from 'react';
import { useNavigate, Form } from 'react-router-dom';

const SignUpPage = () => {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate()

	////////////////////////////////////////////
	async function handleSubmit(e) {
	
	// make the fetch to the backend to authenticate the credentials
	try {
        e.preventDefault();

		const res = await fetch('/users/signup', {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username: username, password: password })
		});
        // **checking to see if user is already in database
		console.log(res)
		if (res.status) { 
			console.log('Signup successful!');
			// return navigate(`/LoginPage`);  //where do you guys want to redirect this to
			return navigate('/UserHomePage');
		  	
		} else {
			alert('Username already taken or server error');
		}
		} catch (error) {
		console.error(error);
		}
	}
	/////////////////////////////////////////////////


	return (
		<main className='signup-page'>
			<div className='signup-div'>
			<p className='signup-header'>All Aboard the AllPacka!</p>
			<Form className='form' onSubmit ={handleSubmit}>
				<div className='username-box'>
					<span>What will your username be?</span>
					<input 
						type='text'
						placeholder='username'
						value = {username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className='password-box'>
					<span>What will your password be?</span>
					<input 
						type='text'
						placeholder="password" 
						value = {password}     
						onChange={(e) => setPassword(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === 'Enter') handleSubmit();
						}}
					/>
				</div>
				<div id='signup-btn' className='button-div'>
					<button type='submit'>Create Your AllPacka Account!</button>
				</div>
			</Form>
			</div>
		</main>
	);
  
  
  // return (
  //   <h1>Signup Page</h1>
  // )
};

export default SignUpPage;