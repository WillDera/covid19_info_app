import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Axios from "axios";
import { Card } from "react-bootstrap";
import Chart from "./Components/chart/chart";
import DropD from "./Components/Dropdown";
import "./App.css";

class App extends React.Component {
	state = {
		confirmed: 0,
		deaths: 0,
		recovered: 0,
		countries: []
	};

	componentDidMount() {
		this.getData();
	}

	async getData() {
		const resApi = await Axios.get("https://covid19.mathdro.id/api");
		const resCountries = await Axios.get(
			"https://covid19.mathdro.id/api/countries"
		);
		const countries = Object.keys(resCountries.data.countries);
		this.setState({
			confirmed: resApi.data.confirmed.value,
			deaths: resApi.data.deaths.value,
			recovered: resApi.data.recovered.value,
			countries: resCountries.data.countries
		});
	}

	renderCountryOptions() {
		return this.state.countries.map((country, i) => {
			return <option key={i}>{country.name}</option>;
		});
	}

	render() {
		return (
			<div className="App">
				<div className="row">
					<CardDeck className="appHolder">
						<Card
							className="card"
							border="warning"
							style={{ width: "18rem", height: "6rem" }}
						>
							<Card.Text style={{ fontSize: "25px", fontWeight: "600" }}>
								{3333 * 10000}
							</Card.Text>
							<Card.Title style={{ fontWeight: "400", color: "#FFA500" }}>
								Confirmed Cases
							</Card.Title>
						</Card>
						<Card
							className="card"
							border="danger"
							style={{ width: "18rem", height: "6rem" }}
						>
							<Card.Text style={{ fontSize: "25px", fontWeight: "600" }}>
								{3333 * 10000}
							</Card.Text>
							<Card.Title style={{ fontWeight: "500", color: "#FF0000" }}>
								Death Cases
							</Card.Title>
						</Card>
						<Card
							className="card"
							border="success"
							style={{ width: "18rem", height: "6rem" }}
						>
							<Card.Text style={{ fontSize: "25px", fontWeight: "600" }}>
								{3333 * 10000}
							</Card.Text>
							<Card.Title style={{ fontWeight: "400", color: "#66FF66" }}>
								Recovered Cases
							</Card.Title>
						</Card>
						<select>{this.renderCountryOptions()}</select>
					</CardDeck>
					<Chart />

				</div>
			</div>
		);
	}
}

export default App;
