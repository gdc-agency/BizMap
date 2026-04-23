import React, { Component } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';



const formOwl = [
    {
        image : require('./../../images/blog/grid/pic5.jpg'),
        title: '7 Moments To Remember From Directory.',
    },
    {
        image : require('./../../images/blog/grid/pic6.jpg'),
		title: 'Directory Will Be A Thing Of The Past.',
    },
    {
        image : require('./../../images/blog/grid/pic7.jpg'),
		title : 'Ten Things Your Competitors Know About.',
    },
	{
        image : require('./../../images/blog/grid/pic6.jpg'),
		title: 'Directory Will Be A Thing Of The Past.',
    },
	{
        image : require('./../../images/blog/grid/pic7.jpg'),
		title: 'Directory Will Be A Thing Of The Past.',
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

class Userowl3 extends Component{
	render(){
		var settings = {
			centerMode : true,
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
				
			<Slider className="blog-carousel owl-btn-center-lr owl-btn-2 primary owl-loaded owl-drag" {...settings}>
			
				{formOwl.map((item, index) => (
					<div className="item p-3" key={index}>
						<div className="blog-post style2 blog-grid">
							<div className="dlab-post-media"> 
								<Link to={'#'}><img src={item.image} alt="" /></Link> 
							</div>
							<div className="dlab-info">
								<div className="dlab-post-meta">
									<ul>
										<li className="post-comment"><i className="icon-speech"></i> <Link to={'#'}>03</Link> </li>
										<li className="post-date"><i className="icon-calendar"></i> <span>10  Aug 2019</span> </li>
									</ul>
								</div>
								<div className="dlab-post-title">
									<h5 className="post-title"><Link to={'#'}>7 Moments To Remember From Directory.</Link></h5>
								</div>
							</div>
						</div>
					</div>
				))}
				
			</Slider>
					
				
		)
		
	}
	
}
export default Userowl3;