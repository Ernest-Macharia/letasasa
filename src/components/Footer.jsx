import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <footer className="footer-section">
		<div className="container">
			<div className="row">
				<div className="col-xl-6 col-lg-7 order-lg-2">
					<div className="row">
						<div className="col-sm-4">
							<div className="footer-widget">
								<h2>About us</h2>
								<ul>
									<li><a href="">Our Story</a></li>
									<li><a href="blog.php">LetaSasa Blog</a></li>
									<li><a href="">History</a></li>
								</ul>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="footer-widget">
								<h2>Products</h2>
								<ul>
									<li><a href="#">Food</a></li>
									<li><a href="#">Grocery</a></li>
									<li><a href="#">Drinks</a></li>
									<li><a href="#">Miraa</a></li>
								</ul>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="footer-widget">
								<h2>Public Relation</h2>
								<ul>
									<li><a href="blog.php">Newsletter</a></li>
									<li><a href="">Careers</a></li>
									<li><a href="">Press</a></li>
									<li><a href="contact.php">Contact</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-6 col-lg-5 order-lg-1">
					<p className="logoDesign">LETASASa</p>
					<div className="copyright">
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="" target="_blank">Letasasa</a>
</div>
					<div className="social-links">
						<a href=""><i className="fa fa-instagram"></i></a>
						<a href=""><i className="fa fa-pinterest"></i></a>
						<a href=""><i className="fa fa-facebook"></i></a>
						<a href=""><i className="fa fa-twitter"></i></a>
						<a href=""><i className="fa fa-youtube"></i></a>
					</div>
				</div>
			</div>
		</div>
	</footer>
  );
}

export default Footer;