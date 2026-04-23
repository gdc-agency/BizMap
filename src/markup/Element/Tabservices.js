import React from 'react';
import { Tab, Nav } from 'react-bootstrap';

import OverservicesBlog1 from './../Element/Servicesimgblog1';
import OverservicesBlog2 from './../Element/Servicesimgblog2';
import OverservicesBlog3 from './../Element/Servicesimgblog3';
import OverservicesBlog4 from './../Element/Servicesimgblog4';

const Tabservices = () => {
	return(
		<>
			<Tab.Container defaultActiveKey="All">
				<div className="site-filters clearfix center m-b40 listing-filters text-white">
					<Nav as="ul" className="filters">
						<Nav.Item as="li" className="btn site-button-link">
						   <Nav.Link eventKey="All"><span><i className=""></i>All</span></Nav.Link>
						</Nav.Item>
						<Nav.Item as="li" className="btn site-button-link">
						   <Nav.Link  eventKey="Latest"><span><i className="la la-thumb-tack"></i> Latest Listings</span></Nav.Link>
						</Nav.Item>
						<Nav.Item as="li" className="btn site-button-link">
						   <Nav.Link eventKey="Popular"><span><i className="la la-star-o"></i> Popular Ratings</span></Nav.Link>
						</Nav.Item>
						<Nav.Item as="li" className="btn site-button-link">
						   <Nav.Link  eventKey="Near"><span><i className="la la-heart-o"></i> Near By You</span></Nav.Link>
						</Nav.Item>
					</Nav>
				</div>
				<div className="clearfix">
					<Tab.Content>
						<Tab.Pane eventKey="All">
							<OverservicesBlog1 />
						</Tab.Pane>
						<Tab.Pane eventKey="Latest">
							<OverservicesBlog2 />
						</Tab.Pane>
						<Tab.Pane eventKey="Popular">
							<OverservicesBlog3 />
						</Tab.Pane>
						<Tab.Pane eventKey="Near">
							<OverservicesBlog4 />
						</Tab.Pane>
					</Tab.Content>		
				</div>
			</Tab.Container>	
		</>	
	)
	
}
export default Tabservices;