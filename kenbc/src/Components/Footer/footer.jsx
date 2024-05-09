import React from 'react'
import './footer.css'
import logo from '../../assets/logo/logo.png'

const footer = () => {
  return (
    <footer className="footer">

		<div className="footer-section section1">

			<h1>Connecting Kenyans Across BC</h1>

			<p>Strengthening Bonds, Cultivating a Home Away from Home.</p>
		
		</div>

		<div className="container">

			<div className="col-md-1">

				<a href="../../../public/index.html"><img src={logo} alt="" className="img-footer"></img></a>
				
				<div className="footer-about">

					<p>The Kenyan Community In British Columbia Society <br></br>(KENBC) stands as a beacon of unity, diversity, and community spirit.</p>
				
				</div>

			</div>
			
			<div className="col-md-2">

				<div className="useful-link">

					<h2>Useful Links</h2>

					<div className="use-links">

						<li><a href="index.html"><i className="fa-solid fa-angles-right"></i> Home</a></li>
						
						<li><a href="../About/about.jsx"><i className="fa-solid fa-angles-right"></i> About Us</a></li>
						
						<li><a href="../Membership/membership.jsx"><i className="fa-solid fa-angles-right"></i> Membership</a></li>
						
						<li><a href="../Benevolance/benevolance.jsx"><i className="fa-solid fa-angles-right"></i> Benovelance</a></li>
						
						<li><a href="../Governance/governance.jsx"><i className="fa-solid fa-angles-right"></i> Governance</a></li>
						
						<li><a href="../News/news.jsx"><i className="fa-solid fa-angles-right"></i> News</a></li>
				
					</div>

				</div>

			</div>
				
			
			<div className="col-md-3">

				<div className="address">

					<h2>Address</h2>

					<div className="address-links">

						<li className="address1"><i className="fa-solid fa-location-dot"></i>KENBC 223-6371 Crescent Road,
						Vancouver, BC V6T 1Z2</li>

						
						<li><a href=""><i className="fa-solid fa-envelope"></i>email: info@kenyacommunitybc.org</a></li>
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
