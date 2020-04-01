import React from "react";
import Axios from "axios";

import Chart from "./Components/chart/chart";
import DropD from "./Components/dropdown/Dropdown";

import CardDeck from "react-bootstrap/CardDeck";
import Dropdown from "react-bootstrap/Dropdown";

import DeathCount from "./Components/deaths";
import RecoveredCount from "./Components/recovered";
import ConfirmedCount from "./Components/totalCases";
import "./App.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			confirmed: 0,
			deaths: 0,
			recovered: 0,
			countries: []
		};
	}

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
			return <Dropdown.Item key={i}>{country.name}</Dropdown.Item>;
		});
	}

	render() {
		const deaths = this.state.deaths;
		const confirmed = this.state.confirmed;
		const recovered = this.state.recovered;

		console.log(this.state.deaths);
		return (
			<div>
				<div className="App appHolder row">
					<CardDeck>
						<ConfirmedCount number={confirmed} />
						<DeathCount number={deaths} />
						<RecoveredCount number={recovered} />
					</CardDeck>
				</div>
				<div className="charts">
					<Chart confirmed={confirmed} death={deaths} recovered={recovered} />
				</div>
				<div className="country">
					<DropD countries={this.renderCountryOptions()} />
				</div>
			</div>
		);
	}
}

export default App;
