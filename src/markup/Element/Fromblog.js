import React, { Component } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';


const aboutBlog = [
    {
        image : require('./../../images/blog/grid/pic1.jpg'),
        title : '7 Moments To Remember From Directory.',
		para  :  'Achieving only 1 out of the 4 (traffic, opt-in, conversion, email) doesn’t do much help either.',
		name  : 'John Doe',
		comment : '12 Comments',
    },
    {
        image: require('./../../images/blog/grid/pic2.jpg'),
		title: 'Directory Will Be A Thing Of The Past.',
		para : 'Knowing that, you’ve optimised your pages countless amount of times, written tons of eye catching.',
		name: 'Rosalina',
		comment : '08 Comments',
    },
    {
        image: require('./../../images/blog/grid/pic3.jpg'),
		title: 'Ten Things Your Competitors Know About.',
		para: 'As desperate as you are right now, you have done everything you can on your website to say.',
		name: 'John Smith',
		comment : '03 Comments',
    },
    {
        image: require('./../../images/blog/grid/pic2.jpg'),
		title: 'Directory Will Be A Thing Of The Past.',
		para : 'Knowing that, you’ve optimised your pages countless amount of times, written tons of eye catching.',
		name: 'Rosalina',
		comment : '08 Comments',
    },
	
	
	
]



class Fromblog extends Component {

    render() {
        var settings = {
            dots: false,
            slidesToShow: 3,
            infinite: true,
			autoplay: true,
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
                	
                <Slider className=" owl-carousel owl-none blog-shadow-out" {...settings}>
                    {aboutBlog.map((item, index) => (
                        <div className="item p-3" key={index}>
							<div className="blog-post dez-blog">
								<div className="dlab-post-media"> 
									<Link to={"/blog-details"}><img src={item.image} alt=""/></Link> 
								</div>
								<div className="dlab-info">
									<div className="category-tag">
										<Link to={"/blog-details"}>Tarvel</Link>
									</div>
									<div className="dlab-post-title ">
										<h5 className="post-title"><Link to={"/blog-details"}>{item.title}</Link></h5>
									</div>
									<div className="dlab-post-text">
									<p>Achieving only 1 out of the 4 (traffic, opt-in, conversion, email) doesn’t do much help either.</p>
									</div>
									<div className="dlab-post-meta">
										<ul>
											<li className="post-author"><i className="icon-user"></i>By <Link to = {"/blog-details"}>{item.name}</Link> </li>
											<li className="post-comment"><i className="icon-speech"></i> <Link to = {"/blog-details"}>{item.comment}</Link> </li>
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
export default Fromblog;