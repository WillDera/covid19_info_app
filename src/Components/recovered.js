import React from "react";
import CountUp from "react-countup";
import { Card } from "react-bootstrap";

class RecoverdCount extends React.Component {

	render() {

		return (
			<Card
				className="card"
				border="danger"
				style={{ width: "18rem", height: "6rem" }}
			>
				<Card.Text style={{ fontSize: "25px", fontWeight: "600" }}>
					<CountUp start={0} end={this.props.number} duration={8} />
				</Card.Text>
				<Card.Title style={{ fontWeight: "500", color: "#8eff65" }}>
					Recovered Cases
				</Card.Title>
			</Card>
		);
	}
}

export default RecoverdCount;