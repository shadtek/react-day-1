import React from 'react';


class NavBar extends React.Component {
	render(){
		return (
			<div>
				<nav className="navbar">
					<ul>
						<li>Home</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
				</nav>
			</div>
		)
	}
}

export default NavBar