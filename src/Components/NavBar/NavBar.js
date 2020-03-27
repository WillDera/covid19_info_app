import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./navBar.css";

function NavBar() {
	return (
		<div className="navBar">
			<Navbar className="navContainer" bg="dark" variant="dark" fixed="bottom">
				<Nav className="navLinks">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#features">Features</Nav.Link>
					<Nav.Link href="#pricing">Pricing</Nav.Link>
				</Nav>
			</Navbar>
		</div>
	);
}

export default NavBar;
