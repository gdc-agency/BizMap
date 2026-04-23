import React , {Component} from 'react';
import {Link} from 'react-router-dom';

class Sidebar extends Component{
	render(){
		return(
			<div className="col-lg-4 col-md-6">
				<div className="sticky-top">
					<div className="listing-filter-sidebar">
						<h4 className="title m-b30">Filter By</h4>
						<form>
							<div className="form-group">
								<div className="input-group">
									<input type="text" className="form-control" placeholder="What are your looking for?" />
								</div>
							</div>
							<div className="form-group">
								<div className="input-group">
									<input type="text" className="form-control" placeholder="Your location" />			
								</div>
							</div>
							<div className="form-group">
								 
								 <select className="custom-select" id="inputGroupSelect01"> 
									<option> Category</option>
									<option>ConstrSelectuction</option>
									<option>Corodinator</option>
									<option>Employer</option>
									<option>Financial Career</option>
									<option>Information Technology</option>
									<option>Marketing</option>
									<option>Quality check</option>
									<option>Real Estate</option>
									<option>Sales</option>
									<option>Supporting</option>
									<option>Teaching</option> 
								</select>
							</div>
							<div className="form-group">
								<div id="price-range">
									<div className="price-slide-2 range-slider m-t30">
										<div className="price">
											<div id="slider-range-2"></div>
											<label>Radius Destination</label>
											<input type="text" id="distance" className="amount" readOnly="" defaultValue="2km - 100km"/>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
					<div className="listing-filter-sidebar">
						<h4 className="title">Filter By Tag</h4>
						<div className="widget_tag">
							<ul className="m-b0">
								<li><Link to  = {""}>Travel</Link> (28+)</li>
								<li><Link to  = {""}>Foods</Link> (39+) </li>
								<li><Link to  = {""}>Rivery</Link> (76+) </li>
								<li><Link to  = {""}>Organic</Link> (47+) </li>
								<li><Link to  = {""}>Medicine</Link> (36+) </li>
							</ul>
						</div>
					</div>
					<div className="add p-tb30">
						<img src={require("./../../images/add/add1.jpg")} alt="" />
					</div>
				</div>
			</div>
		)
	}
}

export default Sidebar;