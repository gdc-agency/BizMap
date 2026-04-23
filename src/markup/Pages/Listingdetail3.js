import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header2 from './../Layout/Header2';
import Footer from './../Layout/Footer';
import Mainlist from './../Element/Mainlist'; 
import Listingslider from './../Element/Listingslider';
import {Dropdown} from 'react-bootstrap';

class Listingdetail3 extends Component{
	render(){
		return(
			<div className="page-wraper">
				
				<Header2 />
				
				<div className="page-content bg-white text-gray-1">	
					
					<div className="dlab-bnr-inr listing-details-slider">
						<div className="dlab-bnr-inr-entry">
							<Listingslider />
						</div>
						<div className="container">
							<div className="listing-details-head style1">
								<div className="listing-info-box row">
									<div className="listing-details-left col-lg-7 col-md-7">
										<div className="listing-theme-logo">
											<img src={require("./../../images/gallery/gallery-box/pic1.jpg")} alt="" />
										</div>
										<div className="listing-info">
											<div className="listing-info-left text-white">
												<h3 className="title">Listing Directory</h3>
												<p>Vestibulum tincidunt dui quis neque facilisis,<br/> id vestibulum leo volutpat</p>
												<ul className="listing-info-list m-tb15">
													<li><Link to={'#'} className="site-button-link white">Restaurants,</Link></li>
													<li><Link to={'#'} className="site-button-link white">Canadian</Link></li>
												</ul>
											</div>
											<div className="listing-info-right">
												<ul className="listing-stars">
													<li><i className="la la-star"></i></li>
													<li><i className="la la-star"></i></li>
													<li><i className="la la-star"></i></li>
													<li><i className="la la-star"></i></li>
													<li><i className="la la-star"></i></li>
												</ul>
												<Link to={"#"} className="site-button-link white">
													<span className="m-l5">2 Review </span>
												</Link>
												<Link data-toggle="modal" data-target="#favorite" to={''} className="site-button-link white">
													<i className="la la-heart m-r5 font-20"></i>  
													<span>1 Favorite </span>
												</Link>
											</div>
										</div>
									</div>
									<div className="listing-details-right col-md-5 col-md-5 text-right">
										<div className="listing-info">
											<div className="listing-info-left text-white m-b20">
												<ul className="listing-info-list m-tb15">
													<li><Link to={'#'} className="site-button-link white">Claim this listing</Link></li>
													<li>	
														<Dropdown className="dropdown dropdown-btn">
															
															<Dropdown.Toggle variant=""  id="dropdown-basic" childBsPrefix="site-button-link white btn-link" >
																<i className="la la-share m-r5"></i>  Share
															</Dropdown.Toggle>
																
															<Dropdown.Menu>
																<Dropdown.Item href="#/action-1">
																	<div className="site-button-link facebook">
																		<i className="fa fa-facebook"></i><span>Facebook</span>
																	</div>
																</Dropdown.Item>
																<Dropdown.Item href="#/action-2">
																	<div className="site-button-link twitter">
																		<i className="fa fa-twitter"></i><span> Twitter</span>.
																	</div>
																</Dropdown.Item>
																<Dropdown.Item href="#/action-3">
																	<div className="site-button-link google-plus">
																		<i className="fa fa-google-plus"></i><span> Google+</span>
																	</div>
																</Dropdown.Item>
																<Dropdown.Item href="#/action-4">
																	<div className="site-button-link tumblr">
																		<i className="fa fa-tumblr"></i><span> Tumblr</span>
																	</div>
																</Dropdown.Item>
																<Dropdown.Item href="#/action-5">
																	<div className="site-button-link pinterest">
																		<i className="fa fa-pinterest"></i><span> Pinterest</span>
																	</div>
																</Dropdown.Item>
																<Dropdown.Item href="#/action-6">
																	<div className="site-button-link linkedin">
																		<i className="fa fa-linkedin"></i><span> Linkedin</span>
																	</div>
																</Dropdown.Item>
																<Dropdown.Item href="#/action-7">
																	
																	<div className="site-button-link whatsapp">
																		<i className="fa fa-whatsapp"></i><span> Whatsapp</span>
																	</div>	
																</Dropdown.Item>
															</Dropdown.Menu>
														</Dropdown>
														
													</li>											
													<li><Link to={'#'} className="site-button-link white"><i className="la la-photo m-r5 font-16"></i>Add Photos</Link></li>
												</ul>
											</div>
											<div className="listing-info-right">
												<Link data-toggle="modal" data-target="#favorite" to={''} className="site-button">Write a Review </Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
					</div>	
					<div className="section-full listing-details-content">
						<div className="container">
							<Mainlist />
						</div>
					</div>	
				</div>
				
				<Footer  />
			
			</div>
		)
	}
}
export default Listingdetail3;