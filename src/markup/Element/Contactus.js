import React, {Component} from 'react';
import {Link} from 'react-router-dom';

var bnr = require('./../../images/banner/bnr1.jpg');

class Contactus extends Component{
	render(){
		return(
			<div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-black-middle" style={{backgroundImage:"url("+ bnr + ")" }}>
				<div className="container">
					<div className="dlab-bnr-inr-entry">
						<h1 className="text-white">Contact Us</h1>
						<p>Find awesome places, bars, restaurants & activities.</p>
						
						<div className="breadcrumb-row">
							<ul className="list-inline">
								<li><Link to={"/"}>Home</Link></li>
								<li>Contact Us</li>
							</ul>
						</div>
						
					</div>
				</div>
			</div>	
		)
	}
}

export default Contactus;