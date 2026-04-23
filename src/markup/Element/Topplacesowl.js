import React, { Component } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';


const aboutBlog = [
    {
        image: require('./../../images/listing/pic1.jpg'),
        

    },
    {
        image: require('./../../images/listing/pic2.jpg'),
       

    },
    {
        image: require('./../../images/listing/pic3.jpg'),
       

    },
    {
        image: require('./../../images/listing/pic4.jpg'),
       

    },
	{
        image: require('./../../images/listing/pic5.jpg'),
       

    },
	{
        image: require('./../../images/listing/pic6.jpg'),
        

    },
	
	
]

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
  	<div className="owl-nav">
		<div className="owl-next la la-angle-right "  onClick={onClick}/>
	</div>	
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
	<div className="owl-nav">
   <div className=" owl-prev la la-angle-left " onClick={onClick}/>
	</div>
  );
}

class Topplace extends Component {

    render() {
        var settings = {
            dots: false,
            slidesToShow: 5,
            infinite: true,
			
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 2,
				  }
				},
				{
				  breakpoint: 576,
				  settings: {
					slidesToShow: 1,
				  }
				}
			]
        };
        return (
            <>
				<div className="section-full bg-gray content-inner about-us">
					<div className="container-fluid">
						<div className="section-head text-black text-center">
							<h2 className="box-title">Top Trending Places</h2>
							<div className="dlab-separator bg-primary"></div>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
						</div>
						
						
						<Slider className="owl-btn-center-lr owl-btn-1 primary owl-loaded owl-drag" {...settings}>
							{aboutBlog.map((item, index) => (
								<div className="item p-a5" key={index}>
									<div className="listing-bx featured-star-left m-b30">
									   <div className="listing-media">
											<Link to={'#'}><img src={item.image} alt="" /></Link>
											<ul className="featured-star">
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
											</ul>
										</div>
										<div className="listing-info">
											<h3 className="title"><Link to={"/listing-details"}>King Organic Shop</Link></h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.</p>
											<ul className="place-info">
												<li className="place-location"><i className="fa fa-map-marker"></i>12/a, New</li>
												<li className="open"><i className="fa fa-check"></i>Open Now</li>
											</ul>
										</div>
										<ul className="wish-bx">
											<li><Link className="like-btn" to={""}><i className="fa fa-heart"></i></Link></li>
											<li><Link className="info-btn" to={""}><i className="fa fa-leaf"></i></Link></li>							
										</ul>
									</div>
								</div>
							))}
						</Slider>
						
					</div>
				</div>
            </>
           
        )
    }
}
export default Topplace;