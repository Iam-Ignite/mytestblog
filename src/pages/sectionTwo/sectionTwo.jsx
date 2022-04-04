import Button from '../../component/button/button';
import './sectiontwo.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SectionTwo = () => {
	AOS.init({ duration: 2000 });

	return (
		<>
			<section className='page section-two'>
				<div
					className='page-content'
					data-aos='fade-right'
					data-aos-offset='300'
					data-aos-easing='ease-in-sine'>
					<h1>
						Everything you’ll <br /> need to
						<span>excel</span> in life
					</h1>
					<p>
						We would strive to achieve that through
						providing <br />
						education and quality health
					</p>
					<Button lg>Get Started</Button>
				</div>
				<div className='page-content' data-aos='fade-left'>
					<img
						src='/asset/rasheed-kemy-oqY09oVTa3k-unsplash 1.png'
						className='ads-img'
						alt='fff'
					/>
				</div>
			</section>
		</>
	);
};

export default SectionTwo;
