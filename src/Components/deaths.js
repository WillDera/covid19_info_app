import React from "react";
import CountUp from "react-countup";

class DeathCount extends React.Component {
	render() {
		return (
			<div class="card mb-3 widget-content">
				<div class="widget-content-outer">
					<div class="widget-content-wrapper">
						<div class="widget-content-left">
							<div
								class="widget-heading"
								style={{ fontWeight: "500", color: "#FF0000" }}
							>
								Death Cases
							</div>
							<div class="widget-subheading">
								Last Update: {this.props.date} <br />Update Time: {this.props.time}
							</div>
						</div>
						<div class="widget-content-right">
							<div class="widget-numbers text-danger">
								<CountUp start={0} end={this.props.number} duration={5} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default DeathCount;
