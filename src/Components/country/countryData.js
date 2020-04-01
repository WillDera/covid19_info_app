import React from "react";
import { Card } from "react-bootstrap";
import "./countryData.css";

class CountryData extends React.Component {
	render() {
		return (
			<div className="countryData">
				<Card>
					<Card.Title>{"Country"}</Card.Title>
					<Card.Text>{"confirmed"}</Card.Text>
					<Card.Text>{"confirmed"}</Card.Text>
					<Card.Text>{"confirmed"}</Card.Text>
				</Card>
			</div>
		);
	}
}

export default CountryData;
