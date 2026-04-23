import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import GoogleMaps from "simple-react-google-maps";
import swal from "sweetalert";	
import emailjs from 'emailjs-com';

var bnr = require('./../../images/banner/bnr1.jpg');

const Listingdetail = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		//emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
		emailjs.sendForm('service_zubfdvh', 'template_iy1pb0b', e.target, 'user_FvNIKVJ7om2PphifhzMm2')
		
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
		  e.target.reset()
		  //swal('form successfuly submmited');
		  swal('Good job!', 'form successfuly submmited', "success");
	};
	return(
		<div className="page-wraper">
			
			<Header   />
			
			<div className="page-content bg-white">
				
				<div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-black-middle" style={{backgroundImage:"url( " + bnr + " )"}}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<div className="wonder-bx text-white">
								<div className="wonder-theme">wo.</div>
								<div className="wonder-title">
									<h2>Wonder O’bell <i className="fa font-20 align-self-center fa-check-circle"></i></h2>
									<p>Winter is gone very soon</p>	
								</div>
								<div className="wonder-price">
									<p>Price range</p>
									<h3 className="m-b0">$50</h3>
								</div>
								<div className="wonder-btn">
									<Link to ={""} className="site-button button-lg radius-no text-uppercase">call now</Link>
								</div>
							</div>
						</div>
					</div>
				</div>	
				
				<div className="section-full content-inner">
					<div className="container">
						<div className="dlab-post-media m-b50">   
							<Link to={"#"}><img src={require("./../../images/listing/default/thum1.jpg")} alt="" /></Link> 
						</div>
						<div className="row">
							
							<div className="col-xl-8 col-lg-7 col-md-12 p-b30">
								<div className="section-head text-black mb-3">
									<h2 className="box-title">About this Hotel</h2>
									<p className="m-b0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco  laboris nisi ut aliquip ex ea commodo amet set for your cool happiness for lyour loyal city.</p>
								</div>
								<div className="dlab-divider bg-gray-dark"></div>
								<div className="widget widget_getintuch widget_listing">
									<ul>
										<li>
											<i className="fa fa-map-marker text-primary"></i>
											<p className="m-b0">3858 Marion Street, VT 05661</p>
										</li>
										<li>
											<i className="fa fa-phone text-primary"></i>
											<p className="m-b0">+909 987 978 6 </p>
											<p className="m-b0">+787 6765 66 7</p>
										</li>
										<li>
											<i className="fa fa-envelope text-primary"></i>
											<p className="m-b0">info@webmail.com</p>
											<p className="m-b0">webexample.com</p>
										</li>
										<li className="align-self-center">
											<button className="site-button text-uppercase radius-xl">Report</button>
										</li>
									</ul>
								</div>
								<div className="dlab-divider bg-gray-dark"></div>
								<p className="m-b15 font-weight-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est cupidatat non proident, sunt in culpa qui officia deserunt.</p>
								<p className="font-weight-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque id est laborum. Sed ut perspiciatis unde omnis iste natus error.</p>
								<div className="clearfix m-b50">
									<img className="alignleft" src={require("./../../images/listing/grid/pic1.jpg")} alt="" />
									<p className="font-weight-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
								</div>
								<h3 className="font-26">Core Features</h3>
								<div className="dlab-post-tags clear m-b50">
									<div className="post-tags">
										<Link to ={""}>wifi </Link> 
										<Link to ={""}>parking </Link> 
										<Link to ={""}>tv </Link> 
										<Link to ={""}>take-out </Link> 
										<Link to ={""}>balcony </Link> 
									</div>
								</div>
								<div className="dlab-divider bg-gray-dark"></div>
								<div className="clear" id="comment-list">
									<div className="comments-area" id="comments">
										<h3 className="font-26">Your Reviews</h3>
										<div className="clearfix">
											
											<ol className="comment-list">
												<li className="comment">
													<div className="comment-body">
														<div className="comment-author vcard"> 
															<img  className="avatar photo" src={require("./../../images/testimonials/pic1.jpg")} alt="" /> 
															<cite className="fn">Rosalina Kelian</cite> 
															<span className="says">says:</span> 
														</div>
														<div className="comment-meta"> 
															<Link to ={""}>19th May 2018</Link> 
															<ul className="featured-star">
																<li><i className="fa fa-star"></i></li>
																<li><i className="fa fa-star"></i></li>
																<li><i className="fa fa-star"></i></li>
																<li><i className="fa fa-star"></i></li>
																<li><i className="fa fa-star"></i></li>
															</ul>
														</div>
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
														<div className="reply"> <Link to ={""} className="comment-reply-link">Reply</Link> </div>
													</div>
												</li>
												<li className="comment">
													<div className="comment-body">
														<div className="comment-author vcard"> <img  className="avatar photo" src={require("./../../images/testimonials/pic2.jpg")} alt="" /> <cite className="fn">Arista Williamson</cite> <span className="says">says:</span> </div>
														<div className="comment-meta">
															<Link to ={""}>19th May 2018</Link> 
															<ul className="featured-star">
																<li><i className="fa fa-star"></i></li>
																<li><i className="fa fa-star"></i></li>
																<li><i className="fa fa-star"></i></li>
																<li><i className="fa fa-star"></i></li>
																<li><i className="fa fa-star"></i></li>
															</ul>
														</div>
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
														<div className="reply"> <Link to ={""} className="comment-reply-link ">Reply</Link> </div>
													</div>
												</li>
											</ol>
											
											
											<h3 className="font-26">Write a Review</h3>
											<div className="comment-respond" id="respond">
												<form className="comment-form" ref={form} onSubmit={sendEmail}>
													<div className="comment-form-rating">
														<div className="starrr"></div>
														<div className="rating-widget">
															<ul className="listing-stars">
																<li><i className="la la-star text-yellow"></i></li>
																<li><i className="la la-star text-yellow"></i></li>
																<li><i className="la la-star text-yellow"></i></li>
																<li><i className="la la-star text-yellow"></i></li>
																<li><i className="la la-star text-yellow"></i></li>
															</ul>
														</div>
													</div>
													<p className="comment-form-comment">
														<label htmlFor="comment">Comments</label>
														<textarea rows="8" name="comment" placeholder="Type your comments...." id="comment"></textarea>
													</p>
													<p className="comment-form-author">
														<label htmlFor="author">Type your name.... <span className="required">*</span></label>
														<input type="text" defaultValue="" name="Author"  placeholder="Type your name...." id="author" />
													</p>
													<p className="comment-form-email">
														<label htmlFor="email">Type your email.... <span className="required">*</span></label>
														<input type="text" defaultValue="" placeholder="Type your email...." name="email" id="email" />
													</p>
													<p className="comment-form-url">
														<label htmlFor="url">Type your website....</label>
														<input type="text"  defaultValue=""  placeholder="Type your website...."  name="url" id="url" />
													</p>
													<p className="form-submit">
														<input type="submit" defaultValue="Post Comment" className="submit site-button" id="submit" name="submit" />
													</p>
												</form>
											</div>
											
										</div>
									</div>
								</div>
								
							</div>
							
							<div className="col-xl-4 col-lg-5 col-md-12 sticky-top p-b30">
								<aside className="side-bar listing-side-bar">
									<div className="widget widget_map">
										<div  className="m-b30 align-self-stretch" >
											<GoogleMaps
												apiKey={"AIzaSyDrAU41UTBlcEDNJgEtdlFLZeUBNBuHhzM"}
												style={{ height: "400px", width: "100%" }}
												zoom={6}
												center={{ lat: 37.4224764, lng: -122.0842499 }}
												markers={{ lat: 37.4224764, lng: -122.0842499 }} //optional
											/>
										</div>
										<Link to ={""} className="site-button button-lg radius-xl m-b30 text-uppercase">get directions</Link>
									</div>
									<div className="widget widget_time">
										<h4 className="m-b10">Opening Hours</h4>
										<div className="dlab-separator bg-primary m-b20"></div>
										<ul className="m-b0">
											<li><Link to ={""}>Monday</Link> 08:00am - 11:00pm</li>
											<li><Link to ={""}>Tuesday</Link> 08:00am - 11:00pm</li>
											<li><Link to ={""}>Wednesday</Link> 12:00am - 11:00pm</li>
											<li><Link to ={""}>Thursday</Link> 08:00am - 11:00pm</li>
											<li><Link to ={""}>Friday</Link> 03:00pm - 02:00am</li>
											<li><Link to ={""}>Friday</Link> 03:00pm - 02:00am</li>
											<li><Link to ={""}>Sunday</Link> Closed</li>
										</ul>
									</div>
									<div className="widget widget_share">
										<h4 className="m-b10">Social Share</h4>
										<div className="dlab-separator bg-primary m-b20"></div>
										<ul className="list-inline m-a0 text-white">
											<li><Link to ={""} className="site-button facebook circle "><i className="fa fa-facebook"></i></Link></li>
											<li><Link to ={""} className="site-button google-plus circle "><i className="fa fa-google-plus"></i></Link></li>
											<li><Link to ={""} className="site-button linkedin circle "><i className="fa fa-linkedin"></i></Link></li>
											<li><Link to ={""} className="site-button instagram circle "><i className="fa fa-instagram"></i></Link></li>
											<li><Link to ={""} className="site-button twitter circle "><i className="fa fa-twitter"></i></Link></li>
										</ul>
									</div>
								</aside>
							</div>
							
						</div>
					</div>
						
						
				</div>	
			</div>	
		
			<Footer  />
			
		</div>	
	)
}

export default Listingdetail;