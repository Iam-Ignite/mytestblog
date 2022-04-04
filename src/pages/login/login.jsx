/** @format */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../component/button/button';
import Logo from '../../component/logo/logo';
import './form-input.scss';

const Login = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [success, setSuccess] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
    
    try {
        const fetchResponse = await fetch('http://www.giropay.xyz/api/v1/giro-app/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});
        const data = await  fetchResponse.json();
          	if (data.Error) {
					setError(data.Error);
					return;
				}
				setSuccess(true);
				localStorage.setItem('token', data.token);
				localStorage.setItem('email', email);
				setInterval(() => {
					navigate('/blog');
				}, 2000);
    } catch (e) {
			setError(e);

    }    


		
	};

	return (
		<section className='login-page'>
			<div className='bg-image'>
				<Logo/>
			</div>
			{error && <span className='error'>{error} <span> &#9888;</span> </span>}
			<div className='form'>
				<h1>Login</h1>
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
					<Button type='submit'> {success ? "Loading ..." : "Login"} </Button>
				</form>
			</div>
		</section>
	);
};
export default Login;
