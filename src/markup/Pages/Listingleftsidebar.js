import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

import Sidebar from './../Element/Sidebar';


var bnr = require('./../../images/banner/bnr3.jpg');

const listingBlog = [
	{
		image : require("./../../images/listing/pic1.jpg"),	
	},
	{
		image :	require("./../../images/listing/pic2.jpg") 	
	},
	{
		image :	require("./../../images/listing/pic3.jpg") 	
	},
	{
		image :	require("./../../images/listing/pic4.jpg") 	
	},
	{
		image :	require("./../../images/listing/pic5.jpg") 	
	},
	{
		image :	require("./../../images/listing/pic6.jpg") 	
	},
	{
		image :	require("./../../images/listing/pic7.jpg") 	
	},
	{
		image :	require("./../../images/listing/pic8.jpg") 	
	},

]

class Listingleftsidebar extends Component{
	render(){
		return(
			<div className="page-wraper">
			
				<Header />
				
				<div className="page-content bg-white">
					
					<div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-black-middle" style={{backgroundImage:"url(" + bnr + ")" }}>
						<div className="container">
							<div className="dlab-bnr-inr-entry">
								<h1 className="text-white">Listings Left Sidebar</h1>
								<p>Find awesome places, bars, restaurants & activities.</p>
								
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to={"./"}>Home</Link></li>
										<li>Listings Left Sidebar</li>
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
														<li className="mr-1 mb-lg-0 mb-md-1 ml-1"><Link to={"#"}><i className="fa fa-th"></i></Link></li>
														<li className="mr-1"><Link to={"#"}><i className="fa fa-th-list"></i></Link></li>
														<li className="ml-1"><Link to={"#"}><i className="fa fa-search"></i></Link></li>
													</ul>
												</div>
											</div>
										</div>
										
										<div className="row">
											{listingBlog.map((item,index) => (
												<div className="col-lg-6 col-md-12 col-sm-6 m-b30" key={index}>
													<div className="listing-bx overlap">
														<div className="listing-media">
															<img src={item.image} alt="" />
														</div>
														<div className="listing-info">
															<ul className="featured-star">
																<li><i className="fa fa-star"></i></li>
																<li><i className="fa fa-star"></i></li>
																<li><i className="fa fa-star"></i></li>
																<li><i className="fa fa-star"></i></li>
																<li><i className="fa fa-star"></i></li>
																
															</ul>
															<h3 className="title"><Link to={"/listing-details"}>King Organic Shop</Link></h3>
														</div>
														<ul className="wish-bx">
															<li><Link className="like-btn" to={""}><i className="fa fa-heart"></i></Link></li>
															<li><Link className="info-btn" to={""}><i className="fa fa-leaf"></i></Link></li>						
														</ul>
													</div>
												</div>
											))}
											
											
										</div>
										
										<div className="pagination-bx clearfix text-center">
											<ul className="pagination">
												<li className="previous"><Link to = {""}><i className="fa fa-arrow-left"></i></Link></li>
												<li><Link to = {""}>1</Link></li>
												<li><Link to = {""}>2</Link></li>
												<li><Link to = {""}>...</Link></li>
												<li className="active"><Link to = {""}>7</Link></li>
												<li className="next"><Link to = {""}><i className="fa fa-arrow-right"></i></Link></li>
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

export default Listingleftsidebar;