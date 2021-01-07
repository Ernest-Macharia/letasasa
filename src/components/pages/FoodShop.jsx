
import React from 'react';
import './Food.css';
import ItemCard from '../ItemCard';


export default function FoodShop() {
    return(
		

	
        <div class="player-section set-bg" data-setbg="img/player-bg.jpg">
		<div class="player-box">
			<div class="tarck-thumb-warp">
				<div class="tarck-thumb">
					<img src="img/wave-thumb.jpg" alt="" />
					<button onclick="wavesurfer.playPause();" class="wp-play"></button>
				</div>
			</div>
			<div class="wave-player-warp">
				<div class="row">
					<div class="col-lg-8">
						<div class="wave-player-info">
							<h2>Shop 1</h2>
							<p>Enjoy our fresh juice</p>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="songs-links">
							<a href=""><img src="img/icons/p-1.png" alt="" /></a>
							
							<a href=""><img src="img/icons/p-3.png" alt="" /></a>
						</div>
					</div>
				</div>
				<div id="wavePlayer" class="clierfix">
					<div id="audiowave" data-waveurl=""></div>
					<div id="currentTime"></div>
					<div id="clipTime"></div>
					
					<div class="wavePlayer_controls">
						<button class="jp-prev player_button" onclick="wavesurfer.skipBackward();"></button>
						
						<button class="jp-next player_button" onclick="wavesurfer.skipForward();"></button>
						
					</div>
				</div>
			</div>
		</div>
	
	
	<div class="songs-details-section">
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-3">
					<div class="song-details-box">
						<h3>Song Details</h3>
						<ul>
							<li><strong>Genre:</strong><span>electro, drum & base, minimal</span></li>
							<li><strong>Tags:</strong><span>quitar, piano, music, electronic music, minimal, chill music, pop, cultural, live, popular</span></li>
							<li><strong>Instruments:</strong><span>quitar, piano, drums, bass</span></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-9">
					<div class="row">
						<div class="col-lg-6">
							<div class="song-details-box">
								<h3>About the Shop</h3>
								<div class="artist-details">
									<img src="img/artist.jpg" alt=""/>
									<div class="ad-text">
										<h5>Shop name</h5>
										<span>Location</span>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </p>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="song-details-box">
								<h3>Available Menu</h3>
								
								<div class="song-item">
									<div class="row">
										<div class="col-xl-5 col-lg-12 col-md-5">
											<div class="song-info-box">
												<img src="img/songs/1.jpg" alt=""/>
												<div class="song-info">
													<h4>Avocado juice</h4>
													<p>Delivery available </p>
												</div>
											</div>
										</div>
										<div class="col-xl-7 col-lg-12 col-md-7">
											<div class="single_player_container">
												
											</div>
										</div>
									</div>
								</div>
							
								<div class="song-item">
									<div class="row">
										<div class="col-xl-5 col-lg-12 col-md-5">
											<div class="song-info-box">
												<img src="img/songs/2.jpg" alt=""/>
												<div class="song-info">
													<h4>Orange Juice</h4>
													<p>Delivery available</p>
												</div>
											</div>
										</div>
										<div class="col-xl-7 col-lg-12 col-md-7">
											<div class="single_player_container">
												
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
    
        
      );
}
