import React from 'react'
import './Deliver.css';
import '../App.css';

 function Deliver() {
    return (
        <section className="concept-section spad">
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<div className="section-title">
						<h2>What we deliver</h2>
					</div>
				</div>
				<div className="col-lg-6">
					<p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-3 col-sm-6">
					<div className="concept-item">
						<img src="img/concept/bav.jpg" alt=""/>
						<h5>Beverage</h5>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6">
					<div className="concept-item">
						<img src="img/concept/groc.jpg" alt=""/>
						<h5>Grocery </h5>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6">
					<div className="concept-item">
						<img src="img/concept/food1.jpg" alt=""/>
						<h5>Food</h5>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6">
					<div className="concept-item">
						<img src="img/concept/khat.jpg" alt="" height="200"/>
						<h5>Miraa</h5>
					</div>
				</div>
			</div>
		</div>
	</section>
       
    )
}

export default Deliver;