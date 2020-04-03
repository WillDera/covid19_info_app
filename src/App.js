import React from "react";
import Axios from "axios";

import Chart from "./Components/chart/chart";
import DropD from "./Components/dropdown/Dropdown";

import Dropdown from "react-bootstrap/Dropdown";

import DeathCount from "./Components/deaths";
import RecoveredCount from "./Components/recovered";
import ConfirmedCount from "./Components/totalCases/totalCases";
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
		// const countries = Object.keys(resCountries.data.countries);
		console.log(resCountries.data.countries);
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

		return (
			<div className="app">
				<div className="row" style={{ margin: "10px" }}>
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
				<div style={{ margin: "10px" }}>
					<div className="row">
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
				<div
					className="countrySec"
					style={{
						borderRadius: "5px",
						margin: "50px",
						padding: "10px 3px 0px 3px",
						backgroundColor: "#DCDCDC"
					}}
				>
					<div
						className="row"
						style={{ justifyContent: "center", display: "flex" }}
					>
						<DropD countries={this.renderCountryOptions()} />
					</div>
					<div>
						<div
							style={{
								justifyContent: "center",
								display: "flex",
								marginTop: "10px",
								fontFamily: "Lobster"
							}}
						>
							<h1>{"Country"}</h1>
						</div>
						<div className="row" style={{ margin: "10px" }}>
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
				</div>
			</div>
		);
	}
}

export default App;
