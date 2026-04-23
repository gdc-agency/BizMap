import React from 'react';
import {Link} from 'react-router-dom';
//import emailjs from 'emailjs-com';
//import swal from "sweetalert";	
import Mailchimp from './Mailchimp';


const Footer = () => {
	/* const form = useRef();
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
		  swal('Good job!', 'Subscribe', "success");
	};
 */
	return(
		<footer className="site-footer">
			<div className="footer-top">
				<div className="container">
					<div className="row">
						<div className="col-xl-5 col-lg-4 col-md-12 col-sm-12">
							<div className="widget">
								<img src={require("./../../images/logo-white.png")} className="m-b15" alt="" width="180" />
								<p className="text-capitalize m-b20">Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry.</p>
								<div className="subscribe-form m-b20">
									<Mailchimp action="https://w3itexperts.us16.list-manage.com/subscribe/post?u=05051835e9cfda57f103c2b67&amp;id=57c15a363f"
										  //Adding multiple fields:
											fields={[ {name: 'EMAIL', placeholder: 'Email', type: 'email', required: true},]}
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
									{/* <form className="dzSubscribe" ref={form} onSubmit={sendEmail}>
										<div className="dzSubscribeMsg"></div>
										<div className="input-group">
											<input name="dzEmail" required="required" className="form-control" placeholder="Your Email Address" type="email" />
											<span className="input-group-btn">
												<button name="submit" value="Submit" type="submit" className="site-button radius-xl">Subscribe</button>
											</span> 
										</div>
									</form> */}
								</div>
								<ul className="list-inline social-icon  m-a0">
									<li><Link to ={""} className="site-button facebook circle "><i className="fa fa-facebook"></i></Link></li>
									<li><Link to ={""} className="site-button google-plus circle "><i className="fa fa-google-plus"></i></Link></li>
									<li><Link to ={""} className="site-button linkedin circle "><i className="fa fa-linkedin"></i></Link></li>
									<li><Link to ={""} className="site-button instagram circle "><i className="fa fa-instagram"></i></Link></li>
									<li><Link to ={""} className="site-button twitter circle "><i className="fa fa-twitter"></i></Link></li>
								</ul>
							</div>
						</div>
						<div className="col-xl-4 col-lg-5 col-md-7 col-sm-12 col-12">
							<div className="widget border-0">
								<h5 className="m-b30 text-white">Frequently Asked Questions</h5>
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
						<div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12">
							<div className="widget widget_getintuch">
								<h5 className="m-b30 text-white">Contact us</h5>
								<ul>
									<li><i className="ti-location-pin"></i><strong>address</strong> demo address #8901 Marmora Road Chi Minh City, Vietnam </li>
									<li><i className="ti-mobile"></i><strong>phone</strong>0800-123456 (24/7 Support)</li>
									<li><i className="ti-email"></i><strong>email</strong>info@example.com</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 text-center">
							<span className="fbottom-like"> Design With <Link className="like-btn" to={"#"}><i className="fa fa-heart"></i></Link> By <a href="https://globaldigitalcare.pk" target="_blank" rel="noopener noreferrer">Global Digital Care</a> </span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;