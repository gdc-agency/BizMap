import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import Sidebarblog from './../Element/Sidebarblog';

var bnr= require('./../../images/banner/bnr2.jpg');

const bloPost=[
	{
		image : require('./../../images/blog/default/thum1.jpg'),
		title : 'Ten Unconventional Knowledge About Directory Blog That You Cannot Learn From Books.',	
		para  : 'As desperate as you are right now, you have done everything you can on your website to say to Google “This is a relevant content!” But ouch, your site doesnot seem to be ranking no matter what.',
		name  : 'John Doe',
		
	},
	{
		image : require('./../../images/blog/default/thum2.jpg'),
		title : 'Seven Awesome Things You Can Learn From Directory Blog.',	
		para  : 'You will see in the guide all my years of valuable experience together with the latest data-proven results from getting a bunch of traffic to your website to making tons of REAL money for you!',
		name  : 'Rosalina',
		
	},
	{
		image : require('./../../images/blog/default/thum3.jpg'),
		title : 'The Biggest Contribution Of Directory Blog To Humanity.',	
		para  : 'Through the Guide, you will learn to STOP your website from getting bunch of traffic because I will show you how to get only the real traffic that gives you real conversion at the end of the day.',
		name  : 'John Smith',
		
	},
	{
		image : require('./../../images/blog/default/thum4.jpg'),
		title : '20 Wonderful Directory Blog. Number 16 is Absolutely Stunning.',	
		para  : 'When I needed to start from scratch and figure out how things work. Getting people to visit your website is easy until you realize that these bunch of traffic is not the exact traffic that you want.',
		name  : 'Robin Hood',
		
	},
]

class Blogstandar extends Component{
	render(){
		return(
			<div className="page-wraper">
				<Header />
				
				<div className="page-content bg-white">
					
					<div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-black-middle" style={{backgroundImage:"url(" + bnr + ")" }}>
						<div className="container">
							<div className="dlab-bnr-inr-entry">
								<h1 className="text-white">Blog Standard</h1>
								<p>Find awesome places, bars, restaurants & activities.</p>
								
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to={"#"}>Home</Link></li>
										<li>Blog Standard</li>
									</ul>
								</div>
								
							</div>
						</div>
					</div>
				
					<div className="section-full content-inner">
						<div className="container">
							<div className="row">
								
								<div className="col-md-7 col-lg-8 col-xl-8">
									{bloPost.map((item,index) => (
										<div className="blog-post blog-lg list-blog-bx" key={index}>
											<div className="dlab-post-media dlab-img-effect zoom-slow">
												<Link to={"/blog-details"}><img src={item.image} alt="" /></Link>
											</div>
											<div className="dlab-post-info">
												<div className="dlab-post-meta">
													<ul className="d-flex align-items-center">
														<li className="post-author"><i className="ti-user"></i>By <Link to={'#'}>{item.name}</Link> </li>
														<li className="post-date"> <i className="ti-alarm-clock"></i><strong>12 July</strong><span> 2018</span></li>
													</ul>
												</div>
												<div className="dlab-post-title ">
													<h3 className="post-title"><Link to={"/blog-details"}>{item.title}</Link></h3>
												</div>
												<div className="dlab-post-text">
													<p>{item.para}</p>
												</div>
												<div className="dlab-post-readmore blog-share"> 
													<Link to={"/blog-details"} title="READ MORE" rel="bookmark" className="site-button button-md radius-xl">READ MORE</Link>
												</div>
											</div>
										</div>
									))}	
								   
									<div className="pagination-bx clearfix text-center">
										<ul className="pagination">
											<li className="previous"><Link to={'#'}><i className="fa fa-arrow-left"></i></Link></li>
											<li><Link to={'#'}>1</Link></li>
											<li><Link to={'#'}>2</Link></li>
											<li><Link to={'#'}>...</Link></li>
											<li className="active"><Link to={'#'}>7</Link></li>
											<li className="next"><Link to={'#'}><i className="fa fa-arrow-right"></i></Link></li>
										</ul>
									</div>
								   
								</div>
								<div className="col-md-5 col-lg-4 col-xl-4 sticky-top">
									<Sidebarblog />
								</div>
							</div>
						</div>
					</div>		
				</div>
				<Footer  />
			</div>
		)
	}
	
}

export default Blogstandar;