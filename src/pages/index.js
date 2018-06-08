import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Waypoint from 'react-waypoint';

import Header from '../components/Header';
import Nav from '../components/Nav';
import cloudUpGif from '../assets/images/cloudUp_newTheme.gif';

class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stickyNav: false
		};
	}

	_handleWaypointEnter = () => {
		this.setState(() => ({ stickyNav: false }));
	};

	_handleWaypointLeave = () => {
		this.setState(() => ({ stickyNav: true }));
	};

	render() {
		return (
			<div>
				<Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

				<Header />

				<Waypoint onEnter={this._handleWaypointEnter} onLeave={this._handleWaypointLeave} />
				<Nav sticky={this.state.stickyNav} />

				<div id="main">
					<section id="intro" className="main">
						<div className="spotlight">
							<div className="content">
								<header className="major">
									<h2>CloudUp</h2>
								</header>
								<p>
									A Electron application on uploading images to your cloudinary account based on
									React, React Router, Webpack, React Hot Loader for rapid application development.
								</p>
								<ul className="actions">
									<li>
										<a href="https://github.com/eeshdarthvader/CloudUp" className="button special">
											GitHub
										</a>
									</li>
								</ul>
							</div>
							<span className="image">
								<img src={cloudUpGif} alt="" />
							</span>
						</div>
					</section>

					<section id="cta" className="main special">
						<header className="major">
							<h2>Installation</h2>
							<p>
								CloudUp is currently in beta. Please feel free to report any bugs or error you may come
								across.
							</p>
							<a
								className="button special"
								href="https://github.com/eeshdarthvader/CloudUp/releases/download/0.0.2/CloudUp-0.0.1-mac.zip"
							>
								Download App
							</a>
							<br />
							<br />
							<h2>Development setup</h2>
							<br />
							<p>Clone the repo via git:</p>
							<code>
								git clone --depth=1 https://github.com/eeshdarthvader/CloudUp.git your-project-name
							</code>
						</header>
						<footer className="major">
							<ul className="actions">
								<li>
									<Link to="/generic" className="button">
										Learn More on github
									</Link>
								</li>
							</ul>
						</footer>
					</section>
				</div>
			</div>
		);
	}
}

Index.propTypes = {
	route: React.PropTypes.object
};

export default Index;

export const pageQuery = graphql`
	query IndexQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
