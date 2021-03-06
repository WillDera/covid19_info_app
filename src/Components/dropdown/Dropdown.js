import React from "react";
import Axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

import "./drop.css";

class DropD extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			countryName: ""
		};
	}

	toggle = () => {
		this.setState({ open: !this.state.open });
	};
	onToggle = (isOpen, e, source) => {
		//This closes the menu on toggling the dropdown or hitting esc.
		if (source.source === "click" || source.source === "rootClose") {
			this.toggle();
		}
	};

	

	render() {
		const countries = this.props.countries;

		return (
			<div>
				<Dropdown
					open={this.state.open}
					onToggle={this.onToggle}
					id={"Dropdown"}
					ref={(ref) => (this.myRef = ref)}
					className="CustomDropdown"
				>
					<Button onClick={this.toggle}>
						<Dropdown.Toggle style={{ textAlign: "right", paddingBottom: 5 }}>
							{this.props.myTitle ? this.props.myTitle : "Check Country"}
						</Dropdown.Toggle>
					</Button>

					<Dropdown.Menu
						style={{
							overflowY: "scroll",
							maxHeight:
								window.innerHeight -
								(this.myRef
									? this.myRef.getBoundingClientRect().top +
									  this.myRef.getBoundingClientRect().height +
									  100
									: 200)
						}}
					>
						{countries}
					</Dropdown.Menu>
				</Dropdown>
			</div>
		);
	}
}
export default DropD;
