import React from 'react'
import './footer.css'
import logo from '../../assets/logo/logo.png'
import { BrowserRouter as Router, Link } from 'react-router-dom';

const footer = () => {
  return (

    <footer className="footer">

		<div className="footer-section section1">

			<h1>Connecting Kenyans Across BC</h1>

			<p>Strengthening Bonds, Cultivating a Home Away from Home.</p>
		
		</div>

		<div className="container">

			<div className="col-md-1">

				<Link to="/"><img src={logo} alt="" className="img-footer"></img></Link>
				
				<div className="footer-about">

					<p>The Kenyan Community In British Columbia Society <br></br>(KENBC) stands as a beacon of unity, diversity, and community spirit.</p>
				
				</div>

			</div>
			
			<div className="col-md-2">

				<div className="useful-link">

					<h2>Useful Links</h2>

					<div className="use-links">
			
						<li><Link to="/"><i className="fa-solid fa-angles-right"></i> Home</Link></li>
						
						<li><Link to="/About"><i className="fa-solid fa-angles-right"></i> About Us</Link></li>
						
						<li><Link to="/Membership"><i className="fa-solid fa-angles-right"></i> Membership</Link></li>
						
						<li><Link to="/Benevolence"><i className="fa-solid fa-angles-right"></i> Benovelance</Link></li>
						
						<li><Link to="/Governance"><i className="fa-solid fa-angles-right"></i> Governance</Link ></li>
						
						<li><Link to="../News"><i className="fa-solid fa-angles-right"></i> News</Link ></li>
				
					</div>

				</div>

			</div>
				
			
			<div className="col-md-3">

				<div className="address">

					<h2>Address</h2>

					<div className="address-links">

						<li className="address1"><i className="fa-solid fa-location-dot"></i>KENBC 223-6371 Crescent Road,
						Vancouver, BC V6T 1Z2</li>

						
						<li><a href="mailto:info@kenyacommunitybc.org"><i className="fa-solid fa-envelope"></i>email: info@kenyacommunitybc.org</a></li>
					</div>

				</div>
			
			</div>

		</div>
		<div className="copy-right"><i class="fa-solid fa-copyright"></i>  
		Copyright©2023 KENBC. All rights reserved.  
		</div>
    </footer>
  );
}

export default footer
