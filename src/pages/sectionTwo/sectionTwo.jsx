import Button from '../../component/button/button';
import './sectiontwo.scss'

const SectionTwo = () => {
    return ( 
      <>
	  	<section className='page section-two'>
                <div className="page-content">
                  	<h1>
					Everything you’ll need to <br /> <span>excel</span> in life
				</h1>
				<p>
					We would strive to achieve that through providing <br />
					education and quality health
				</p>
				  <Button lg>Get Started</Button>
                </div>
                <div className="page-content">
                  <img src="/asset/rasheed-kemy-oqY09oVTa3k-unsplash 1.png" width="100%" height='510px' alt="" />
                </div>
			</section>
	  </>
     );
}
 
export default SectionTwo;