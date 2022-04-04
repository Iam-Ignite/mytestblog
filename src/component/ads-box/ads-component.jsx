import React,{ useState } from 'react';
import './ads-box.scss';

const Ads = () => {
const [closeAds, setCloseAds] = useState(true);

	return (
		<div className={closeAds ? "ads-boxs" : "close-ads"} data-aos="zoom-in">
			<span>New!</span>
			<p>Announcing our $15 million series A funding!</p>
			<button onClick={() => setCloseAds(false)} className="cross">&#x2715;</button>
		</div>
	);
};

export default Ads;
