import React from 'react'
import './Team.css';
import '../App.css';

 function Team() {
    return (
        <section className="premium-section spad">
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<div className="section-title">
						<h2>Our Team</h2>
					</div>
				</div>
				<div className="col-lg-6">
					<p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-3 col-sm-6">
					<div className="premium-item">
						<img src="img/owners/adam.jpg" alt=""/>
						<h4>Adam Schmid </h4>
						<p>Sales and Marketing Manager</p>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6">
					<div className="premium-item">
						<img src="img/premium/2.jpg" alt=""/>
						<h4>Mazin AL Rasi</h4>
						<p>Primary Investor</p>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6">
					<div className="premium-item">
						<img src="img/owners/salim.png" alt=""/>
						<h4>Salim ALMughairi</h4>
						<p>Senior Software Developer</p>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6">
					<div className="premium-item">
						<img src="img/owners/ahmed.png" alt=""/>
						<h4>Ahmed ALKindi</h4>
						<p>Business Development Manager</p>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
}

export default Team;