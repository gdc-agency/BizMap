import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import {Dropdown} from 'react-bootstrap';

import Tablist from './../Element/Tablist';


var bnr = require("./../../images/banner/bnr1.jpg");

class Listingdetail2 extends Component{
	render(){
	
		return(
			<div className="page-wraper">
				
				<Header />
				<div className="page-content bg-white text-gray-1">
					
					<div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-black-middle inner-particles"  style={{backgroundImage:"url(" + bnr + ")"}} >
						<div className="container">
						</div>
					</div>
					<div className="listing-details-head">
						<div className="container">
							<div className="listing-info-box">
								<div className="listing-theme-logo">
									<img src={require("./../../images/gallery/gallery-box/pic1.jpg")} alt="" />
								</div>
								<div className="listing-info">
									<div className="listing-info-left">
										<h3 className="title">Listing Directory</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
									</div>
									<div className="listing-info-right">
										<Link to={'#'}  data-target="#favorite" className="site-button gray"><i className="la la-heart-o m-r5"></i>  Favorite </Link>
										<div className="dropdown dropdown-btn">
											<Dropdown>  
												<Dropdown.Toggle className="site-button mr-1 ml-1" variant="" id="dropdown-basic">
													<i className="la la-share m-r5"></i>  Share
												</Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item >
														<div className=" site-button-link facebook">
															<i className="fa fa-facebook"></i><span>Facebook</span>
														</div>
													</Dropdown.Item>
													<Dropdown.Item >
														<div className=" site-button-link twitter">
															<i className="fa fa-twitter"></i><span> Twitter</span>
														</div>	
													</Dropdown.Item>
													<Dropdown.Item>
														<div className=" site-button-link google-plus">
															<i className="fa fa-google-plus"></i><span> Google+</span>
														</div>
													</Dropdown.Item>
													<Dropdown.Item>
														<div className=" site-button-link tumblr">
															<i className="fa fa-tumblr"></i><span> Tumblr</span>
														</div>	
													</Dropdown.Item>
													<Dropdown.Item >
														<div className=" site-button-link pinterest">
															<i className="fa fa-pinterest"></i><span> Pinterest</span>
														</div>	
													</Dropdown.Item>
													<Dropdown.Item >
														<div className=" site-button-link linkedin">
															<i className="fa fa-linkedin"></i><span> Linkedin</span>
														</div>
													</Dropdown.Item>
													<Dropdown.Item >
														<div className=" site-button-link whatsapp">
															<i className="fa fa-whatsapp"></i><span> Whatsapp</span>
														</div>	
													</Dropdown.Item>													
												</Dropdown.Menu>
											</Dropdown>	
										</div>							
										<div className="dropdown dropdown-btn dropdown-btn-sm">
											<Dropdown>  
												<Dropdown.Toggle  className="bg-white" variant="none" id="dropdown-basic">
													<i className="la la-ellipsis-h"></i>
												</Dropdown.Toggle>
												
												<Dropdown.Menu>
													<Dropdown.Item >
														<i className="la la-star-o"></i><span>Write a review</span>
													</Dropdown.Item>
													<Dropdown.Item >
														<i className="la la-flag-o"></i><span> Report</span>
													</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<Tablist />
				</div>	
				<Footer />
			</div>
		)
	}
}

export default Listingdetail2;