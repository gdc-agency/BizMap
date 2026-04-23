import React from 'react';
import {Link} from 'react-router-dom';
import Footerowl from './../Element/Footerowl';
//import emailjs from 'emailjs-com';
//import swal from "sweetalert";	
import Mailchimp from './Mailchimp2';

const Footer2 = () => {
	
	
	return(
		<footer className="site-footer">
			<div className="footer-top">
				<div className="container">
					<div className="row">
						<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
							<div className="widget">
								<img src={require("./../../images/logo-white.png")} className="m-b30" alt="" width="180" />
								<p className="text-capitalize m-b30">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                            
								<ul className="list-inline m-a0">
									<li><Link to={"#"} className="site-button circle"><i className="fa fa-facebook"></i></Link></li>
									<li><Link to={"#"} className="site-button circle"><i className="fa fa-google-plus"></i></Link></li>
									<li><Link to={"#"} className="site-button circle"><i className="fa fa-linkedin"></i></Link></li>
									<li><Link to={"#"} className="site-button circle"><i className="fa fa-instagram"></i></Link></li>
									<li><Link to={"#"} className="site-button circle"><i className="fa fa-twitter"></i></Link></li>
								</ul>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-8 col-sm-8 col-12">
							<div className="widget border-0">
								<h5 className="m-b30">Frequently Asked Questions</h5>
								<ul className="list-2 list-line">
									<li><Link to={"#"}>Hotel</Link></li>
									<li><Link to={"#"}>Restaurant</Link></li>
									<li><Link to={"#"}>Appartment</Link></li>
									<li><Link to={"#"}>SPA & Beauty</Link></li>
									<li><Link to={"#"}>Atuomation</Link></li>
									<li><Link to={"#"}>Travel</Link></li>
									<li><Link to={"#"}>How It Works</Link></li>
									<li><Link to={"#"}>For Employers</Link></li>
									<li><Link to={"#"}>Underwriting</Link></li>
									<li><Link to={"#"}>Contact Us</Link></li>
									<li><Link to={"#"}>Lending Licnses</Link></li>
									<li><Link to={"#"}>Support</Link></li>
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-12">
							<div className="widget border-0">
								<h5 className="m-b30">Help</h5>
								<ul className="list-1 list-block ist-line">
									<li><Link to={"#"}>Hotel</Link></li>
									<li><Link to={"#"}>Restaurant</Link></li>
									<li><Link to={"#"}>Appartment</Link></li>
									<li><Link to={"#"}>SPA & Beauty</Link></li>
									<li><Link to={"#"}>Atuomation</Link></li>
									<li><Link to={"#"}>Travel</Link></li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
							<div className="widget widget_subscribe">
								<h5 className="m-b30">Subscribe With Us</h5>
								<p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting.</p>
								<div className="subscribe-form m-t20">
								{/* <form className="dzSubscribe" ref={form} onSubmit={sendEmail}>
										<div className="dzSubscribeMsg"></div>
										<input name="dzEmail" required="required" className="form-control" placeholder="Your Email Address" type="email" />
										<button name="submit" value="Submit" type="submit" className="site-button m-t20 btn-block radius-xl">Subscribe</button>
								</form> */}
								<Mailchimp action="https://w3itexperts.us16.list-manage.com/subscribe/post?u=05051835e9cfda57f103c2b67&amp;id=57c15a363f"
								  //Adding multiple fields:
									fields={[ {name: 'EMAIL', placeholder: 'Your Email Address', type: 'email', required: true},]}
								  // Change predetermined language
									messages = {
										{
										  sending: "Sending...",
										  success: "Thank you for subscribing!",
										  error: "An unexpected internal error has occurred.",
										  empty: "You must write an e-mail.",
										  duplicate: "Too many subscribe attempts for this email address",
										 button: "Subscribe"
										}
									}
								  // Add a personalized class
									
								/> 
								</div>
							</div>
						</div>
					</div>
					
					<Footerowl  />
					
				</div>
			</div>
			<div className="footer-bottom">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 text-center">
							<span className="fbottom-like"> Design With <Link to={"#"} className="like-btn" ><i className="fa fa-heart"></i></Link> By DexignZone </span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
	
}
export default Footer2;