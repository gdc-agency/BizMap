import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import Sidebarblog from './../Element/Sidebarblog';
import emailjs from 'emailjs-com';
import swal from "sweetalert";	


var bnr = require('./../../images/banner/bnr1.jpg');

const blogPost = [
	{
		image : require('./../../images/blog/grid/img1.jpg'),
		title :	'5 Directory Blog That Had Gone Way Too Far.',
		para  : 'Knowing that, you’ve optimised your pages countless amount of times, written tons of eye catching headlines.',
	},
	{
		image : require('./../../images/blog/grid/img2.jpg'),
		title :	'7 Things You Should Do In Directory Blog.',
		para  : 'You will see in the guide all my years of valuable experience together with the latest data-proven results.',
	},
	
]   

const commentBlog = [
	{
		image :require("./../../images/testimonials/pic1.jpg"),
	},
	{
		image :require("./../../images/testimonials/pic2.jpg"),
	},
]	
    	
const Blogstandardetail = ()=>{
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
		  swal('Good job!', 'form successfuly submmited', "success");
	};
	return(
		<div className="page-wraper">
			<Header  />
			
			<div className="page-content bg-white">	
				<div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-black-middle" style={{backgroundImage:"url(" + bnr + ")" }}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1 className="text-white">Blog Details</h1>
							<p>Find awesome places, bars, restaurants & activities.</p>
							
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={"./"}>Home</Link></li>
									<li>Blog Details</li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>	
				
				<div className="section-full content-inner">
					<div className="container">
						<div className="row">
							
							<div className="col-lg-8 col-xl-8 p-b30">
								
								<div className="blog-post blog-single">
									<div className="dlab-post-meta m-b20">
										<ul className="d-flex align-items-center">
											<li className="post-author"><i className="ti ti-user"></i>By <Link to={'#'}>Hubla Dobby</Link> </li>
											<li className="post-comment"><i className="ti ti-alarm-clock"></i> <Link to={'#'}>19 hours ago</Link> </li>
										</ul>
									</div>
									<div className="dlab-post-title ">
										<h2 className="post-title m-t0">
											<Link to={'#'}>With our vastly improved notifications system, users have more control on your mind.</Link>
										</h2>
									</div>
									<div className="dlab-post-text">
										<p className="font-weight-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco  laboris nisi ut aliquip ex ea commodo amet set for your cool happiness for lyour loyal city.</p>
										<p className="font-weight-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
										<blockquote>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt with ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation a deef ullamco laboris nisi ut aliquip ex ea commodo consequat see you again tommorow.</p>
											<h6>- Rosalina Pong</h6>
										</blockquote>
										<p className="font-weight-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. </p>
										<div className="dlab-post-media m-b50"> 
											<Link to={'#'}><img src={require("./../../images/blog/default/thum1.jpg")} alt="" /></Link>
										</div>
										<p className="font-weight-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
										<div className="clearfix m-b50">
											<img className="alignleft" src={require("./../../images/listing/grid/pic1.jpg")} alt="" />
											<p className="font-weight-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
										</div>
									</div>
									<div className="clearfix tags-social-bx">
										<div className="dlab-post-tags float-left pt-0 mt-0 clear">
											<h5>Releted Tags</h5>
											<div className="post-tags"> 
												<Link to={'#'}>organic </Link> 
												<Link to={'#'}>Foods </Link> 
												<Link to={'#'}>tasty </Link>
											</div>
										</div>
										<div className="float-right text-right">
											<h5>Social Share</h5>
											<ul className="list-inline m-t20 m-b0">
												<li><Link to={'#'} className="site-button-link gray-light fa fa-facebook-f"></Link></li>
												<li><Link to={'#'} className="site-button-link gray-light fa fa-twitter"></Link></li>
												<li><Link to={'#'} className="site-button-link gray-light fa fa-behance"></Link></li>
												<li><Link to={'#'} className="site-button-link gray-light fa fa-youtube-play"></Link></li>
												<li><Link to={'#'} className="site-button-link gray-light fa fa-linkedin"></Link></li>
											</ul>
										</div>
									</div>
									<div className="dlab-divider bg-gray-dark"></div>
									<h4>Releted Post</h4>
									<div className="row">
										{blogPost.map((item,index)=>(
											<div className="col-xl-6 col-lg-6 col-md-6 col-xs-12" key={index}>
												<div className="blog-post blog-lg list-blog-bx">
													<div className="dlab-post-media dlab-img-effect zoom-slow">
														<Link to={'#'}><img src={item.image} alt="" /></Link>
													</div>
													<div className="dlab-post-info">
														<div className="dlab-post-title">
															<h4 className="post-title"><Link to={'#'}>{item.title}</Link></h4>
														</div>
														<div className="dlab-post-text mb-0">
														<p className="m-b0">{item.para}</p>
														</div>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							
								<div className="author-info text-center m-b30">
									<div className="thumb">
										<img src={require("./../../images/testimonials/pic3.jpg")} alt="" />
									</div>
									<h3 className="font-26 m-b15">Rosalina William</h3>
									<ul className="list-inline">
										<li><Link to={'#'} className="site-button-link gray-light fa fa-facebook-f"></Link></li>
										<li><Link to={'#'} className="site-button-link gray-light fa fa-twitter"></Link></li>
										<li><Link to={'#'} className="site-button-link gray-light fa fa-behance"></Link></li>
										<li><Link to={'#'} className="site-button-link gray-light fa fa-youtube-play"></Link></li>
										<li><Link to={'#'} className="site-button-link gray-light fa fa-linkedin"></Link></li>
									</ul>
									<p className="font-14 m-b0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa aute irure dolor. </p>
								</div>
													
								<div className="clear" id="comment-list">
									<div className="comments-area" id="comments">
										<h3 className="font-26">Comments</h3>
										<div className="clearfix">
											
											<ol className="comment-list">
												
												<li className="comment" >
													{commentBlog.map((item,index)=>(
														<div className="comment-body" key={index}>
															<div className="comment-author vcard"> <img  className="avatar photo" src={item.image} alt="" /> <cite className="fn">Rosalina Kelian</cite> <span className="says">says:</span> </div>
															<div className="comment-meta"> 
																<Link to={'#'}>19th May 2018</Link> 
																<ul className="featured-star">
																	<li><i className="fa fa-star"></i></li>
																	<li><i className="fa fa-star"></i></li>
																	<li><i className="fa fa-star"></i></li>
																	<li><i className="fa fa-star"></i></li>
																	<li><i className="fa fa-star"></i></li>
																</ul>
															</div>
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
															<div className="reply"> <Link to={'#'} className="comment-reply-link">Reply</Link> </div>
														</div>
													))}	
												</li>
												
											</ol>
											
											<h3 className="font-26">Post Comment</h3>
											<div className="comment-respond" id="respond">
												<form className="comment-form" ref={form} onSubmit={sendEmail}>
													<p className="comment-form-comment">
														<label htmlFor="comment">Comments</label>
														<textarea rows="8" name="comment" placeholder="Type your comments...." id="comment"></textarea>
													</p>
													<p className="comment-form-author">
														<label htmlFor="author">Type your name.... <span className="required">*</span></label>
														<input type="text"  name="Author"  placeholder="Type your name...." id="author" />
													</p>
													<p className="comment-form-email">
														<label htmlFor="email">Type your email.... <span className="required">*</span></label>
														<input type="text"  placeholder="Type your email...." name="email" id="email" />
													</p>
													<p className="comment-form-url">
														<label htmlFor="url">Type your website....</label>
														<input type="text"    placeholder="Type your website...."  name="url" id="url" />
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
							
							<div className="col-lg-4 col-xl-4 sticky-top">
								<Sidebarblog  />
							</div>
						</div>
					</div>
				</div>		
				
			</div>
			<Footer  />
		</div>
	)
}

export default Blogstandardetail;