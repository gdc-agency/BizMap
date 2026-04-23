import React, { Component } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';


const topPlace = [
    {
        image: require('./../../images/destinations/pic11.jpg'),
		subtitle : 'London',
    },
    {
        image: require('./../../images/destinations/pic12.jpg'),
		subtitle : 'United States',
    },
    {
        image: require('./../../images/destinations/pic13.jpg'),
		subtitle : 'Korea',
    },
    {
        image: require('./../../images/destinations/pic14.jpg'),
		subtitle : 'Japan',
    },
	{
        image: require('./../../images/destinations/pic11.jpg'),
		subtitle : 'London',
    },
	{
        image: require('./../../images/destinations/pic13.jpg'),
		subtitle : 'Korea',
    },
	{
        image: require('./../../images/destinations/pic12.jpg'),
		subtitle : 'United States',
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

class Topplaceowl2 extends Component {

    render() {
        var settings = {
            dots: false,
			centerMode : true,
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
				 <div className="section-full bg-white content-inner owl-out">
					<div className="container-fluid">
						<div className="section-head text-black text-center">
							
							<h2 className="box-title">Popular Cities</h2>
							<div className="dlab-separator bg-primary"></div>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
						</div>
						
						
						<Slider className="popular-cities-carousel owl-btn-1 owl-btn-center-lr primary" {...settings}>
							{topPlace.map((item, index) => (
								<div className="items p-1" key={index}>
									<div className="featured-bx style1 m-b30">
										<div className="featured-media">
											<div className="featured-hover"></div>
											<div className="overlay-black-light">
												<img src={item.image} alt=""/>
											</div>
										</div>
										<div className="featured-info">
											<h4 className="title"><Link to={"#"}>{item.subtitle}</Link></h4>
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
export default Topplaceowl2;