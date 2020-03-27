import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navBar.css";

function NavBar() {
	return (
		<div className="navBar">
			<Navbar className="navContainer" bg="dark" variant="dark" fixed="bottom">
				<Nav className="navLinks">
					<Nav.Link href="#home">
						<FontAwesomeIcon icon="coffee" />
						Stat
					</Nav.Link>
					<Nav.Link href="#features">Advice</Nav.Link>
				</Nav>
			</Navbar>
		</div>
	);
}

export default NavBar;
