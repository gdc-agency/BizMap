import React,{Component} from 'react';

import {Form, Nav, Tab} from 'react-bootstrap';


class Tabcontent extends Component{
	render(){
		return(
			<div >
			
				<Tab.Container  defaultActiveKey="Place" className="dlab-tabs search-filter">					
					<ul variant="pills" className="nav nav-tabs">
						<li className="nav-item mb-sm-0 mb-2">
							<Nav.Link eventKey="Place" className="nav-link active">
								<i className="fa fa-map-marker"></i> <span className="title-head">Place</span>
							</Nav.Link>
						</li>
						<li className="nav-item">
							<Nav.Link eventKey="Party" className="nav-link">
								<i className="fa fa-music"></i> <span className="title-head">Party</span>
							</Nav.Link>
							
						</li>
						<li className="nav-item">
							<Nav.Link eventKey="Rest" className="nav-link">
								<i className="fa fa-glass"></i> <span className="title-head">Restaurent</span>
							</Nav.Link>
						</li>
					</ul>
					<Tab.Content>
						<Tab.Pane eventKey="Place" className="tab-pane">
							<form>
								<div className="input-group">
									<input type="text" className="form-control" placeholder=" What are you looking for?" />
									 
										<Form.Control as="select"  >
											<option>Select Category</option>
											<option>Construction</option>
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
										</Form.Control>
									
									<div className="input-group-prepend">
										<button className="site-button text-uppercase"><i className="fa m-r5 fa-search"></i> Search</button>
									</div>
								</div>
							</form>
						</Tab.Pane>
						<Tab.Pane eventKey="Party" className="tab-pane">
							<form>
								<div className="input-group">
									<input type="text" className="form-control" placeholder="Search for Party" />
									<div className="form-control"> 
										<Form.Control as="select"  size="lg">
											<option>Select Category</option>
											<option>Construction</option>
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
										</Form.Control>
									</div>
									<div className="input-group-prepend">
										<button className="site-button text-uppercase"><i className="fa m-r5 fa-search"></i> Search</button>
									</div>
								</div>
							</form>
						</Tab.Pane>
						
						<Tab.Pane eventKey="Rest" className="tab-pane">
							<form>
								<div className="input-group">
									<input type="text" className="form-control" placeholder="Search for Restaurent" />
									
										<Form.Control as="select"  size="lg">
											<option>Select Category</option>
											<option>Construction</option>
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
										</Form.Control>
									
									<div className="input-group-prepend">
										<button className="site-button text-uppercase"><i className="fa m-r5 fa-search"></i> Search</button>
									</div>
								</div>
							</form>
						</Tab.Pane>
					</Tab.Content>
					<p className="text-center text-white m-b10 m-t30">Find awesome places, bars, restaurants & activities.</p> 
				</Tab.Container>
			</div>
		)
	
	}

}

export  default Tabcontent;