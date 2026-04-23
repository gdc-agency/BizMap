import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const Tabcity = (props) => {
    const [activeTab, setActiveTab] = useState('1');
   
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
	return(
		<>
			<div class="section-full bg-gray-1 content-inner about-us">
                <div class="container-fluid">
					<div class="section-head text-black text-left text-center">
						<h2 class="box-title">Best Things to Do in the City</h2>
						<div class="dlab-separator bg-primary"></div>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
					</div>
					<div class="site-filters clearfix center m-b40 listing-filters">
						<ul class="filters" data-toggle="buttons">
							<li class="btn active">
							   <Link className={classnames({ active: activeTab === '1' })}
								   onClick={() => { toggle('1'); }}><span><i class=""></i>All</span>
							   </Link>
							</li>
							<li>
							   <Link className={classnames({ active: activeTab === '2' })}
								   onClick={() => { toggle('2'); }}><span><i class="la la-thumb-tack"></i> Latest Listings</span>
							   </Link>
							</li>
							<li>
							   <Link className={classnames({ active: activeTab === '3' })}
								   onClick={() => { toggle('3'); }}><span><i class="la la-star-o"></i> Popular Ratings</span>
							   </Link>
							</li>
							<li>
							   <Link className={classnames({ active: activeTab === '4' })}
								   onClick={() => { toggle('4'); }}><span><i class="la la-heart-o"></i> Near By You</span>
							   </Link>
							</li>  
						</ul>
					</div>	
					<div class="clearfix">
						<ul id="masonry" class="dlab-gallery-listing gallery-grid-4 gallery row">
							<li class="near-by-you design card-container col-lg-3 col-md-6 col-sm-6">
								<div class="listing-bx featured-star-right m-b30 style-2">
									<div class="listing-media">
										<img src="images/listing/list2/pic1.jpg" alt="">
										<ul class="wish-bx">
											<li><a class="like-btn" href="javascript:void(0)"><i class="fa fa-heart"></i> Like</a></li>					
										</ul>
										<ul class="featured-star">
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
										</ul>
									</div>
									<div class="listing-info">
										<h3 class="title"><a href="listing-details.html">King Organic Shop</a></h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.</p>
										<ul class="place-info">
											<li class="place-location"><i class="fa fa-map-marker"></i>12/a, New</li>
											<li class="open"><i class="fa fa-check"></i>Open Now</li>
										</ul>
									</div>
								</div>
							</li>
							<li class="popular-ratings photography card-container col-lg-3 col-md-6 col-sm-6">
								<div class="listing-bx featured-star-right m-b30 style-2">
									<div class="listing-media">
										<img src="images/listing/list2/pic2.jpg" alt="">
										<ul class="wish-bx">
											<li><a class="like-btn" href="javascript:void(0)"><i class="fa fa-heart"></i> Like</a></li>					
										</ul>
										<ul class="featured-star">
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>	
										</ul>
									</div>
									<div class="listing-info">
										<h3 class="title"><a href="listing-details.html">Dorado Health Care</a></h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.</p>
										<ul class="place-info">
											<li class="place-location"><i class="fa fa-map-marker"></i>12/a, New</li>
											<li class="open"><i class="fa fa-check"></i>Open Now</li>
										</ul>
									</div>
								</div>
							</li>
							<li class="latest-listings photography card-container col-lg-3 col-md-6 col-sm-6">
								<div class="listing-bx featured-star-right m-b30 style-2">
									<div class="listing-media">
										<img src="images/listing/list2/pic3.jpg" alt="">
										<ul class="wish-bx">
											<li><a class="like-btn" href="javascript:void(0)"><i class="fa fa-heart"></i> Like</a></li>					
										</ul>
										<ul class="featured-star">
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
										</ul>
									</div>
									<div class="listing-info">
										<h3 class="title"><a href="listing-details.html">Tam Farfhume Shop</a></h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.</p>
										<ul class="place-info">
											<li class="place-location"><i class="fa fa-map-marker"></i>12/a, New</li>
											<li class="open"><i class="fa fa-check"></i>Open Now</li>
										</ul>
									</div>
								</div>
							</li>
							<li class="near-by-you latest-listings card-container col-lg-3 col-md-6 col-sm-6">
								<div class="listing-bx featured-star-right m-b30 style-2">
									<div class="listing-media">
										<img src="images/listing/list2/pic4.jpg" alt="">
										<ul class="wish-bx">
											<li><a class="like-btn" href="javascript:void(0)"><i class="fa fa-heart"></i> Like</a></li>					
										</ul>
										<ul class="featured-star">
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
										</ul>
									</div>
									<div class="listing-info">
										<h3 class="title"><a href="listing-details.html">King Organic Shop</a></h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.</p>
										<ul class="place-info">
											<li class="place-location"><i class="fa fa-map-marker"></i>12/a, New</li>
											<li class="open"><i class="fa fa-check"></i>Open Now</li>
										</ul>
									</div>
								</div>
							</li>
							 <li class="near-by-you popular-ratings card-container col-lg-3 col-md-6 col-sm-6">
								<div class="listing-bx featured-star-right m-b30 style-2">
									<div class="listing-media">
										<img src="images/listing/list2/pic5.jpg" alt="">
										<ul class="wish-bx">
											<li><a class="like-btn" href="javascript:void(0)"><i class="fa fa-heart"></i> Like</a></li>					
										</ul>
										<ul class="featured-star">
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
										</ul>
									</div>
									<div class="listing-info">
										<h3 class="title"><a href="listing-details.html">Venzil Hingo Zoo</a></h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.</p>
										<ul class="place-info">
											<li class="place-location"><i class="fa fa-map-marker"></i>12/a, New</li>
											<li class="open"><i class="fa fa-check"></i>Open Now</li>
										</ul>
									</div>
								</div>
							</li>
							<li class="popular-ratings latest-listings photography card-container col-lg-3 col-md-6 col-sm-6">
								<div class="listing-bx featured-star-right m-b30 style-2">
									<div class="listing-media">
										<img src="images/listing/list2/pic6.jpg" alt="">
										<ul class="wish-bx">
											<li><a class="like-btn" href="javascript:void(0)"><i class="fa fa-heart"></i> Like</a></li>					
										</ul>
										<ul class="featured-star">
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
										</ul>
									</div>
									<div class="listing-info">
										<h3 class="title"><a href="listing-details.html">KFC Pijja Shop</a></h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.</p>
										<ul class="place-info">
											<li class="place-location"><i class="fa fa-map-marker"></i>12/a, New</li>
											<li class="open"><i class="fa fa-check"></i>Open Now</li>
										</ul>
									</div>
								</div>
							</li>
							<li class="near-by-you popular-ratings card-container col-lg-3 col-md-6 col-sm-6">
								<div class="listing-bx featured-star-right m-b30 style-2">
									<div class="listing-media">
										<img src="images/listing/list2/pic1.jpg" alt="">
										<ul class="wish-bx">
											<li><a class="like-btn" href="javascript:void(0)"><i class="fa fa-heart"></i> Like</a></li>					
										</ul>
										<ul class="featured-star">
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
										</ul>
									</div>
									<div class="listing-info">
										<h3 class="title"><a href="listing-details.html">Venzil Hingo Zoo</a></h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.</p>
										<ul class="place-info">
											<li class="place-location"><i class="fa fa-map-marker"></i>12/a, New</li>
											<li class="open"><i class="fa fa-check"></i>Open Now</li>
										</ul>
									</div>
								</div>
							</li>
							<li class="popular-ratings latest-listings photography card-container col-lg-3 col-md-6 col-sm-6">
								<div class="listing-bx featured-star-right m-b30 style-2">
									<div class="listing-media">
										<img src="images/listing/list2/pic2.jpg" alt="">
										<ul class="wish-bx">
											<li><a class="like-btn" href="javascript:void(0)"><i class="fa fa-heart"></i> Like</a></li>					
										</ul>
										<ul class="featured-star">
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
											<li><i class="fa fa-star"></i></li>
										</ul>
									</div>
									<div class="listing-info">
										<h3 class="title"><a href="listing-details.html">KFC Pijja Shop</a></h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.</p>
										<ul class="place-info">
											<li class="place-location"><i class="fa fa-map-marker"></i>12/a, New</li>
											<li class="open"><i class="fa fa-check"></i>Open Now</li>
										</ul>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>	