import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const imgBlog4 = [
	{
		image :require("./../../images/listing/list2/pic1.jpg"),
		title :'King Organic Shop',
	},
	{
		image :require("./../../images/listing/list2/pic4.jpg"),
		title :'King Organic Shop',
	},
	{
		image :require("./../../images/listing/list2/pic5.jpg"),
		title :'Venzil Hingo Zoo',
	},
	{
		image :require("./../../images/listing/list2/pic1.jpg"),
		title :'Venzil Hingo Zoo',
	},
]
class OverservicesBlog4 extends Component{
	render(){
		return(
			<ul id="masonry" className="dlab-gallery-listing gallery-grid-4 gallery row sp10">
				{imgBlog4.map((item,index) => (
					<li className="near-by-you design card-container col-lg-3 col-md-6 col-sm-6">
					
						<div className="listing-bx featured-star-right m-b10 style-2" key={index}>
							<div className="listing-media">
								<img src={item.image} alt="" />
								<ul className="wish-bx">
									<li><Link to={"#"} className="like-btn" ><i className="fa fa-heart"></i> Like</Link></li>						
								</ul>
								<ul className="featured-star">
									<li><i className="fa fa-star"></i></li>
									<li><i className="fa fa-star"></i></li>
									<li><i className="fa fa-star"></i></li>
									<li><i className="fa fa-star"></i></li>
									<li><i className="fa fa-star"></i></li>
								</ul>
							</div>
							<div className="listing-info">
								<h3 className="title"><Link to={"/listing-details"}>{item.titile}</Link></h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.</p>
								<ul className="place-info">
									<li className="place-location"><i className="fa fa-map-marker"></i>12/a, New</li>
									<li className="open"><i className="fa fa-check"></i>Open Now</li>
								</ul>
							</div>
						</div>
					
					</li>	
				))}	
			</ul>	
		)
	}
}

export default OverservicesBlog4;