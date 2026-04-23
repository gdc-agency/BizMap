import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer2 extends Component{
	render(){
		return(
			<footer className="site-footer bg-black-2">
				<div className="footer-top">
					<div className="container saf-footer">
						<div className="row">
							<div className="col-md-6 col-lg-3 col-sm-6 footer-col-4">
								<div className="widget widget_getintuch">
									<h5 className="m-b30 text-white text-uppercase ">Contact us</h5>
									<ul>
										<li><i className="ti-location-pin"></i><strong>address</strong> demo address #8901 Marmora Road Chi Minh City, Vietnam </li>
										<li><i className="ti-mobile"></i><strong>phone</strong>0800-123456 (24/7 Support Line)</li>
										<li><i className="ti-email"></i><strong>email</strong>info@example.com</li>
									</ul>
								</div>
							</div>
							
							<div className="col-md-6 col-lg-3 col-sm-6 col-5 footer-col-4">
								<div className="widget widget_services border-0">
									<h5 className="m-b30 text-white text-uppercase ">Company</h5>
									<ul>
										<li><Link to={"/"}>About Us </Link></li>
										<li><Link to={"/"}>Home </Link></li>
										<li><Link to={"/contact"}>Contact Us</Link></li>
										<li><Link to={"/about-1"}>About Us</Link></li>
										<li><Link to={"/services-2"}>Our Services</Link></li>
									</ul>
								</div>
							</div>
							
							<div className="col-md-6 col-lg-3 col-sm-6 col-7 footer-col-4">
								<div className="widget widget_services border-0">
									<h5 className="m-b30 text-white text-uppercase ">Useful Link</h5>
									<ul>
										<li><Link to={"/"}>Create Account</Link></li>
										<li><Link to={"/"}>Company Philosophy </Link></li>
										<li><Link to={"/contact"}>Corporate Culture</Link></li>
										<li><Link to={"/about-1"}>Portfolio</Link></li>
										<li><Link to={"/services-2"}>Client Management</Link></li>
									</ul>
								</div>
							</div>
							<div className="col-md-6 col-lg-3 col-sm-6 footer-col-4">
								<div className="widget widget_gallery gallery-grid-4">
									<h5 className="m-b30 text-white text-uppercase ">Gallery</h5>
									<ul>
										<li className="img-effect2"> <Link to={"#"}><img src={require("./../../images/gallery/pic1.jpg")} alt="" /></Link> </li>
										<li className="img-effect2"> <Link to={"#"}><img src={require("./../../images/gallery/pic2.jpg")} alt="" /></Link> </li>
										<li className="img-effect2"> <Link to={"#"}><img src={require("./../../images/gallery/pic3.jpg")} alt="" /></Link> </li>
										<li className="img-effect2"> <Link to={"#"}><img src={require("./../../images/gallery/pic4.jpg")} alt="" /></Link> </li>
										<li className="img-effect2"> <Link to={"#"}><img src={require("./../../images/gallery/pic5.jpg")} alt="" /></Link> </li>
										<li className="img-effect2"> <Link to={"#"}><img src={require("./../../images/gallery/pic6.jpg")} alt="" /></Link> </li>
										<li className="img-effect2"> <Link to={"#"}><img src={require("./../../images/gallery/pic7.jpg")} alt="" /></Link> </li>
										<li className="img-effect2"> <Link to={"#"}><img src={require("./../../images/gallery/pic8.jpg")} alt="" /></Link> </li>
										<li className="img-effect2"> <Link to={"#"}><img src={require("./../../images/gallery/pic9.jpg")} alt="" /></Link> </li>
										<li className="img-effect2"> <Link to={"#"}><img src={require("./../../images/gallery/pic1.jpg")} alt="" /></Link> </li>
										<li className="img-effect2"> <Link to={"#"}><img src={require("./../../images/gallery/pic2.jpg")} alt="" /></Link> </li>
										<li className="img-effect2"> <Link to={"#"}><img src={require("./../../images/gallery/pic3.jpg")} alt="" /></Link> </li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="footer-bottom">
					<div className="container">
						<div className="row">
							<div className="col-md-6 col-sm-12 text-left"> <span>Copyright © 2019 DexignZone</span> </div>
							<div className="col-md-6 col-sm-12 text-right"> 
								<div className="widget-link "> 
									<ul>
										<li><Link to={"/help-desk"}> Help Desk</Link></li> 
										<li><Link to={"privacy-policy"}> Privacy Policy</Link></li> 
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer2;