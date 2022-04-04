import { Link } from "react-router-dom";

const Logo = () => {
    return ( 
        <div className='nav-item'>
				<Link to='/'>
                	<img src='/asset/Frame 15.png' className='logo' width='200px' height='60px' alt='logo' />
                    </Link>
				</div>
     );
}
 
export default Logo;