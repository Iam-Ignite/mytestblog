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
			<Ads />
			<Navbar />
			<section className='home'>
				<div className='home-content'>
					<h1 data-aos="fade-up">
						Our mission is to <br />
						<span>advance</span> humanity
					</h1>
					<hr width='40%' />
					<p data-aos="fade-left">
						We would strive to achieve that through
						providing <br />
						education and quality health
					</p>
					<div className='home-item'>
						<div className='home-items'>
							<h3 data-aos="fade-down-right">
								DOWNLOAD <br /> APP
							</h3>
						</div>
						<div
							className='home-items'
							   data-aos="fade-down">
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
					<img  data-aos="fade-down"
						src='/asset/sharath-kumar-hari-Mb2LErousEY-unsplash 1.png'
						className='ads-img'
						alt='thrg'
					/>
				</div>
			</section>
			<SectionTwo />
			<ContactPage />
			<Footer />
		</div>
	);
};

export default Home;
