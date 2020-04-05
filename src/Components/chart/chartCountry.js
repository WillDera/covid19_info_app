import React, { Component } from "react";
import { Pie } from "react-chartjs-2";



export default class CountryChart extends Component {
	
	render() {
		const cDeaths = this.props.deaths;
		const cRecovered = this.props.recovered;
		const cConfirmed = this.props.confirmed;
		const data = {
			labels: ["Deaths", "Recovered", "Confirmed"],
			datasets: [
				{
					data: [
						cDeaths, cRecovered, cConfirmed
					],
					backgroundColor: ["#FF6384", "#66FF66", "#FFCE56"],
					hoverBackgroundColor: ["#FF0066", "#66FF33", "#FF9900"]
				}
			]
		};
		return (
			<div class="card mb-3 widget-chart widget-chart2 text-left w-100">
				<div class="widget-chat-wrapper-outer">
					<div class="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0" style={{padding: "10px"}}>
						<Pie data={data} />
					</div>
				</div>
			</div>
		);
	}
}
