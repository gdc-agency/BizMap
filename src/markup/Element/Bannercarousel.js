import React, { Component } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';


const bnrBlog = [
    {
        image: require('./../../images/featured/pic7.jpg'), 
		listing :'18+ Listing',
		name : 'London',
    },
    {
        image: require('./../../images/listing/pic3.jpg'),
		listing :'12+ Listing',
		name : 'Korea',	
    },
    {
        image: require('./../../images/listing/pic4.jpg'),
		listing :'9+ Listing',
		name : 'United State',	
    },
    {
        image: require('./../../images/listing/pic5.jpg'),
		listing :'30+ Listing',
		name : 'Japan',
    },
	{
        image: require('./../../images/listing/pic3.jpg'),
		listing :'9+ Listing',
		name : 'united State',
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

class Bannercarousel extends Component {

    render() {
        var settings = {
            dots: false,
            slidesToShow: 4,
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
				<div className="location-carousel-bx">
					<div className="bnr-content text-white">
						<h1>Explore your place <br/>easy with us.</h1>
				
				
						<Slider className="owl-location-carousel owl-btn-1 owl-btn-center-lr owl-dots-none owl-carousel" {...settings}>
							{bnrBlog.map((item, index) => (
								<div className="item " key={index}>
									<div className="featured-bx style3">
										<div className="featured-media">
											<img src={item.image} alt=""/>
										</div>	
										<div className="featured-info">
											<h5 className="title"><Link to={"listing-details"}>{item.name}</Link></h5>
											<ul className="featured-category">
												<li> {item.listing}</li>
											</ul>
										</div>
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
export default Bannercarousel;