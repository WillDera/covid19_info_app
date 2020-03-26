import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Container>
					<div className="world">
						<div className="wCase">
							<Row>
								<Col>
									<Card className="confirmed">
										<Card.Body>
											<Card.Text>{10 + 10}</Card.Text>
											<Card.Title>Total Confirmed Cases</Card.Title>
										</Card.Body>
									</Card>
								</Col>
							</Row>
							<Row>
								<Col>
									<Card className="recovered">
										<Card.Body>
											<Card.Text>{20 * 80}</Card.Text>
											<Card.Title>Total Recovered Cases</Card.Title>
										</Card.Body>
									</Card>
								</Col>
								{/* <Col xs lg="6">
									<div className="chart"></div>
								</Col> */}
							</Row>
							<Card className="death">
								<Card.Body>
									<Card.Text>{10 / 10}</Card.Text>
									<Card.Title>Total Death Cases</Card.Title>
								</Card.Body>
							</Card>
						</div>
						<div className="wChart">
							<Row>
								<Col className="chart"></Col>
							</Row>
						</div>
					</div>

					<Card className="country">
						<Card.Body>
							<Card.Title>{"COUNTRY"}</Card.Title>
							<Card.Text className="countryData">
								<div className="countryConfirmed">
									<span>45</span>
									<span>Confirmed</span>
								</div>
								<div className="countryDeath">
									<span>1</span>
									<span>Death</span>
								</div>
								<div className="countryRecovered">
									<span>2</span>
									<span>Recovered</span>
								</div>
							</Card.Text>
						</Card.Body>
					</Card>
				</Container>
			</header>
		</div>
	);
}

export default App;
