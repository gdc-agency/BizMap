import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import {Form} from 'react-bootstrap';

var bnr = require('./../../images/banner/bnr2.jpg');

class Addlisting extends Component{
	render(){
		return(
			
			<div className="page-wraper">
				
				<Header />
				
				<div className="page-content bg-white">
				
					<div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-black-middle" style={{backgroundImage:"url(" + bnr + ")" }}>
						<div className="container">
							<div className="dlab-bnr-inr-entry">
								<h1 className="text-white">Add Listing</h1>
								<p>Find awesome places, bars, restaurants & activities.</p>
								
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to={"./"}>Home</Link></li>
										<li>Add Listing</li>
									</ul>
								</div>
								
							</div>
						</div>
					</div>
					
					
					
					<div className="section-full content-inner">
						<div className="container">
							<div className="row">
								
								<div className="col-lg-12">
									<div className="highlight-bx">
										<h4 className="title">Returning User? Please <Link to={'#'} className="btn-link">Sign In </Link>and if you are a <strong>New User, Continue Below</strong> and register along with this submission.</h4>
									</div>
								</div>
								<div className="col-xl-8 col-lg-7 col-md-12 m-b30">
									<form className="add-listing-form">
										<div className="content-box">
											<div className="content-header">
												<h3 className="title"> PRIMARY LISTING DETAILS 
													<i data-toggle="tooltip" data-placement="top" title="Primary Listing Details" className="tooltip-bx fa fa-question-circle"></i>
												</h3>
											</div>
											<div className="content-body">
												<div className="form-group">
													<label>Directory Name</label>
													<input type="text" className="form-control m-b10" placeholder="Staple & Fancy Hotel" />
													<div data-toggle="collapse" data-target="#tagline" role="button" aria-expanded="false" aria-controls="tagline">
														<input id="check1" type="checkbox" />
														<label htmlFor="check1">Does Your Business have a tagline?</label>
													</div>
												</div>
												<div className="form-group collapse" id="tagline">
													<label>Tagline</label>
													<input type="text" className="form-control" placeholder="Tagline Example: Best Express Mexican Grill" />
												</div>	
												<div className="form-group">
													<label>Directory URL</label>
													<input type="text" className="form-control" placeholder="http://" />
												</div>
											</div>
										</div>
										<div className="content-box">
											<div className="content-header">
												<h3 className="title"> CATEGORY & SERVICES
												<i data-toggle="tooltip" data-placement="top" title="Category & Services" className="tooltip-bx fa fa-question-circle"></i>
												</h3>
											</div>
											<div className="content-body">
												<div className="form-group">
													<label>Industry Or Niche </label>
													<Form.Control as="select">
														<option>Arts &amp; Entertainment</option>
														<option>Sport &amp; Fitness</option>
														<option>Local Businesses</option>
														<option>Tours &amp; Travel</option>
														<option>Hospitality</option>
													</Form.Control>
												</div>
											</div>
										</div>
										<div className="content-box">
											<div className="content-header">
												<h3 className="title"> SOCIAL MEDIA
												<i data-toggle="tooltip" data-placement="top" title="Social Media" className="tooltip-bx fa fa-question-circle"></i>
												</h3>
											</div>
											<div className="content-body">
												<div className="add-social-link social-btn-container">
													<div className="input-group">
														<select id="mySelect">
															<option>Instagram</option>
															<option>LinkedIn</option>
															<option>Facebook</option>
														</select>	
														<input type="text" className="form-control" placeholder="http://" />
														<div className="input-group-prepend">
															<button className="site-button btn-block add-social-btn" type="button"><i className="fa fa-plus"></i> Add</button>
														</div>
													</div>	
												</div>
											</div>
										</div>
										<div className="content-box">
											<div className="content-header">
												<h3 className="title">MORE INFO
												<i data-toggle="tooltip" data-placement="top" title="More Info" className="tooltip-bx fa fa-question-circle"></i>
												</h3>
											</div>
											<div className="content-body editor">
												<div className="form-group ">
													<label>Description </label>
													<textarea defaultValue={''} className="form-control"  ></textarea>
												</div>
												<div className="form-group">
													<label>Tags Or Keywords (Comma Separated)</label>
													<textarea className="form-control" defaultValue={''} ></textarea>
												</div>
											</div>
										</div>
										<div className="content-box">
											<div className="content-header">
												<h3 className="title"> MEDIA
													<i data-toggle="tooltip" data-placement="top" title="Social Media" className="tooltip-bx fa fa-question-circle"></i>
												</h3>
											</div>
											<div className="content-body">
												<div className="form-group">
													<label>Your Business Video(Optional)</label>
													<input type="text" className="form-control" placeholder="https://www.youtube.com/" />
												</div>
												<div className="form-group">
													<label>Upload Business Logo</label>
													<input type="file" accept=".xlsx,.xls,image/*,.doc,audio/*,.docx,video/*,.ppt,.pptx,.txt,.pdf" multiple />
												</div>
											</div>
										</div>
										<div className="content-box">
											<div className="content-header">
												<h3 className="title"> EMAIL ADDRESS
													<i data-toggle="tooltip" data-placement="top" title=" Email Address" className="tooltip-bx fa fa-question-circle"></i>
												</h3>
											</div>
											<div className="content-body">
												<div className="form-group">
													<input type="text" className="form-control" placeholder="your contact email" />
													<div className="input-block m-t20">
														<input id="already-account" type="checkbox" />
														<label htmlFor="already-account">Already Have Account?</label>
													</div>
												</div>
											</div>
										</div>
										<button className="site-button btn-block button-md">Listing Preview</button>
									</form>							
								</div>
								
								<div className="col-xl-4 col-lg-5 col-md-12 m-b30 sticky-top">
									<aside className="side-bar listing-side-bar">
										<div className="content-box">
											<div className="content-header">
												<h3 className="title"><i className="la la-map-signs m-r5"></i>business info</h3>
											</div>
											<div className="content-body">
												<ul className="icon-box-list">
													<li><Link to={'#'} className="icon-box-info">
														<div className="icon-cell bg-gray">
															<i className="la la-envelope"></i>
														</div>
														<span>info@example.com</span>
													</Link></li>
													<li><Link to={'#'} className="icon-box-info">
														<div className="icon-cell bg-gray">
															<i className="la la-phone"></i>
														</div>
														<span>+91 1 234 5648</span>
													</Link></li>
													<li><Link to={'#'} className="icon-box-info">
														<div className="icon-cell bg-gray">
															<i className="la la-globe"></i>
														</div>
														<span>https://bizmap.dexignzone.com</span>
													</Link></li>
													<li><Link to={'#'} className="icon-box-info">
														<div className="icon-cell bg-gray">
															<i className="la la-map-marker"></i>
														</div>
														<span>Demo Address #8901 Marmora Road</span>
													</Link></li>
												</ul>
												<ul className="list-inline m-tb20">
													<li><Link to={"#"} className="site-button radius-no sharp"><i className="fa fa-facebook"></i></Link></li>
													<li><Link to={"#"} className="site-button radius-no sharp"><i className="fa fa-google-plus"></i></Link></li>
													<li><Link to={"#"} className="site-button radius-no sharp"><i className="fa fa-linkedin"></i></Link></li>
													<li><Link to={"#"} className="site-button radius-no sharp"><i className="fa fa-instagram"></i></Link></li>
													<li><Link to={"#"} className="site-button radius-no sharp"><i className="fa fa-twitter"></i></Link></li>
												</ul>
												<Link to={'#'} className="site-button outline outline-1 button-md btn-block"><i className="la la-envelope"></i> Inbox</Link>
											</div>
										</div>
										<div className="content-box">
											<div className="content-header">
												<h3 className="title">Add</h3>
											</div>
											<div className="content-body">
												<img className="img-cover" src={require("./../../images/add/add1.jpg")} alt="" />
											</div>
										</div>							
									</aside>
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

export default Addlisting;