import React, {useRef} from 'react';
import  {Link} from 'react-router-dom';
import emailjs from 'emailjs-com';
import { SRLWrapper } from "simple-react-lightbox";

import pic1 from './../../images/gallery/pic1.jpg';
import pic2 from './../../images/gallery/pic2.jpg';
import pic3 from './../../images/gallery/pic3.jpg';
import pic4 from './../../images/gallery/pic4.jpg';
import pic5 from './../../images/gallery/pic5.jpg';
import pic6 from './../../images/gallery/pic6.jpg';
import pic7 from './../../images/gallery/pic7.jpg';
import pic8 from './../../images/gallery/pic8.jpg';
import pic9 from './../../images/gallery/pic9.jpg';

const widgetPost = [
	{
		image: require('./../../images/blog/recent-blog-2/img1.jpg'),
		title: 'Alonso Kelina Falao Asiano Pero',
		time : '07 Hours ago',
	},
	{
		image: require('./../../images/blog/recent-blog-2/img2.jpg'),
		title: 'Many desktop publish packages and web',
		time : '06 Hours ago',
	},
	{
		image: require('./../../images/blog/recent-blog-2/img3.jpg'),
		title: 'Various versions have evolved over the years',
		time : '02 Hours ago',
	},
	{
		image: require('./../../images/blog/recent-blog-2/img4.jpg'),
		title: 'Photo booth anim 8-bit PBR 3 wolf moon.',
		time : '',
	},
	{
		image: require('./../../images/blog/recent-blog-2/img5.jpg'),
		title: 'It is a long established fact that a reader',
		time : '08 Hours ago',
	},
	
]

const Sidebarblog = () =>{
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
	};
	
	return(
		<aside  className="side-bar blog-sidebar">
			<div className="widget">
				<h4 className="widget-title">Search</h4>
				<div className="search-bx">
					<form role="search" ref={form} onSubmit={sendEmail}>
						<div className="input-group">
							<input name="text" type="text" className="form-control" placeholder="Search your keyword..." />
							<span className="input-group-btn">
								<button type="submit" className="site-button"><i className="fa fa-search"></i></button>
							</span> 
						</div>
					</form>
				</div>
			</div>
			<div className="widget widget_gallery">
				<h4 className="widget-title">Instagram</h4>
				<SRLWrapper>	
					<ul>
						<li><a href={pic1}><div className="dlab-post-thum"><img src={pic1} alt="" /></div></a></li>
						<li><a href={pic2}><div className="dlab-post-thum"><img src={pic2} alt="" /></div></a></li>
						<li><a href={pic3}><div className="dlab-post-thum"><img src={pic3} alt="" /></div></a></li>
						<li><a href={pic4}><div className="dlab-post-thum"><img src={pic4} alt="" /></div></a></li>
						<li><a href={pic5}><div className="dlab-post-thum"><img src={pic5} alt="" /></div></a></li>
						<li><a href={pic6}><div className="dlab-post-thum"><img src={pic6} alt="" /></div></a></li>
						<li><a href={pic7}><div className="dlab-post-thum"><img src={pic7} alt="" /></div></a></li>
						<li><a href={pic8}><div className="dlab-post-thum"><img src={pic8} alt="" /></div></a></li>
						<li><a href={pic9}><div className="dlab-post-thum"><img src={pic9} alt="" /></div></a></li>
					</ul>
				</SRLWrapper>	
			</div>
			<div className="widget widget_share">
				<h4 className="widget-title">Follow Us</h4>
				<ul className="list-inline m-b0">
					<li><Link to={'#'} className="site-button facebook circle "><i className="fa fa-facebook"></i></Link></li>
					<li><Link to={'#'} className="site-button google-plus circle "><i className="fa fa-google-plus"></i></Link></li>
					<li><Link to={'#'} className="site-button linkedin circle "><i className="fa fa-linkedin"></i></Link></li>
					<li><Link to={'#'} className="site-button instagram circle "><i className="fa fa-instagram"></i></Link></li>
					<li><Link to={'#'} className="site-button twitter circle "><i className="fa fa-twitter"></i></Link></li>
				</ul>
			</div>
			<div className="widget widget_tag">
				<h4 className="widget-title">Categories</h4>
				<ul className="m-b0">
					<li><Link to={'#'}>Lifestyle</Link> (05)</li>
					<li><Link to={'#'}>Travel</Link> (34) </li>
					<li><Link to={'#'}>Fashion</Link> (89) </li>
					<li><Link to={'#'}>Music</Link> (96) </li>
					<li><Link to={'#'}>Branding</Link> (78) </li>
				</ul>
			</div>
			<div className="widget recent-posts-entry">
				<h4 className="widget-title">Feeds</h4>
				<div className="widget-post-bx">
					{widgetPost.map((item,index)=>(
						<div className="widget-post clearfix" key={index}>
							<div className="dlab-post-media"> 
								<img src={item.image} width="200" height="143" alt="" /> 
							</div>
							<div className="dlab-post-info">
								<div className="dlab-post-header">
									<h6 className="post-title"><Link to={'#'}>{item.title}</Link></h6>
								</div>
								<div className="dlab-post-meta">
									<ul>
										<li className="post-date"><i className="ti ti-alarm-clock"></i> {item.time}</li>
									</ul>
								</div>
							</div>
						</div>
					))}
					
				</div>
			</div>
			<div className="widget widget_tag_cloud">
				<h4 className="widget-title">Tags</h4>
				<div className="tagcloud"> 
					<Link to={'#'}>Travel</Link> 
					<Link to={'#'}>Lifestyle</Link> 
					<Link to={'#'}>Photo</Link> 
					<Link to={'#'}>Adventures</Link> 
					<Link to={'#'}>Musician</Link> 
					<Link to={'#'}>08</Link>
					<Link to={'#'}>Travel</Link> 
					<Link to={'#'}>Lifestyle</Link> 
					<Link to={'#'}>Photo</Link> 
					<Link to={'#'}>Adventures</Link> 
					<Link to={'#'}>Musician</Link> 
					<Link to={'#'}>08</Link> 
				</div>
			</div>
			<div className="add p-b30">
				<img src={require("./../../images/add/add1.jpg")} alt="" />
			</div>
		</aside>
	)
}
export default Sidebarblog;