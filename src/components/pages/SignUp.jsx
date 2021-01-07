
import React from 'react';
import './Food.css';

export default function SignUp() {
    return(

        <section class="contact-section">
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-3 p-0">
				</div>
				<div class="col-lg-6 p-0">
					<div class="contact-warp">
						<div class="section-title mb-0">
							<h2>Create an account</h2>
						</div>
						<p>signup and be the first to enjoy Kenya's leading delivery platform. order food, drinks and event Miraa and get 
						delivered in just 30 minutes.</p>
						
						<form class="contact-from">
							<div class="row">
								<div class="col-md-12">
									<input type="text" placeholder="Firstname" />
								</div>
								
								<div class="col-md-12">
									<input type="text" placeholder="Username" />
									<input type="text" placeholder="Password"/>
									<button class="site-btn">Signup</button>
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
