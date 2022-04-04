import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../component/button/button';
import Logo from '../../component/logo/logo';
import { useUser } from '../context/useUser';
import './navbar.scss';

const Navbar = () => {
	const email = localStorage.getItem('email');
	const emailRemove = email?.replace(/@.*/, '');
	const { changeUser } = useUser();

	const checkUser = () => {
		if (email) {
			changeUser(email);
		}
	};
	useEffect(() => {
		checkUser();
	}, []);

	return (
		<nav className='navbar'>
			<Logo />
			{email ? (
				<div className='nav-item'>
					<span>Hi {emailRemove}</span>
					<Link
						onClick={() => window.localStorage.clear()}
						to='/'>
						<Button>Logout</Button>
					</Link>
				</div>
			) : (
				<div className='nav-item'>
					<Link to='/register'>
						<Button>Register</Button>
					</Link>
					<Link to='/login'>
						<Button btnbg>Login</Button>
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
