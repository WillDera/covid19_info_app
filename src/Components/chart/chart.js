import React from "react";
import "./chart.css";

class Chart extends React.Component {
	render() {
		return (
			<div className="chart">
				{this.props.confirmed}
			</div>
		)
	}
}
export default Chart;
