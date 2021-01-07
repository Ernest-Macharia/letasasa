import React from 'react'


 function Section() {
    return (
        <section className="hero-section">
		<div className="hero-slider owl-carousel">
			<div className="hs-item">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="hs-text">
								<h2><span>Delivery</span> for everyone.</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </p>
								<a href="#" className="site-btn">Order now</a>
								<a href="#" className="site-btn sb-c2">Learn more</a>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="hr-img">
								<img src="img/drwaing2.jpg" alt=""/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="hs-item">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="hs-text">
								<h2><span>Stay </span> and let us bring your order to your door step</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </p>
								<a href="#" className="site-btn">Order now</a>
								<a href="#" className="site-btn sb-c2">Learn More</a>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="hr-img">
								<img src="images/drwaing.jpg" alt=""/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
}

export default Section;