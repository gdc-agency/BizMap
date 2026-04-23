import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import GoogleMaps from "simple-react-google-maps";
import Contactus from './../Element/Contactus';
import emailjs from 'emailjs-com';
import swal from "sweetalert";	

const Contact = () =>{
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
		
			<Header />
			<div className="page-content bg-white">
				<Contactus />
				<div className="section-full content-inner">
					<div className="container">
						<div className="row dzseth m-b50">
							<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
								<div className="icon-bx-wraper p-lr20 p-tb50 center seth contact-bx">
									<div className="icon-bx-sm radius m-b20 bg-primary m-b20">
										<Link to={"#"} className="icon-cell"><i className="ti-location-pin"></i></Link>
									</div>
									<div className="icon-content">
										<h5 className="dlab-tilte text-uppercase">Address</h5>
										<p>123 West Street, Melbourne Victoria 3000 Australia</p>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
								<div className="icon-bx-wraper p-lr20 p-tb50 center seth contact-bx">
									<div className="icon-bx-sm radius m-b20 bg-primary m-b20">
										<Link to={"#"} className="icon-cell"><i className="ti-email"></i></Link>
									</div>
									<div className="icon-content">
										<h5 className="dlab-tilte text-uppercase">Email</h5>
										<p>info@example.com <br/> info@example.com</p>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
								<div className="icon-bx-wraper p-lr20 p-tb50 center seth contact-bx">
									<div className="icon-bx-sm radius m-b20 bg-primary m-b20">
										<Link to={"#"} className="icon-cell"><i className="ti-mobile"></i></Link>
									</div>
									<div className="icon-content">
										<h5 className="dlab-tilte text-uppercase">Phone</h5>
										<p>+61 3 8376 6284 <br/> +23 123 456 7890</p>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
								<div className="icon-bx-wraper p-lr20 p-tb50 center seth contact-bx">
									<div className="icon-bx-sm radius m-b20 bg-primary m-b20">
										<Link to={"#"} className="icon-cell"><i className="ti-printer"></i></Link>
									</div>
									<div className="icon-content">
										<h5 className="dlab-tilte text-uppercase">Fax</h5>
										<p>+61 3 8376 6284 <br/> +23 123 456 7890</p>
									</div>
								</div>
							</div>
						</div>	
						
						<div className="row">
							
							<div className="col-lg-6 mb-4 mb-md-0">
								<div className="clearfix contact-form  m-b30">
									<div className="section-head text-black">
										<h2 className="box-title">Get In Touch</h2>
										<div className="dlab-separator bg-primary"></div>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
									</div>
									<div className="dzFormMsg"></div>
									<form  className="dzForm" ref={form} onSubmit={sendEmail}>
										<input type="hidden" value="Contact" name="name"  />
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<div className="input-group">
														<input name="dzName" type="text"  className="form-control" placeholder="Your Name" />
													</div>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<div className="input-group"> 
														<input name="dzEmail" type="email" className="form-control"   placeholder="Your Email Id"  />
													</div>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<div className="input-group">
														<input name="dzOther[Phone]" type="text"  className="form-control" placeholder="Phone" />
													</div>
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<div className="input-group">
														<input name="dzOther[Subject]" type="text"  className="form-control" placeholder="Subject" />
													</div>
												</div>
											</div>
											 <div className="col-md-12">
												<div className="form-group">
													<div className="input-group">
														 <textarea name="dzMessage" rows="4" className="form-control"  placeholder="Your Message..."></textarea> 
													</div>
												</div>
											</div>
											{/* <div className="col-md-12">
												<div className="recaptcha-bx">
													<div className="input-group">
														<div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
														<input className="form-control d-none" style={{display:"none"}} data-recaptcha="true" required data-error="Please complete the Captcha" />
													</div>
												</div>
											</div> */}
											<div className="col-md-12">
												<button name="submit" type="submit" value="Submit" className="site-button button-lg radius-xl">SUBMIT NOW</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						
							<div className="col-lg-6 d-flex">
								<div  className="m-b30 align-self-stretch" style={{width:"100%", minHeight:"100%" }}>
									<GoogleMaps
										apiKey={"AIzaSyDrAU41UTBlcEDNJgEtdlFLZeUBNBuHhzM"}
										style={{ minHeight:"100%", width: "100%" }}
										zoom={6}
										center={{ lat: 37.4224764, lng: -122.0842499 }}
										markers={{ lat: 37.4224764, lng: -122.0842499 }} //optional
									/>
								</div>
							</div>
							
						</div>
						
					</div>
				</div>
			</div>		
			
			<Footer  />
		</div>
	)
	
}

export default Contact;