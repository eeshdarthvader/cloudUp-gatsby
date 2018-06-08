import React from 'react';
import Link from 'gatsby-link';

import logo from '../assets/images/cloudUp.png';

const Header = (props) => (
	<header id="header" className="alt">
		<span className="logo">
			<img height="100" width="100" src={logo} alt="" />
		</span>
		<h1>CloudUp</h1>
		<p>
			Electron application on uploading images to your Cloudinary account.<br />
		</p>
	</header>
);

export default Header;
