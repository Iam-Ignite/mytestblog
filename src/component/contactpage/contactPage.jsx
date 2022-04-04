import './contact-page.scss';
const ContactPage = () => {
	return (
		<setion className='contact'>
			<div className='contact-content' data-aos="fade-up">
				<h2>Contact Us</h2>
				<p>
					Got any questions, feedback, request and
					complains? Reach out...
				</p>
			  <div className="contact-text">
              	<img
					src='/asset/Frame.png'
					alt='whatApps-icon'
                    className='contact-icon'
				/>
				<span>+2348232323892</span><br />
              </div>
              <div className="contact-text">
              <img src='/asset/Frame 12.png'className='contact-icon'  alt='mail' />
				<span>contact@us.com</span>
              </div>	
			</div>
			<div className='contact-content'  data-aos='fade-down'>
				<img
					src='/asset/undraw_calling_re_mgft 1.png'
					alt='illustration' height='80%' width='100%'
				/>
			</div>
		</setion>
	);
};

export default ContactPage;
