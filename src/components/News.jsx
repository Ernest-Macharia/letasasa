import React from 'react'


 function Order() {
    return (
        <section className="blog-section spad">
		<div className="container">
			
			<div className="blog-item">
				<img src="img/blog/newBanner.jpg" alt=""/>
				<div className="blog-date">Dec 14, 2020</div>
				<h3>Top 10 best Grocery shop in Dec</h3>
				<div className="blog-meta">by <a href="">Alan Smith</a> in <a href="">Music</a></div>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </p>
			</div>
			
			<div className="blog-item">
				<img src="img/blog/newsbanner2.jpg" alt=""/>
				<div className="blog-date">Dec 14, 2020</div>
				<h3>Summer Food Festivals that you cannot miss</h3>
				<div className="blog-meta">by <a href="">Alan Smith</a> in <a href="">Music</a></div>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </p>
			</div>
			
			
			<div className="site-pagination">
				<a href="#" className="active">01.</a>
				<a href="#">02.</a>
				<a href="#">03.</a>
				<a href="#">04.</a>
			</div>
		</div>
	</section>
    )
}

export default Order;