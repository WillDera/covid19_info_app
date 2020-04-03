import React from "react";
import CountUp from "react-countup";

class ConfirmedCount extends React.Component {
	render() {
		return (
			<div class="card mb-3 widget-content">
				<div class="widget-content-outer">
					<div class="widget-content-wrapper">
						<div class="widget-content-left">
							<div
								class="widget-heading"
								style={{ fontWeight: "500", color: "#ffb85c" }}
							>
								Confirmed Casess
							</div>
							<div class="widget-subheading">Last year expenses</div>
						</div>
						<div class="widget-content-right">
							<div class="widget-numbers text-warning">
								<CountUp start={0} end={this.props.number} duration={8} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ConfirmedCount;
