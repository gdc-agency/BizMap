import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header4 from './../Layout/Header4';
import Footer2 from './../Layout/Footer2';
import Bannercarousel from './../Element/Bannercarousel';
import Topplaceowl2 from './../Element/Topplaceowl2';
import Tabservices from './../Element/Tabservices';
import Userowl2 from './../Element/Userowl2';
import Formblog3 from './../Element/Formblog3';

var bnr1 = require('./../../images/main-slider/slide6.jpg');
var bnr2 = require('./../../images/background/bg1.jpg');
var bnr3 = require('./../../images/background/bg1.jpg');

const locationBlog = [
	{
		image: require('./../../images/featured/pic5.jpg'),
		title: 'Japan',
	},
	{
		image: require('./../../images/featured/pic2.jpg'),
		title: 'United States',
	},
	{
		image: require('./../../images/featured/pic3.jpg'),
		title: 'England',
	},
	{
		image: require('./../../images/featured/pic4.jpg'),
		title: 'Korea',
	},
]


class Homepage3 extends Component{
	render(){
		return(
		
			<div className="page-wraper font-roboto">
				<Header4 />
				
				<div className="dlab-bnr-inr bnr-style2" style={{backgroundImage:"url( " + bnr1 + ")", backgroundSize: "cover" }}>
					<div className="container-fluid">
						<div className="dlab-bnr-inr-entry">
							<div className="slide-filter-bx">
								<div className="filter-style2-area">
									<div className="filter-style3">
										<form className="dezPlaceAni">
											<div className="form-head text-white">
												<h4 className="title">Find Nearby Attractions</h4>
												<p>Let's uncover the best places to eat, drink, and shop nearest to you.</p>
											</div>	
											<div className="form-group">
												<label className="title">What are you looking for?</label>
												<input type="text" className="form-control" placeholder="" />
											</div>	
											<div className="form-group">
												<label className="title">Location</label>
												<input type="text" className="form-control" placeholder="" />
											</div>	
											<div className="form-group">
												<select className="custom-select" id="inputGroupSelect01">   
													<option>Select Category</option>
													<option>Construction</option>
													<option>Corodinator</option>
													<option>Employer</option>
													<option>Financial Career</option>
													<option>Marketing</option>
													<option>Supporting</option>
													<option>Teaching</option> 
												</select>
											</div>
											<button className="site-button btn-block black"> Search</button>
										</form>
									</div>
								</div>
								
								<Bannercarousel />
								
							</div>
						</div>		
					</div>				
				
				</div>
				
				<div className="content-block" id="page_content">
					
					<div className="section-full bg-white content-inner-1">
						<div className="container max">
							<div className="category-list p-b10">
								<Link to={"#"} className="category-bx style1">
									<div className="icon-bx">
										<span className="icon-cell"><i className="flaticon-cart-of-ecommerce "></i></span> 
									</div>
									<h4 className="title text-white">carts</h4>
								</Link>
								<Link to={"#"} className="category-bx style1">
									<div className="icon-bx">
										<span className="icon-cell"><i className="flaticon-place"></i></span> 
									</div>
									<h4 className="title text-white">Tours</h4>
								</Link>
								<Link to={"#"} className="category-bx style1">
									<div className="icon-bx">
										<span className="icon-cell"><i className="flaticon-pill-capsule"></i></span> 
									</div>
									<h4 className="title text-white">medicine</h4>
								</Link>
								<Link to={"#"} className="category-bx style1">
									<div className="icon-bx">
										<span className="icon-cell"><i className="flaticon-shop"></i></span> 
									</div>
									<h4 className="title text-white">Shopping</h4>
								</Link>
								<Link to={"#"} className="category-bx style1">
									<div className="icon-bx">
										<span className="icon-cell"><i className="flaticon-birthday-cake"></i></span> 
									</div>
									<h4 className="title text-white">Food</h4>
								</Link>
								<Link to={"#"} className="category-bx style1">
									<div className="icon-bx">
										<span className="icon-cell"><i className="flaticon-city-hall"></i></span> 
									</div>
									<h4 className="title text-white">Culture</h4>
								</Link>
								<Link to={"#"} className="category-bx style1">
									<div className="icon-bx">
										<span className="icon-cell"><i className="flaticon-city-hall-1"></i></span> 
									</div>
									<h4 className="title text-white">Cuisine</h4>
								</Link>
								<Link to={"#"} className="category-bx style1">
									<div className="icon-bx">
										<span className="icon-cell"><i className="flaticon-place"></i></span> 
									</div>
									<h4 className="title text-white">Tours</h4>
								</Link>
							</div>
						</div>
					</div>
					
					<Topplaceowl2 />

					<div className="section-full bg-gray-1 content-inner about-us overlay-black-dark owl-out" style={{backgroundImage:"url(" + bnr3 + ")", backgroundPosition: "top"}}>
						<div className="container max">
							<div className="section-head text-white text-left text-center">
								<h2 className="box-title">Best Things to Do in the City</h2>
								<div className="dlab-separator bg-primary"></div>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
							</div>
							
							<Tabservices />
							
						</div>
					</div>		
				
					<div className="section-full content-inner bg-white">
						<div className="container">
							<div className="section-head text-center">
								<h2 className="box-title">How It Works?</h2>
								<div className="dlab-separator bg-primary"></div>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
							</div>
							<div className="row work-box-area">
								<div className="col-lg-3 col-md-6 col-sm-6 col-6">
									<div className="work-box">
										<div className="number-box bounce-in">1</div>
										<div className="icon-box">
											<h3 className="dlab-tilte text-white">Choose Location</h3>
											<i className="flaticon-place"></i>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 col-6">
									<div className="work-box">
										<div className="number-box bounce-in">2</div>
										<div className="icon-box">
											<h3 className="dlab-tilte text-white">Pick Category</h3>
											<i className="flaticon-team"></i>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 col-6">
									<div className="work-box">
										<div className="number-box bounce-in">3</div>
										<div className="icon-box">
											<h3 className="dlab-tilte text-white">Explore Place</h3>
											<i className="flaticon-city-hall-1"></i>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 col-6">
									<div className="work-box">
										<div className="number-box bounce-in">4</div>
										<div className="icon-box">
											<h3 className="dlab-tilte text-white">Enjoy Your Day</h3>
											<i className="flaticon-city-hall"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div className="section-full bg-white content-inner-2 bg-img-fix overlay-black-dark owl-out" style={{backgroundImage:"url(" + bnr2 + ")", backgroundPosition: "left bottom"}}>
						<div className="container">
							<div className="section-head text-center text-white">
								<h2 className="box-title">What Our Users Say</h2>
								<div className="dlab-separator bg-primary"></div>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
							</div>
							
							<Userowl2 />
							
						</div>
					</div>
					
					<div className="section-full bg-white content-inner-2">
						<div className="container max">
							<div className="section-head text-black text-center">
								<h2 className="box-title">Top Featured Locations</h2>
								<div className="dlab-separator bg-primary"></div>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
							</div>
							<div className="row m-lr0 featured-style2-area">
								<div className="col-lg-6 col-md-12 p-lr0">
									<div className="row m-lr0">
										<div className="col-lg-12 col-md-12 col-sm-12 p-lr0">
											<div className="featured-bx style2">
												<div className="featured-media">
													<img src={require("./../../images/featured/pic1.jpg")} alt="" />
													<div className="featured-type featured-top">
														TOP <br/>FEATURED
													</div>
												</div>
												<div className="featured-content text-white">
													<h2 className="title"><Link to={"#"}>London</Link></h2>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-12 p-lr0">
									<div className="row m-lr0">
										{locationBlog.map((item, index) => (
											<div className="col-lg-6 col-md-6 col-sm-6 p-lr0" key={index}>
												<div className="featured-bx style2">
													<div className="featured-media">
														<img src={item.image} alt="" />
													</div>
													<div className="featured-content text-white">
														<h2 className="title"><Link to={"#"}>{item.title}</Link></h2>
													</div>
												</div>
											</div>
										))}	
										
									</div>
								</div>
							</div>
						</div>
					</div>		
					<div className="section-full bg-gray-1 content-inner owl-out">
						<div className="container">
							<div className="section-head text-black text-center">
								<h2 className="box-title">From The Blog</h2>
								<div className="dlab-separator bg-black"></div>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
							</div>
							
							<Formblog3 />
							
						</div>
					</div>		
					
				</div>
				
				<Footer2 />
				
			</div>

		)
	}
}

export default Homepage3;