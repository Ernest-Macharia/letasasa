import React from 'react'
import './Subscription.css';
import '../App.css';

 function Subscription() {
    return (
        <section className="subscription-section spad">
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<div className="sub-text">
						<h2>Subscription from KSA 0/month</h2>
						<h3>Start a free trial now</h3>
						<p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<a href="#" className="site-btn">Try it now</a>
					</div>
				</div>
				<div className="col-lg-6">
					<ul className="sub-list">
						<li><img src="img/icons/check-icon.png" alt=""/>Deliver any location</li>
						<li><img src="img/icons/check-icon.png" alt=""/>Order offline</li>
						<li><img src="img/icons/check-icon.png" alt=""/>No ad interruptions</li>
						<li><img src="img/icons/check-icon.png" alt=""/>Unlimited orders</li>
						<li><img src="img/icons/check-icon.png" alt=""/>list up to 30 item per menu</li>
						
					</ul>
				</div>
			</div>
		</div>
	</section>
       
    )
}

export default Subscription;