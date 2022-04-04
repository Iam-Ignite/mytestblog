/** @format */

// create a register page, with email and password that post data to the server and redirects to the home page
// use react hooks

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../component/button/button';
import Logo from '../../component/logo/logo';
import '../login/form-input.scss';

const Register = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!email || !password) {
			setError('Please fill in all fields');
			return;
		}
		fetch('http://www.giropay.xyz/api/v1/giro-app/auth/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		}).then(response => response.json()).then(res => {
			console.log(res);
			if (res.Error) {
				setError(res.Error);
				return;
			}
			navigate('/login');

		})
	};

	return (
		<>
			<section className='login-page'>
				<div className='bg-image'>
					<Logo />
				</div>
				<div className='form'>
						{error &&  <span className='error'>{error}</span>}
					<h1>Register</h1>
					<form onSubmit={handleSubmit}>
						<input
							type='email'
							placeholder='Email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type='password'
							placeholder='Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>

						<Button type='submit'>Register</Button>
					</form>
				</div>
			</section>
		</>
	);
};

export default Register;
