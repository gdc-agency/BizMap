import React from 'react';
import {Link} from 'react-router-dom';
import { Nav, Tab } from 'react-bootstrap';
import Mainlist from './../Element/Mainlist';


const Tablist = () => {
	return(
		<>
			<Tab.Container defaultActiveKey="Home">
				<div className="listing-details-nav">
					<div className="container">
						<Nav as="ul" className="listing-nav nav">
							<Nav.Item as="li">
							   <Nav.Link eventKey="Home"><i className="la la-home"></i><span>Home</span></Nav.Link>
							</Nav.Item>
							<Nav.Item as="li">
							   <Nav.Link eventKey="Description"><i className="la la-file-text"></i><span>Description</span></Nav.Link>
							</Nav.Item>
							<Nav.Item as="li">
							   <Nav.Link eventKey="Listing"><i className="la la-list-alt"></i><span>Listing Features</span></Nav.Link>
							</Nav.Item>
							<Nav.Item as="li">
							   <Nav.Link eventKey="Photos"><i className="la la-image"></i><span>Photos</span></Nav.Link>
							</Nav.Item>
							<Nav.Item as="li">
							   <Nav.Link eventKey="Videos"><i className="la la-video-camera"></i><span>Videos</span></Nav.Link>
							</Nav.Item>
							<Nav.Item as="li">
							   <Nav.Link eventKey="Events"><i className="la la-calendar-check-o"></i><span>Events</span></Nav.Link>
							</Nav.Item>
							<Nav.Item as="li">
							   <Nav.Link eventKey="Reviews"><i className="la la-star-o"></i><span>Reviews</span></Nav.Link>
							</Nav.Item>
						</Nav>
					</div>
				</div>	
				<div className="section-full listing-details-content">
					<div className="container">	
						<div className="tab-content">
							<Tab.Content >
								<Tab.Pane eventKey="Home">	
									<Mainlist />
								</Tab.Pane>
								<Tab.Pane eventKey="Description">
									<div className="row">
										<div className="col-xl-12">
											<div className="content-box">
												<div className="content-header">
													<h3 className="title">description</h3>
												</div>
												<div className="content-body">
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
													<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
													<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,</p>
													<p>eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
												</div>
											</div>
										</div>
									</div>
								</Tab.Pane>								
								<Tab.Pane eventKey="Listing">	
									<div className="row">
										<div className="col-xl-12">
											<div className="content-box">
												<div className="content-header">
													<h3 className="title">listing features</h3>
												</div>
												<div className="content-body">
													<ul className="icon-box-list list-col-4">
														<li><Link to={'#'} className="icon-box-info">
															<div className="icon-cell bg-gray">
																<i className="la la-life-buoy"></i>
															</div>
															<span>Expert</span>
														</Link></li>
														<li><Link to={'#'} className="icon-box-info">
															<div className="icon-cell bg-gray">
																<i className="la la-cutlery"></i>
															</div>
															<span>Restaurant</span>
														</Link></li>
														<li><Link to={'#'} className="icon-box-info">
															<div className="icon-cell bg-gray">
																<i className="la la-shopping-cart"></i>
															</div>
															<span>Shopping</span>
														</Link></li>
														<li><Link to={'#'} className="icon-box-info">
															<div className="icon-cell bg-gray">
																<i className="la la-line-chart"></i>
															</div>
															<span>State Street</span>
														</Link></li>
														<li><Link to={'#'} className="icon-box-info">
															<div className="icon-cell bg-gray">
																<i className="la la-lemon-o"></i>
															</div>
															<span>Tea Tasting</span>
														</Link></li>
														<li><Link to={'#'} className="icon-box-info">
															<div className="icon-cell bg-gray">
																<i className="la la-wifi"></i>
															</div>
															<span>Wifi</span>
														</Link></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</Tab.Pane>
								
								<Tab.Pane eventKey="Photos">
									<div className="row">
										<div className="col-xl-12">
											<div className="content-box">
												<div className="content-header">
													<h3 className="title">photos</h3>
												</div>
												<div className="content-body">
													<div className="widget widget_gallery gallery-grid-4 lightgallery">
														<ul>
															<li>
																<span data-exthumbimage="images/gallery/gallery-box/pic1.jpg" data-src="images/gallery/gallery-box/pic1.jpg" className="check-km" title="Light Gallery Grid 1">		
																	<img src={require("./../../images/gallery/gallery-box/pic1.jpg")}  alt="" />
																</span>
															</li>
															<li>
																<span data-exthumbimage="images/gallery/gallery-box/pic2.jpg" data-src="images/gallery/gallery-box/pic2.jpg" className="check-km" title="Light Gallery Grid 1">		
																	<img src={require("./../../images/gallery/gallery-box/pic2.jpg" )} alt="" />
																</span>
															</li>
															<li>
																<span data-exthumbimage="images/gallery/gallery-box/pic3.jpg" data-src="images/gallery/gallery-box/pic3.jpg" className="check-km" title="Light Gallery Grid 1">		
																	<img src={require("./../../images/gallery/gallery-box/pic3.jpg")} alt="" />
																</span>
															</li>
															<li>
																<span data-exthumbimage="images/gallery/gallery-box/pic4.jpg" data-src="images/gallery/gallery-box/pic4.jpg" className="check-km" title="Light Gallery Grid 1">		
																	<img src={require("./../../images/gallery/gallery-box/pic4.jpg" )} alt="" />
																</span>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</Tab.Pane>
								<Tab.Pane eventKey="Videos">
									<div className="row">
										<div className="col-xl-12">
											<div className="content-box">
												<div className="content-header">
													<h3 className="title">videos</h3>
												</div>
												<div className="content-body">
													<div className="widget widget_video video-grid-4">
														<ul>
															<li>
																<div className="dlab-post-thum video-bx">
																	<img src={require("./../../images/gallery/pic1.jpg")} alt="" />
																	<div className="video-play-icon">
																		<Link to={"https://www.youtube.com/watch?v=f4Bts39jimI"} className="popup-youtube video"><i className="la la-play"></i></Link>
																	</div>
																</div>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</Tab.Pane>
								
								<Tab.Pane eventKey="Events">	
									<div className="row">
										<div className="col-xl-12">
											<div className="content-box">
												<div className="content-header">
													<h3 className="title">events</h3>
												</div>
												<div className="content-body">
													<div className="row">
														<div className="col-lg-4">
															<div className="listing-bx event-listing m-b30">
																<div className="listing-media">
																	<Link to={'#'}>
																		<img src={require("./../../images/listing/pic2.jpg")} alt="" />
																	</Link>
																</div>
																<div className="listing-info">
																	<h3 className="title"><Link to={"/listing-details"}>Moments To Remember From Directory</Link></h3>
																	<ul className="event-meta">
																		<li className="event-date"><span className="text-primary">SEP</span> <strong>04</strong></li>
																		<li>Tuesday 08:00</li>
																		<li>Sydney NSW, Australia</li>
																		<li>44 people interested</li>
																	</ul>
																</div>
																<div className="event-bottom">
																	<ul>
																		<li className="event-hosted"><span>Hosted By </span> <Link to={'#'}>John Smith</Link></li>
																		<li><Link to={'#'}><i className="la la-star-o"></i></Link></li>
																	</ul>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</Tab.Pane>
									
								<Tab.Pane eventKey="Reviews">	
									<div className="row">
										<div className="col-xl-8">
											<div className="comments-review-area">
												<div className="comments-review-box">
													<div className="review-header">
														<div className="review-comment-author">
															<div className="review-avatar">
																<img src={require("./../../images/testimonials/pic1.jpg")} alt="" />
															</div>
															<div className="comment-info">
																<div className="info-group">
																	<h3 className="title"><Link to={'#'}>Diamond Anderson</Link></h3>
																</div>
																<span className="comment-date">July 25, 2019</span>
															</div>
														</div>
														<div className="clearfix d-flex">
															<div className="average-reviews-single">
																<div className="average-reviews-info">
																	<h4 className="average-reviews">7.7</h4>
																	<div className="clearfix">
																		<h4 className="average-reviews-in">/ 10</h4>
																		<span>Quality</span>
																	</div>
																</div>
															</div>
															<div className="dropdown dropdown-btn dropdown-btn-sm">
																<button className="site-button-link button-xl dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																	<i className="la la-ellipsis-h"></i>
																</button>
																<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
																	<Link className="dropdown-item" data-toggle="modal" data-target="#report-reviews" to={''}><i className="la la-flag-o"></i><span> Report Review</span></Link>
																</div>
															</div>
														</div>
													</div>
													<div className="review-body">
														<h3 className="review-title"><Link to={'#'}>Food & Drink</Link></h3>
														<p className="review-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
														<ul className="review-meta">
															<li>4 Liked</li>
															<li>4 Shared</li>
														</ul>
													</div>
													<div className="review-footer">
														<div className="review-btn">
															<ul>
																<li><Link to={'#'}><i className="la la-thumbs-up"></i> <span>Like</span></Link></li>
																<li><Link to={'#'}><i className="la la-comments-o"></i> <span>Comment</span></Link></li>
																<li>
																	<div className="dropdown dropdown-btn">
																		<button className="site-button-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																			<i className="la la-share-square-o m-r5"></i>  Share
																		</button>
																		<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
																			<Link className="dropdown-item site-button-link facebook" to={''}>
																				<i className="fa fa-facebook"></i><span>Facebook</span></Link>
																			<Link className="dropdown-item site-button-link twitter" to={''}>
																				<i className="fa fa-twitter"></i><span> Twitter</span></Link>
																			<Link className="dropdown-item site-button-link pinterest" to={''}>
																				<i className="fa fa-pinterest"></i><span> Pinterest</span></Link>
																			<Link className="dropdown-item site-button-link linkedin" to={''}>
																				<i className="fa fa-linkedin"></i><span> Linkedin</span></Link>
																		</div>
																	</div>
																</li>
															</ul>
														</div>
														<div className="review-comments-list">
															<ul>
																<li>
																	<div className="review-comment-author">
																		<div className="review-avatar">
																			<img src={require("./../../images/testimonials/pic1.jpg")} alt="" />
																		</div>
																		<div className="comment-info">
																			<div className="info-group">
																				<h3 className="title"><Link to={"#"}>Diamond Anderson</Link></h3>
																				<p className="comment-text">Lorem Ipsum is simply dummy text</p>
																			</div>
																			<span className="comment-date">July 25, 2019</span>
																		</div>
																	</div>
																</li>
																<li>
																	<div className="review-comment-author">
																		<div className="review-avatar">
																			<img src={require("./../../images/testimonials/pic1.jpg")} alt="" />
																		</div>
																		<div className="comment-info">
																			<div className="info-group">
																				<h3 className="title"><Link to={"#"}>Diamond Anderson</Link></h3>
																				<p className="comment-text">Lorem Ipsum is simply dummy text</p>
																			</div>
																			<span className="comment-date">July 25, 2019</span>
																		</div>
																	</div>
																</li>
															</ul>
														</div>
														<div className="review-comments-form">
															<div className="review-avatar">
																<img src={require("./../../images/testimonials/pic1.jpg")} alt="" />
															</div>
															<div className="form-area">
																<textarea className="form-control" placeholder="Type To Message"></textarea>
															</div>
														</div>
													</div>
												</div>
												<div className="comments-review-box">
													<div className="review-header">
														<div className="review-comment-author">
															<div className="review-avatar">
																<img src={require("./../../images/testimonials/pic1.jpg")} alt="" />
															</div>
															<div className="comment-info">
																<div className="info-group">
																	<h3 className="title"><Link to={"#"}>Diamond Anderson</Link></h3>
																</div>
																<span className="comment-date">July 25, 2019</span>
															</div>
														</div>
														<div className="clearfix d-flex">
															<div className="average-reviews-single">
																<div className="average-reviews-info">
																	<h4 className="average-reviews">7.7</h4>
																	<div className="clearfix">
																		<h4 className="average-reviews-in">/ 10</h4>
																		<span>Quality</span>
																	</div>
																</div>
															</div>
															<div className="dropdown dropdown-btn dropdown-btn-sm">
																<button className="site-button-link button-xl dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																	<i className="la la-ellipsis-h"></i>
																</button>
																<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
																	<Link className="dropdown-item" data-toggle="modal" data-target="#report-reviews" to={''}><i className="la la-flag-o"></i><span> Report Review</span></Link>
																</div>
															</div>
														</div>
													</div>
													<div className="review-body">
														<h3 className="review-title"><Link to={"#"}>Food & Drink</Link></h3>
														<p className="review-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
														<ul className="review-meta">
															<li>4 Liked</li>
															<li>4 Shared</li>
														</ul>
													</div>
													<div className="review-footer">
														<div className="review-btn">
															<ul>
																<li><Link to={"#"}><i className="la la-thumbs-up"></i> <span>Like</span></Link></li>
																<li><Link to={"#"}><i className="la la-comments-o"></i> <span>Comment</span></Link></li>
																<li>
																	<div className="dropdown dropdown-btn">
																		<button className="site-button-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																			<i className="la la-share-square-o m-r5"></i>  Share
																		</button>
																		<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
																			<Link className="dropdown-item site-button-link facebook" to={''}>
																				<i className="fa fa-facebook"></i><span>Facebook</span></Link>
																			<Link className="dropdown-item site-button-link twitter" to={''}>
																				<i className="fa fa-twitter"></i><span> Twitter</span></Link>
																			<Link className="dropdown-item site-button-link pinterest" to={''}>
																				<i className="fa fa-pinterest"></i><span> Pinterest</span></Link>
																			<Link className="dropdown-item site-button-link linkedin" to={''}>
																				<i className="fa fa-linkedin"></i><span> Linkedin</span></Link>
																		</div>
																	</div>
																</li>
															</ul>
														</div>
														<div className="review-comments-list">
															<ul>
																<li>
																	<div className="review-comment-author">
																		<div className="review-avatar">
																			<img src={require("./../../images/testimonials/pic1.jpg")} alt="" />
																		</div>
																		<div className="comment-info">
																			<div className="info-group">
																				<h3 className="title"><Link to={"#"}>Diamond Anderson</Link></h3>
																				<p className="comment-text">Lorem Ipsum is simply dummy text</p>
																			</div>
																			<span className="comment-date">July 25, 2019</span>
																		</div>
																	</div>
																</li>
																<li>
																	<div className="review-comment-author">
																		<div className="review-avatar">
																			<img src={require("./../../images/testimonials/pic1.jpg")} alt="" />
																		</div>
																		<div className="comment-info">
																			<div className="info-group">
																				<h3 className="title"><Link to={"#"}>Diamond Anderson</Link></h3>
																				<p className="comment-text">Lorem Ipsum is simply dummy text</p>
																			</div>
																			<span className="comment-date">July 25, 2019</span>
																		</div>
																	</div>
																</li>
															</ul>
														</div>
														<div className="review-comments-form">
															<div className="review-avatar">
																<img src={require("./../../images/testimonials/pic1.jpg")} alt="" />
															</div>
															<div className="form-area">
																<textarea className="form-control" placeholder="Type To Message"></textarea>
															</div>
														</div>
													</div>
												</div>
												<div className="comments-review-box">
													<div className="review-header">
														<div className="review-comment-author">
															<div className="review-avatar">
																<img src={require("./../../images/testimonials/pic1.jpg")} alt="" />
															</div>
															<div className="comment-info">
																<div className="info-group">
																	<h3 className="title"><Link to={"#"}>Diamond Anderson</Link></h3>
																</div>
																<span className="comment-date">July 25, 2019</span>
															</div>
														</div>
														<div className="clearfix d-flex">
															<div className="average-reviews-single">
																<div className="average-reviews-info">
																	<h4 className="average-reviews">7.7</h4>
																	<div className="clearfix">
																		<h4 className="average-reviews-in">/ 10</h4>
																		<span>Quality</span>
																	</div>
																</div>
															</div>
															<div className="dropdown dropdown-btn dropdown-btn-sm">
																<button className="site-button-link button-xl dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																	<i className="la la-ellipsis-h"></i>
																</button>
																<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
																	<Link className="dropdown-item" data-toggle="modal" data-target="#report-reviews" to={''}><i className="la la-flag-o"></i><span> Report Review</span></Link>
																</div>
															</div>
														</div>
													</div>
													<div className="review-body">
														<h3 className="review-title"><Link to={"#"}>Food & Drink</Link></h3>
														<p className="review-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
														<div className="row gallery-img">
															<div className="col-lg-4">
																<img src={require("./../../images/listing/pic2.jpg")} alt="" />
															</div>
														</div>
														<ul className="review-meta">
															<li>4 Liked</li>
															<li>4 Shared</li>
														</ul>
													</div>
													<div className="review-footer">
														<div className="review-btn">
															<ul>
																<li><Link to={"#"}><i className="la la-thumbs-up"></i> <span>Like</span></Link></li>
																<li><Link to={"#"}><i className="la la-comments-o"></i> <span>Comment</span></Link></li>
																<li>
																	<div className="dropdown dropdown-btn">
																		<button className="site-button-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																			<i className="la la-share-square-o m-r5"></i>  Share
																		</button>
																		<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
																			<Link className="dropdown-item site-button-link facebook" to={''}>
																				<i className="fa fa-facebook"></i><span>Facebook</span></Link>
																			<Link className="dropdown-item site-button-link twitter" to={''}>
																				<i className="fa fa-twitter"></i><span> Twitter</span></Link>
																			<Link className="dropdown-item site-button-link pinterest" to={''}>
																				<i className="fa fa-pinterest"></i><span> Pinterest</span></Link>
																			<Link className="dropdown-item site-button-link linkedin" to={''}>
																				<i className="fa fa-linkedin"></i><span> Linkedin</span></Link>
																		</div>
																	</div>
																</li>
															</ul>
														</div>
														<div className="review-comments-list">
															<ul>
																<li>
																	<div className="review-comment-author">
																		<div className="review-avatar">
																			<img src={require("./../../images/testimonials/pic1.jpg")} alt="" /> 
																		</div>
																		<div className="comment-info">
																			<div className="info-group">
																				<h3 className="title"><Link to={"#"}>Diamond Anderson</Link></h3>
																				<p className="comment-text">Lorem Ipsum is simply dummy text</p>
																			</div>
																			<span className="comment-date">July 25, 2019</span>
																		</div>
																	</div>
																</li>
																<li>
																	<div className="review-comment-author">
																		<div className="review-avatar">
																			<img src={require("./../../images/testimonials/pic1.jpg")} alt="" />
																		</div>
																		<div className="comment-info">
																			<div className="info-group">
																				<h3 className="title"><Link to={"#"}>Diamond Anderson</Link></h3>
																				<p className="comment-text">Lorem Ipsum is simply dummy text</p>
																			</div>
																			<span className="comment-date">July 25, 2019</span>
																		</div>
																	</div>
																</li>
															</ul>
														</div>
														<div className="review-comments-form">
															<div className="review-avatar">
																<img src={require("./../../images/testimonials/pic1.jpg")} alt="" />
															</div>
															<div className="form-area">
																<textarea className="form-control" placeholder="Type To Message"></textarea>
															</div>
														</div>
													</div>
												</div>
											</div>
											
										</div>
										<div className="col-xl-4">
											<div className="content-box">
												<div className="content-header">
													<h3 className="title">24 REVIEWS FOR WESTFIELD SYDNEY</h3>
												</div>
												<div className="content-body">
													<div className="average-reviews-list bar-rating">
														<ul>
															<li>
																<div className="average-reviews-info">
																	<span>Quality</span>
																	<div className="bar">
																		<div className="bar-rat bg-primary" style={{width:"100%"}}></div>
																	</div>
																	<h4 className="average-reviews">8.5</h4>
																</div>
															</li>
															<li>
																<div className="average-reviews-info">
																	<span>Location</span>
																	<div className="bar">
																		<div className="bar-rat bg-primary" style={{width:"80%"}}></div>
																	</div>
																	<h4 className="average-reviews">7.5</h4>
																</div>
															</li>
															<li>
																<div className="average-reviews-info">
																	<span>Space</span>
																	<div className="bar">
																		<div className="bar-rat bg-primary" style={{width:"60%"}}></div>
																	</div>
																	<h4 className="average-reviews">7.4</h4>
																</div>
															</li>
															<li>
																<div className="average-reviews-info">
																	<span>Service</span>
																	<div className="bar">
																		<div className="bar-rat bg-primary" style={{width:"40%"}}></div>
																	</div>
																	<h4 className="average-reviews">7.9</h4>
																</div>
															</li>
															<li>
																<div className="average-reviews-info">
																	<span>Price</span>
																	<div className="bar">
																		<div className="bar-rat bg-primary" style={{width:"20%"}}></div>
																	</div>
																	<h4 className="average-reviews">7.4</h4>
																</div>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</Tab.Pane>
							</Tab.Content>
						</div>
					</div>
				</div>
			</Tab.Container>	
		</>
	)
}


export default Tablist;