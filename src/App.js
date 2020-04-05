import React from "react";
import Axios from "axios";

import Chart from "./Components/chart/chart";
import CountryChart from "./Components/chart/chartCountry";
// import DropD from "./Components/dropdown/Dropdown";

// import Dropdown from "react-bootstrap/Dropdown";

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
			countries: [],
			cDeath: 0,
			cConfirmed: 0,
			cRecovered: 0,
			country: "",
			date: "",
			time: "",
		};

		this.getCountryData = this.getCountryData.bind(this);
	}

	componentDidMount() {
		this.getData();
	}

	async getData() {
		const resApi = await Axios.get("https://covid19.mathdro.id/api");
		const resCountries = await Axios.get(
			"https://covid19.mathdro.id/api/countries"
		);
		const date = resApi.data.lastUpdate.split("T")[0];
		let tempTime = resApi.data.lastUpdate.split("T")[1].split("");
		const time = tempTime.slice(0, 5);

		// const countries = Object.keys(resCountries.data.countries);
		// console.log(resCountries.data.countries);
		this.setState({
			confirmed: resApi.data.confirmed.value,
			deaths: resApi.data.deaths.value,
			recovered: resApi.data.recovered.value,
			countries: resCountries.data.countries,
			date: date,
			time: time,
		});
		console.log(time);
	}

	async getCountryData() {
		const sel = document.getElementById("options");
		const target = sel.options[sel.selectedIndex].value;
		const res = await Axios.get(
			`https://covid19.mathdro.id/api/countries/${target}`
		);
		this.setState({
			cDeath: res.data.deaths.value,
			cConfirmed: res.data.confirmed.value,
			cRecovered: res.data.recovered.value,
			country: target,
		});
	}

	renderCountryOptions() {
		return this.state.countries.map((country, i) => {
			return (
				<option key={i} value={country.name}>
					{country.name}
				</option>
			);
		});
	}

	render() {
		const deaths = this.state.deaths;
		const confirmed = this.state.confirmed;
		const recovered = this.state.recovered;
		const cDeath = this.state.cDeath;
		const cConfirmed = this.state.cConfirmed;
		const cRecovered = this.state.cRecovered;
		const date = this.state.date;
		const time = this.state.time;

		return (
			<div className="app">
				<div
					className="WorldSec"
					style={{
						borderRadius: "5px",
						margin: "5px",
						padding: "10px 3px 0px 3px",
						backgroundColor: "#DCDCDC",
					}}
				>
					<div
						style={{
							justifyContent: "center",
							display: "flex",
							marginTop: "10px",
							fontFamily: "Lobster",
						}}
					>
						<h1>WorldWid</h1>
					</div>
					<div className="row" style={{ margin: "10px" }}>
						<div className="col-md-6 col-xl-4">
							<ConfirmedCount number={confirmed} date={date} time={time} />
						</div>
						<div className="col-md-6 col-xl-4">
							<DeathCount number={deaths} date={date} time={time} />
						</div>
						<div className="col-md-6 col-xl-4">
							<RecoveredCount number={recovered} date={date} time={time} />
						</div>
					</div>
				</div>
				<div style={{ margin: "10px" }}>
					<div className="row">
						<div className="col-md-12 col-lg-6">
							<div className="mb-3 card" style={{ backgroundColor: "#DCDCDC" }}>
								<div
									className="card-header-tab card-header-tab-animation card-header"
									style={{ backgroundColor: "#DCDCDC" }}
								>
									<div className="card-header-title">
										World Wide Report Visualization
									</div>
								</div>
								<div className="card-body">
									<div className="tab-content">
										<div className="tab-pane fade show active" id="tabs-eg-77">
											<Chart
												death={deaths}
												confirm={confirmed}
												recover={recovered}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							className="col-md-12 col-lg-6"
							style={{ wordWrap: "break-word" }}
						>
							<div
								className="mb-3 card"
								style={{ backgroundColor: "#DCDCDC", wordWrap: "break-word" }}
							>
								<div
									className="card-header-tab card-header-tab-animation card-header"
									style={{
										backgroundColor: "#DCDCDC",
										overflow: "hidden",
										textOverflow: "ellipsis",
										whiteSpace: "nowrap",
										width: "100%",
										paddingLeft: "10px",
									}}
								>
									<div
										className="card-header-title"
										style={{ overflow: "hidden", textOverflow: "ellipsis" }}
									>
										{this.state.country} Report Visualization{" "}
									</div>
								</div>
								<div className="card-body">
									<div className="tab-content">
										<div className="tab-pane fade show active" id="tabs-eg-77">
											<CountryChart
												deaths={cDeath}
												confirmed={cConfirmed}
												recovered={cRecovered}
											/>
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
						margin: "10px",
						padding: "10px 3px 0px 3px",
						backgroundColor: "#DCDCDC",
					}}
				>
					<div
						className="row"
						style={{ justifyContent: "center", display: "flex" }}
					>
						<select id="options" onChange={this.getCountryData}>
							<option>Countries</option>
							{this.renderCountryOptions()}
						</select>
					</div>
					<div>
						<div
							style={{
								justifyContent: "center",
								display: "flex",
								marginTop: "10px",
								fontFamily: "Lobster",
							}}
						>
							<h1>{"Country"}</h1>
						</div>
						<div className="row" style={{ margin: "10px" }}>
							<div className="col-md-6 col-xl-4">
								<ConfirmedCount number={cConfirmed} date={date} time={time} />
							</div>
							<div className="col-md-6 col-xl-4">
								<DeathCount number={cDeath} date={date} time={time} />
							</div>
							<div className="col-md-6 col-xl-4">
								<RecoveredCount number={cRecovered} date={date} time={time} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
