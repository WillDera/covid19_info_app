import React from "react";
import CountUp from "react-countup";
import { Card } from "react-bootstrap";

class ConfirmedCount extends React.Component {

	render() {

		return (
			<Card
				className="card"
				border="danger"
				style={{ width: "18rem" }}
			>
				<Card.Text style={{ fontSize: "15px", fontWeight: "600", margin: "0", padding: "0" }}>
					<CountUp start={0} end={this.props.number} duration={8} />
					<br style={{border: "5px solid black", height: "20px"}}/>
				</Card.Text>
				<Card.Title style={{ fontWeight: "500", color: "#ffb85c" }}>
					Confirmed Cases
				</Card.Title>
			</Card>
		);
	}
}

export default ConfirmedCount;