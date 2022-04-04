/** @format */
import Ads from '../../component/ads-box/ads-component';
import ContactPage from '../../component/contactpage/contactPage';
import Footer from '../../component/footer/footer';
import Navbar from '../../component/navbar/navbar';
import SectionTwo from '../sectionTwo/sectionTwo';
import './home.scss';

const Home = () => {
	return (
		<div className='home-page'>
		<Ads/>
			<Navbar />
			<section className='home'>
				<div className='home-content'>
					<h1>
						Our mission is to <br />
						<span>advance</span> humanity
					</h1>
					<hr width='40%' />
					<p>
						We would strive to achieve that through
						providing <br />
						education and quality health
					</p>
					<div className='home-item'>
						<div className='home-items'>
							<h3>
								DOWNLOAD <br /> APP
							</h3>
						</div>
						<div className='home-items'>
							<img
								src='/asset/Frame 5.png'
								className='home-icon'
								alt='andriod-logo'
							/>
							<img
								src='/asset/Frame 8 (1).png'
								className='home-icon'
								alt='ios-logo'
							/>
						</div>
					</div>
				</div>
				<div className='home-content'>
					<img
						src='/asset/sharath-kumar-hari-Mb2LErousEY-unsplash 1.png'
						width='100%'
						height='500px'
						alt=''
					/>
				</div>
			</section>
			<SectionTwo />
			<ContactPage />
			<Footer/>
		</div>
	);
};

export default Home;
