import React, {Component} from 'react';
import Slider from "react-slick";

const footerBlog = [
    {
        image: require('./../../images/client-logo/logo1.png'),
    },
	{
        image: require('./../../images/client-logo/logo2.png'),
    },
	{
        image: require('./../../images/client-logo/logo3.png'),
    },
	{
        image: require('./../../images/client-logo/logo4.png'),
    },
	{
        image: require('./../../images/client-logo/logo2.png'),
    },
]



class Footerowl extends Component{
	render(){
		var settings = {
            dots: false,
            slidesToShow: 4,
			autoplay: true,
			arrows : false,
            infinite: true,
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
			<div className="row">
				<div className="col-lg-12">
					<div className="client-box-area">
						<div className="container">
							<Slider className="client-carousel owl-carousel owl-none" {...settings}>
								{footerBlog.map((item, index) => (
									<div className="item" key={index}>
										<div className="client-box">
											<img src={item.image} alt="" />
										</div>
									</div>
									
								))}
							</Slider>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Footerowl;