import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import Sidebar from './../Element/Sidebar';

var bnr = require('./../../images/banner/bnr1.jpg');

const gridList = [

	{
		image: require("./../../images/listing/pic14.jpg"),
	},
	{
		image: require("./../../images/listing/pic15.jpg"),
	},
	{
		image: require("./../../images/listing/pic13.jpg"),
	},
	{
		image: require("./../../images/listing/pic16.jpg"),
	},
	{
		image: require("./../../images/listing/pic17.jpg"),
	},
]

class Gridleftsidebar extends Component{
	render(){
		return(
			<div className="page-wraper">
				
				<Header />
				
				<div className="page-content bg-white">
					
					<div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-black-middle" style={{backgroundImage:"url(" + bnr + ")" }}>
						<div className="container">
							<div className="dlab-bnr-inr-entry">
								<h1 className="text-white">Grid Left Sidebar</h1>
								<p>Find awesome places, bars, restaurants & activities.</p>
								
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to={"./"}>Home</Link></li>
										<li>Grid Left Sidebar</li>
									</ul>
								</div>
								
							</div>
						</div>
					</div>
					<div className="content-block">
						<div className="section-full content-inner bg-white">
							<div className="container">
								<div className="row">
								
									<Sidebar />
									
									<div className="col-lg-8 col-md-6">
										<div className="listing-filter m-b40">
											<div className="d-flex">
												<div className="mr-auto">
													<ul className="filter m-b0">
														<li>
															<select className="custom-select" id="inputGroupSelect01"> 
																<option>More Filters</option>
																<option>Construction</option>
																<option>Corodinator</option>
																<option>Employer</option>
																<option>Financial Career</option>
																<option>Information Technology</option>
																<option>Marketing</option>
																<option>Quality check</option>
																<option>Real Estate</option>
																<option>Sales</option>
																<option>Supporting</option>
																<option>Teaching</option> 
															</select>
														</li>
													</ul>
												</div>
												<div>
													<ul className="filter-icon m-b0">
														<li className="mr-1 mb-lg-0 mb-md-1 ml-1"><Link to = {""}><i className="fa fa-th"></i></Link></li>
														<li className="mr-1"><Link to = {""}><i className="fa fa-th-list"></i></Link></li>
														<li className="ml-1"><Link to = {""}><i className="fa fa-search"></i></Link></li>
													</ul>
												</div>
											</div>
										</div>
										<div className="row">
											{gridList.map((item,index) => (
												<div className="col-lg-12" key={index}>
													<div className="listing-bx listing-half m-b30">
														<div className="listing-media">
															<img src={item.image} alt="" />
																<ul className="wish-bx">
																<li><Link className="like-btn" to={""}><i className="fa fa-heart"></i></Link></li>
																<li><Link className="info-btn" to={""}><i className="fa fa-leaf"></i></Link></li>
															</ul>
														</div>
														<div className="listing-info">
															<ul className="featured-star">
																<li><i className="fa fa-star"></i></li>
																<li><i className="fa fa-star"></i></li>
																<li><i className="fa fa-star"></i></li>
																<li><i className="fa fa-star"></i></li>
																<li><i className="fa fa-star"></i></li>
																
															</ul>
															<h3 className="title"><Link to={"/listing-details"}>Rowdy King City</Link></h3>
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.</p>
															<ul className="place-info">
																<li className="place-location"><i className="fa fa-map-marker"></i>12/a, New</li>
																<li className="open"><i className="fa fa-check"></i>Open Now</li>
															</ul>
														</div>
													</div>
												</div>
											))}	
											
										</div>
										
										<div className="pagination-bx clearfix text-center">
											<ul className="pagination">
												<li className="previous"><Link to={"#"}><i className="fa fa-arrow-left"></i></Link></li>
												<li><Link to={"#"}>1</Link></li>
												<li><Link to={"#"}>2</Link></li>
												<li><Link to={"#"}>...</Link></li>
												<li className="active"><Link to={"#"}>7</Link></li>
												<li className="next"><Link to={"#"}><i className="fa fa-arrow-right"></i></Link></li>
											</ul>
										</div>
										
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<Footer />
			</div>		
		)
	}
}	

export default Gridleftsidebar;