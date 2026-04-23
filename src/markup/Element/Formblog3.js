import React, { Component } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';


const topPlace = [
    {
        image: require('./../../images/blog/grid/pic8.jpg'),
		title : '7 Moments To Remember From Directory.',
		subtitle : 'Tarvel',
		para : 'Achieving only 1 out of the 4 (traffic, opt-in, conversion, email) doesn’t do much help either.',
		name : 'John Doe',
		comment : '12 Comments',
    },
    {
        image: require('./../../images/blog/grid/pic9.jpg'),
		title : 'Directory Will Be A Thing Of The Past.',
		subtitle : 'Foods',
		para : 'Knowing that, you’ve optimised your pages countless amount of times, written tons of eye catching.',
		name : 'Rosalina',
		comment : '08 Comments',
    },
    {
        image: require('./../../images/blog/grid/pic10.jpg'),
		title : 'Ten Things Your Competitors Know About.',
		subtitle : 'Hotel',
		para : 'As desperate as you are right now, you have done everything you can on your website to say..',
		name : 'John Smith',
		comment : '03 Comments',
    },
    {
        image: require('./../../images/blog/grid/pic8.jpg'),
		title : '7 Moments To Remember From Directory.',
		subtitle : 'Tarvel',
		para : 'Achieving only 1 out of the 4 (traffic, opt-in, conversion, email) doesn’t do much help either.',
		name : 'John Doe',
		comment : '12 Comments',
    },
	{
        image: require('./../../images/blog/grid/pic9.jpg'),
		title : 'Directory Will Be A Thing Of The Past.',
		subtitle : 'Foods',
		para : 'Knowing that, you’ve optimised your pages countless amount of times, written tons of eye catching.',
		name : 'Rosalina',
		comment : '08 Comments',
    },
	{
        image: require('./../../images/blog/grid/pic10.jpg'),
		title : 'Ten Things Your Competitors Know About.',
		subtitle : 'Hotel',
		para : 'As desperate as you are right now, you have done everything you can on your website to say..',
		name : 'John Smith',
		comment : '03 Comments',
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
			 centerPadding: "60px",
			centerMode: true,
            slidesToShow: 3,
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
				<Slider className=" blog-carousel owl-btn-1 primary owl-btn-center-lr" {...settings}>
					{topPlace.map((item, index) => (
						<div className="item p-2" key={index}>
							<div className="blog-post dez-blog">
								<div className="dlab-post-media"> 
									<Link to={"/blog-details"}><img src={item.image} alt=""/></Link> 
								</div>
								<div className="dlab-info">
									<div className="category-tag">
										<Link to={"/blog-details"}>{item.subtitle}</Link>
									</div>
									<div className="dlab-post-title ">
										<h5 className="post-title"><Link to={"/blog-details"}>{item.title}</Link></h5>
									</div>
									<div className="dlab-post-text">
									   <p>{item.para}</p>
									</div>
									<div className="dlab-post-meta">
										<ul>
											<li className="post-author"><i className="icon-user"></i>By <Link to={"/blog-details"}>{item.name}</Link> </li>
											<li className="post-comment"><i className="icon-speech"></i> <Link to={"/blog-details"}>12 Comments</Link> </li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</>
           
        )
    }
}
export default Topplaceowl2;