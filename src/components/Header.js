import React from 'react';
import { Link } from 'react-router-dom'
function Header() {
	return (
		<div className="app-header">
			<Link to="/" style={{color:"#fff",textDecoration:"none"}}><h1>R&J Movie Search</h1></Link>
		</div>
	)
}

export default Header