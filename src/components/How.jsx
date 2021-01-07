import React from 'react'
import './How.css';
import '../App.css';

 function How() {
    return (
        <section className="how-section spad set-bg" data-setbg="img/how-to-bg.jpg">
		<div className="container text-white">
			<div className="section-title">
				<h2>How it works</h2>
			</div>
			<div className="row">
				<div className="col-md-4">
					<div className="how-item">
						<div className="hi-icon">
							<img src="img/icons/brain.png" alt=""/>
						</div>
						<h4>Create an account</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipi-scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices gravida. </p>
					</div>
				</div>
				<div className="col-md-4">
					<div className="how-item">
						<div className="hi-icon">
							<img src="img/icons/pointer.png" alt=""/>
						</div>
						<h4>Place your order easily</h4>
						<p>Donec in sodales dui, a blandit nunc. Pellen-tesque id eros venenatis, sollicitudin neque sodales, vehicula nibh. Nam massa odio, portti-tor vitae efficitur non. </p>
					</div>
				</div>
				<div className="col-md-4">
					<div className="how-item">
						<div className="hi-icon">
							<img src="img/icons/smartphone.png" alt=""/>
						</div>
						<h4>Download LetaSasa App</h4>
						<p>Ablandit nunc. Pellentesque id eros venenatis, sollicitudin neque sodales, vehicula nibh. Nam massa odio, porttitor vitae efficitur non, ultric-ies volutpat tellus. </p>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
}

export default How;