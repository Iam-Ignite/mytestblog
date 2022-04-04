import Logo from "../logo/logo";
import './footer.scss';

const Footer = () => {
    return ( 
        <footer>   
        <Logo className="footer-logo"/>
        <ul className="footer-item">
          <li><a href="/blog">Blog</a></li>
          <li>Privacy Policy</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <p>copyright Rodufy 2022</p>
        </footer>
     );
}
 
export default Footer;