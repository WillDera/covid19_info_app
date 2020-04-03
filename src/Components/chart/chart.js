import React from "react";
import "./chart.css";

class Chart extends React.Component {
	render() {
		return (
			<div class="card mb-3 widget-chart widget-chart2 text-left w-100">
				<div class="widget-chat-wrapper-outer">
					<div class="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
						<div
							className="chartjs-size-monitor"
							// style={{"position: absolute, left: 0px, top: 0px, right: 0px, bottom: 0px, overflow: hidden, pointer-events: none, visibility: hidden, z-index: -1"}}
						>
							<div
								class="chartjs-size-monitor-expand"
								// style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"
							>
								<div
								// style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"
								></div>
							</div>
							<div
								class="chartjs-size-monitor-shrink"
								// style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"
							>
								<div
								// style="position:absolute;width:200%;height:200%;left:0; top:0"
								></div>
							</div>
						</div>
						{/* <canvas
							id="canvas"
							width="732"
							height="366"
							class="chartjs-render-monitor"
							// style="display: block; width: 732px; height: 366px;"
						></canvas> */}
					</div>
				</div>
			</div>
		);
	}
}
export default Chart;
