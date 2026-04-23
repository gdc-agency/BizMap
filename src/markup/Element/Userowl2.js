import React, { Component } from 'react'
import Slider from "react-slick";

const userBlog = [
    {
        image : require('./../../images/testimonials/pic1.jpg'),
        
    },
    {
        image: require('./../../images/testimonials/pic2.jpg'),
		
    },
    {
        image: require('./../../images/testimonials/pic3.jpg'),
		
    },
	{
        image: require('./../../images/testimonials/pic3.jpg'),
		
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

class Userowl2 extends Component{
	render(){
		var settings = {
            dots: true,
            slidesToShow: 3,
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
				
			<Slider className=" owl-loaded owl-theme owl-carousel owl-btn-center-lr owl-btn-3 btn-white owl-dots-primary-big style-2" {...settings}>
				{userBlog.map((item, index) => (
					<div className="item p-2" key={index}>
						<div className="testimonial-2 testimonial-bg">
							<div className="testimonial-text">
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make [...]</p>
							</div>
							<div className="testimonial-detail clearfix">
								<div className="testimonial-pic quote-left radius shadow"><img src={item.image} width="100" height="100" alt="" /></div>
								<strong className="testimonial-name">David Matin</strong> <span className="testimonial-position">Client</span> 
							</div>
						</div>
					</div>
				))}
				
			</Slider>
					
				
		)
		
	}
	
}
export default Userowl2;