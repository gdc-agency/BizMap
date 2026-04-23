import React, {Component} from 'react';
import Slider from "react-slick";


const userBlog= [
	{
		image: require('./../../images/testimonials/pic1.jpg'),
	},
	{
		image: require('./../../images/testimonials/pic2.jpg'),
	},
	{
		image: require('./../../images/testimonials/pic3.jpg'),
	},
	{
		image: require('./../../images/testimonials/pic2.jpg'),
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

class Userowl extends Component{
	render(){
		var settings = {
			
            dots: true,
            slidesToShow: 3,
			margin: 10,
            infinite: true,
			autoplay: true,
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
		return(
				
			 <Slider className="owl-theme  owl-btn-center-lr owl-btn-3 owl-dots-primary-big " {...settings}>
				{userBlog.map((item, index) => (
					<div className="item p-2" key={index}>
						<div className="client-box">
							<div className="client-detail">
								<div className="client-img">
								<img src={item.image} alt="" />
								</div>
								<div className="client-info">
									<h5 className="client-name">Diamond Anderson</h5> 
									<span>Founder, uihub inc.</span> 
								</div>
							</div>
							
							<div className="client-info-bx">
								<h5>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. </h5>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
							</div>
							
						</div>
					</div>	
				))}
				
			</Slider>
					
				
		)
		
	}
	
}

export default Userowl;