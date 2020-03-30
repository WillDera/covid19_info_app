import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaChartBar } from "react-icons/fa";
import { IoIosBook } from "react-icons/io";
import { GoSettings } from "react-icons/go";
import "./navBar.css";

function NavBar() {
	return (
		<div className="navContainerx">
			<Navbar className="navContainer" bg="dark" variant="dark" fixed="bottom">
				<Nav className="navLinks">
					<Nav.Link
						href="#home"
						style={{ left: "-80px", position: "relative" }}
					>
						<FaChartBar />
					</Nav.Link>
					<Nav.Link href="#features">
						<IoIosBook />
					</Nav.Link>
					<Nav.Link href="#setting" style={{ right: "-80px", position: "relative" }}>
						<GoSettings />
					</Nav.Link>
				</Nav>
			</Navbar>
		</div>
	);
}

export default NavBar;
