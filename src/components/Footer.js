import React from 'react';
import Link from 'gatsby-link';

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
	<footer id="footer">
		<section>
			<h2>Eesh Tyagi</h2>
			<dl className="alt">
				<dt>Email</dt>
				<dd>
					<a href="#">eesh.tyagi@gmail.com</a>
				</dd>
				<dt>PortFolio</dt>
				<dd>
					<a href="https://eeshtyagi.com">Eesh Tyagi</a>
				</dd>
			</dl>
			<ul className="icons">
				<li>
					<a href="https://twitter.com/EtEesh" className="icon fa-twitter alt">
						<span className="label">Twitter</span>
					</a>
				</li>

				<li>
					<a href="https://www.instagram.com/eesh90/" className="icon fa-instagram alt">
						<span className="label">Instagram</span>
					</a>
				</li>
				<li>
					<a href="https://github.com/eeshdarthvader" className="icon fa-github alt">
						<span className="label">GitHub</span>
					</a>
				</li>
				<li>
					<a href="https://medium.com/@eesh.t" className="icon fa-medium alt">
						<span className="label">Medium</span>
					</a>
				</li>
			</ul>
		</section>
		<p className="copyright">
			&copy; <a href="https://eeshtyagi.com">Eesh Tyagi</a>.
		</p>
	</footer>
);

export default Footer;
