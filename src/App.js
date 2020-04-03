import React from "react";
import Axios from "axios";

import Chart from "./Components/chart/chart";
import DropD from "./Components/dropdown/Dropdown";

import CardDeck from "react-bootstrap/CardDeck";
import Dropdown from "react-bootstrap/Dropdown";

import DeathCount from "./Components/deaths";
import RecoveredCount from "./Components/recovered";
import ConfirmedCount from "./Components/totalCases/totalCases";
import CountryData from "./Components/country/countryData";
import "./main.css";

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
			<div className="app" style={{margin: "0", padding: "10px", width: "100%"}}>
				<div className="row">
					<div className="col-md-6 col-xl-4">
						<ConfirmedCount number={confirmed} />
					</div>
					<div className="col-md-6 col-xl-4">
						<DeathCount number={deaths} />
					</div>
					<div className="col-md-6 col-xl-4">
						<RecoveredCount number={recovered} />
					</div>
				</div>
				<div style={{margin: "0", padding: "10px", width: "100%"}}>
					<div className="row" >
						<div className="col-md-12 col-lg-6">
							<div className="mb-3 card">
								<div className="card-header-tab card-header-tab-animation card-header">
									<div className="card-header-title">
										World Wide Report Visualization
									</div>
								</div>
								<div className="card-body">
									<div className="tab-content">
										<div className="tab-pane fade show active" id="tabs-eg-77">
											<Chart />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-12 col-lg-6">
						<div className="mb-3 card">
							<div className="card-header-tab card-header-tab-animation card-header">
								<div className="card-header-title">
									{"country "}
									Report Visualization{" "}
								</div>
							</div>
							<div className="card-body">
								<div className="tab-content">
									<div className="tab-pane fade show active" id="tabs-eg-77">
										<Chart />
									</div>
								</div>
							</div>
						</div>
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 col-xl-4">
						<ConfirmedCount number={confirmed} />
					</div>
					<div className="col-md-6 col-xl-4">
						<DeathCount number={deaths} />
					</div>
					<div className="col-md-6 col-xl-4">
						<RecoveredCount number={recovered} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
