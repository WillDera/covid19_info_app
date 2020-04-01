import React from "react";
import "./chart.css";

class Chart extends React.Component {
	render() {
		return (
			<div className="chart">
				<div className="lineGraph">
					{"There'd be a line Graph Here"}
				</div>
				<div className="pieChart">
					{"There'd be a pie Chart Here"}
				</div>
			</div>
		)
	}
}
export default Chart;
