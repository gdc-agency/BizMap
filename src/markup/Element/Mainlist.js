import React, {Component} from 'react';
import  {Link} from 'react-router-dom';
import GoogleMaps from "simple-react-google-maps";

class Mainlist extends Component{
	render(){
		return(
			<div className="row">
				<div className="col-xl-8 col-lg-7 col-md-12">
					<div className="content-box">
						<div className="content-header">
							<h3 className="title"><i className="la la-star-o m-r5"></i> average reviews</h3>
						</div>
						<div className="content-body">
							<div className="average-reviews-box">
								<div className="average-reviews-single">
									<div className="average-reviews-info">
										<h4 className="average-reviews">7.7</h4>
										<div className="clearfix">
											<h4 className="average-reviews-in">/ 10</h4>
											<span>Quality</span>
										</div>
									</div>
								</div>
								<div className="average-reviews-list">
									<ul>
										<li>
											<div className="average-reviews-info">
												<span>Quality</span>
												<h4 className="average-reviews">8.5</h4>
											</div>
										</li>
										<li>
											<div className="average-reviews-info">
												<span>Location</span>
												<h4 className="average-reviews">7.5</h4>
											</div>
										</li>
										<li>
											<div className="average-reviews-info">
												<span>Space</span>
												<h4 className="average-reviews">7.4</h4>
											</div>
										</li>
										<li>
											<div className="average-reviews-info">
												<span>Service</span>
												<h4 className="average-reviews">7.9</h4>
											</div>
										</li>
										<li>
											<div className="average-reviews-info">
												<span>Price</span>
												<h4 className="average-reviews">7.4</h4>
											</div>
										</li>
									</ul>
								</div>	
							</div>	
						</div>
						<div className="content-footer content-btn text-center">
							<Link data-toggle="modal" data-target="#favorite" to={''} className="site-button-link black"><i className="la la-star-o m-r5"></i> ADD A REVIEW</Link>
						</div>
					</div>
					<div className="content-box">
						<div className="content-body">
							<div className="sale-box">
								<div className="sale-date">
									<h2 className="title"><Link to={'#'}>12/20/2018 <i className="la la-angle-double-right m-l5"></i></Link></h2>
								</div>
								<div className="sale-info">
									<h3 className="title">50% OFF</h3>
									<p>Shop your Favorites Before They're gone</p>
								</div>
							</div>
						</div>
					</div>
					<div className="content-box">
						<div className="content-header">
							<h3 className="title"><i className="la la-file-text m-r5"></i> description</h3>
						</div>
						<div className="content-body">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
							<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,</p>
							<p>eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
						</div>
					</div>
					<div className="content-box">
						<div className="content-header">
							<h3 className="title"><i className="la la-list-alt m-r5"></i>listing features</h3>
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
					<div className="content-box">
						<div className="content-header">
							<h3 className="title"><i className="la la-file-image-o"></i> photos</h3>
						</div>
						<div className="content-body">
							<div className="widget widget_gallery gallery-grid-4 lightgallery">
								<ul>
									<li>
										<span  className="check-km" title="Light Gallery Grid 1">		
											<Link to={'#'}> 
												<div className="dlab-post-thum"><img src={require("./../../images/gallery/gallery-box/pic1.jpg")} alt="" /></div>
											</Link>
										</span>
									</li>
									<li>
										<span  className="check-km" title="Light Gallery Grid 1">		
											<Link to={'#'}> 
												<div className="dlab-post-thum"><img src={require("./../../images/gallery/gallery-box/pic2.jpg")} alt="" /></div>
											</Link>
										</span>
									</li>
									<li>
										<span  className="check-km" title="Light Gallery Grid 1">		
											<Link to={'#'}> 
												<div className="dlab-post-thum"><img src={require("./../../images/gallery/gallery-box/pic3.jpg")} alt="" /></div>
											</Link>
										</span>
									</li>
									<li>
										<span  className="check-km" title="Light Gallery Grid 1">
											<Link to={'#'}> 
												<div className="dlab-post-thum"><img src={require("./../../images/gallery/gallery-box/pic4.jpg")} alt="" /></div>
												<div className="more-images">
													<div>
														<strong>6</strong>
														<span>Images</span>
													</div>
												</div>
											</Link>
										</span>
									</li>
								</ul>
							</div>
						</div>
						<div className="content-footer content-btn text-center">
							<Link to={'#'} className="site-button-link">See All</Link>
						</div>
					</div>
					<div className="content-box">
						<div className="content-header">
							<h3 className="title"><i className="la la-video-camera m-r5"></i>videos</h3>
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
						<div className="content-footer content-btn text-center">
							<Link to={'#'}>See All</Link>
						</div>
					</div>
					<div className="content-box">
						<div className="content-header">
							<h3 className="title"><i className="la la-calendar-check-o m-r5"></i>events</h3>
						</div>
						<div className="content-body">
							<div className="row">
								<div className="col-lg-6">
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
						<div className="content-footer content-btn text-center">
							<Link to={'#'}>See All</Link>
						</div>
					</div>
					<div className="content-box">
						<div className="content-body">
							<div className="add-reviews">
								<h5 className="title m-b0"><span className="text-primary">24 </span>Reviews For BizMap</h5>
								<Link data-toggle="modal" data-target="#favorite" to={'#'} className="site-button"><i className="la la-star-o m-r5"></i> Add a review</Link>
							</div>
						</div>
					</div>
					
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
											<Link className="dropdown-item" data-toggle="modal" data-target="#report-reviews" to={'#'}><i className="la la-flag-o"></i><span> Report Review</span></Link>
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
														<h3 className="title"><Link to={'#'}>Diamond Anderson</Link></h3>
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
														<h3 className="title"><Link to={'#'}>Diamond Anderson</Link></h3>
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
														<h3 className="title"><Link to={'#'}>Diamond Anderson</Link></h3>
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
														<h3 className="title"><Link to={'#'}>Diamond Anderson</Link></h3>
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
														<h3 className="title"><Link to={'#'}>Diamond Anderson</Link></h3>
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
														<h3 className="title"><Link to={'#'}>Diamond Anderson</Link></h3>
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
				<div className="col-xl-4 col-lg-5 col-md-12 sticky-top">
					<aside className="side-bar listing-side-bar">
						<div className="content-box">
							<div className="content-header">
								<h3 className="title"><i className="la la-bullhorn m-r5"></i>listing sidebar promotion</h3>
							</div>
							<div className="content-body">
								<div className="widget recent-posts-entry posts-style1 posts-column-2">
									<div className="widget-post-bx">
										<div className="widget-post clearfix">
											<div className="dlab-post-media">
												<img src={require("./../../images/blog/recent-blog/pic1.jpg")} width="200" height="143" alt="" />
												<span className="abb-bx">Add</span>
											</div>
											<div className="dlab-post-info">
												<div className="dlab-post-header">
													<h6 className="post-title"><Link to={'#'}>Moments To Remember From Directory</Link></h6>
													<div className="dlab-post-meta">
														<ul>
															<li className="post-rating">
																<span className="average-rating">7.0 </span>
																<span className="rating-star">
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																</span>
															</li>
														</ul>
													</div>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
												</div>
											</div>
										</div>
									</div>
									<div className="widget-post-bx">
										<div className="widget-post clearfix">
											<div className="dlab-post-media">
												<img src={require("./../../images/blog/recent-blog/pic2.jpg")} width="200" height="143" alt="" />
												<span className="abb-bx">Add</span>
											</div>
											<div className="dlab-post-info">
												<div className="dlab-post-header">
													<h6 className="post-title"><Link to={'#'}>A Thing Of The Past</Link></h6>
													<div className="dlab-post-meta">
														<ul>
															<li className="post-rating">
																<span className="average-rating">7.0 </span>
																<span className="rating-star">
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																</span>
															</li>
														</ul>
													</div>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
												</div>
											</div>
										</div>
									</div>
									<div className="widget-post-bx">
										<div className="widget-post clearfix">
											<div className="dlab-post-media">
												<img src={require("./../../images/blog/recent-blog/pic3.jpg")} width="200" height="143" alt="" />
												<span className="abb-bx">Add</span>
											</div>
											<div className="dlab-post-info">
												<div className="dlab-post-header">
													<h6 className="post-title"><Link to={'#'}>Ten Things Your Competitors</Link></h6>
													<div className="dlab-post-meta">
														<ul>
															<li className="post-rating">
																<span className="average-rating">7.0 </span>
																<span className="rating-star">
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																</span>
															</li>
														</ul>
													</div>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
												</div>
											</div>
										</div>
									</div>
									<div className="widget-post-bx">
										<div className="widget-post clearfix">
											<div className="dlab-post-media">
												<img src={require("./../../images/blog/recent-blog/pic4.jpg")} width="200" height="143" alt="" />
												<span className="abb-bx">Add</span>
											</div>
											<div className="dlab-post-info">
												<div className="dlab-post-header">
													<h6 className="post-title"><Link to={'#'}>Remember From Directory</Link></h6>
													<div className="dlab-post-meta">
														<ul>
															<li className="post-rating">
																<span className="average-rating">7.0 </span>
																<span className="rating-star">
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																</span>
															</li>
														</ul>
													</div>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="content-box">
							<div className="content-header">
								<h3 className="title"><i className="la la-shopping-cart m-r5"></i>my room</h3>
							</div>
							<div className="content-body">
								<div className="booking-form">
									<form>
										<div className="form-row">
											<div className="form-group col-lg-6 col-md-6 col-sm-6">
												<label htmlFor="inputEmail4">Adults:</label>
												<input type="email" className="form-control" id="inputEmail4" placeholder="0" />
												<small id="passwordHelpBlock" className="form-text text-muted">
													Fusce sollicitudin fringilla justo
												</small>
											</div>
											<div className="form-group col-lg-6 col-md-6 col-sm-6">
												<label htmlFor="inputPassword4">Children:</label>
												<input type="text" className="form-control" id="inputPassword4" placeholder="0" />
												<small id="passwordHelpBlock" className="form-text text-muted">
													Pellentesque ac erat quis dui
												</small>
											</div>
											<div className="form-group col-lg-12 col-md-12 col-sm-12">
												<label htmlFor="inputPassword4">Room:</label>
												<select className="custom-select" id="inputGroupSelect02">
													<option>Basic (+£59.00 per day)</option>
													<option>Luxury (+£299.00 per day)</option>
												</select>
											</div>
											<div className="form-group col-lg-12 col-md-12 col-sm-12">
												<div id="calendar"></div>
											</div>
											<div className="col-lg-12 col-md-12 col-sm-12">
												<button className="site-button btn-block"><i className="la la-shopping-cart m-r5"></i>Check Availability</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="content-box listing-timing-box" id="accordion">
							<div className="content-header listing-timing-header" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
								<div className="head-left">
									<span className="listing-day"><i className="la la-clock-o m-r10"></i>Today</span>
									<span className="listing-status open">Open now</span>
									<span className="m-l10">UTC+11</span>
								</div>
								<div className="head-right">
									<span>06:30 - 11:30</span>
									<span className="m-l10"><i className="la la-ellipsis-h"></i></span>
								</div>
							</div>
							<div className="content-body collapse show" id="collapseOne" aria-labelledby="headingOne" data-parent="#accordion">
								<ul className="listing-time-list">
									<li className="open"><span className="listing-day">Monday</span> <span className="listing-hours">06:30 - 11:30  13:15 - 21:45</span></li>
									<li><span className="listing-day">Tuesday</span> <span className="listing-hours">09:30 - 19:00</span></li>
									<li><span className="listing-day">Wednesday</span> <span className="listing-hours">09:30 - 19:00</span></li>
									<li><span className="listing-day">Thursday</span> <span className="listing-hours">09:30 - 19:00</span></li>
									<li><span className="listing-day">Friday</span> <span className="listing-hours">09:30 - 19:00</span></li>
									<li><span className="listing-day">Saturday</span> <span className="listing-hours">09:30 - 19:00</span></li>
									<li><span className="listing-day">Sunday</span> <span className="listing-hours">09:30 - 19:00</span></li>
								</ul>
							</div>
						</div>
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
									<li><Link to={'#'} className="site-button radius-no sharp"><i className="fa fa-facebook"></i></Link></li>
									<li><Link to={'#'} className="site-button radius-no sharp"><i className="fa fa-google-plus"></i></Link></li>
									<li><Link to={'#'} className="site-button radius-no sharp"><i className="fa fa-linkedin"></i></Link></li>
									<li><Link to={'#'} className="site-button radius-no sharp"><i className="fa fa-instagram"></i></Link></li>
									<li><Link to={'#'} className="site-button radius-no sharp"><i className="fa fa-twitter"></i></Link></li>
								</ul>
								<Link to={'#'} className="site-button outline outline-1 button-md btn-block"><i className="la la-envelope"></i> Inbox</Link>
							</div>
						</div>
						<div className="content-box">
							<div className="content-header">
								<h3 className="title"><i className="la la-bullhorn m-r5"></i>nearby restaurants</h3>
							</div>
							<div className="content-body">
								<div className="widget recent-posts-entry posts-style2">
									<div className="widget-post-bx">
										<div className="widget-post clearfix">
											<div className="dlab-post-media"> <img src={require("./../../images/blog/recent-blog/pic1.jpg")} width="200" height="143" alt="" /> </div>
											<div className="dlab-post-info">
												<div className="dlab-post-header">
													<h6 className="post-title"><Link to={'#'}>Moments To Remember </Link></h6>
													<div className="dlab-post-meta">
														<ul>
															<li className="post-rating">
																<span className="average-rating">7.0 </span>
																<span className="rating-star">
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																	<i className="fa fa-star"></i>
																</span>
															</li>
														</ul>
													</div>
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="content-box">
							<div className="content-header">
								<h3 className="title"><i className="la la-sitemap m-r5"></i>categories</h3>
							</div>
							<div className="content-body">
								<ul className="icon-box-list list-col-2">
									<li><Link to={'#'} className="icon-box-info">
										<div className="icon-cell bg-green">
											<i className="la la-life-buoy"></i>
										</div>
										<span>Food & Drink</span>
									</Link></li>
									<li><Link to={'#'} className="icon-box-info">
										<div className="icon-cell bg-red">
											<i className="la la-cutlery"></i>
										</div>
										<span>Shopping</span>
									</Link></li>
								</ul>
							</div>
						</div>
						<div className="content-box">
							<div className="content-header">
								<h3 className="title"><i className="la la-bar-chart m-r5"></i>statistic</h3>
							</div>
							<div className="content-body">
								<ul className="icon-box-list list-col-2">
									<li>
										<div className="icon-box-info">
											<div className="icon-cell bg-gray">
												<i className="la la-eye"></i>
											</div>
											<span>13164 Views</span>
										</div>
									</li>
									<li>
										<div className="icon-box-info">
											<div className="icon-cell bg-gray">
												<i className="la la-star-o"></i>
											</div>
											<span>24 Ratings</span>
										</div>
									</li>
									<li>
										<div className="icon-box-info">
											<div className="icon-cell bg-gray">
												<i className="la la-heart-o"></i>
											</div>
											<span>102 Favorites</span>
										</div>
									</li>
									<li>
										<div className="icon-box-info">
											<div className="icon-cell bg-gray">
												<i className="la la-share"></i>
											</div>
											<span>58 Shares</span>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="content-box">
							<div className="content-header">
								<h3 className="title"><i className="la la-tags m-r5"></i>tags</h3>
							</div>
							<div className="content-body">
								<ul className="icon-box-list list-col-2">
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
						<div className="content-box">
							<div className="content-header">
								<h3 className="title"><i className="la la-map-marker m-r5"></i>map</h3>
							</div>
							<div className="content-body">
								<div  className="align-self-stretch" >
									<GoogleMaps
										apiKey={"AIzaSyDrAU41UTBlcEDNJgEtdlFLZeUBNBuHhzM"}
										style={{ height: "300px", width: "100%" }}
										zoom={6}
										center={{ lat: 37.4224764, lng: -122.0842499 }}
										markers={{ lat: 37.4224764, lng: -122.0842499 }} //optional
									/>
								</div>
							</div>
						</div>
						<div className="content-box">
							<div className="content-header">
								<h3 className="title">claim listing</h3>
							</div>
							<div className="content-body">
								<h5>Is this your business?</h5>
								<p>Claim listing is the best way to manage and protect your business.</p>
								<Link to={'#'} className="site-button m-t5">Claim Now</Link>
							</div>
						</div>							
					</aside>
				</div>
			</div>
		)
	}
}

export default Mainlist;