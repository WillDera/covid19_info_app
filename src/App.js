import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Container>
				<div className="world">
					<div className="wCase" col-6>
						<Row>
							<Col>
								<Card className="confirmed">
									<Card.Body>
										<Card.Text>{10 + 10}</Card.Text>
										<Card.Title style={{fontSize:"12px",fontWeight:"bold", color:"rgb(233, 167, 25)"}}>Confirmed</Card.Title>
									</Card.Body>
								</Card>
							</Col>
						</Row>
						<Row>
							<Col>
								<Card className="recovered">
									<Card.Body>
										<Card.Text>{20 * 80}</Card.Text>
										<Card.Title style={{fontSize:"12px",fontWeight:"bold", color:"rgb(51, 223, 17)"}}>Recovered</Card.Title>
									</Card.Body>
								</Card>
							</Col>
						</Row>
						<Card className="death">
							<Card.Body>
								<Card.Text>{10 / 10}</Card.Text>
								<Card.Title style={{fontSize:"12px",fontWeight:"bold", color:"rgb(226, 11, 11)"}}>Death</Card.Title>
							</Card.Body>
						</Card>
					</div>
					<div className="wChart chart" col-6>
						
					</div>
				</div>

				{/* <Card className="country">
					<Card.Body>
						<Card.Title>{"COUNTRY"}</Card.Title>
	<Card.Title style={{fontSize: "12px", fontWeight:"normal"}}>{"Last updated: Time"}</Card.Title>
						<Card.Text className="countryData">
							<div className="countryConfirmed">
								<span>45</span>
								<span className="handlerC">Confirmed</span>
							</div>
							<div className="countryDeath">
								<span>1</span>
								<span className="handlerD">Death</span>
							</div>
							<div className="countryRecovered">
								<span>2</span>
								<span className="handlerR">Recovered</span>
							</div>
						</Card.Text>
					</Card.Body>
				</Card> */}
				<NavBar />
			</Container>
		</div>
	);
}

export default App;
