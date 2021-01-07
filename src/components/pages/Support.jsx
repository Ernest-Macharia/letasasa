import React from 'react'



 function News() {
    return (
        <section className="contact-section">
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-6 p-0">
					
					<div className="map"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10784.188505644011!2d19.053119335158936!3d47.48899529453826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1543907528304" allowfullscreen></iframe></div>
				</div>
				<div className="col-lg-6 p-0">
					<div className="contact-warp">
						<div className="section-title mb-0">
							<h2>Get in touch</h2>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag na aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doe iusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </p>
						<ul>
							<li>Main Road , No 25/11</li>
							<li>+34 556788 3221</li>
							<li>contact@solmusic.com</li>
						</ul>
						<form className="contact-from">
							<div className="row">
								<div className="col-md-6">
									<input type="text" placeholder="Your name"/>
								</div>
								<div className="col-md-6">
									<input type="text" placeholder="Your e-mail"/>
								</div>
								<div className="col-md-12">
									<input type="text" placeholder="Subject"/>
									<textarea placeholder="Message"></textarea>
									<button className="site-btn">send message</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
       
    )
}

export default News;