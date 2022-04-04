import { Link } from "react-router-dom";

const Logo = () => {
    return ( 
        <div className='nav-item' >
				<Link to='/'>
                	<img data-aos="fade-down" src='/asset/Frame 15.png' className='logo' alt='logo' />
                    </Link>
				</div>
     );
}
 
export default Logo;