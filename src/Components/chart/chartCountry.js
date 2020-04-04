import React, { Component } from "react";
import { Pie } from "react-chartjs-2";



export default class CountryChart extends Component {
	
	render() {
		// const deaths = this.props.death;
		// const recovered = this.props.recover;
		// const confirmed = this.props.confirm;
		const data = {
			labels: ["Deaths", "Recovered", "Confirmed"],
			datasets: [
				{
					data: [
						4, 25, 210
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
