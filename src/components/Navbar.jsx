import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  

  return (
    <>
<header className="header-section clearfix">
		<p to="/" className="site-logo">
			<Link to="/" className="logoDesign"><span className="logoDesign1">LETA</span>SASa</Link>
		</p>
		<div className="header-right">
			<Link to="/support" className="hr-btn">Support</Link>
			<span>|</span>
			<div className="user-panel">
				<Link to="login" className="login">Login</Link>
				<Link to="sign-up" className="register">Create an account</Link>
			</div> 
		</div>
		<ul className="main-menu">
			
			<li><a href="#">Order now</a>
				<ul className="sub-menu">
					<li><Link to="foodShop">Food</Link></li>
					<li><Link to="groceryShop.php">Grocery</Link></li>
					<li><Link to="miraaShop.php">Miraa</Link></li>
					<li><Link to="drinkShop.php">Drinks</Link></li>
					
				</ul>
			</li>
			<li><Link to="/news">News</Link></li>
			
		</ul>
</header>
    </>
  );
}

export default Navbar;