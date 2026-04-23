import React,{Component} from 'react';
import {Carousel} from 'react-bootstrap';

const sliderImg = [
	{	
		image: 	require("./../../images/main-slider/slide2.jpg" ),	
	},
	{	
		image: 	require("./../../images/main-slider/slide3.jpg" ),	
	},
	{	
		image: 	require("./../../images/main-slider/slide4.jpg" ),	
	},
]

class Listingslider extends Component{
	render(){
		return(
			<Carousel  
				indicators={false}
			>
				{sliderImg.map((item,index)=>(
					<Carousel.Item key={index}>
						
							<div className ="slider-img" >
								<img className="d-block w-100"  src={item.image} alt="First slide" />
							</div>
						
					</Carousel.Item>
				))} 
				
				
			</Carousel>	
		)
	}

}
export default Listingslider;